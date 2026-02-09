import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const notifications = [
    { name: 'John D.', location: 'London, UK', action: 'Received the Marketing Playbook' },
    { name: 'Sarah M.', location: 'New York, USA', action: 'Joined the Free Training' },
    { name: 'Michael R.', location: 'Sydney, Australia', action: 'Downloaded the Funnels Toolkit' },
    { name: 'Emma W.', location: 'Toronto, Canada', action: 'Signed up for the Class' },
    { name: 'David L.', location: 'Berlin, Germany', action: 'Received the Marketing Playbook' },
    { name: 'Unknown N.', location: 'Aberdeen, Scotland', action: 'Received the Marketing Playbook' },
];

const SocialProofPopup = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setVisible(true);
        }, 3000); // Wait 3 seconds before first show

        return () => clearTimeout(showTimeout);
    }, []);

    useEffect(() => {
        if (visible) {
            const hideTimeout = setTimeout(() => {
                setVisible(false);
                // Move to next notification after hiding
                setTimeout(() => {
                    setIndex((prev) => (prev + 1) % notifications.length);
                    setVisible(true);
                }, 4000); // Wait 4 seconds before showing next one
            }, 6000); // Stay visible for 6 seconds

            return () => clearTimeout(hideTimeout);
        }
    }, [visible]);

    const current = notifications[index];

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.8 }}
                    className="fixed bottom-6 left-6 z-[90] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-4 flex items-center gap-4 border border-gray-100 max-w-sm"
                >
                    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-primary font-black text-xs uppercase">Map</span>
                    </div>

                    <div className="flex flex-col min-w-0">
                        <p className="text-darkblue font-bold text-sm truncate">
                            {current.name} from {current.location}
                        </p>
                        <p className="text-gray-500 text-xs mb-1">
                            {current.action}
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                Verified by Provely
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SocialProofPopup;
