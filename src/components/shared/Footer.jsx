// import React from 'react';
import logoWhite from '../../assets/logo-xl.png';
import socialIcon1 from '../../assets/instagram.png';
import socialIcon2 from '../../assets/facebook.png';
import socialIcon3 from '../../assets/twitter.png';

const Footer = () => {
    return (
        <footer className='bg-[#244D3F] px-[245px] pt-[80px] pb-[30px]'>
            <div className='container mx-auto items-center text-center text-white'>
             <img src={logoWhite} alt="" className='mx-auto' />
             <p className='pt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
             <p className='font-medium text-[20px] pt-6'>Social Links</p>
             <div className='flex items-center gap-2 pt-4 pb-10 justify-center'>
                <img src={socialIcon1} alt="" />
                <img src={socialIcon2} alt="" />
                <img src={socialIcon3} alt="" />
             </div>
           </div>
           <div className="border-t border-gray-600/50 pt-10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;