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
                            style={{ maxWidth: '400px' }} // Defina um tamanho máximo personalizado aqui
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">Futuras atualizações?</h2>
                        <p className="text-[#8a8a8a] text-lg mb-4">
                            A Kora tem uma grande lista de atualizações que estão sendo constantemente desenvolvidas para seu lançamento nos próximos meses. Aqui estão algumas das melhorias e novos recursos que estão por vir:
                        </p>
                        <ol className="list-decimal list-inside text-left text-[#8a8a8a] text-lg">
                            <li className="mb-2">Melhoria no sistema de moderação com novos comandos e funcionalidades.</li>
                            <li className="mb-2">Introdução de novos jogos e comandos de diversão.</li>
                            <li className="mb-2">Aprimoramento do sistema de RPG com novas missões e recompensas.</li>
                            <li className="mb-2">Atualizações de segurança para garantir a proteção do servidor.</li>
                            <li className="mb-2">Novas integrações com outras plataformas e serviços.</li>
                            <li className="mb-2">Melhorias na interface do usuário para uma experiência mais intuitiva.</li>
                            <li className="mb-2">Aumento da capacidade de personalização dos comandos e respostas da Kora.</li>
                            <li className="mb-2">Otimizações de desempenho para uma resposta mais rápida e eficiente.</li>
                        </ol>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
