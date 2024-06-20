export function Hero() {
  return (
    <>
      <section className="px-12 py-10 flex flex-col lg:flex-row justify-between items-center text-white">
        <div className="order-2 lg:order-1 max-w-3xl mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold hero-title">
            <span className="text-[rgb(170,142,214)]">A Bot de Discord mais completa </span>
            <span className="text-white">com tudo que seu servidor precisa!</span>
          </h1>
          <div className="hero-description-container mt-4 text-gray-400">
            <p className="hero-description">
              Olá meu nome é Kora! Sou uma bot focada em comandos de: Moderação,
              diversão, gerais e um incrível sistema de RPG o <b>Rush Dungeon.</b><br></br>Ficou
              interessado(a) em me conhecer? Me adicione agora e veja o mundo infinito de
              possibilidade para seu servidor. Tchauu 💜
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <a href="https://discord.com/api/oauth2/authorize?client_id=756362948695425135&permissions=8&scope=bot%20applications.commands" className="px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded hover:bg-blue-700 hero-button">
              Me Adicione
            </a>
            <a href="https://discord.gg/korabot" className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded hover:bg-gray-900 hero-button">
              Servidor de Suporte
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center items-center p-4 rounded-full hero-image-container w-full lg:w-auto mb-6 lg:mb-0">
          <img
            src="/img/icon/kora.jpg"
            alt="Imagem do seu bot"
            className="hero-image border-[rgb(170,142,214)] w-3/4 sm:w-1/2 lg:w-auto"
          />
        </div>
      </section>
    </>
  );
}
