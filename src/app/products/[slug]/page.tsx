'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Map slugs to image files
const productImages: Record<string, string> = {
    'intensive-cream': '/images/details/intensive-cream.jpg',
    'cica-mask': '/images/details/cica-mask.jpg',
    'ha-mask': '/images/details/ha-mask.jpg',
};

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { t } = useLanguage();

    // params.slug defaults to string | string[], normalize it
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    const imagePath = productImages[slug];

    if (!slug || !imagePath) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                <button
                    onClick={() => router.push('/products')}
                    className="text-primary hover:underline flex items-center"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-20 bg-white">
            {/* Nav Back */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button
                    onClick={() => router.push('/products')}
                    className="text-gray-600 hover:text-primary transition-colors flex items-center mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    {t.nav.products}
                </button>
            </div>

            {/* Detail Image */}
            <div className="w-full max-w-5xl mx-auto bg-white shadow-sm mb-24">
                <div className="relative w-full">
                    {/* Using unoptimized for long detail images to ensure full quality and scrolling */}
                    <Image
                        src={imagePath}
                        alt={slug}
                        width={1200}
                        height={3000} // Approximate height, w-auto h-auto css will handle aspect
                        className="w-full h-auto"
                        priority
                        unoptimized
                    />
                </div>
            </div>
        </main>
    );
}
