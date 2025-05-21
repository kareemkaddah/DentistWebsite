import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Leistungen', href: '/services' },
  { name: 'Über Uns', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white shadow-sm'>
      <div className='container-custom'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex-shrink-0'>
            <Link to='/' className='flex flex-col items-start'>
              <span className='text-3xl font-bold text-primary'>MVZ</span>
              <span className='text-lg text-primary'>Zahnarzt Centrum</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-8'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300'
                >
                  {item.name}
                </Link>
              ))}
              <Link to='/contact' className='btn-primary'>
                Termin Vereinbaren
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='text-gray-600 hover:text-primary'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className='h-6 w-6' />
              ) : (
                <Bars3Icon className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='text-gray-600 hover:text-primary block px-3 py-2 text-base font-medium'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to='/contact'
              className='btn-primary block text-center mt-4'
              onClick={() => setMobileMenuOpen(false)}
            >
              Termin Vereinbaren
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
