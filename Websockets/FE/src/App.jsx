import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { io } from "socket.io-client";
function App() {
  const [message, setmessage] = useState("")
  const [allData, setallData] = useState([])
  const socket = io("http://localhost:8080")
  const handleSendMessge = () => {
    socket.emit("newMessage", { message })
    setmessage("")
  }
  useEffect(() => {
    socket.on("newMessage", (data) => {
      setallData([...allData, data])
    })
  },)

  console.log(allData);
  return (
    <div className="App">
      {
        allData.map((el) => {
          return <p>{el.message}</p>
        })
      }
      <input type="text" placeholder='new message' onChange={(e) => setmessage(e.target.value)} />
      <button onClick={handleSendMessge}>SEND</button>
    </div>
  )
}

export default App
