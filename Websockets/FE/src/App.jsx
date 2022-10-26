import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { io } from "socket.io-client"
function App() {
  const [messege, setmessege] = useState("")
  const [mainData, setmainData] = useState([])
  const socket = io("http://localhost:8080")
  const handleSendMessege = () => {
    socket.emit("newMessege", { messege })

  }
  useEffect(() => {
    socket.on("newMessge", (data) => {
      setmainData([...mainData, data])
    })


  },)
  console.log(mainData);
  return (
    <div className="App">
      <input type="text" onChange={(e) => setmessege(e.target.value)} placeholder={"messge enter"} />
      <button onClick={handleSendMessege}>SEND</button>
    </div>
  )
}

export default App
