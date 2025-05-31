import { motion } from 'framer-motion';

const Datenschutz = () => {
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
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Datenschutzerklärung
            </h1>
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
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className='text-xl font-semibold mb-2'>
                  Allgemeine Hinweise
                </h3>
                <p className='text-gray-600 mb-4'>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>
                  2. Datenerfassung auf dieser Website
                </h2>
                <h3 className='text-xl font-semibold mb-2'>Cookies</h3>
                <p className='text-gray-600 mb-4'>
                  Diese Website verwendet keine Cookies zur Erfassung von
                  Nutzerdaten. Wir respektieren Ihre Privatsphäre und verzichten
                  bewusst auf Tracking-Tools.
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>3. Kontaktaufnahme</h2>
                <p className='text-gray-600 mb-4'>
                  Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben aus
                  dem E-Mail-Formular inklusive der von Ihnen dort angegebenen
                  Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                  nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>4. Ihre Rechte</h2>
                <p className='text-gray-600 mb-4'>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
                  Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                  Empfänger und den Zweck der Datenverarbeitung sowie ein Recht
                  auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                  weiteren Fragen zum Thema Datenschutz können Sie sich
                  jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h2 className='text-2xl font-bold mb-4'>5. Verantwortlich</h2>
                <p className='text-gray-600'>
                  MVZ Zahnarzt Centrum Castrop
                  <br />
                  Recklinghauser Str. 132
                  <br />
                  44581 Castrop-Rauxel
                  <br />
                  Telefon: 02305 971232
                  <br />
                  E-Mail: info@zahnarztpraxis.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
