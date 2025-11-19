import { motion } from 'framer-motion';

export function WhatHappenedSection() {
    return (
        <>
        <motion.section
            id="what-happened"
            className="min-h-screen flex items-center md:mt-[-50px] justify-center"
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
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                        O que aconteceu?
                    </h2>
                    <p className="text-[#8a8a8a] text-lg mb-4">
                        <b>Muitos se perguntam:</b>
                        <br />
                        <b>O que aconteceu com a Kora em sua versão antiga 1.0?</b>
                        <br />
                        <br />
                        Para quem não sabe, a Kora já alcançou uma marca incrível de 40.000 usuários e mais de 50 servidores e se manteve online por 2 anos. Em um dia comum igual aos outros, eu (Balaka) estava ausente do meu computador e coincidentemente a Kora recebeu um ataque de pessoas com inveja do progresso que ela tinha obtido e tantas conquistas, então o Token (senha do bot) vazou em todos os servidores e em questão de minutos todas as funcionalidades da Kora estavam comprometidas e todo o sistema também, assim a tornando completamente inutilizável e obsoleta. Então fui forçado a desligá-la, encerrando um grande legado.
                    </p>
                </div>
            </div>
        </motion.section>
        </>
    );
};

export default WhatHappenedSection;
