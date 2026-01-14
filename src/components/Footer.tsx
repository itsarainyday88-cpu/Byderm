'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-3xl font-bold mb-4">By.derm<span className="text-sm align-top">®</span></h3>
                        <p className="text-slate-400">{t.footer.slogan}</p>
                    </div>


                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500 gap-8 md:gap-0">
                    <div className="space-y-2">
                        <p className="font-semibold text-slate-300">{t.footer.trade_name}</p>
                        <p>{t.footer.address}</p>
                        <p>{t.footer.ceo}</p>
                        <p>{t.footer.contact}</p>
                        <p>www.wakemedi.com</p>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p>{t.footer.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
