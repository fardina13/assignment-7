import { useState, useEffect } from "react";
import { FiMessageSquare, FiPhoneCall, FiVideo } from "react-icons/fi";

const TimelinePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // পেজ লোড হওয়ার সময় লোকাল স্টোরেজ থেকে ডাটা আনা
    const savedEvents = JSON.parse(localStorage.getItem('timelineEvents')) || [];
    setEvents(savedEvents);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <FiPhoneCall className="text-blue-600" />;
      case 'Text': return <FiMessageSquare className="text-blue-600" />;
      case 'Video': return <FiVideo className="text-blue-600" />;
      default: return <FiPhoneCall className="text-blue-600" />;
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Timeline</h2>
      
      <div className="space-y-4">
        {events.length === 0 ? (
          <p>No activities logged yet.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="flex items-center p-4 bg-white border-2 border-dashed border-blue-200 rounded-2xl">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                {getIcon(event.type)}
              </div>
              <div>
                <p className="font-bold">{event.type} with {event.person}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelinePage;