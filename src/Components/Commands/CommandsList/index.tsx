interface Command {
  name: string;
  description: string;
  perms: string[];
  command: string;
  example: string;
}

export function CommandsList({ commands, setSelectedCommand, selectedCategory, className }: { commands: Command[]; setSelectedCommand: (command: Command) => void; selectedCategory: string; className?: string }) {
  return (
    <>
      <div className={`${className} rounded-lg m-5 bg-[rgb(41,41,46)] text-white p-4 flex-grow`}>
        <h2 className="text-2xl font-bold mb-4">
          COMANDOS <span className="text-[rgb(170,142,214)]">{selectedCategory}</span>
        </h2>
        <div className="commandScroll flex flex-col gap-4 max-h-[500px] overflow-y-auto p-2">
        {commands.map((command: Command, index: number) => (
            <div
              key={index}
              className="commands-list flex justify-between items-center p-2 bg-[rgb(35,36,40)] rounded cursor-pointer"
              onClick={() => setSelectedCommand(command)}
            >
              <button className="p-1 text-sm bg-purple-400 text-black rounded">{command.name}</button>
              <span className="text-gray-400 text-sm">{command.description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
