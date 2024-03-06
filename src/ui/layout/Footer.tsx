import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconPhone,
  IconMail,
  IconCurrentLocation,
} from '@tabler/icons-react';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer
      className={clsx(
        'bg-[#007acc]',
        'dark:bg-gradient-to-b dark:from-extends-darker-blue-950 dark:via-[#14032B] dark:to-[#1F0544]',
        'dark:border-t dark:border-[#49247A]',
        'text-white'
      )}
    >
      <div className='container mx-auto px-4 py-8 flex flex-col'>
        <div className='flex flex-col sm:flex-row justify-start items-start sm:justify-between sm:items-center w-full pb-4'>
          <h2 className='text-3xl font-bold mb-4'>Travelix</h2>
          <NumberOneCompany />
        </div>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <ul className='space-y-2 *:opacity-80'>
              <li className='flex items-center space-x-2'>
                <IconCurrentLocation stroke={1.5} className='text-white' />
                <span>Dirección: Matcom, Vedado, La Habana</span>
              </li>
              <li className='flex items-center space-x-2'>
                <IconPhone stroke={1.5} className='text-white' />
                <span>Llámenos: +53 55591702</span>
              </li>
              <li className='flex items-center space-x-2'>
                <IconMail stroke={1.5} className='text-white' />
                <span>Email: support@travelix.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Nuestra empresa</h3>
            <ul className='space-y-2 *:opacity-80 hover:*:opacity-100 *:cursor-pointer'>
              <li>Términos y condiciones</li>
              <li>Sobre nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Sobre el proyecto</h3>
            <ul className='space-y-2 *:opacity-80 hover:*:opacity-100 *:cursor-pointer'>
              <li>Ver documentación</li>
              <li>Ir a Github</li>
              <li>Telegram</li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Síguenos en las redes:</h3>
            <div className='flex space-x-2 *:cursor-pointer'>
              <IconBrandFacebook stroke={1.5} className='text-white' />
              <IconBrandLinkedin stroke={1.5} className='text-white' />
              <IconBrandInstagram stroke={1.5} className='text-white' />
              <IconBrandTwitter stroke={1.5} className='text-white' />
            </div>
          </div>
        </div>
      </div>
      <div className='py-4 border-t border-white/20 text-center'>
        <span className='block mb-2 text-sm'>
          ©2024, todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

const NumberOneCompany = () => {
  return (
    <div className='flex flex-row items-center justify-center rounded-xl gap-2 px-4 py-2 bg-[#1E2235]'>
      <MedalIcon />
      <span className='text-xl font-semibold text-gray-50'>
        #1 World Company
      </span>
    </div>
  );
};

