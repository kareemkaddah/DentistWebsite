import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Sarah Schmidt',
    role: 'Leitende Zahnärztin',
    bio: 'Mit über 15 Jahren Erfahrung ist Dr. Schmidt spezialisiert auf kosmetische und restaurative Zahnheilkunde.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Michael Weber',
    role: 'Kieferorthopäde',
    bio: 'Dr. Weber bringt Expertise in der Kieferorthopädie mit und ist leidenschaftlich darin, schöne Lächeln zu gestalten.',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Emily Müller',
    role: 'Kinderzahnärztin',
    bio: 'Spezialisiert auf die Zahnpflege von Kindern, macht Dr. Müller Zahnarztbesuche für die Kleinen angenehm und spielerisch.',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const values = [
  {
    title: 'Patientenorientierte Versorgung',
    description:
      'Ihr Komfort und Wohlbefinden stehen während Ihrer gesamten Behandlung an erster Stelle.',
    icon: '❤️',
  },
  {
    title: 'Moderne Technologie',
    description:
      'Hochmoderne Ausrüstung und Techniken für optimale Behandlungsergebnisse.',
    icon: '🔬',
  },
  {
    title: 'Erfahrenes Team',
    description:
      'Unsere qualifizierten Fachkräfte bringen jahrelange Expertise in jede Behandlung ein.',
    icon: '👥',
  },
  {
    title: 'Angenehme Atmosphäre',
    description: 'Eine einladende Umgebung, in der Sie sich wohlfühlen können.',
    icon: '🏥',
  },
];

const About = () => {
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
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Über Uns</h1>
            <p className='text-xl'>Außergewöhnliche Zahnpflege seit 2005</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl font-bold mb-6'>Unsere Geschichte</h2>
              <p className='text-gray-600'>
                Seit unserer Gründung im Jahr 2005 versorgen wir unsere
                Patienten mit Engagement und Exzellenz. Unser Ziel ist es,
                umfassende Zahnpflege in einer angenehmen und einladenden
                Umgebung anzubieten, wobei wir modernste Technologie und
                Techniken einsetzen, um die bestmöglichen Ergebnisse für unsere
                Patienten zu erzielen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className='bg-white py-20'>
        <div className='container-custom'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-6'>Unsere Werte</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-gray-50 p-6 rounded-lg text-center'
              >
                <div className='text-4xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-bold mb-2'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-6'>Unser Team</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Unser erfahrenes Team von Zahnärzten ist darauf spezialisiert,
              Ihnen die bestmögliche Versorgung zu bieten.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-lg shadow-lg overflow-hidden'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{member.name}</h3>
                  <p className='text-primary font-medium mb-4'>{member.role}</p>
                  <p className='text-gray-600'>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className='bg-white py-20'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-6'>Unsere Praxis</h2>
            <p className='text-gray-600 mb-8'>
              Unsere moderne Praxis ist mit der neuesten zahnärztlichen
              Technologie ausgestattet, um Ihnen die bestmögliche Versorgung zu
              bieten. Wir halten die höchsten Standards für Sauberkeit und
              Sterilisation ein, um Ihre Sicherheit zu gewährleisten.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <img
                src='https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                alt='Zahnarztpraxis'
                className='rounded-lg shadow-lg'
              />
              <img
                src='https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                alt='Behandlungsraum'
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
