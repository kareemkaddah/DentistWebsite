import { motion } from 'framer-motion';

const DOCTOLIB_URL =
  'https://www.doctolib.de/zahnarztpraxis/castrop-rauxel/mvz-zahnarztcentrum-castrop/booking/new-patient?specialityId=1285&bookingFunnelSource=profile';

const Contact = () => {
  return (
    <div className='bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-primary text-white relative'>
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

      {/* Contact Section */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-white p-8 rounded-lg shadow-lg h-full flex flex-col'
            >
              <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                  Kontaktieren Sie uns
                </h2>
                <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
              </div>

              <div className='flex flex-col items-center justify-center flex-grow space-y-6'>
                <div className='text-center max-w-md'>
                  <p className='text-gray-600 text-lg mb-6'>
                    Wir freuen uns auf Ihre Nachricht und stehen Ihnen für alle
                    Fragen zur Verfügung.
                  </p>
                  <div className='bg-gray-50 p-6 rounded-lg border border-gray-100'>
                    <p className='text-primary font-bold text-3xl mb-2'>
                      info@zahnarztpraxis.de
                    </p>
                    <p className='text-gray-500'>
                      Wir antworten Ihnen innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-white p-8 rounded-lg shadow-lg h-full'
            >
              <h2 className='text-2xl font-bold mb-6'>Kontaktinformationen</h2>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='text-primary'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Adresse</h3>
                    <p className='text-gray-600'>
                      Recklinghauser Str. 132
                      <br />
                      44581 Castrop-Rauxel
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='text-primary'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Telefon</h3>
                    <p className='text-gray-600'>02305 971232</p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='text-primary'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>E-Mail</h3>
                    <p className='text-gray-600'>info@zahnarztpraxis.de</p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='text-primary'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Öffnungszeiten</h3>
                    <div className='text-gray-600 space-y-2'>
                      <div>
                        <p className='font-semibold text-gray-800 text-lg'>
                          Montag, Dienstag, Donnerstag
                        </p>
                        <p className='ml-4 text-gray-600'>08:30 - 12:00 Uhr</p>
                        <p className='ml-4 text-gray-600'>14:00 - 17:30 Uhr</p>
                      </div>
                      <div>
                        <p className='font-semibold text-gray-800 text-lg'>
                          Mittwoch, Freitag
                        </p>
                        <p className='ml-4 text-gray-600'>08:30 - 12:00 Uhr</p>
                      </div>
                      <div>
                        <p className='font-semibold text-gray-800 text-lg'>
                          Samstag, Sonntag
                        </p>
                        <p className='ml-4 text-gray-600'>Geschlossen</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-8'>
                  <a
                    href={DOCTOLIB_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-secondary transition-colors duration-300 text-center block'
                  >
                    Termin Vereinbaren
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className='max-w-4xl mx-auto'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.1234567890123!2d7.311234567890123!3d51.54567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e0c0c0c0c0c0%3A0x0!2sRecklinghauser%20Str.%20132%2C%2044581%20Castrop-Rauxel!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='MVZ Zahnarzt Centrum Castrop - Recklinghauser Str. 132'
              className='rounded-lg shadow-lg'
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
