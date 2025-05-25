import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Komplettes Lächeln-Design',
    description: 'Umfassende Transformation mit Veneers und Zahnaufhellung',
    beforeImage:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    treatment: ['Keramik-Veneers', 'Zahnaufhellung', 'Zahnfleischkorrektur'],
    duration: '3 Monate',
    patientFeedback:
      'Ich bin überglücklich mit meinem neuen Lächeln. Die Ergebnisse haben meine Erwartungen übertroffen!',
  },
  {
    title: 'Invisalign Behandlung',
    description: 'Professionelle Zahnkorrektur ohne sichtbare Zahnspange',
    beforeImage:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    treatment: [
      'Invisalign Zahnschienen',
      'Digitale Planung',
      'Regelmäßige Kontrollen',
    ],
    duration: '12 Monate',
    patientFeedback:
      'Die unsichtbaren Zahnschienen waren eine perfekte Lösung für mich. Sehr diskret und effektiv!',
  },
  {
    title: 'Zahnimplantate',
    description: 'Natürlich aussehender Zahnersatz mit Implantaten',
    beforeImage:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    treatment: ['Zahnimplantate', 'Knochenaufbau', 'Kronen'],
    duration: '6 Monate',
    patientFeedback:
      'Die Implantate fühlen sich an wie meine eigenen Zähne. Ich kann wieder alles essen und lächeln!',
  },
  {
    title: 'Ästhetische Zahnkorrektur',
    description: 'Minimalinvasive Behandlung für ein perfektes Lächeln',
    beforeImage:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    treatment: ['Komposite', 'Zahnaufhellung', 'Zahnformkorrektur'],
    duration: '2 Monate',
    patientFeedback:
      'Schnelle und schmerzfreie Behandlung mit fantastischen Ergebnissen!',
  },
];

const Blog = () => {
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
              Unsere Erfolge
            </h1>
            <p className='text-xl'>
              Entdecken Sie die Transformationen unserer Patienten
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 gap-16'>
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-lg shadow-lg overflow-hidden'
              >
                <div className='p-8'>
                  <h2 className='text-3xl font-bold mb-4'>{caseStudy.title}</h2>
                  <p className='text-gray-600 mb-6'>{caseStudy.description}</p>

                  {/* Before/After Images */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                    <div>
                      <h3 className='text-lg font-semibold mb-2 text-gray-700'>
                        Vorher
                      </h3>
                      <img
                        src={caseStudy.beforeImage}
                        alt={`Vorher - ${caseStudy.title}`}
                        className='rounded-lg shadow-md w-full h-64 object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold mb-2 text-gray-700'>
                        Nachher
                      </h3>
                      <img
                        src={caseStudy.afterImage}
                        alt={`Nachher - ${caseStudy.title}`}
                        className='rounded-lg shadow-md w-full h-64 object-cover'
                      />
                    </div>
                  </div>

                  {/* Treatment Details */}
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                      <h3 className='text-lg font-semibold mb-4 text-gray-700'>
                        Behandlung
                      </h3>
                      <ul className='space-y-2'>
                        {caseStudy.treatment.map((item) => (
                          <li
                            key={item}
                            className='flex items-center text-gray-600'
                          >
                            <svg
                              className='w-5 h-5 text-primary mr-2'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold mb-4 text-gray-700'>
                        Behandlungsdauer
                      </h3>
                      <p className='text-gray-600'>{caseStudy.duration}</p>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold mb-4 text-gray-700'>
                        Patientenfeedback
                      </h3>
                      <p className='text-gray-600 italic'>
                        "{caseStudy.patientFeedback}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-primary text-white py-16'>
        <div className='container-custom text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Bereit für Ihre Transformation?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Vereinbaren Sie noch heute einen Beratungstermin und lassen Sie uns
            Ihr Lächeln verändern.
          </p>
          <a
            href='https://www.doctolib.de/zahnarztpraxis/castrop-rauxel/mvz-zahnarztcentrum-castrop/booking/new-patient?specialityId=1285&bookingFunnelSource=profile'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-secondary'
          >
            Termin Vereinbaren
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
