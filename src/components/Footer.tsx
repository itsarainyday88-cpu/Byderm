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
                    <div className="mt-8 md:mt-0 flex flex-col items-end gap-4">
                        <a
                            href="/files/Byderm_Leaflet.pdf"
                            download
                            className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-blue-200 text-xs font-semibold rounded-full transition-colors border border-slate-700 hover:border-blue-500/50"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            {t.footer.download_brochure}
                        </a>
                        <p>{t.footer.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
