import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-primary text-white'>
      <div className='container-custom py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* About Section */}
          <div className='space-y-4'>
            <img
              src='/assets/logo.png'
              alt='MVZ Zahnarzt Centrum Castrop Logo'
              className='h-20 w-auto mb-4'
            />
            <h3 className='text-xl font-bold'>MVZ Zahnarzt Centrum Castrop</h3>
            <p className='text-gray-300'>
              Außergewöhnliche Zahnpflege mit Fokus auf Patientenkomfort und
              Zufriedenheit.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.instagram.com/mvzzahnarztcentrum/?hl=de'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110'
              >
                <FaInstagram className='w-6 h-6' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Schnellzugriff</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110 hover:tracking-wider inline-block'
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110 hover:tracking-wider inline-block'
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110 hover:tracking-wider inline-block'
                >
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  to='/results'
                  className='text-gray-300 hover:text-secondary transition-all duration-300 hover:scale-110 hover:tracking-wider inline-block'
                >
                  Ergebnisse
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Kontakt</h3>
            <ul className='space-y-2'>
              <li className='text-gray-300'>
                Recklinghauser Str. 132
                <br />
                44581 Castrop-Rauxel
              </li>
              <li className='text-gray-300'>Telefon: 02305 971232</li>
              <li className='text-gray-300'>E-Mail: info@zahnarztpraxis.de</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-300'>
          <p>
            &copy; {new Date().getFullYear()} MVZ Zahnarzt Centrum Castrop. Alle
            Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
