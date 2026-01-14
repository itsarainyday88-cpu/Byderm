import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-brand.jpg"
                    alt="By.derm Brand Hero"
                    fill
                    className="object-cover scale-110 origin-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <h2 className="text-blue-200 font-medium tracking-wide mb-4 animate-fade-in-up">
                        e.p.t.q. By.derm
                    </h2>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Bye dryness,<br />
                        Hi derm glow!
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
                        Enhanced By Biotechnology.<br />
                        A dramatic solution for extreme sensitivity and dryness.
                    </p>

                </div>
            </div>

            {/* Decorative hexagonal shapes - kept as subtle texture if needed, or removed if image is busy. Removing for cleaner look with image. */}
        </section>
    );
}
