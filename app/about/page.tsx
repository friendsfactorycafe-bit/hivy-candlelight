import { Metadata } from 'next';
import FFCAboutPage from '@/components/ffc-about-page';

export const metadata: Metadata = {
  title: 'About Us | HIVY - Candle Light Dinner Surat',
  description: 'Learn about HIVY - Surat\'s premier candle light dinner venue for couples. Our story, mission, and commitment to creating unforgettable romantic dining experiences.',
  keywords: 'about HIVY, candle light dinner venue surat, romantic dining surat, couples restaurant story',
};

export default function AboutPage() {
  return <FFCAboutPage />;
}
