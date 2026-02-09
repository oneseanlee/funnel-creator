import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-16 pb-12 px-4 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-5xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-semibold tracking-wide uppercase text-gray-700 mb-6"
                >
                    ONLY For Coaches, Consultants, Agency Owners and Experts Who Care About Results:
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-darkblue leading-tight mb-8 font-display"
                >
                    4 Simple Steps To Turn Your Existing Skill Set Into A 6-(Even 7 Figure Business) & Attract High Paying Clients Like Clockwork
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 italic mb-12 max-w-3xl mx-auto"
                >
                    Without expensive paid ads, completely from scratch, using knowledge you already have.
                </motion.p>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="relative inline-block group"
                >
                    <button className="bg-primary hover:bg-primary-dark text-white font-bold py-5 px-10 rounded-xl shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 flex flex-col items-center">
                        <div className="flex items-center gap-2 text-xl md:text-2xl mb-1">
                            Yes, Get FREE Training <Trophy className="w-6 h-6" />
                        </div>
                        <span className="text-xs opacity-90 font-medium">🎁 YES! I'd Like The FUNNELS "Fill In The Blanks Template"</span>
                    </button>

                    {/* Subtle Glow Effect */}
                    <div className="absolute -inset-1 bg-primary blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 rounded-xl -z-10"></div>
                </motion.div>

                <div className="mt-12 flex flex-col items-center gap-4">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                                    alt="User avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                        Trusted by Over <span className="text-darkblue font-bold">3,500+ Businesses</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
