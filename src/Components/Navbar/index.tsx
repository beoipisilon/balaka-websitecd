import MobileSideBar from './MobileSideBar'

export function Navbar() {
  return (
    <>
      <header className="hidden sm:flex lg:flex flex justify-between items-center p-6 text-white min-h-[72px] lg:max-w-[1600px] 2xl:max-w-[2000px]">
        <div className="text-3xl font-bold ml-6 mr-2">
          <span className="text-white">KORA</span>
          <span className="text-[rgb(170,142,214)]">™</span>
        </div>
        <div className="flex items-center">
          <nav className="flex mr-5 gap-8 bg-[rgb(41,41,46)] p-5 rounded-lg">
            <a
              href="/"
              className={`ml-8 mr-8 hover:text-[rgb(170,142,214)] ${
                location.pathname === '/' ? 'text-[rgb(170,142,214)]' : ''
              }`}
            >
              Início
            </a>
            <a
              href="https://discord.gg/korabot"
              className="mr-8 hover:text-[rgb(170,142,214)]"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              Suporte
            </a>
            <a
              href="/commands"
              className={`mr-8 hover:text-[rgb(170,142,214)] ${
                location.pathname === '/commands' ? 'text-[rgb(170,142,214)]' : ''
              }`}
            >
              Comandos
            </a>
            <a
              href="/blog"
              className={`mr-8 hover:text-[rgb(170,142,214)] ${
                location.pathname === '/blog' ? 'text-[rgb(170,142,214)]' : ''
              }`}
            >
              Blog
            </a>
          </nav>
          <div className="lg:flex sm:hidden flex gap-2">
            <a
              href="https://discord.gg/korabot"
              className="icon-link m-1 pl-3 pr-2 pt-1 pb-3 bg-[rgb(41,41,46)] rounded-lg hover:bg-[rgb(170,142,214)] flex items-center justify-center"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <img src="/img/icon/discord.svg" className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="icon-link m-1 p-3 bg-[rgb(41,41,46)] rounded-lg hover:bg-[rgb(170,142,214)] flex items-center justify-center"
            >
              <img src="/img/icon/dashboard.png" className="w-5 h-4" />
            </a>
            <a
              href="#"
              className="icon-link m-1 p-3 bg-[rgb(41,41,46)] rounded-lg hover:bg-[rgb(170,142,214)] flex items-center justify-center"
            >
              <img src="/img/icon/dashboard.png" className="w-5 h-4" />
            </a>
            <a
              href="#"
              className="icon-link m-1 p-3 bg-[rgb(41,41,46)] rounded-lg hover:bg-[rgb(170,142,214)] flex items-center justify-center"
            >
              <img src="/img/icon/dashboard.png" className="w-5 h-4" />
            </a>
          </div>
        </div>
      </header>
      <MobileSideBar />
    </>
  );
}
