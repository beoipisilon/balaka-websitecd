import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../Components/Commands/Sidebar';
import { CommandsList } from '../../Components/Commands/CommandsList';
import { CommandDetails } from '../../Components/Commands/CommandDetails';
import { HeaderGroup } from '../../components/Main';

export function Commands() {
  const [selectedCategory, setSelectedCategory] = useState('ADMINISTRAÇÃO');
  const [selectedCommand, setSelectedCommand] = useState(null);

  const categories = [
    'ADMINISTRAÇÃO',
    'GERAIS',
    'DIVERSÃO',
    'RPG',
    'KORA',
  ];

  const commandsData = {
    'ADMINISTRAÇÃO': [
        { name: 'lock', description: 'Bloqueia o chat para o envio de mensagens', perms: ['Gerenciar Canais', 'Gerenciar mensagens'], command: 'k!lock', example: 'k!lock no canal desejado' },
        { name: 'unlock', description: 'Desbloqueia o chat para o envio de mensagens', perms: ['Gerenciar Canais', 'Gerenciar mensagens'], command: 'k!unlock', example: 'k!unlock no canal desejado' },
        { name: 'ban', description: 'Banir um membro do seu servidor', perms: ['Banir membros'], command: 'k!ban', example: 'k!ban <@usuario> <motivo>' },
        { name: 'kick', description: 'Expulsar um membro do seu servidor', perms: ['Expulsar membros'], command: 'k!kick', example: 'k!kick <@usuario> <motivo>' },
        { name: 'slowmode', description: 'Ativar modo lento para um determinado canal', perms: ['Gerenciar mensagens', 'Gerenciar canais'], command: 'k!slowmode', example: 'k!slowmode <tempo em segundos>' },
        { name: 'avisar', description: 'Comando para deixar um membro avisado como uma advertência', perms: ['Expulsar membros', 'Banir membros'], command: 'k!avisar', example: 'k!avisar @usuario <motivo>' },
        { name: 'avisos', description: 'Comando para ver quantos avisos uma pessoa tem na conta', perms: ['Nenhuma'], command: 'k!avisos', example: 'k!avisos @usuario' },
        { name: 'limparavisos', description: 'Limpar todos os avisos do usuário de uma vez só', perms: ['Administrador'], command: 'k!limparavisos', example: 'k!limparavisos @usuario' },
        { name: 'embed', description: 'Criar embeds personalizadas e exclusivas', perms: ['Gerenciar canais', 'Gerenciar mensagens'], command: 'k!embed', example: 'k!embed' },
        { name: 'anunciar', description: 'Fazer um anuncio no servidor com nome e foto do seu servidor', perms: ['Gerenciar canais', 'Gerenciar mensagens'], command: 'k!anunciar', example: 'k!anunciar #canal <mensagem>' },
        { name: 'clear', description: 'Fazer a limpeza de varías mensagens de um canal ao mesmo tempo', perms: ['Gerenciar mensagens'], command: 'k!clear', example: 'k!clear <2-100>' },
    ],
    'GERAIS': [
        { name: 'help', description: 'Comando para conhecer mais sobre as minhas funcionalidades', perms: ['Nenhuma'], command: 'k!help', example: 'k!help' },
        { name: 'botinfo', description: 'Para ver minhas informações e a quanto tempo estou ligada', perms: ['Nenhuma'], command: 'k!botinfo', example: 'k!botinfo' },
        { name: 'serverinfo', description: 'Veja as informações do servidor atual', perms: ['Nenhuma'], command: 'k!serverinfo', example: 'k!serverinfo' },
        { name: 'userinfo', description: 'Veja as suas próprias informações ou as de outro usuário', perms: ['Nenhuma'], command: 'k!userinfo', example: 'k!userinfo @usuario' },
        { name: 'ping', description: 'Veja o meu ping', perms: ['Nenhuma'], command: 'k!ping', example: 'k!ping' },
        { name: 'afk', description: 'Comando para entrar no status AFK e não ser perturbado(a)', perms: ['Nenhuma'], command: 'k!afk', example: 'k!afk <motivo>' },
        { name: 'avatar', description: 'Comando para ver seu próprio avatar ou de outro usuário', perms: ['Nenhuma'], command: 'k!avatar', example: 'k!avatar @usuario' },
        { name: 'perfil', description: 'Veja seu perfil oficial do bot personalizavel ou de outro usuário', perms: ['Nenhuma'], command: 'k!perfil', example: 'k!perfil @usuario' },
        { name: 'setbio', description: 'Defina uma descrição sobre você para seu perfil', perms: ['Nenhuma'], command: 'k!setbio', example: 'k!setbio <mensagem>' },

    ],
    'DIVERSÃO': [
        { name: 'beijar', description: 'Comando de diversão para beijar alguém', perms: ['Nenhuma'], command: 'k!beijar', example: 'k!beijar @usuario' },
        { name: 'abracar', description: 'Comando para abraçar alguém', perms: ['Nenhuma'], command: 'k!abracar', example: 'k!abracar @usuario' },
        { name: 'carinho', description: 'Comando para fazer carinho em alguém', perms: ['Nenhuma'], command: 'k!carinho', example: 'k!carinho @usuario' },
        { name: 'cutucar', description: 'Comando para cutucar alguém', perms: ['Nenhuma'], command: 'k!cutucar', example: 'k!cutucar @usuario' },
        { name: 'nasa', description: 'Veja a foto astronômica do dia atual tirada pela NASA', perms: ['Nenhuma'], command: 'k!nasa', example: 'k!nasa' },
        { name: 'neko', description: 'Gera uma Neko na sua tela', perms: ['Nenhuma'], command: 'k!neko', example: 'k!neko' },
        { name: 'waifu', description: 'Gera uma Waifu na sua tela', perms: ['Nenhuma'], command: 'k!waifu', example: 'k!waifu' },
        { name: 'smug', description: 'Smug', perms: ['Nenhuma'], command: 'k!smug', example: 'k!smug' },
    ],
    'RPG': [
        { name: 'Em Breve', description: 'Em breve', perms: ['Em breve', 'Em breve'], command: 'Em breve', example: 'Em breve' },
    ],
    'KORA': [
      { name: 'atm', description: 'Veja sua conta com Kora Coins ou a conta de outro usuário', perms: ['Nenhuma'], command: 'k!atm ', example: 'k!atm @usuario' },
      { name: 'daily', description: 'Pegue seus Kora Coins diários para gastar na loja ou trocar entre amigos (24hrs Cooldown)', perms: ['Nenhuma'], command: 'k!daily', example: 'k!daily' },
      { name: 'lojinha', description: 'Acesse a lojinha da Kora para comprar itens com Kora Coins', perms: ['Nenhuma'], command: 'k!lojinha', example: 'k!lojinha' },
    ]
  };

  return (
    <div className="bg-kora-Neutral-kora-neutral-12 min-h-screen flex flex-col justify-between">
      <HeaderGroup>
        <Navbar />
      </HeaderGroup>
      <div className="flex flex-grow flex-col md:flex-row">
        <Sidebar 
          categories={categories} 
          setSelectedCategory={setSelectedCategory} 
          selectedCategory={selectedCategory} 
          className="w-full md:w-1/4"
        />
        <div className="flex flex-col md:flex-row flex-grow">
          <CommandsList
              commands={commandsData[selectedCategory]}
              setSelectedCommand={setSelectedCommand}
              selectedCategory={selectedCategory}
              className="md:w-3/4"
            />
          {selectedCommand && (
            <div className="md:w-3/4">
              <CommandDetails key={selectedCommand.name} command={selectedCommand} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
