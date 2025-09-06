import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-accent font-serif">Hubungi Kami</h1>
        <p className="mt-4 text-lg text-content-secondary max-w-2xl mx-auto">Kami siap membantu Anda. Hubungi kami melalui informasi di bawah ini.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <section aria-labelledby="info-kontak-title" className="bg-secondary p-8 rounded-xl shadow-premium">
          <h2 id="info-kontak-title" className="text-2xl font-bold mb-6 text-content font-serif border-b border-border-color pb-4">Informasi Kontak</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-accent">Alamat</h3>
              <p className="text-content-secondary">Jl. Yos Sudarso, Karang Balik, Kec. Tarakan Bar., Kota Tarakan, Kalimantan Utara</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent">Telepon</h3>
              <p className="text-content-secondary">628-1234-5678</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent">Email</h3>
              <p className="text-content-secondary">emai.com</p>
            </div>
             <div>
              <h3 className="font-semibold text-accent">Jam Operasional</h3>
              <p className="text-content-secondary">Senin - Jumat: 08:00 - 17:00 WITA</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="lokasi-kontak-title" className="bg-secondary p-8 rounded-xl shadow-premium">
          <h2 id="lokasi-kontak-title" className="text-2xl font-bold mb-6 text-content font-serif border-b border-border-color pb-4">Lokasi Kami</h2>
          {/*
            CSS Hint: Responsive Map Container
            - `aspect-video` (native in Tailwind CSS v3+) creates a container
              that maintains a 16:9 aspect ratio, perfect for map embeds.
            - `rounded-xl overflow-hidden` clips the iframe corners to match the container's border radius.
            - The iframe itself has `w-full h-full` to fill this container completely.
            This combination ensures the map is responsive, fits its container, and looks professional.
          */}
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-border-color shadow-premium">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591.311746219356!2d117.58377762691965!3d3.306558499648937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3213c00000000001%3A0x6bf39808e2b17578!2s3%C2%B018'23.6%22N%20117%C2%B035'03.8%22E!5e0!3m2!1sen!2sid"
                className="w-full h-full border-0" 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Tri Surya Jaya"
              ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;