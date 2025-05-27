import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const AnimatedIcon = ({ path }: { path: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref}>
      <motion.svg
        className='w-12 h-12 text-primary'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <motion.path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d={path}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.5,
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
    icon: <AnimatedIcon path='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />,
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Zahnschiene statt Zahnspange – mit modernClear',
    description:
      'Gerade Zähne ganz diskret: Mit den nahezu unsichtbaren Zahnschienen von modernClear korrigieren wir Zahnfehlstellungen sanft und effektiv – ganz ohne klassische Zahnspange. Weltweit wurden bereits über 6 Millionen Patient:innen erfolgreich mit dieser innovativen Methode behandelt.',
    icon: <AnimatedIcon path='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />,
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Strahlend weißes Lächeln mit fläsh',
    description:
      'Mit fläsh bieten wir Ihnen eine moderne, sichere und wirksame Methode zur Zahnaufhellung – direkt in unserer Praxis. Echte fläsh-Ergebnisse sprechen für sich: sichtbar hellere Zähne schon nach der ersten Anwendung. Für ein Lächeln, das begeistert – professionell, sanft und schonend.',
    icon: <AnimatedIcon path='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />,
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Allgemeine Zahnheilkunde',
    description: 'Umfassende zahnärztliche Versorgung für die ganze Familie.',
    icon: (
      <AnimatedIcon path='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' />
    ),
  },
  {
    title: 'Ästhetische Zahnheilkunde',
    description:
      'Verwandeln Sie Ihr Lächeln mit unseren kosmetischen Behandlungen.',
    icon: (
      <AnimatedIcon path='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
    ),
  },
  {
    title: 'Kieferorthopädie',
    description: 'Professionelle Zahnkorrektur und Ausrichtung.',
    icon: <AnimatedIcon path='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />,
  },
  {
    title: 'Notfallversorgung',
    description: '24/7 Notfall-Zahnbehandlung verfügbar.',
    icon: <AnimatedIcon path='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />,
  },
];

