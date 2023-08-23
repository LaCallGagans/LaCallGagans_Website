import React from 'react'

const Home = () => {
    return (
        <>
            <div className='relative w-full z-0'>
                <img className='w-full z-0' src={`${process.env.PUBLIC_URL}/const/hero-const.webp`} />
                <p className='absolute top-1/4 left-24 text-black font-serif'>
                    <span className='text-yellow-500 sm:text-slate-500 md:text-red-500 lg:text-black'>The hardest work begins in dry dock.</span><br/>
                    <span className='ml-48'>Sam Wineburg</span>
                </p>
            </div>
            <div className='h-screen bg-black '>

            </div>
        </>
    )
}

export default Home

