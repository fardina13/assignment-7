import { use } from "react";

// import React from 'react';
const friendsPromise = fetch('/data.json').then(res=>res.json())

const getStatusStyle = (status) => {
  if (status === "Overdue") {
    return "bg-red-600 text-white";
  } else if (status === "On-Track") {
    return "bg-green-600 text-white";
  } else if (status === "Almost Due") {
    return "bg-amber-600 text-white";
  } else {
    return "bg-gray-600 text-white"; // fallback
  }
};


const FriendsSection = () => {
    const friends = use(friendsPromise);
    console.log(friends);
    return (
        <div>
            <div className="container mx-[70px]">
            <h2 className="font-semibold text-[24px] mb-4">Your Friends</h2>
        </div>
        <div class="bg-gray-50 p-8">
                          <div class="grid grid-cols-4 gap-6 mx-auto">
        {
            friends.map((friend)=>{
                return <div>
                  <div class="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition-shadow">
      <div class="w-20 h-20 mb-4">
        <img 
          src={friend.picture} 
          alt="David Kim" 
          class="rounded-full w-full h-full object-cover border-2 border-white shadow-sm"
        />
      </div>
      <h3 class="text-xl font-bold text-slate-800 mb-0.5">{friend.name}</h3>
      <p class="text-slate-400 text-sm mb-3">{friend.days_since_contact}d ago</p>
        <div class="flex flex-wrap justify-center gap-2 mb-4">
        <span class="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
          {friend.tags}
        </span>
        
         <span class="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">{friend.tags}</span>
      </div>
      <button
  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(friend.status)}`}
>
  {friend.status}
</button>
  </div>
  </div>
            })
        }
        </div>
        </div>
        </div>
    );
};

export default FriendsSection;