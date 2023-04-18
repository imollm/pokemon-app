interface Props {
    sendSearchKeyword: (keyword: string) => void;
    searchAction: (send: boolean) => void;
}

const Form: React.FC<Props> = (props) => {
    const pokeball = '/img/pokeball.png'

    return (
        <>
            <h1 className='text-white text-2xl font-bold py-10 text-center'>
                Search page
            </h1>
            <section className='flex flex-wrap'>
                <aside className='w-1/3 p-5 border-2 border-white'>
                    <form className='h-full bg-yellow-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-4 border-sky-600'>
                        <div className='h-full flex flex-col items-center justify-center'>
                            <div className='w-full'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="grid-first-name">
                                    Type something
                                </label>
                                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                                focus:bg-white focus:border-gray-500' id="grid-first-name" type="text" placeholder="Name / Type"
                                    onChange={(e) => props.sendSearchKeyword(e.target.value)} />
                            </div>
                            <button className='flex justify-center items-center gap-4 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="button">
                                <figure className="p-0 m-0">
                                    <img src={pokeball} alt="pokeball-search" className='w-5' onClick={() => props.searchAction(true)} />
                                </figure>
                                <span>Search</span>
                            </button>
                        </div>
                    </form>
                </aside>
                <main className='w-2/3 p-5 border-2 border-white'>
                    Table of results
                </main>
            </section>
        </>
    );
}

export default Form;