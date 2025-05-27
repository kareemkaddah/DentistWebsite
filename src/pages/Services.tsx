import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCheckmark = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref}>
      <motion.svg
        className='w-5 h-5 text-primary mr-2'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
          delay: 0.2,
        }}
      >
        <motion.path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 13l4 4L19 7'
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        />
      </motion.svg>
    </div>
  );
};

const services = [
  {
    title: 'Feste Zähne an nur einem Tag – mit ICX-Imperial',
    description:
      'Dank des modernen ICX-Imperial Konzepts erhalten Sie feste Zähne an nur einem Tag – schnell, präzise und digital geplant. Unsere Praxis bietet Ihnen damit eine komfortable Komplettlösung: alles aus einer Hand.',
    features: [
      'Schnelle Behandlung an nur einem Tag',
      'Digitale Planung und Präzision',
      'Moderne ICX-Imperial Technologie',
      'Komfortable Komplettlösung',
      'Alles aus einer Hand',
    ],
    price: 'Auf Anfrage',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Zahnschiene statt Zahnspange – mit modernClear',
    description:
      'Gerade Zähne ganz diskret: Mit den nahezu unsichtbaren Zahnschienen von modernClear korrigieren wir Zahnfehlstellungen sanft und effektiv – ganz ohne klassische Zahnspange. Weltweit wurden bereits über 6 Millionen Patient:innen erfolgreich mit dieser innovativen Methode behandelt.',
    features: [
      'Nahezu unsichtbare Zahnschienen',
      'Sanfte und effektive Korrektur',
      'Keine klassische Zahnspange nötig',
      'Bewährte Methode weltweit',
      'Diskrete Behandlung',
    ],
    price: 'Auf Anfrage',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Strahlend weißes Lächeln mit fläsh',
    description:
      'Mit fläsh bieten wir Ihnen eine moderne, sichere und wirksame Methode zur Zahnaufhellung – direkt in unserer Praxis. Echte fläsh-Ergebnisse sprechen für sich: sichtbar hellere Zähne schon nach der ersten Anwendung. Für ein Lächeln, das begeistert – professionell, sanft und schonend.',
    features: [
      'Moderne und sichere Methode',
      'Direkt in der Praxis',
      'Sichtbare Ergebnisse nach erster Anwendung',
      'Professionelle Behandlung',
      'Sanft und schonend',
    ],
    price: 'Auf Anfrage',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Allgemeine Zahnheilkunde',
    description:
      'Umfassende zahnärztliche Versorgung für Patienten jeden Alters.',
    features: [
      'Regelmäßige Kontrollen und Reinigungen',
      'Zahnfüllungen und Restaurationen',
      'Wurzelbehandlung',
      'Parodontitis-Behandlung',
      'Zahnextraktionen',
    ],
    price: 'Ab 100€',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ästhetische Zahnheilkunde',
    description:
      'Verwandeln Sie Ihr Lächeln mit unseren modernen kosmetischen Verfahren.',
    features: [
      'Zahnaufhellung',
      'Keramik-Veneers',
      'Zahnaufbau',
      'Invisalign Zahnschienen',
      'Smile-Design',
    ],
    price: 'Ab 500€',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Kieferorthopädie',
    description: 'Professionelle Zahnkorrektur und Ausrichtung.',
    features: [
      'Traditionelle Zahnspangen',
      'Unsichtbare Zahnschienen',
      'Retainer',
      'Frühbehandlung',
      'Kieferorthopädie für Erwachsene',
    ],
    price: 'Ab 3.000€',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Notfallversorgung',
    description: '24/7 Notfall-Zahnbehandlung für dringende Situationen.',
    features: [
      'Zahnschmerz-Behandlung',
      'Reparatur gebrochener Zähne',
      'Ersatz verlorener Füllungen',
      'Versorgung bei Zahnunfällen',
      'Notfall-Extraktionen',
    ],
    price: 'Ab 150€',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Services = () => {
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
              Unsere Leistungen
            </h1>
            <p className='text-xl'>
              Umfassende zahnärztliche Versorgung nach Maß
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 gap-16'>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-lg shadow-lg overflow-hidden'
              >
                <div className='md:flex'>
                  <div className='md:w-1/2'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className='w-full h-64 md:h-full object-cover'
                    />
                  </div>
                  <div className='p-8 md:w-1/2'>
                    <h2 className='text-2xl font-bold mb-4'>{service.title}</h2>
                    <p className='text-gray-600 mb-6'>{service.description}</p>
                    <div className='mb-6'>
                      <h3 className='font-bold mb-2'>Leistungen umfassen:</h3>
                      <ul className='space-y-2'>
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className='flex items-center text-gray-600'
                          >
                            <AnimatedCheckmark />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='text-xl font-bold text-primary'>
                      {service.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className='bg-white py-20'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-6'>
              Versicherung & Zahlungsmöglichkeiten
            </h2>
            <p className='text-gray-600 mb-8'>
              Wir akzeptieren die meisten gesetzlichen und privaten
              Krankenversicherungen und bieten flexible Zahlungsmöglichkeiten,
              um die Zahnbehandlung für jeden zugänglich zu machen.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='font-bold mb-4'>Krankenversicherungen</h3>
                <ul className='text-gray-600 space-y-2'>
                  <li>Gesetzliche Krankenkassen</li>
                  <li>Private Krankenversicherungen</li>
                  <li>Zahnzusatzversicherungen</li>
                  <li>Beihilfe</li>
                  <li>Und weitere...</li>
                </ul>
              </div>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='font-bold mb-4'>Zahlungsmöglichkeiten</h3>
                <ul className='text-gray-600 space-y-2'>
                  <li>EC-Karte</li>
                  <li>Kreditkarte</li>
                  <li>Barzahlung</li>
                  <li>Ratenzahlung möglich</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
