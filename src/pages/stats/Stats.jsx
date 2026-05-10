// import React from 'react';

import { useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
     const [events, setEvents] = useState([]);
     let call = events.filter(event=>event.type=='Call');
     let text = events.filter(event=>event.type=='Text');
     let video = events.filter(event=>event.type=='Video');

  useEffect(() => {
    // পেজ লোড হওয়ার সময় লোকাল স্টোরেজ থেকে ডাটা আনা
    const savedEvents = JSON.parse(localStorage.getItem('timelineEvents')) || [];
    setEvents(savedEvents);
  }, []);

    const data = [
  { name: 'Call', value: call.length, fill: '#7f37f5' },
  { name: 'Text', value: text.length, fill: '#244d3F' },
  { name: 'Video', value: video.length, fill: '#37a163' },
];
    return (
        <div >
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold">Friendship Analytics</h2>
            <div className="shadow p-10 rounded-md">
                <PieChart style={{ width: '100%', maxWidth: '400px', margin:'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
            </div>
            </div>
        </div>
    );
};

export default Stats;