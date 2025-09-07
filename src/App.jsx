import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentHours, setCurrentHours] = useState(0)
  const [currentMins, setCurrentMins] = useState(0)
  const [targetHours, setTargetHours] = useState(40)
  const [clockedInTime, setClockedInTime] = useState("12:00")
  const [clockOutTime, setClockOutTime] = useState("")

  const decimalDict = {
    .01: 1,
    .03: 2,
    .05: 3,
    .07: 4,
    .08: 5,
    .10: 6,
  }


  const handleCurrentHourChange = (event) => {
    const value = event.target.value;
    setCurrentHours(value);
  };

  const handleCurrentMinChange = (event) => {
    const value = event.target.value;
    setCurrentMins(value);
  };

  const handleTargetHourChange = (event) => {
    const value = event.target.value;
    setTargetHours(value);
  };

  const handleClockedInTimeChange = (event) => {
    const value = event.target.value;
    setClockedInTime(value);
  };

  const calculateClockOut = () => {
    if (currentMins === 0) {
      var hoursTilClockOut = targetHours - currentHours
      var minsTilClockOut = 0
    } else {
      var hoursTilClockOut = targetHours - currentHours - 1
      var minsTilClockOut = 60 - currentMins
    }
    var clockOutHour = clockedInTime.substring(0,2) + hoursTilClockOut
    var clockOutMin = clockedInTime.substring(3, 5) + minsTilClockOut

    setClockOutTime(`${clockOutHour}:${clockOutMin}`)
  }

console.log(clockOutTime)

  return (
    <>
      <form onSubmit={calculateClockOut}>
        <label htmlFor="Current Hours">Current Total Hours</label>
        <input onChange={handleCurrentHourChange} value={currentHours} type="number" name="Current Hours"/>
        <label htmlFor="Current Minutes">Current Total Minute Decimal</label>
        <input onChange={handleCurrentMinChange} value={currentMins} type="number" name="Current Minutes" pattern="\d"/>
        <label htmlFor="Target Hours">Target Hours</label>
        <input onChange={handleTargetHourChange} value={targetHours} type="number" name="Target Hours"/>
        <label htmlFor="Clocked In Time">Clock In Time</label>
        <input onChange={handleClockedInTimeChange} value={clockedInTime} type="time" name="Clocked In Time"/>
        <button type="submit" >Calculate Clock Out Time</button>
      </form>
      <p>Time to clock out: {clockOutTime}</p>
    </>
  )
}

export default App
