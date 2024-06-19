import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CommandDetails({ command }) {
  return (
    <>
      <AnimatePresence>
        {command && (
          <motion.div
            key={command.name} // Usar o nome do comando como chave
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }} // Aumentando para 0.5 segundos
            className="rounded-lg m-5 bg-gradient-to-br from-[rgb(41,41,46)] to-[rgb(31,31,36)] text-white p-4 flex-grow"
          >
            <h2 className="text-2xl sm:text-1xl font-bold mb-4">INFORMAÇÕES</h2>
            <div className="mb-4">
              <p className="text-1xl text-[rgb(170,142,214)]">{command.name}</p>
              <span className="text-sm text-gray-400">{command.description}</span>
            </div>
            <div className="mb-4">
              <p className="text-1xl text-white mb-2">Permissões que o BOT precisa:</p>
              <div className="flex flex-wrap">
                {command.perms.map((i, index) => (
                  <span key={index} className="mr-2 p-1 text-white border border-purple-500 text-gray-400 text-sm rounded-lg mb-1">
                    {i}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-1xl mb-2">Comando:</p>
              <div className="bg-[rgb(41,41,41,0.5)] rounded-lg p-1">
                <span className="text-sm">{command.command}</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-1xl mb-2">Exemplo:</p>
              <div className="bg-[rgb(41,41,41,0.5)] rounded-lg p-1">
                <span className="text-sm">{command.example}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
