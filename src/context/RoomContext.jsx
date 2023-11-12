import { createContext, useContext, useEffect, useState } from "react"
import { data } from "../utils"


const RoomContext = createContext()

export const useRoomContext = () => useContext(RoomContext)

const RoomContextProvider = ({children}) => {

    const [rooms, setRooms] = useState(data.roomData)
    const [adults, setAdults] = useState('1 Adult')
    const [kids, setKids] = useState('0 Kids')
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setTotal(Number(adults[0]) + Number(kids[0]))
    }, [adults, kids])

    const handleClick = (e) => {
      e.preventDefault()
      setLoading(true)
      
      //filter rooms based on total person
      const newRooms = data.roomData.filter(room => (
        total <= room.maxPerson
      ))
      setTimeout(() => {
      setRooms(newRooms)
      setLoading(false)
      }, 3000)
    }

    console.log(rooms)

    const contextValue = {
        rooms,
        adults,
        setAdults,
        kids,
        setKids,
       handleClick,
       loading
    }

  return (
    <RoomContext.Provider value={contextValue}>
    {children}
    </RoomContext.Provider>
  )
}

export default RoomContextProvider