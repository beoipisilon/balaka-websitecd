export function Sidebar({ categories, setSelectedCategory, selectedCategory }: { categories: string[]; setSelectedCategory: (category: string) => void; selectedCategory: string }) {
    return (
      <>
        <div className="m-5 bg-gradient-to-br from-[rgb(41,41,46)] to-[rgb(31,31,36)] text-white p-4 min-w-[200px] rounded-lg">
        <div className="text-center mb-6">
            <img src="/img/icon/kora.jpg" alt="Categoria" className="rounded-full w-24 h-24 mx-auto" />
            <p className="mt-2 text-[rgb(170,142,214)] font-bold">CATEGORIAS</p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
            {categories.map((category: string) => (
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`sidebar-button-category text-gray-400 block mb-2 p-2 border border-purple-500 hover:bg-[rgb(74, 56, 112)] rounded ${selectedCategory === category ? 'text-white bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-[rgb(35,36,40)]'} text-left`}
                >
                {category}
                </button>
            ))}
        </div>
        </div>
    </>
  );
}