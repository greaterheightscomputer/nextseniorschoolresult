import { Provider } from '@/context/Provider';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Isale-Eko Senior Student Score Record',
  description: 'created by Greater Heights',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
        {/*Provider is coming from Provider component*/}
      </body>
    </html>
  );
}
