import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-darkblue pt-20 pb-10 px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="text-blue-200/40 text-xs font-medium uppercase tracking-widest">
                        This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                    </p>

                    <div className="space-y-2">
                        <a href="#" className="text-primary hover:text-white transition-colors text-sm font-bold border-b border-primary/30">
                            Earnings Disclaimer
                        </a>
                        <p className="text-blue-200/40 text-[10px] leading-relaxed italic">
                            *Earnings and income representations made by Shaqir Hussyin, Shaqir.com
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="text-blue-200/60 text-xs leading-relaxed max-w-2xl mx-auto">
                        Funnels.COM/SalesFunnels.COM, and Shaqir Hussyin's WealthAcademy.com and their advertisers/sponsors (collectively, "Shaqir Hussyin") are aspirational statements only of your earnings potential. These are all based on my own results of going from zero to 7 figures a month in my twenties. These results are not typical and results will vary from person to person. The results on this page are OUR results and from years of testing and hard work, this is for education purposes only. We can in NO way guarantee you anything.
                    </p>

                    <p className="text-blue-200/60 text-xs leading-relaxed max-w-2xl mx-auto">
                        This training is only for those that are hard working, realize that success does not come easy, and are willing to put in the work when problems arise. This training will however, give you insight behind one of world's leading digital marketers of all time! Thanks for stopping by.
                    </p>
                </motion.div>

                <div className="pt-10 border-t border-white/5">
                    <p className="text-blue-200/30 text-[10px] uppercase tracking-[0.2em]">
                        2026 - All rights reserved By Funnels.com & ShaqirHussyin.com
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
