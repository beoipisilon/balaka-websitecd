import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../Components/Commands/Sidebar';
import { CommandsList } from '../../Components/Commands/CommandsList';
import { CommandDetails } from '../../Components/Commands/CommandDetails';
import { HeaderGroup } from '../../components/Main';

export function Commands() {
  const [selectedCategory, setSelectedCategory] = useState('USUÁRIOS');
  const [selectedCommand, setSelectedCommand] = useState(null);

  const categories = [
    'ADMINISTRAÇÃO',
    'USUÁRIOS',
    'MODERAÇÃO',
    'DIVERSÃO'
  ];

  const commandsData = {
    'ADMINISTRAÇÃO': [
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
    ],
    'USUÁRIOS': [
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },

    ],
    'MODERAÇÃO': [
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
    ],
    'DIVERSÃO': [
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
        { name: 'avatar', description: 'Descrição admin 1', perms: ['teste', 'teste2'], command: 's!avatar @usuario', example: 's!avatar @usuario' },
    ]
  };

  return (
    <div className="bg-kora-Neutral-kora-neutral-12 min-h-screen flex flex-col justify-between">
      <HeaderGroup>
        <Navbar />
      </HeaderGroup>
      <div className="flex flex-grow">
        <Sidebar 
          categories={categories} 
          setSelectedCategory={setSelectedCategory} 
          selectedCategory={selectedCategory} 
        />
        <CommandsList
            commands={commandsData[selectedCategory]}
            setSelectedCommand={setSelectedCommand}
            selectedCategory={selectedCategory} 
          />
          {selectedCommand && <CommandDetails key={selectedCommand.name} command={selectedCommand} />}
        </div>
      <Footer />
    </div>
  );
}
