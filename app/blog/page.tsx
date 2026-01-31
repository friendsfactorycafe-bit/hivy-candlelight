import { Metadata } from 'next';
import FFCBlogPage from '@/components/ffc-blog-page';

export const metadata: Metadata = {
  title: 'Blog | Candle Light Dinner Ideas & Tips | HIVY Surat',
  description: 'Discover candle light dinner tips, romantic date ideas, and dining guides. Get inspired for your next romantic evening at HIVY Candle Light Dinner Surat.',
  keywords: 'candle light dinner blog, romantic dinner ideas surat, date night tips, candle light dining guide',
};

export default function BlogPage() {
  return <FFCBlogPage />;
}
