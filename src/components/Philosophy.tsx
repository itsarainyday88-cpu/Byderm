'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Philosophy() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div className="inline-block p-4 rounded-full bg-blue-50 text-primary mb-4">
                        <span className="font-semibold tracking-wider text-sm uppercase">{t.philosophy.title}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-normal">
                        {t.philosophy.desc}
                    </h2>
                    <div className="py-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-50 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">{t.philosophy.card1_title}</h3>
                                <p className="text-gray-600">{t.philosophy.card1_desc}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">{t.philosophy.card2_title}</h3>
                                <p className="text-gray-600">{t.philosophy.card2_desc}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">{t.philosophy.card3_title}</h3>
                                <p className="text-gray-600">{t.philosophy.card3_desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
