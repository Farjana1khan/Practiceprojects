import React, { useState } from "react";
//import TimePicker from "rc-time-picker";
import "./TimePicker.css";
//import "rc-time-picker/assets/index.css";

function TimePicker() {
  const [time, setTime] = useState("");
  return (
    <div className="App">
      React Time Picker - <br />
      <p>Selected Time: {time || "-"}</p>
      <TimePicker
        placeholder="Select Time"
        use12Hours
        showSecond={false}
        focusOnOpen={true}
        format="hh:mm A"
        onChange={(e) => setTime(e.format("LT"))}
      />
    </div>
  );
}

export default TimePicker;
