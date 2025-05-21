import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-secondary text-white'>
      <div className='container-custom py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* About Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>MVZ Zahnarzt Centrum Castrop</h3>
            <p className='text-gray-300'>
              Außergewöhnliche Zahnpflege mit Fokus auf Patientenkomfort und
              Zufriedenheit.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaFacebook className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaTwitter className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaInstagram className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaLinkedin className='w-6 h-6' />
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
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Unsere Leistungen</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Allgemeine Zahnheilkunde
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Ästhetische Zahnheilkunde
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Kieferorthopädie
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Notfallversorgung
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Kontakt</h3>
            <ul className='space-y-2'>
              <li className='text-gray-300'>
                Zahnarztstraße 123
                <br />
                Stadt, PLZ
              </li>
              <li className='text-gray-300'>Telefon: (030) 123-4567</li>
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
