/**
 * =================================================================
 * ASSET CACHING SCRIPT
 * =================================================================
 * This script handles the pre-caching of static assets defined in `assets.ts`.
 *
 * Core Logic:
 * 1.  It uses a version key from `assets.ts` to name the cache instance (e.g., "xyz-assets-v1.0.0").
 * 2.  On page load, it checks if the cache for the current version already exists.
 * 3.  If not, it fetches all image URLs from the asset manifest and stores them in the new cache.
 * 4.  It then cleans up any old caches from previous versions to prevent storing stale data
 *     and wasting user disk space.
 * 5.  This process runs in the background and does not block the main thread, ensuring
 *     a smooth user experience.
 * =================================================================
 */

import { assets } from '../assets';

const CACHE_NAME_PREFIX = 'xyz-assets-';
const CURRENT_CACHE_NAME = `${CACHE_NAME_PREFIX}${assets.version}`;

/**
 * Flattens the nested asset object into a simple array of unique image URLs.
 * This list will be used to populate the cache.
 * @returns {string[]} An array of all image URLs to be cached.
 */
const getAllAssetUrls = (): string[] => {
  const urls = new Set<string>();

  // Add site-wide assets
  urls.add(assets.site.logo.main);
  urls.add(assets.site.fallback);
  urls.add(assets.site.heroBackground);
  urls.add(assets.site.aboutImage);
  
  // Add testimonial avatars
  assets.testimonials.forEach(testimonial => urls.add(testimonial.avatar));

  // Add brand logos and gallery images
  Object.values(assets.brands).forEach(brand => {
    urls.add(brand.logoUrl);
    brand.images.forEach(imageUrl => urls.add(imageUrl));
  });

  return Array.from(urls);
};

/**
 * Fetches all assets from the manifest and stores them in the browser's Cache Storage.
 * This function is designed to run in the background and is resilient to individual asset failures.
 */
const precacheAssets = async () => {
  try {
    console.log(`[Cache] Opening cache: ${CURRENT_CACHE_NAME}`);
    const cache = await caches.open(CURRENT_CACHE_NAME);
    const urlsToCache = getAllAssetUrls();

    console.log(`[Cache] Caching ${urlsToCache.length} assets for version ${assets.version}.`);
    
    let successCount = 0;
    let failureCount = 0;

    const cachePromises = urlsToCache.map(async (url) => {
      try {
        // Fetch the asset with 'no-cors' mode to prevent CORS-related fetch failures
        // for third-party assets (e.g., Unsplash, Pravatar).
        const response = await fetch(url, { mode: 'no-cors' });
        
        // Manually put the (potentially opaque) response into the cache.
        // This allows caching to succeed even if the server doesn't send CORS headers.
        await cache.put(url, response);
        successCount++;
      } catch (error) {
        failureCount++;
        // Log a warning for individual failures instead of a hard error.
        console.warn(`[Cache] Failed to cache asset: ${url}`, error);
      }
    });

    // Wait for all caching attempts to complete (either success or failure).
    await Promise.all(cachePromises);

    if (failureCount > 0) {
      console.warn(`[Cache] Caching complete. ${successCount} assets cached successfully, ${failureCount} failed.`);
    } else {
      console.log('[Cache] All assets successfully cached.');
    }

  } catch (error) {
    // This will now only catch errors from `caches.open()`, which is much less likely.
    console.error('[Cache] An error occurred while opening the cache:', error);
  }
};


/**
 * Removes any old caches that do not match the current asset version.
 * This prevents the browser from storing outdated assets from previous deployments.
 */
const cleanupOldCaches = async () => {
  try {
    const cacheKeys = await caches.keys();
    const cachesToDelete = cacheKeys.filter(key => key.startsWith(CACHE_NAME_PREFIX) && key !== CURRENT_CACHE_NAME);
    
    if (cachesToDelete.length > 0) {
      console.log('[Cache] Deleting old caches:', cachesToDelete.join(', '));
      await Promise.all(cachesToDelete.map(key => caches.delete(key)));
    }
  } catch (error) {
    console.error('[Cache] Error during old cache cleanup:', error);
  }
};

/**
 * Main function to orchestrate the asset caching process.
 * It checks if the current version is already cached. If not, it triggers
 * the pre-caching and cleanup processes.
 */
export const manageAssetCache = async () => {
  if (!('caches' in window)) {
    console.log('[Cache] Cache Storage API not supported. Skipping caching.');
    return;
  }

  try {
    const cacheExists = await caches.has(CURRENT_CACHE_NAME);
    if (cacheExists) {
      console.log(`[Cache] Assets for version ${assets.version} are already cached.`);
      // Still run cleanup in case a previous cleanup failed
      await cleanupOldCaches();
      return;
    }

    console.log(`[Cache] New asset version ${assets.version} detected. Starting pre-cache.`);
    await precacheAssets();
    await cleanupOldCaches();

  } catch (error) {
    console.error('[Cache] An error occurred during cache management:', error);
  }
};
