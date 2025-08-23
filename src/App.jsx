import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [currentHours, setCurrentHours] = useState(0)
  const [goalHours, setGoalHours] = useState(40)
  const [clockedInTime, setClockedInTime] = useState("12:00")
  const [clockOutTime, setClockOutTime] = useState("12:00")

  const decimalDict = {
    .01: 1,
    .03: 2,
    .05: 3,
    .07: 4,
    .08: 5,
    .10: 6,
  }

  function calcClockOut() {
    var neededHours = goalHours - currentHours
    var decimal = neededHours % 1
    var twoDecimals = Math.round(decimal * 100) / 100
    var numOfMins = decimalDict[twoDecimals]
    var numOfHours = Math.floor(neededHours)
    var hoursToMins = numOfHours * 60
    var totalNumMins = numOfMins + hoursToMins
    // need to set the clocked in time to a Date value and then can do set time with the minutes
    var clockedInDate = new Date(`2024-08-08:${clockedInTime}`)
    var clockedInDateWTime = clockedInDate.setTime(clockedInDate.getTime() + (totalNumMins * 60 * 1000))
    setClockOutTime(clockedInDateWTime)
  }

  console.log(clockedInTime)

  const handleCurrentHourChange = (event) => {
    const value = event.target.value;
    setCurrentHours(value);
  };

  const handleGoalHourChange = (event) => {
    const value = event.target.value;
    setGoalHours(value);
  };

  const handleClockedInTimeChange = (event) => {
    const value = event.target.value;
    setClockedInTime(value);
  };

  return (
    <>
      <form onSubmit={calcClockOut}>
        <input onChange={handleCurrentHourChange} value={currentHours} type="number" name="Current Hours"/>
        <input onChange={handleGoalHourChange} value={goalHours} type="number" name="Goal Hours"/>
        <input onChange={handleClockedInTimeChange} value={clockedInTime} type="time" />
        <button type="submit" >Submit</button>

      <p>Time to clock out: {clockOutTime}</p>
      </form>
    </>
  )
}

export default App
