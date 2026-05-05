import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FiMessageSquare, FiPhoneCall, FiVideo } from "react-icons/fi";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const singleFriend = data.find(f => f.id == id);
        setFriend(singleFriend);
      });
  }, [id]);

  if (!friend) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-10">

      <div className="grid grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white p-6 rounded-xl text-center shadow">
          <img
            src={friend.picture}
            className="w-20 h-20 mx-auto rounded-full mb-3"
          />
          <h2 className="font-semibold text-[20px]">{friend.name}</h2>

          <button className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs mt-2">
            {friend.status}
          </button>

          <div className="mt-2 text-xs text-green-600 bg-green-100 inline-block px-2 py-1 rounded-full">
            {friend.tags}
          </div>

          <p className="text-gray-400 text-sm mt-3">
            “Former colleague, great mentor”
          </p>

          <div className="mt-4 space-y-2">
            <button className="w-full bg-gray-100 p-2 font-medium text-[16px] hover:shadow-md rounded">Snooze 2 Weeks</button>
            <button className="w-full bg-gray-100 p-2 font-medium text-[16px] hover:shadow-md rounded">Archive</button>
            <button className="w-full bg-red-100 text-red-500 p-2 font-medium text-[16px] hover:shadow-md rounded">Delete</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl text-center shadow">
              <h2 className="text-xl font-bold">{friend.days_since_contact}</h2>
              <p className="text-sm text-gray-400">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl text-center shadow">
              <h2 className="text-xl font-bold">30</h2>
              <p className="text-sm text-gray-400">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl text-center shadow">
              <h2 className="text-sm font-bold">Feb 27, 2026</h2>
              <p className="text-sm text-gray-400">Next Due</p>
            </div>
          </div>

          {/* GOAL */}
          <div className="bg-white p-6 rounded-xl shadow flex justify-between">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-gray-400 text-sm mt-4">
                Connect every 30 days
              </p>
            </div>
            <button className="text-sm bg-gray-100 px-3 py-1 rounded">
              Edit
            </button>
          </div>

          {/* QUICK ACTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="mb-3 font-semibold">Quick Check-In</h3>
  <div className="grid grid-cols-3 gap-4">
    {/* Call Button */}
    <button className="flex flex-col items-center justify-center gap-2 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
      <FiPhoneCall size={24} className="text-slate-700" />
      <span className="text-sm font-medium text-slate-600">Call</span>
    </button>

    {/* Text Button */}
    <button className="flex flex-col items-center justify-center gap-2 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
      <FiMessageSquare size={24} className="text-slate-700" />
      <span className="text-sm font-medium text-slate-600">Text</span>
    </button>

    {/* Video Button */}
    <button className="flex flex-col items-center justify-center gap-2 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
      <FiVideo size={24} className="text-slate-700" />
      <span className="text-sm font-medium text-slate-600">Video</span>
    </button>
  </div>
</div>
          </div>

        </div>
    </div>
  );
};

export default FriendDetails;