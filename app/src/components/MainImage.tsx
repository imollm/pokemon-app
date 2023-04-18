const MainImage: React.FC = () => {
    const mainImg = '/img/pokemon_logo.png'

    const startSpin = () => {
        const img = document.querySelector('#main-img') as HTMLImageElement;
        img.classList.add('spin')
    }

    const stopSpin = () => {
        const img = document.querySelector('#main-img') as HTMLImageElement;
        img.classList.remove('spin')
    }

    return (
        <div className='h-full flex justify-center items-center pt-40 pb-20'>
            <figure className='w-[50%]'>
                <img
                    id="main-img"
                    className='w-full h-full'
                    src={mainImg} alt="pokemon-title"
                    onMouseOver={startSpin} onMouseOut={stopSpin}
                />
            </figure>
        </div>
    )
}

export default MainImage;