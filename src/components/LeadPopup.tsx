import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LeadPopupProps {
    show: boolean;
    onClose: () => void;
}

const LeadPopup = ({ show, onClose }: LeadPopupProps) => {
    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-darkblue transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-8 md:p-12 text-center text-darkblue">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight uppercase tracking-tight font-display">
                                GET YOUR FREE TRAINING + <br />
                                <span className="text-primary italic">EXCLUSIVE BONUSES TODAY!</span>
                            </h2>

                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto font-medium">
                                Simply enter your details below to unlock instant access to this powerful free training and your exclusive bonuses.
                            </p>

                            <div className="space-y-4 max-w-2xl mx-auto">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Best Valid Email Address Here..."
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary focus:bg-white outline-none transition-all text-lg font-medium"
                                    />
                                </div>

                                <div className="relative flex items-center">
                                    <div className="absolute left-4 flex items-center gap-2 pr-3 border-r border-gray-200">
                                        <span className="text-xl">🇱🇰</span>
                                        <span className="text-gray-400">▼</span>
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Enter Your Phone Number Here..."
                                        className="w-full pl-24 pr-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary focus:bg-white outline-none transition-all text-lg font-medium"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-black py-6 rounded-xl shadow-xl transition-all flex flex-col items-center"
                                >
                                    <span className="text-2xl md:text-3xl mb-1">YES! GIVE ME INSTANT ACCESS</span>
                                    <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                                        CHECK YOUR PHONE AS WE'LL TEXT YOU THE TRAINING IMMEDIATELY
                                    </span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadPopup;
