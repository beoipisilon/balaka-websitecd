import React from 'react';
import { motion } from 'framer-motion';

export function NewEraSection() {
    return (
        <>
           <motion.section
            id="new-era"
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-800 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center justify-between">
                <div className="lg:mx-auto mb-4 lg:mb-0">
                    <img
                        src="/img/icon/diamond-512.png"
                        alt="Imagem Grande"
                        className="w-full h-auto max-w-xs lg:max-w-full"
                        style={{ maxWidth: '400px', }} // Defina um tamanho máximo personalizado aqui
                    />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4">Nova Era</h2>
                    <p className="text-lg mb-4">Agora que você sabe o que aconteceu com a Kora podemos pular para a próxima etapa. Depois de 2 anos de muitos pensamentos e desânimos tomando conta do ambiente, a Kora decide voltar! Mas dessa vez, diferente de tudo que ela possuía na versão 1.0, agora a ideia é outra! Seu grande retorno conta com diversas novidades únicas e mostra que, mesmo sendo derrubada uma vez, não perdeu sua vontade de continuar mesmo com tantas dificuldades a enfrentar. O cenário agora é outro e a Kora chega disposta a entregar tudo do bom e do melhor para o seu servidor do Discord. 
                        <br></br>
                        <br></br>“Todos caem, mas apenas os fracos continuam no chão...” - Bob Marley
                    </p>
                </div>
            </div>
        </motion.section>
        </>
    );
};

export default NewEraSection;
