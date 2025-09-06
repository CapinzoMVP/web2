import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets, getBrands } from '../assets';
import BrandCard from '../assets/components/BrandCard';
import LazyImage from '../assets/components/LazyImage';

const HomePage: React.FC = () => {
  // Get the first two brands as featured brands from the central asset manifest.
  const featuredBrands = getBrands().slice(0, 2);
  const testimonials = assets.testimonials;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!formData.name) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!formData.phone) {
        newErrors.phone = 'Nomor telepon wajib diisi.';
    } else if (!/^\d{10,13}$/.test(formData.phone)) {
        newErrors.phone = 'Nomor telepon harus 10-13 digit.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section 
        className="relative rounded-xl shadow-2xl py-40 px-8 text-center text-content overflow-hidden" 
      >
        <div className="absolute inset-0">
          <LazyImage 
            src={assets.site.heroBackground}
            alt="Lobi hotel mewah"
            className="object-cover w-full h-full"
            style={{ filter: 'blur(2px) grayscale(50%)' }}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 motion-safe:animate-fade-in-down font-serif">
            Memimpin Perhotelan dengan <span className="text-accent">Inovasi & Pelayanan</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-content-secondary mb-8 motion-safe:animate-fade-in-up">
            Lebih dari satu dekade memberikan pengalaman tak terlupakan. Bergabunglah dengan visi kami untuk mencapai 100 cabang di seluruh Indonesia.
          </p>
          <Link
            to="/brand-kami"
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-accent-hover transition-transform transform hover:scale-105 duration-300"
          >
            Jelajahi Brand Kami
          </Link>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6">
             <svg className="w-16 h-16 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="text-3xl font-bold text-content mt-4 font-serif">10+ Tahun</h3>
            <p className="text-content-secondary">Pengalaman di Industri Perhotelan</p>
          </div>
          <div className="flex flex-col items-center p-6">
             <svg className="w-16 h-16 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            <h3 className="text-3xl font-bold text-content mt-4 font-serif">100 Cabang</h3>
            <p className="text-content-secondary">Target Ekspansi Nasional Kami</p>
          </div>
          <div className="flex flex-col items-center p-6">
            <svg className="w-16 h-16 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            <h3 className="text-3xl font-bold text-content mt-4 font-serif">Superbrand</h3>
            <p className="text-content-secondary">Mengelola Brand-brand Terkemuka</p>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-xl shadow-2xl w-full aspect-w-4 aspect-h-3">
          <LazyImage src={assets.site.aboutImage} alt="Tim Perusahaan XYZ" className="rounded-xl object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 font-serif"><span className="text-accent">Tentang</span> Kami</h2>
          <p className="text-content-secondary leading-relaxed mb-6">
            Perusahaan XYZ adalah perusahaan yang beroperasi di bidang Hospitality Industry, berlokasi di Kota Tarakan. Kami telah mengelola beberapa brand terkenal selama lebih dari 10 tahun dan sedang mengembangkan bisnis menuju 100 cabang serta lebih banyak brand di seluruh Indonesia.
          </p>
          <Link
            to="/tentang-kami"
            className="inline-block bg-secondary text-content font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-2 font-serif"><span className="text-accent">Brand</span> Unggulan Kami</h2>
        <p className="max-w-2xl mx-auto text-content-secondary mb-12">
          Jelajahi beberapa brand terkemuka yang berada di bawah naungan kami.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
        <Link
          to="/brand-kami"
          className="mt-12 inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-accent-hover transition-transform transform hover:scale-105 duration-300"
        >
          Lihat Semua Brand
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary p-12 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-10 font-serif">Apa Kata <span className="text-accent">Mereka</span></h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary p-8 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                 <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden">
                    <LazyImage src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-grow">
                   <p className="text-content-secondary italic mb-4">"{testimonial.quote}"</p>
                   <div className="text-right">
                     <p className="font-bold text-content">{testimonial.name}</p>
                     <p className="text-sm text-accent">{testimonial.title}</p>
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Membership Section */}
       <section className="grid lg:grid-cols-5 gap-12 items-start bg-secondary p-8 rounded-xl shadow-xl">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4 text-accent font-serif">Hubungi Kami & Jadilah Member</h2>
          <p className="text-content-secondary mb-6">Dapatkan penawaran eksklusif dan informasi terbaru dari kami, atau hubungi kami untuk pertanyaan lebih lanjut.</p>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold text-accent">Alamat</h3>
              <p className="text-content-secondary">Jl. Pangeran Diponegoro No. 123, Tarakan</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent">Telepon</h3>
              <p className="text-content-secondary">(0551) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent">Email</h3>
              <p className="text-content-secondary">kontak@perusahaanxyz.com</p>
            </div>
          </div>
          <section aria-labelledby="lokasi-map-homepage-title" className="mt-6">
            <h3 id="lokasi-map-homepage-title" className="font-semibold text-accent sr-only">Lokasi Kami</h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-premium border border-border-color">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591.311746219356!2d117.58377762691965!3d3.306558499648937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3213c00000000001%3A0x6bf39808e2b17578!2s3%C2%B018'23.6%22N%20117%C2%B035'03.8%22E!5e0!3m2!1sen!2sid" 
                className="w-full h-full border-0" 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Perusahaan XYZ"
              ></iframe>
            </div>
          </section>
        </div>
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="text-center bg-primary p-8 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-accent mb-2 font-serif">Terima Kasih!</h3>
              <p className="text-content-secondary">Pendaftaran Anda telah kami terima.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="bg-primary p-8 rounded-lg space-y-4" noValidate>
              <h3 className="text-2xl font-bold text-content mb-4 text-center font-serif">Daftar Member</h3>
              <div>
                <label htmlFor="name-home" className="sr-only">Nama Lengkap</label>
                <input
                  type="text" name="name" id="name-home" value={formData.name} onChange={handleFormChange} required
                  placeholder="Nama Lengkap"
                  className={`w-full bg-secondary border ${errors.name ? 'border-red-500' : 'border-border-color'} rounded-md py-3 px-4 text-content focus:outline-none focus:ring-2 focus:ring-accent`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email-home" className="sr-only">Alamat Email</label>
                <input
                  type="email" name="email" id="email-home" value={formData.email} onChange={handleFormChange} required
                  placeholder="Alamat Email"
                  className={`w-full bg-secondary border ${errors.email ? 'border-red-500' : 'border-border-color'} rounded-md py-3 px-4 text-content focus:outline-none focus:ring-2 focus:ring-accent`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone-home" className="sr-only">Nomor Telepon</label>
                <input
                  type="tel" name="phone" id="phone-home" value={formData.phone} onChange={handleFormChange} required
                  placeholder="Nomor Telepon (contoh: 081234567890)"
                  className={`w-full bg-secondary border ${errors.phone ? 'border-red-500' : 'border-border-color'} rounded-md py-3 px-4 text-content focus:outline-none focus:ring-2 focus:ring-accent`}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                 {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md font-bold text-primary bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-primary transition-colors duration-300"
              >
                Daftar Sekarang
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
