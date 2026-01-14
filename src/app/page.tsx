import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Philosophy />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
