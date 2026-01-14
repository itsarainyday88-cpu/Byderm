import Philosophy from '@/components/Philosophy';
import { Microscope, Dna, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function TechnologyPage() {
    return (
        <main className="min-h-screen pt-20">
            <div className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-brand.jpg')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Technology</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
                        Bridging the gap between medical science and daily skincare.<br />
                        We solve skin concerns with pharmaceutical-grade precision.
                    </p>
                </div>
            </div>

            <Philosophy />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Innovation</h2>
                        <p className="text-gray-500">The three pillars of By.derm's efficacy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Innovation 1 */}
                        <div className="group rounded-3xl overflow-hidden bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/innovation-biomimetic.png"
                                    alt="Biomimetic Formulation"
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
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Biomimetic Formulation</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    We mimic naturally occurring skin components to ensure maximum absorption and minimal irritation, restoring the skin's original strength.
                                </p>
                            </div>
                        </div>

                        {/* Innovation 2 */}
                        <div className="group rounded-3xl overflow-hidden bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/innovation-filler.png"
                                    alt="Filler Technology"
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
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Filler Technology</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Applying the cross-linking technology used in dermal fillers to creating high-density moisture barriers that last longer.
                                </p>
                            </div>
                        </div>

                        {/* Innovation 3 */}
                        <div className="group rounded-3xl overflow-hidden bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/innovation-barrier.png"
                                    alt="Barrier Reconstruction"
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
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Barrier Reconstruction</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Our formulas don't just coat the skin. They actively repair the lipid barrier, protecting against environmental aggressors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
