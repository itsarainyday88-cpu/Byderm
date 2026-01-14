'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ProductGridProps {
    variant?: 'compact' | 'full';
}

export default function ProductGrid({ variant = 'compact' }: ProductGridProps) {
    const isFull = variant === 'full';
    const { t } = useLanguage();

    const products = [
        {
            category: t.products.categories.intensive,
            name: t.products.items.intensive_cream.name,
            desc: t.products.items.intensive_cream.desc,
            detail: t.products.items.intensive_cream.detail,
            image: "/images/intensive-cream-v3.png",
        },
        {
            category: t.products.categories.soothing,
            name: t.products.items.cica_mask.name,
            desc: t.products.items.cica_mask.desc,
            detail: t.products.items.cica_mask.detail,
            image: "/images/cica-mask-v3.png",
        },
        {
            category: t.products.categories.sun,
            name: t.products.items.suncream.name,
            desc: t.products.items.suncream.desc,
            detail: t.products.items.suncream.detail,
            image: "/images/suncream-studio.png",
        },
        {
            category: t.products.categories.special,
            name: t.products.items.ha_mask.name,
            desc: t.products.items.ha_mask.desc,
            detail: t.products.items.ha_mask.detail,
            image: "/images/ha-mask-studio.png",
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        {t.products.subtitle}
                    </p>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFull ? 'lg:grid-cols-2' : 'lg:grid-cols-4'} gap-8`}>
                    {products.map((product, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                            <div className={`relative ${isFull ? 'h-64' : 'h-48'} w-full bg-white overflow-hidden p-6`}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className={`${isFull ? 'p-8' : 'p-6'} flex-1 flex flex-col`}>
                                <span className={`${isFull ? 'text-sm' : 'text-xs'} font-semibold uppercase tracking-wider text-primary mb-2 block`}>
                                    {product.category}
                                </span>
                                <h3 className={`${isFull ? 'text-2xl' : 'text-lg'} font-bold text-gray-900 mb-${isFull ? '3' : '2'} group-hover:text-primary transition-colors`}>
                                    {product.name}
                                </h3>
                                <p className={`text-gray-700 font-medium ${isFull ? 'text-base mb-4' : 'text-sm mb-3'}`}>
                                    {product.desc}
                                </p>
                                <p className={`text-gray-500 leading-relaxed ${isFull ? 'text-sm mb-6' : 'text-xs'} flex-1`}>
                                    {product.detail}
                                </p>
                                {isFull && (
                                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform cursor-pointer">
                                        {t.products.view_details} <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
