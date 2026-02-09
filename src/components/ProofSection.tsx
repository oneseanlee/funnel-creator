import { motion } from 'framer-motion';

const ProofSection = () => {
    const brands = [
        'AHOO!',
        'DIGITALMARKETER',
        'THE HUFFINGTON POST',
        'YAHOO! FINANCE',
        'Entrepreneur',
        'The Washington Post',
        'Inc.',
        'click funnels'
    ];

    // Duplicate brands for the loop
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="relative w-full overflow-hidden">
            {/* Split Background Effect */}
            <div className="absolute top-0 left-0 w-full h-[350px] bg-white"></div>
            <div className="absolute bottom-0 left-0 w-full h-[calc(100%-350px)] bg-primary"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto pt-16 pb-20 px-4 flex flex-col items-center">
                {/* Main Heroic Image - Overlapping both backgrounds */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-5xl mb-8"
                >
                    <img
                        src="/founder-awards.png"
                        alt="Russel Brunson and Shaqir Hussyin Awards"
                        className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                    />
                </motion.div>

                {/* Social Proof Area */}
                <div className="w-full text-center">
                    <p className="text-white/80 font-bold mb-8 tracking-widest text-sm font-display">
                        As Featured On:
                    </p>

                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex items-center gap-12 md:gap-24 whitespace-nowrap py-2"
                            animate={{
                                x: [0, -1200],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedBrands.map((brand, index) => (
                                <span
                                    key={index}
                                    className="text-white font-black text-xl md:text-2xl opacity-80 hover:opacity-100 transition-opacity duration-300 tracking-tighter uppercase"
                                >
                                    {brand}
                                </span>
                            ))}
                        </motion.div>

                        {/* Fades for better carousel effect on blue bg */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProofSection;
