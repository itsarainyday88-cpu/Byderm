'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface ProductDetailProps {
    slug: string;
    imagePath: string;
}

export default function ProductDetail({ slug, imagePath }: ProductDetailProps) {
    const { t } = useLanguage();
    // Use type assertion or safe access to bypass strict type checking if the key is dynamic
    // In a real app, you'd want proper type safety for the 'product_details_content' key
    const product = (t as any).product_details_content?.[slug];

    if (!product) return null;

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
                    {/* Image Gallery */}
                    <div className="flex flex-col-reverse">
                        <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={imagePath}
                                alt={product.title}
                                width={800}
                                height={800}
                                className="w-full h-full object-center object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">{product.title}</h1>
                        <p className="text-xl text-primary font-medium mb-6">{product.subtitle}</p>

                        <div className="prose prose-sm text-gray-700 mb-10">
                            <p className="text-base leading-relaxed">{product.description}</p>
                        </div>

                        {/* Benefits */}
                        <div className="mb-10">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Key Benefits</h3>
                            <ul className="space-y-3">
                                {product.benefits.map((benefit: string, idx: number) => (
                                    <li key={idx} className="flex items-center">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <Check className="h-3 w-3 text-green-600" />
                                        </div>
                                        <span className="text-gray-600 font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-gray-200 pt-10">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Volume</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-semibold">{product.specs.volume}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Skin Type</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-semibold">{product.specs.skin_type}</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">Key Ingredients</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{product.ingredients.highlight}</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">Usage</dt>
                                    <dd className="mt-1 text-sm text-gray-900 italic">{product.usage}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
