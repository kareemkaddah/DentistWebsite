import { motion } from 'framer-motion';

const results = [
  {
    id: 1,
    title: 'Zahnaufhellung mit fläsh',
    description:
      'Professionelle Zahnaufhellung mit sichtbarem Ergebnis nach nur einer Behandlung. Die Zähne werden deutlich heller und strahlender.',
    beforeImage: '/assets/results/teeth-whitening-before.jpg',
    afterImage: '/assets/results/teeth-whitening-after.jpg',
    category: 'Zahnaufhellung',
  },
  {
    id: 2,
    title: 'ICX-Imperial Implantate',
    description:
      'Feste Zähne an nur einem Tag - ein komplett neues Lächeln. Natürlich aussehende Implantate für optimale Ästhetik und Funktion.',
    beforeImage: '/assets/results/teeth-implant-before.jpg',
    afterImage: '/assets/results/teeth-implant-after.jpg',
    category: 'Implantate',
  },
  {
    id: 3,
    title: 'modernClear Zahnschienen',
    description:
      'Diskrete Zahnkorrektur mit nahezu unsichtbaren Schienen. Gerade Zähne ohne klassische Zahnspange.',
    beforeImage: '/assets/results/teeth-aligner-before.jpg',
    afterImage: '/assets/results/teeth-aligner-after.jpg',
    category: 'Zahnkorrektur',
  },
  {
    id: 4,
    title: 'Veneers',
    description:
      'Natürlich schöne Zähne durch hochwertige Veneers. Perfekte Form und Farbe für ein harmonisches Lächeln.',
    beforeImage: '/assets/results/teeth-veneer-before.jpg',
    afterImage: '/assets/results/teeth-veneer-after.jpg',
    category: 'Ästhetik',
  },
  {
    id: 5,
    title: 'Zahnfüllungen',
    description:
      'Unsichtbare Zahnfüllungen für ein natürliches Erscheinungsbild. Hochwertige Materialien für langanhaltende Ergebnisse.',
    beforeImage: '/assets/results/teeth-filling-before.jpg',
    afterImage: '/assets/results/teeth-filling-after.jpg',
    category: 'Zahnfüllungen',
  },
  {
    id: 6,
    title: 'Zahnfleischbehandlung',
    description:
      'Gesundes Zahnfleisch für ein strahlendes Lächeln. Professionelle Behandlung für optimale Zahnfleischgesundheit.',
    beforeImage: '/assets/results/teeth-gum-before.jpg',
    afterImage: '/assets/results/teeth-gum-after.jpg',
    category: 'Zahnfleisch',
  },
];

const Results = () => {
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
              Unsere Behandlungsergebnisse
            </h1>
            <p className='text-xl'>
              Überzeugen Sie sich selbst von unseren erfolgreichen Behandlungen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Grid */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-lg shadow-lg overflow-hidden'
              >
                <div className='p-6'>
                  <span className='inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4'>
                    {result.category}
                  </span>
                  <h3 className='text-2xl font-bold mb-4'>{result.title}</h3>
                  <p className='text-gray-600 mb-6'>{result.description}</p>
                </div>
                <div className='grid grid-cols-2 gap-4 p-6 bg-gray-50'>
                  <div>
                    <h4 className='text-sm font-semibold text-gray-500 mb-2'>
                      Vorher
                    </h4>
                    <div className='aspect-w-4 aspect-h-3'>
                      <img
                        src={result.beforeImage}
                        alt={`Vorher - ${result.title}`}
                        className='object-cover rounded-lg'
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold text-gray-500 mb-2'>
                      Nachher
                    </h4>
                    <div className='aspect-w-4 aspect-h-3'>
                      <img
                        src={result.afterImage}
                        alt={`Nachher - ${result.title}`}
                        className='object-cover rounded-lg'
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className='py-12 bg-white'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-gray-600'>
              * Die gezeigten Ergebnisse können von Patient zu Patient
              variieren. Die individuelle Behandlung und das Ergebnis hängen von
              verschiedenen Faktoren ab. Vereinbaren Sie einen Beratungstermin,
              um Ihre persönlichen Möglichkeiten zu besprechen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
