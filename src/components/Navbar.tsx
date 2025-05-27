import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Leistungen', href: '/services' },
  { name: 'Über Uns', href: '/about' },
  { name: 'Ergebnisse', href: '/results' },
  { name: 'Kontakt', href: '/contact' },
];

const DOCTOLIB_URL =
  'https://www.doctolib.de/zahnarztpraxis/castrop-rauxel/mvz-zahnarztcentrum-castrop/booking/new-patient?specialityId=1285&bookingFunnelSource=profile';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-primary shadow-sm'>
      <div className='container-custom'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex-shrink-0'>
            <Link to='/' className='flex items-center'>
              <img
                src='/assets/logo.png'
                alt='MVZ Zahnarzt Centrum Castrop Logo'
                className='h-20 w-auto'
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-8'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='text-gray-300 hover:text-secondary px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 hover:tracking-wider'
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={DOCTOLIB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-secondary'
              >
                Termin Vereinbaren
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='text-gray-300 hover:text-white'
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
        <div className='md:hidden bg-primary'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='text-gray-300 hover:text-secondary block px-3 py-2 text-base font-medium transition-all duration-300 hover:scale-110 hover:tracking-wider'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={DOCTOLIB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-secondary block text-center mt-4'
              onClick={() => setMobileMenuOpen(false)}
            >
              Termin Vereinbaren
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
