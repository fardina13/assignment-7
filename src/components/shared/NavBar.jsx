// import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import { RiHome2Line } from 'react-icons/ri';
import { LuClock3 } from 'react-icons/lu';
import { TfiStatsUp } from 'react-icons/tfi';

const NavBar = () => {
    return (
        /*step-12*/
        <nav className='shadow bg-white'>
            <div className='container mx-auto flex justify-between gap-4 items-center py-[8px]'>
                <img src={logoImg} alt=""/>
            <ul className='flex justify-between gap-2 items-center'>
                <li className=''>
                    <NavLink to="/" className={({isActive})=>
                                    `flex items-center gap-1 ${isActive ? 'bg-[#244D3F] px-4 py-2 rounded-md text-white transition-colors' : 'text-[#64748B] font-medium transition-colors'}`}>
                    <RiHome2Line/> 
                    <span>Home</span>
                    </NavLink>
                </li>
                <li><NavLink to="/timeline" className={({isActive})=>
                                    `flex items-center gap-1 ${isActive ? 'bg-[#244D3F] px-4 py-2 rounded-md text-white transition-colors' : 'text-[#64748B] font-medium transition-colors'}`}>
                     <LuClock3/>
                     <span>Timeline</span>
                   </NavLink>
                </li>
                <li><NavLink to="/stats" className={({isActive})=>
                                    `flex items-center gap-1 ${isActive ? 'bg-[#244D3F] px-4 py-2 rounded-md text-white transition-colors' : 'text-[#64748B] font-medium transition-colors'}`}>
                   <TfiStatsUp/>
                   <span>Stats</span>
                   </NavLink>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;