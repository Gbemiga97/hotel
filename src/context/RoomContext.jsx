import { createContext, useContext, useEffect, useState } from "react"
import { data } from "../utils"


const RoomContext = createContext()

export const useRoomContext = () => useContext(RoomContext)

const RoomContextProvider = ({children}) => {

    const [rooms, setRooms] = useState(data.roomData)
    const [adults, setAdults] = useState('1 Adult')
    const [kids, setKids] = useState('0 Kids')
    const [total, setTotal] = useState(0)

    useEffect(() => {
      setTotal(Number(adults[0]) + Number(kids[0]))
    })

    const handleClick = (e) => {
      e.preventDefault()
      
      //filter rooms based on total person
      const newRooms = data.roomData.filter(room => (
        total <= room.maxPerson
      ))

      setRooms(newRooms)
    }

    console.log(rooms)

    const contextValue = {
        rooms,
        adults,
        setAdults,
        kids,
        setKids,
       handleClick
    }

  return (
    <RoomContext.Provider value={contextValue}>
    {children}
    </RoomContext.Provider>
  )
}

export default RoomContextProvider