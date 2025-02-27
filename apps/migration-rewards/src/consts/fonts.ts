import { Montserrat, Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
});
