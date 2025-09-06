import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-accent font-serif">Tentang Tri Surya Jaya</h1>
        <p className="mt-4 text-lg text-content-secondary max-w-2xl mx-auto">Kenali siapa kami, bersama visi dan misi kami dalam menciptakan kenyamanan, keramahan, dan pengalaman tak terlupakan di industri hospitality.</p>
      </div>

      <div className="bg-secondary p-8 rounded-lg shadow-premium">
        <h2 className="text-3xl font-bold mb-4 text-accent font-serif border-b-2 border-accent/30 pb-4">Latar Belakang Perusahaan</h2>
        <p className="text-content-secondary leading-relaxed mt-4">
          Tri Surya Jaya adalah perusahaan yang beroperasi di bidang Hospitality Industry, berlokasi di Kota Tarakan. Kami telah mengelola beberapa brand terkenal selama lebih dari 10 tahun dan sedang mengembangkan bisnis menuju 100 cabang serta lebih banyak brand di seluruh Indonesia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-secondary p-8 rounded-lg shadow-premium">
          <h2 className="text-3xl font-bold mb-4 text-accent font-serif border-b-2 border-accent/30 pb-4">Visi Kami</h2>
          <p className="text-content-secondary leading-relaxed mt-4">
            Menjadi perusahaan yang memayungi beberapa brand terkemuka di bidang Hospitality Industry, dengan jaringan cabang yang luas dan tersebar di beberapa kota di seluruh Indonesia, serta memberikan pengalaman terbaik bagi pelanggan kami.
          </p>
        </div>
        <div className="bg-secondary p-8 rounded-lg shadow-premium">
          <h2 className="text-3xl font-bold mb-4 text-accent font-serif border-b-2 border-accent/30 pb-4">Misi Kami</h2>
          <p className="text-content-secondary leading-relaxed mt-4">
            Membentuk serta membangun superteam dengan beberapa superbrand yang menyediakan kebutuhan untuk semua kalangan masyarakat, sehingga kami dapat menjadi pilihan utama bagi masyarakat.
          </p>
        </div>
      </div>
      
      <div className="bg-secondary p-8 rounded-lg shadow-premium">
        <h2 className="text-3xl font-bold mb-4 text-accent font-serif border-b-2 border-accent/30 pb-4">Budaya Perusahaan</h2>
        <ul className="list-none space-y-4 text-content-secondary leading-relaxed mt-6">
          <li className="flex items-start">
            <span className="text-accent font-bold text-xl mr-4">&#10003;</span>
            <span><strong>Integritas:</strong> Kami menjunjung tinggi kejujuran dan etika dalam setiap aspek bisnis.</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent font-bold text-xl mr-4">&#10003;</span>
            <span><strong>Kerja Tim:</strong> Kami percaya bahwa kesuksesan dicapai melalui kolaborasi dan dukungan tim yang solid.</span>
            </li>
          <li className="flex items-start">
            <span className="text-accent font-bold text-xl mr-4">&#10003;</span>
            <span><strong>Inovasi:</strong> Kami terus mencari cara baru untuk meningkatkan layanan dan pengalaman pelanggan.</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent font-bold text-xl mr-4">&#10003;</span>
            <span><strong>Fokus pada Pelanggan:</strong> Kepuasan pelanggan adalah prioritas utama kami.</span>
            </li>
          <li className="flex items-start">
            <span className="text-accent font-bold text-xl mr-4">&#10003;</span>
            <span><strong>Pertumbuhan Berkelanjutan:</strong> Kami berkomitmen pada pengembangan diri dan pertumbuhan perusahaan jangka panjang.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;