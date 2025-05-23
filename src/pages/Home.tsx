import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BeakerIcon,
  SparklesIcon,
  FaceSmileIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Allgemeine Zahnheilkunde',
    description: 'Umfassende zahnärztliche Versorgung für die ganze Familie.',
    icon: BeakerIcon,
  },
  {
    title: 'Ästhetische Zahnheilkunde',
    description:
      'Verwandeln Sie Ihr Lächeln mit unseren kosmetischen Behandlungen.',
    icon: SparklesIcon,
  },
  {
    title: 'Kieferorthopädie',
    description: 'Professionelle Zahnkorrektur und Ausrichtung.',
    icon: FaceSmileIcon,
  },
  {
    title: 'Notfallversorgung',
    description: '24/7 Notfall-Zahnbehandlung verfügbar.',
    icon: TruckIcon,
  },
];

const testimonials = [
  {
    name: 'Sarah Schmidt',
    role: 'Patientin',
    content:
      'Die beste zahnärztliche Erfahrung, die ich je hatte. Das Team ist freundlich und professionell.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Michael Weber',
    role: 'Patient',
    content:
      'Ich war nervös wegen meiner Zahnbehandlung, aber sie haben mich sehr beruhigt und mir ein gutes Gefühl gegeben.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Emily Müller',
    role: 'Patientin',
    content:
      'Die Ergebnisse haben meine Erwartungen übertroffen. Ich bin sehr zufrieden mit meinem neuen Lächeln!',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-primary text-white'>
        <div className='container-custom py-24 md:py-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='max-w-3xl'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-4xl md:text-5xl font-bold mb-6'
              >
                Ihr Lächeln, Unsere Priorität
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-xl mb-8'
              >
                Erleben Sie außergewöhnliche Zahnpflege in einer angenehmen und
                einladenden Umgebung.
              </motion.p>
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
              className='hidden md:block'
            >
              <img
                src='https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                alt='Zahnarztpraxis'
                className='rounded-lg shadow-xl w-full h-[400px] object-cover'
              />
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='text-primary mb-4'>
                  <service.icon className='w-12 h-12' />
                </div>
                <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </motion.div>
            ))}
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
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white p-6 rounded-lg shadow-md'
              >
                <div className='flex items-center mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <h4 className='font-bold'>{testimonial.name}</h4>
                    <p className='text-gray-600 text-sm'>{testimonial.role}</p>
                  </div>
                </div>
                <p className='text-gray-600'>{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-primary text-white py-16'>
        <div className='container-custom text-center'>
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
