import { motion } from 'framer-motion';

const Impressum = () => {
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
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Impressum</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
            <div className='space-y-8'>
              <div>
                <h2 className='text-2xl font-bold mb-4'>
                  Angaben gemäß § 5 TMG
                </h2>
                <p className='text-gray-600'>
                  MVZ Zahnarzt Centrum Castrop
                  <br />
                  Recklinghauser Str. 132
                  <br />
                  44581 Castrop-Rauxel
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>Kontakt</h2>
                <p className='text-gray-600'>
                  Telefon: 02305 971232
                  <br />
                  E-Mail: info@zahnarztpraxis.de
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className='text-gray-600'>
                  Dr. Sarah Schmidt
                  <br />
                  Recklinghauser Str. 132
                  <br />
                  44581 Castrop-Rauxel
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p className='text-gray-600'>
                  Berufsbezeichnung: Zahnärztin
                  <br />
                  Zuständige Kammer: Zahnärztekammer Westfalen-Lippe
                  <br />
                  Verliehen in: Deutschland
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>
                  EU-Streitschlichtung
                </h2>
                <p className='text-gray-600'>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:
                  <a
                    href='https://ec.europa.eu/consumers/odr/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary hover:text-secondary ml-1'
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p className='text-gray-600'>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
