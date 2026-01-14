export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-3xl font-bold mb-4">By.derm<span className="text-sm align-top">®</span></h3>
                        <p className="text-slate-400">Bye dryness, Hi derm glow!</p>
                    </div>


                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500">
                    <div className="space-y-2">
                        <p className="font-semibold text-slate-300">WAKEMEDI Co., Ltd. (Trade Name: WAKEMEDI)</p>
                        <p>Address: 7072h, the seventh floor 208, Misagangbyeonjungang-ro, Hanam-si, Gyeonggi-do, Republic of Korea</p>
                        <p>CEO: Ethen SIM | Business Registration Number: 383-81-03236</p>
                        <p>Tel: +82 10-9807-3345 | Email: info@wakemedi.com</p>
                        <p>www.wakemedi.com</p>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p>&copy; 2026 WAKEMEDI Co., Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
