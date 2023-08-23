import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [enabled, setEnabled] = useState(false);

    return (
    <>
    <footer className='border-white bg-black'>
        <div className='w-full grid grid-cols-1 px-10 duration-700 text-white'>
            <div className='p-4 border'>
                <div className='w-28 border-black rounded-full bg-white'>
                    <img src={`${process.env.PUBLIC_URL}/icon.png`} className='w-full h-full' />
                </div>
                <p className='pt-4 text-lg font-bold leading-tight'>LaCall Gagan's<br />At the mercy of zephyr</p>
                <p className='pt-1 text-sm leading-tight'>An agency within the U.S. Department of Labor<br />200 Constitution Ave NW<br />Washington, DC 20210</p>
            </div>
            <div className='px-6 py-2 border'>
                <div className='w-3 h-3 bg-white absolute right-16'>
                    <span className='absolute h-1 w-3 bg-black'></span>
                </div>
                <p className='font-bold'>FEDERAL GOVERNMENT</p>
                <ul className='pt-8'>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                </ul>
            </div>
            <div className='px-6 py-2 border'>
                <p className='font-bold'>FEDERAL GOVERNMENT</p>
                <ul className='pt-8'>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                </ul>
            </div>
            <div className='px-6 py-2 border'>
                <p className='font-bold'>FEDERAL GOVERNMENT</p>
                <ul className='pt-8'>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                    <li className='pt-3'><Link className='hover:underline'>White House</Link></li>
                </ul>
            </div>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                
            </div>
        </div>
        <div className='h-12 w-full flex items-center justify-between bg-white'>
            <ul className='flex ml-5'>
                <li className='px-8 text-xs'><Link className='hover:underline'>Site Map</Link></li>
                <li className='px-8 text-xs border-l-2 border-black hover:underline'><Link className='hover:underline'>Privacy & Term of Use</Link></li>
            </ul>
            <div className='flex ml-5'>
                <span className='px-8 text-xs'>© Copyright LaCall Gagan's. All Rights Reserved</span>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Footer