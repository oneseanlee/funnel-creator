import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonial = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-darkblue rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col md:flex-row"
                >
                    <div className="md:w-1/3 relative h-80 md:h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
                            alt="Jeremy Miner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-darkblue/20 to-transparent md:bg-gradient-to-t"></div>
                    </div>

                    <div className="md:w-2/3 p-8 md:p-14 flex flex-col justify-center">
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8 font-display">
                            "We Hire The Best Of The Best When It Comes To Funnels, Offers, & Traffic. <span className="text-primary italic">Shaqir Hussyin + His Team Are The Best</span> And I've Been Working With Him For Over 10+ Years"
                        </blockquote>

                        <footer className="flex flex-col gap-1 border-l-4 border-primary pl-6">
                            <cite className="not-italic font-black text-xl text-white">Jeremy Miner</cite>
                            <p className="text-blue-200/60 text-sm font-medium uppercase tracking-wider">
                                2ccx ($10million Award) + Inc5000 Award <br />
                                (INC5000 Company, 2CCX ClickFunnels Award Winner)
                            </p>
                        </footer>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;
