import { useState } from 'react'
import './App.css'

function App() {
  const [currentHours, setCurrentHours] = useState(0)
  const [currentMins, setCurrentMins] = useState(0)
  const [targetHours, setTargetHours] = useState(40)
  const [clockedInTime, setClockedInTime] = useState("12:00")
  const [clockOutTime, setClockOutTime] = useState("")

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

  const calculateClockOut = (e) => {
    e.preventDefault()
    if (currentMins === 0) {
      var hoursTilClockOut = targetHours - currentHours
      var minsTilClockOut = 0
    } else {
      var hoursTilClockOut = targetHours - currentHours - 1
      var minsFromDec = Math.round(60 * currentMins)
      var minsTilClockOut = 60 - minsFromDec
    }

    var clockOutHour = parseInt(clockedInTime.substring(0,2)) + hoursTilClockOut
    var clockOutMin = parseInt(clockedInTime.substring(3, 5)) + minsTilClockOut
    var timeOfDay = "AM"

    if (clockOutHour === 12) {
      timeOfDay = "PM"
    } else if (clockOutHour > 12) {
      timeOfDay = "PM"
      clockOutHour = clockOutHour - 12
    }

    if (clockOutMin === 60) {
      clockOutHour = clockOutHour + 1
      clockOutMin = "00"
    } else if (clockOutMin === 0) {
      clockOutMin = "00"
    }

    setClockOutTime(`${clockOutHour}:${clockOutMin}${timeOfDay}`)
  }

  return (
    <>
      <form onSubmit={calculateClockOut}>
        <label htmlFor="Current Hours">Current Total Hours</label>
        <input onChange={handleCurrentHourChange} value={currentHours} type="number" name="Current Hours"/>
        <label htmlFor="Current Minutes">Current Total Minute Decimal</label>
        <input onChange={handleCurrentMinChange} value={currentMins} type="number" name="Current Minutes"/>
        <label htmlFor="Target Hours">Target Hours</label>
        <input onChange={handleTargetHourChange} value={targetHours} type="number" name="Target Hours" pattern="\d"/>
        <label htmlFor="Clocked In Time">Clock In Time</label>
        <input onChange={handleClockedInTimeChange} value={clockedInTime} type="time" name="Clocked In Time"/>
        <button type="submit" >Calculate Clock Out Time</button>
      </form>
      <p>Time to clock out: {clockOutTime}</p>
    </>
  )
}

export default App
