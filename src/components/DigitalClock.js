import React, { useState } from "react";
function DigitalClock() {
  let time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <div className="Clock">
      <h3 id="time">{cTime}</h3>
    </div>
  );
}
export default DigitalClock;
