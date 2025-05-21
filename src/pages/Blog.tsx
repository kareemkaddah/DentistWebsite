import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Die Bedeutung regelmäßiger Zahnarztbesuche',
    excerpt:
      'Regelmäßige Zahnarztbesuche sind wichtig für die Erhaltung der Mundgesundheit und zur Vorbeugung von Zahnproblemen.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '15. März 2024',
    category: 'Zahngesundheit',
    author: 'Dr. Sarah Schmidt',
  },
  {
    title: 'Zahnaufhellung: Die verschiedenen Möglichkeiten',
    excerpt:
      'Entdecken Sie die verschiedenen Möglichkeiten der Zahnaufhellung und finden Sie die beste Lösung für Ihr Lächeln.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '10. März 2024',
    category: 'Ästhetische Zahnheilkunde',
    author: 'Dr. Michael Weber',
  },
  {
    title: 'Tipps für gesundes Zahnfleisch',
    excerpt:
      'Erfahren Sie mehr über die besten Praktiken zur Erhaltung gesunden Zahnfleisches und zur Vorbeugung von Zahnfleischerkrankungen.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '5. März 2024',
    category: 'Mundgesundheit',
    author: 'Dr. Emily Müller',
  },
  {
    title: 'Die Vorteile der Invisalign-Behandlung',
    excerpt:
      'Entdecken Sie, wie Invisalign Ihnen helfen kann, ein geraderes Lächeln ohne traditionelle Zahnspangen zu erreichen.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '28. Februar 2024',
    category: 'Kieferorthopädie',
    author: 'Dr. Michael Weber',
  },
  {
    title: 'Zahnpflege bei Kindern: Ein Leitfaden für Eltern',
    excerpt:
      'Wichtige Tipps für Eltern, um die Mundgesundheit ihrer Kinder von klein auf zu fördern.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '20. Februar 2024',
    category: 'Kinderzahnheilkunde',
    author: 'Dr. Emily Müller',
  },
  {
    title: 'Notfall-Zahnbehandlung: Was Sie wissen müssen',
    excerpt:
      'Erfahren Sie mehr über häufige Zahnnotfälle und wie Sie damit umgehen können, bevor Sie den Zahnarzt erreichen.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: '15. Februar 2024',
    category: 'Notfallversorgung',
    author: 'Dr. Sarah Schmidt',
  },
];

const categories = [
  'Alle Beiträge',
  'Zahngesundheit',
  'Ästhetische Zahnheilkunde',
  'Mundgesundheit',
  'Kieferorthopädie',
  'Kinderzahnheilkunde',
  'Notfallversorgung',
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
              Zahnarzt Blog
            </h1>
            <p className='text-xl'>
              Informieren Sie sich über Zahngesundheit und Pflege
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
            {/* Sidebar */}
            <div className='lg:col-span-1'>
              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-xl font-bold mb-6'>Kategorien</h2>
                <ul className='space-y-2'>
                  {categories.map((category) => (
                    <li key={category}>
                      <button className='text-gray-600 hover:text-primary transition-colors'>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Blog Posts */}
            <div className='lg:col-span-3'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='bg-white rounded-lg shadow-lg overflow-hidden'
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className='w-full h-48 object-cover'
                    />
                    <div className='p-6'>
                      <div className='flex items-center text-sm text-gray-500 mb-2'>
                        <span>{post.date}</span>
                        <span className='mx-2'>•</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
                      <p className='text-gray-600 mb-4'>{post.excerpt}</p>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-gray-500'>
                          Von {post.author}
                        </span>
                        <button className='text-primary hover:text-primary/80 transition-colors'>
                          Weiterlesen →
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
