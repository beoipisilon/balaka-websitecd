export function Stats() {
    return (
        <>
        <section className="flex flex-wrap text-white py-8 border-t border-kora-Neutral-kora-neutral-14">
            <div className="container mx-auto flex flex-wrap justify-around items-center">
                <div className="w-full sm:w-auto mb-8 sm:mb-0 sm:flex justify-around">
                    <div className="m-6 text-center transform transition-transform duration-300 hover:scale-105 mb-6 sm:mb-0">
                        <h2 className="text-4xl font-bold">325<span className="text-blue-500">+</span></h2>
                        <p className="text-gray-400">Clientes</p>
                    </div>
                    <div className="m-6 text-center transform transition-transform duration-300 hover:scale-105 mb-6 sm:mb-0">
                        <h2 className="text-4xl font-bold">10<span className="text-red-500">+</span></h2>
                        <p className="text-gray-400">Projetos Finalizados</p>
                    </div>
                    <div className="m-6 text-center transform transition-transform duration-300 hover:scale-105 mb-6 sm:mb-0">
                        <h2 className="text-4xl font-bold">3<span className="text-yellow-500">+</span></h2>
                        <p className="text-gray-400">Membros do Time</p>
                    </div>
                    <div className="m-6 text-center transform transition-transform duration-300 hover:scale-105 mb-6 sm:mb-0">
                        <h2 className="text-4xl font-bold">5<span className="text-green-500">+</span></h2>
                        <p className="text-gray-400">Atualizações Realizadas</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
