import { useState } from 'react';
import { motion } from 'framer-motion';

const DOCTOLIB_URL =
  'https://www.doctolib.de/zahnarztpraxis/castrop-rauxel/mvz-zahnarztcentrum-castrop/booking/new-patient?specialityId=1285&bookingFunnelSource=profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-primary text-white py-20'>
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-3xl mx-auto text-center'
          >
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Kontakt</h1>
            <p className='text-xl'>Kontaktieren Sie unser Team</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-white p-8 rounded-lg shadow-lg'
            >
              <h2 className='text-2xl font-bold mb-6'>
                Senden Sie uns eine Nachricht
              </h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    E-Mail
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Telefon
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Nachricht
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary'
                    required
                  />
                </div>
                <button type='submit' className='w-full btn-primary'>
                  Nachricht Senden
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-8'
            >
              <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-6'>
                  Kontaktinformationen
                </h2>
                <div className='space-y-4'>
                  <div>
                    <h3 className='font-bold text-gray-900'>Adresse</h3>
                    <p className='text-gray-600'>
                      Zahnarztstraße 123
                      <br />
                      44575 Castrop-Rauxel
                    </p>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900'>Telefon</h3>
                    <p className='text-gray-600'>(02305) 123-4567</p>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900'>E-Mail</h3>
                    <p className='text-gray-600'>info@zahnarztpraxis.de</p>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900'>Öffnungszeiten</h3>
                    <p className='text-gray-600'>
                      Montag - Freitag: 8:00 - 18:00 Uhr
                      <br />
                      Samstag: 9:00 - 14:00 Uhr
                      <br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                  <div className='pt-4'>
                    <a
                      href={DOCTOLIB_URL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-primary w-full text-center block'
                    >
                      Online Termin Vereinbaren
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-6'>Standort</h2>
                <div className='aspect-w-16 aspect-h-9'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.1234567890123!2d7.3116!3d51.5456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e0c0c0c0c0c0%3A0x0!2sCastrop-Rauxel!5e0!3m2!1sde!2sde!4v1645564750981!5m2!1sde!2sde'
                    width='100%'
                    height='300'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    title='Praxisstandort Castrop-Rauxel'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
