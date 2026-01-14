'use client';

import Philosophy from '@/components/Philosophy';
import { Microscope, Dna, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function TechnologyPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen pt-20">
            <div className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-brand.jpg')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.technology.title}</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
                        {t.technology.subtitle_line1}<br />
                        {t.technology.subtitle_line2}
                    </p>
                </div>
            </div>

            <Philosophy />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.technology.core_innovation}</h2>
                        <p className="text-gray-500">{t.technology.core_desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Innovation 1 */}
                        <div className="group rounded-3xl overflow-hidden bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/innovation-biomimetic.png"
                                    alt={t.technology.innovations.biomimetic.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg inline-block mb-3">
                                            <Dna className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{t.technology.innovations.biomimetic.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {t.technology.innovations.biomimetic.desc}
                                </p>
                            </div>
                        </div>

                        {/* Innovation 2 */}
                        <div className="group rounded-3xl overflow-hidden bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/innovation-filler.png"
                                    alt={t.technology.innovations.filler.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg inline-block mb-3">
                                            <Microscope className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{t.technology.innovations.filler.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {t.technology.innovations.filler.desc}
                                </p>
                            </div>
                        </div>

                        {/* Innovation 3 */}
                        <div className="group rounded-3xl overflow-hidden bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/innovation-barrier.png"
                                    alt={t.technology.innovations.barrier.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg inline-block mb-3">
                                            <ShieldCheck className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{t.technology.innovations.barrier.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {t.technology.innovations.barrier.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
