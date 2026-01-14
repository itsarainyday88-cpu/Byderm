'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ProductDetail from '@/components/ProductDetail';

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

    // Fallback image if specific product image is missing (using grid image for now)
    const imagePath = productImages[slug] || '/images/intensive-cream-v3.png';

    // Check if we have data for this slug
    const productDataExists = (t as any).product_details_content?.[slug];

    if (!slug || !productDataExists) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.product_detail.not_found}</h1>
                <button
                    onClick={() => router.push('/products')}
                    className="text-primary hover:underline flex items-center"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t.product_detail.back_to_products}
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-20 bg-gray-50">
            {/* Nav Back */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <button
                    onClick={() => router.push('/products')}
                    className="text-gray-500 hover:text-primary transition-colors flex items-center group font-medium"
                >
                    <ArrowLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                    {t.product_detail.back_to_products}
                </button>
            </div>

            <ProductDetail slug={slug} imagePath={imagePath} />
        </main>
    );
}
