export function Hero() {
  return (
    <>
      <section className="px-12 py-10 flex justify-between items-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold hero-title">
            <span className="text-[rgb(170,142,214)]">Bot completo </span><span className="text-white">com tudo que seu servidor precisa!</span>
          </h1>
          <div className="hero-description-container mt-4 text-gray-400">
              <p className="hero-description">Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt ius ex. Ut vis mazim erroribus forensibus.</p>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded hover:bg-blue-700 hero-button">Me Adicione</button>
            <button className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded hover:bg-gray-900 hero-button">Servidor de Suporte</button>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 rounded-full hero-image-container">
          <img
            src="/img/icon/kora.jpg"
            alt="Imagem do seu bot"
            className="hero-image border-[rgb(170,142,214)]"
          />
        </div>
      </section>
    </>
  );
}
