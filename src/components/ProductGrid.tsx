import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const products = [
    {
        category: "Intensive Care",
        name: "Intensive Cream",
        desc: "Biotechnology to Protect the Skin Barrier",
        detail: "A cream to protect and hydrate dry or sensitive skin with a weakened skin barrier.",
        image: "/images/intensive-cream-v3.png",
        color: "bg-blue-100 text-blue-800"
    },
    {
        category: "Soothing Care",
        name: "Centella Cica Plus Mask",
        desc: "Cream-essence formula containing centella cica-complex",
        detail: "Provides soothing and moisturizing care to sensitive skin with a centella cica-complex.",
        image: "/images/cica-mask-v3.png",
        color: "bg-green-100 text-green-800"
    },
    {
        category: "Sun Care",
        name: "Hyalu Moisture Suncream",
        desc: "SPF50+ PA++++ Daily Sun Care",
        detail: "A lightweight, moisturizing sun cream that protects against UV rays without white cast.",
        image: "/images/suncream-studio.png",
        color: "bg-orange-100 text-orange-800"
    },
    {
        category: "Special Care",
        name: "Hyaluronic Acid Mask",
        desc: "Intensive Hydration Treatment",
        detail: "Deeply hydrates and plumps the skin with multi-molecular hyaluronic acid.",
        image: "/images/ha-mask-studio.png",
        color: "bg-blue-50 text-blue-600"
    }
];

interface ProductGridProps {
    variant?: 'compact' | 'full';
}

export default function ProductGrid({ variant = 'compact' }: ProductGridProps) {
    const isFull = variant === 'full';

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Lineup</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Scientifically formulated solutions for every step of professional skin care.
                    </p>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFull ? 'lg:grid-cols-2' : 'lg:grid-cols-4'} gap-${isFull ? '8' : '6'}`}>
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
                                        View Details <ArrowRight className="ml-2 w-4 h-4" />
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