const testimonials = [
  {
    name: 'S. B.',
    content:
      'Ich war zum ersten Mal in der Praxis. So gut aufgehoben habe ich mich noch nie gefühlt (und ich habe schon einige Zahnärzte ausprobiert). Frau Dr. ist einfach spitze – besonders für Angsthasen wie mich. Kompetent, hilfsbereit, freundlich und sehr einfühlsam. Auch das gesamte Team ist super herzlich und kompetent. Ich komme gerne wieder.',
    rating: 5,
  },
  {
    name: 'W. M.',
    content:
      'Sehr empfehlenswert! Die Ärzt:innen sind kompetent und beraten ausführlich. Das Team arbeitet harmonisch zusammen und schafft eine sehr angenehme Atmosphäre. Man wird herzlich empfangen – und die professionelle Zahnreinigung ist TOP!',
    rating: 5,
  },
  {
    name: 'J. S.',
    content:
      'Hier nimmt man sich Zeit, ist zuvorkommend, und es wird nichts gemacht, was man nicht möchte. Freundlicher Empfang, kurze Wartezeit. Besonders Angstpatient:innen wird hier mit viel Rücksicht begegnet. Ein Pluspunkt: die Online-Terminbuchung.',
    rating: 5,
  },
  {
    name: 'M. K.',
    content:
      'Frau Dr. Kleftonikolou ist die beste Zahnärztin, die ich je getroffen habe! Ihre herzliche Art und hohe Fachkompetenz machen den Zahnarztbesuch sehr angenehm.',
    rating: 5,
  },
  {
    name: 'J. P.',
    content:
      'Ich war heute zum ersten Mal da und habe mich direkt sehr gut aufgehoben gefühlt. Keine Wartezeit, sympathische und ausführliche Beratung während der Behandlung. Ich komme mit einem sehr guten Gefühl wieder.',
    rating: 5,
  },
  {
    name: 'M. R.',
    content:
      'Ich gehe sehr gerne zu Frau Dr. – sie ist freundlich, nimmt sich Zeit und geht wunderbar auf Ängste ein. Ich habe Autismus und kann diese Praxis nur empfehlen! Bei der Spritze habe ich nichts gemerkt. Die Ärztin fragt immer nach dem Wohlbefinden und arbeitet ruhig und einfühlsam. Auch das Team ist super freundlich. Die fünf Sterne sind mehr als verdient.',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className='flex'>
      {[...Array(rating)].map((_, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: index * 0.1,
          }}
          className='text-yellow-400 text-xl'
        >
          ⭐
        </motion.span>
      ))}
    </div>
  );
};

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const checkmarkRef = useRef(null);
  const isCheckmarkInView = useInView(checkmarkRef, {
    once: true,
    margin: '-100px',
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-primary text-white relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent opacity-90'></div>
        <div className='container-custom py-24 md:py-32 relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-4xl md:text-5xl font-bold mb-6'
              >
                Ihr Lächeln, Unsere Priorität
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-xl mb-8'
              >
                <p className='text-xl font-bold text-secondary mb-4'>
                  Wir behandeln nicht nur Zähne, sondern Menschen.
                </p>
                <p className='text-base'>
                  Auch bei Zahnarztangst sind Sie bei uns in guten Händen –
                  einfühlsam, respektvoll und mit Zeit für Ihre Bedürfnisse.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to='/contact' className='btn-secondary'>
                  Termin Vereinbaren
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='relative'
            >
              <img
                src='https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                alt='Zahnarztpraxis'
                className='rounded-lg shadow-2xl'
              />
              <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg'>
                <div className='flex items-center space-x-2'>
                  <div ref={checkmarkRef}>
                    <motion.svg
                      className='w-8 h-8 text-primary'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      initial={{ pathLength: 0 }}
                      animate={
                        isCheckmarkInView
                          ? { pathLength: 1 }
                          : { pathLength: 0 }
                      }
                      transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                    >
                      <motion.path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                        initial={{ pathLength: 0 }}
                        animate={
                          isCheckmarkInView
                            ? { pathLength: 1 }
                            : { pathLength: 0 }
                        }
                        transition={{
                          duration: 1,
                          ease: 'easeInOut',
                          delay: 0.5,
                        }}
                      />
                    </motion.svg>
                  </div>
                  <span className='text-gray-800 font-semibold'>
                    Professionelle Behandlung
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='section-padding bg-gray-50'>
        <div className='container-custom'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Unsere Leistungen
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Wir bieten ein umfassendes Spektrum an zahnärztlichen Leistungen
              für alle Ihre Bedürfnisse.
            </p>
          </div>

          {/* Featured Services */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out relative ${
                  hoveredIndex === index
                    ? 'scale-110 z-10'
                    : hoveredIndex !== null
                    ? 'blur-sm'
                    : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className='h-48 w-full overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                  <p className='text-gray-600'>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className='text-center mt-12'>
            <Link to='/services' className='btn-primary'>
              Alle Leistungen Entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='section-padding'>
        <div className='container-custom'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Was Unsere Patienten Sagen
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Überzeugen Sie sich selbst - hören Sie von unseren zufriedenen
              Patienten.
            </p>
          </div>
          <div className='relative'>
            <button
              onClick={scrollLeft}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-10'
            >
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
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <div
              ref={scrollContainerRef}
              className='overflow-x-auto scrollbar-hide pb-4'
            >
              <div className='flex space-x-6 min-w-max'>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='bg-white p-6 rounded-lg shadow-md w-[400px] flex-shrink-0'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <h4 className='font-bold'>{testimonial.name}</h4>
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className='text-gray-600'>{testimonial.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollRight}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-10'
            >
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
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-primary text-white py-16 relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent opacity-90'></div>
        <div className='container-custom text-center relative z-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Bereit für ein Neues Lächeln?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Vereinbaren Sie noch heute einen Termin und machen Sie den ersten
            Schritt zu einem gesünderen, schöneren Lächeln.
          </p>
          <Link to='/contact' className='btn-secondary'>
            Termin Vereinbaren
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
