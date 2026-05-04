// import React from 'react';

const Banner = () => {
    return (
        <div className="min-h-[80vh] bg-white text-center pt-20">
            <h2 className="font-bold text-5xl mb-4">Friends to keep close in your life</h2>
            <p className="text-[#64748B] mb-8 max-w-[50%] mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.</p>
            <button className="bg-[#244D3F] px-4 py-2 rounded-md text-white">+ Add a Friend</button>

            <div className="flex justify-around items-center mt-20 shadow py-5 container mx-[70px]">
                <div>
                    <p className="font-semibold text-[32px]">10</p>
                    <p className="text-[18px] mt-2">Total Friends</p>
                </div>
                <div>
                    <p className="font-semibold text-[32px]">3</p>
                    <p className="text-[18px] mt-2">On Track</p>
                </div>
                <div>
                    <p className="font-semibold text-[32px]">6</p>
                    <p className="text-[18px] mt-2">Need Attention</p>
                </div>
                <div>
                    <p className="font-semibold text-[32px]">12</p>
                    <p className="text-[18px] mt-2">Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;