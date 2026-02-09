import { Trophy, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const DiscoveryCard = () => {
    const benefits = [
        "At last! How To Get In Front Of Your Ideal Prospects, Pre-Sold, Pre-Qualified And With Money, Ready To Buy Now!",
        "REVEALED: The Simple 4-Step Website Funnels That Turns Strangers Into Paying Clients In Under 72 Hours...(I got 1,000+ high end clients using this)",
        "Copy & Clone My evergreen & unique 100% automated sales pitch presentation that converts customers to $5K-$10K... *Create Once, Sell Forever*...",
        "How You Can Become The Authority In Your Industry Without being A 24-7 Slave To Social Media & Even If Nobody's Heard Of You Before...",
        "PLUS + FREE ROI FUNNELS ASSESSMENT: Identify Which Funnels You Will Need To Grow Your Business In 2026 With Our Funnels Toolkit *Includes Fill In The Blanks Template, Playbook & Campaign Ready To Go (VALUE: $2,497.00 Value) 🎁",
    ];

    return (
        <section className="py-24 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
                >
                    <div className="p-8 md:p-16 text-center">
                        <div className="flex justify-center mb-6">
                            <Gift className="w-16 h-16 text-primary animate-bounce-slow" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-darkblue mb-12 font-display">
                            Here's What You'll Discover <br /> On The Next Page...
                        </h2>

                        <div className="space-y-8 text-left max-w-2xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="mt-1 bg-blue-50 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Trophy className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <p className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed font-poppins">
                                        {benefit}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-black py-6 px-12 rounded-2xl shadow-xl transition-all flex flex-col items-center"
                            >
                                <div className="flex items-center gap-3 text-2xl md:text-3xl mb-1">
                                    Yes! GIVE ME ACCESS <Trophy className="w-8 h-8" />
                                </div>
                                <span className="text-sm opacity-80 uppercase tracking-widest font-bold">
                                    AND The FREE $2,497.00 FUNNELS Templates & Toolkit
                                </span>
                            </motion.button>

                            <div className="mt-8 flex flex-col items-center gap-4">
                                <div className="flex -space-x-2 grayscale opacity-70">
                                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                            <img
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=verified${i}`}
                                                alt="User avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    Trusted by Over 3,500+ Businesses
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DiscoveryCard;
