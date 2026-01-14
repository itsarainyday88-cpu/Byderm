import ProductGrid from '@/components/ProductGrid';

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-20">
            <div className="bg-primary py-12 mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        Explore our full range of biotechnology-enhanced skincare solutions.
                    </p>
                </div>
            </div>
            <ProductGrid variant="full" />
        </main>
    );
}
