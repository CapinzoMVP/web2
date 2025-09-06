import React, { useState } from 'react';

const MembershipPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.';
    }
    if (!formData.email) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!formData.phone) {
      newErrors.phone = 'Nomor telepon wajib diisi.';
    } else if (!/^\d{10,13}$/.test(formData.phone)) {
      newErrors.phone = 'Nomor telepon harus terdiri dari 10-13 digit angka.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center bg-secondary p-8 rounded-xl shadow-premium">
        <h1 className="text-3xl font-bold text-accent mb-4 font-serif">Terima Kasih!</h1>
        <p className="text-content-secondary">Pendaftaran Anda telah kami terima. Tim kami akan segera menghubungi Anda.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-accent font-serif">Jadi Member XYZ</h1>
        <p className="mt-2 text-lg text-content-secondary">Dapatkan penawaran eksklusif dan informasi terbaru dari kami.</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-xl shadow-premium space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-content-secondary mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full bg-primary border ${errors.name ? 'border-red-500' : 'border-border-color'} rounded-md py-3 px-4 text-content focus:outline-none focus:ring-2 focus:ring-accent`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-content-secondary mb-1">
            Alamat Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full bg-primary border ${errors.email ? 'border-red-500' : 'border-border-color'} rounded-md py-3 px-4 text-content focus:outline-none focus:ring-2 focus:ring-accent`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-content-secondary mb-1">
            Nomor Telepon
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="081234567890"
            className={`w-full bg-primary border ${errors.phone ? 'border-red-500' : 'border-border-color'} rounded-md py-3 px-4 text-content focus:outline-none focus:ring-2 focus:ring-accent`}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby="phone-error"
          />
          {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-primary bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-secondary transition-colors duration-300"
          >
            Daftar Sekarang
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipPage;