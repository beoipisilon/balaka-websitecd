import React from 'react';
import { motion } from 'framer-motion';

export function FutureUpdatesSection() {
    return (
        <>
         <motion.section
            id="future-updates"
            className="min-h-screen flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:mx-auto mb-4 lg:mb-0">
                    <img
                        src="/img/icon/code-512.png"
                        alt="Imagem Grande"
                        className="w-full h-auto max-w-xs lg:max-w-full"
                        style={{ maxWidth: '300px' }} // Defina um tamanho máximo personalizado aqui
                    />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">Futuras atualizações?</h2>
                    <p className="text-[#4d4d4d] text-lg mb-4">A kora tem uma grande lista de atualizações que estão sendo constantemente desenvolvidas para seu lancamento nos proximos meses:</p>
                </div>
            </div>
        </motion.section>
        </>
    );
}