const MedalIcon = () => {
  return (
    <svg
      width='38'
      height='50'
      viewBox='0 0 38 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.25083 29.2227L1.10346 44.4638C0.880662 44.9252 1.11727 45.213 1.86848 45.0691L7.68495 43.8072C7.74181 43.787 7.80227 43.7788 7.86246 43.7833C7.92265 43.7877 7.98125 43.8047 8.03451 43.8331C8.08777 43.8615 8.13452 43.9007 8.17177 43.9482C8.20901 43.9957 8.23594 44.0504 8.25083 44.1089L10.8712 49.4798C11.1216 50.0594 11.4114 50.1777 11.6342 49.7164L19.243 33.7634L8.25083 29.2227ZM30.2864 29.2227L37.4338 44.4638C37.6704 44.9252 37.4199 45.213 36.6707 45.0691L30.8523 43.8072C30.7954 43.7879 30.7351 43.7804 30.6752 43.7853C30.6153 43.7902 30.557 43.8073 30.504 43.8356C30.451 43.8638 30.4043 43.9027 30.3669 43.9497C30.3295 43.9967 30.3021 44.0509 30.2864 44.1089L27.666 49.4798C27.4156 50.0594 27.1396 50.1777 26.903 49.7164L19.2962 33.7634L30.2864 29.2227Z'
        fill='#DE7818'
      />
      <path
        d='M17.1229 38.1986C17.1229 38.2124 17.0973 38.1986 17.0697 38.1986C13.0818 37.7565 9.34297 36.0395 6.40878 33.3029C6.39497 33.2891 6.35554 33.2773 6.36934 33.2635L6.69861 32.5655C6.71044 32.5399 6.73805 32.6049 6.74988 32.6187C9.56742 35.2371 13.4773 36.8835 17.4778 37.3705C17.4916 37.3705 17.5173 37.3705 17.5173 37.3823L17.1229 38.1986Z'
        fill='#B35454'
      />
      <path
        d='M19.2691 37.462C24.2369 37.462 29.0012 35.4886 32.5139 31.9758C36.0267 28.4631 38.0001 23.6988 38.0001 18.731C38.0001 13.7632 36.0267 8.99894 32.5139 5.48619C29.0012 1.97344 24.2369 0 19.2691 0C14.3013 0 9.53702 1.97344 6.02427 5.48619C2.51153 8.99894 0.538086 13.7632 0.538086 18.731C0.538086 23.6988 2.51153 28.4631 6.02427 31.9758C9.53702 35.4886 14.3013 37.462 19.2691 37.462Z'
        fill='#F0CD0A'
      />
      <path
        d='M19.2692 34.8822C23.5528 34.8822 27.6608 33.1806 30.6898 30.1517C33.7187 27.1228 35.4203 23.0147 35.4203 18.7311C35.4203 14.4476 33.7187 10.3395 30.6898 7.31062C27.6608 4.2817 23.5528 2.58008 19.2692 2.58008C14.9857 2.58008 10.8776 4.2817 7.8487 7.31062C4.81979 10.3395 3.11816 14.4476 3.11816 18.7311C3.11816 23.0147 4.81979 27.1228 7.8487 30.1517C10.8776 33.1806 14.9857 34.8822 19.2692 34.8822Z'
        fill='#D2B309'
      />
      <path
        d='M19.7132 34.8205C23.8572 34.8205 27.8313 33.1744 30.7615 30.2442C33.6917 27.314 35.3379 23.3398 35.3379 19.1959C35.3379 15.052 33.6917 11.0778 30.7615 8.14764C27.8313 5.21745 23.8572 3.57129 19.7132 3.57129C15.5693 3.57129 11.5952 5.21745 8.66497 8.14764C5.73478 11.0778 4.08862 15.052 4.08862 19.1959C4.08862 23.3398 5.73478 27.314 8.66497 30.2442C11.5952 33.1744 15.5693 34.8205 19.7132 34.8205Z'
        fill='#E3C101'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M19.1799 26.3502H23.0208V11.251H19.1799L15.3411 13.8674V17.1739L18.9808 14.7152H19.1799V26.3502Z'
        fill='#FFF2B5'
      />
      <path
        d='M23.6785 5.5166C26.5941 6.21178 29.1978 7.85226 31.0834 10.1822C32.969 12.5122 34.0306 15.4006 34.1027 18.3971C34.1747 21.3937 33.2531 24.3298 31.4816 26.7477C29.7101 29.1655 27.1883 30.9292 24.3094 31.7637C27.9432 28.9856 30.3507 24.2476 30.3507 18.8649C30.3507 13.1786 27.6652 8.21584 23.6785 5.5166Z'
        fill='white'
        fill-opacity='0.2'
      />
      <path
        d='M21.4136 38.1984C21.4274 38.2122 21.4531 38.1984 21.4669 38.1984C25.5601 37.6857 29.326 36.0394 32.1534 33.3283C32.1692 33.3165 32.2086 33.3027 32.1928 33.2889L31.8655 32.5909C31.8517 32.5652 31.8261 32.6303 31.8123 32.6441C28.9967 35.2645 25.0731 36.8832 21.0587 37.3702C21.0449 37.3702 21.0193 37.3702 21.0193 37.3821L21.4136 38.1984Z'
        fill='#B35454'
      />
    </svg>
  );
};
