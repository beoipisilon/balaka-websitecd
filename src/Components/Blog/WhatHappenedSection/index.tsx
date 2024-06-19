import React from 'react';
import { motion } from 'framer-motion';

export function WhatHappenedSection() {
    return (
        <>
        <motion.section
            id="what-happened"
            className="min-h-screen flex items-center mt-[-50px] justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:mx-auto mb-4 lg:mb-0">
                
                    <img
                        src="/img/icon/megaphone-3-512.png"
                        alt="Imagem Grande"
                        className="w-full h-auto max-w-xs lg:max-w-full rounded-full mr-2"
                        style={{ maxWidth: '400px' }} 
                    />
                </div>

                <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">O que aconteceu?</h2>
                <p className="text-[#4d4d4d] text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur et velit sit amet quam ultrices venenatis.</p>
                </div>
            </div>
        </motion.section>
        </>
    );
};

export default WhatHappenedSection;
