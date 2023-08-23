import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [headerStyle, setHeaderStyle] = useState({});

    useEffect(() => {
        setShowHeader(true);
    }, []);

    useScrollPosition(({ prevPos, currPos }) => {
        const isVisible = currPos.y > prevPos.y;
        setShowHeader(isVisible);
    }, []);

    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1024) {
        const style = {
            visibility: showHeader ? 'visible' : 'hidden',
            transition: 'transform 0.4s ease-in-out',
            transform: showHeader ? 'translateY(0)' : 'translateY(100%)'
        };
        setHeaderStyle(style);
    }}, [showHeader]);

return (
    <>
    <img src={`${process.env.PUBLIC_URL}/logo.png`} className='h-20 w-auto absolute top-2 left-2 lg:hidden'/>
    <header style={headerStyle} className='w-full flex z-10 fixed bottom-0 flex-col lg:h-96 lg:justify-between lg:items-center lg:absolute lg:flex-row lg:top-0 2xl:top-6'>{/* define header height as */}
        <div className='w-full flex justify-center lg:w-1/2'>
            <Link className='' to={"/"}>
                <img src={`${process.env.PUBLIC_URL}/logo_jpn.png`} className='h-20 w-auto invert border-black border-t-4 duration-500 hover:scale-110 md:h-36 lg:w-full lg:h-auto lg:bg-transparent lg:border-0 lg:invert-0'/>
            </Link>
            <img src={`${process.env.PUBLIC_URL}/名称未設定のデザイン.png`} className='w-full invert absolute top-14 md:top-28 lg:hidden pointer-events-none'/>
        </div>
        <div className='w-full lg:w-1/2'>
            <nav className=''>
                <ul className='flex whitespace-nowrap overflow-x-scroll space-x-2 w-full h-12 justify-around items-center text-white font-sans lg:font-thin lg:w-auto lg:h-16 lg:invert'>
                    <li><Link className='px-3 py-2 rounded-lg duration-700 border-white border-2 hover:text-black hover:bg-white lg:bg-transparent lg:border-0' to={"/"}>Home</Link></li>
                    <li><Link className='px-3 py-2 rounded-lg duration-700 border-white border-2 hover:text-black hover:bg-white lg:bg-transparent lg:border-0' to={"/About"}>事業内容</Link></li>
                    <li><Link className='px-3 py-2 rounded-lg duration-700 border-white border-2 hover:text-black hover:bg-white lg:bg-transparent lg:border-0' to={"/Activity"}>事業実績</Link></li>
                    <li><Link className='px-3 py-2 rounded-lg duration-700 border-white border-2 hover:text-black hover:bg-white lg:bg-transparent lg:border-0' to={"/Activity"}>会社情報</Link></li>
                    <li><Link className='px-3 py-2 rounded-lg duration-700 border-white border-2 hover:text-black hover:bg-white lg:bg-transparent lg:border-0' to={"/Contact"}>Contact</Link></li>
                </ul>
                <div className='hidden md:block lg:my-2'><hr className='border-black w-auto'></hr></div>
                <ul className='flex whitespace-nowrap overflow-x-scroll space-x-2 w-full h-12 items-center lg:overflow-x-visible lg:flex-wrap lg:space-y-3 lg:w-auto lg:items-center lg:h-auto'>
                    <li className='lg:ml-2 lg:mt-3'><Link className='border-2 border-black rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:hover:text-black' to={"/"}>どんな会社なの？</Link></li>
                    <li><Link className='rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:bg-black lg:text-white lg:hover:text-black lg:border-0' to={"/"}>連絡したい！</Link></li>
                    <li><Link className='border-2 border-black rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:hover:text-black' to={"/"}>今までの活動の様子を見せて</Link></li>
                    <li><Link className='border-2 border-black rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:hover:text-black' to={"/"}>代表は誰？</Link></li>
                    <li><Link className='rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:bg-black lg:text-white lg:hover:text-black lg:border-0' to={"/"}>私たちの目指すところ</Link></li>
                    <li><Link className='border-2 border-black rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:hover:text-black' to={"/"}>会社の歴史</Link></li>
                    <li><Link className='rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:bg-black lg:text-white lg:hover:text-black lg:border-0' to={"/"}>スタッフ/組織図</Link></li>
                    <li><Link className='rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:bg-black lg:text-white lg:hover:text-black lg:border-0' to={"/"}>会社経営をしている方へ</Link></li>
                    <li><Link className='rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:bg-black lg:text-white lg:hover:text-black lg:border-0' to={"/"}>プログラミングスクールを皆さんの場所で実施したい方へ</Link></li>
                    <li><Link className='border-2 border-black rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:hover:text-black' to={"/"}>議員の方へ</Link></li>
                    <li><Link className='border-2 border-black rounded-lg px-2 py-1 duration-700 bg-white hover:bg-yellow-300 lg:hover:text-black' to={"/"}>For English Speaker</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
    )
}

export default Header