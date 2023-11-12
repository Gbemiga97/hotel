import { createContext, useContext, useState } from "react"
import { data } from "../utils"


const RoomContext = createContext()

export const useRoomContext = () => useContext(RoomContext)

const RoomContextProvider = ({children}) => {

    const [rooms, setRooms] = useState(data.roomData)


    const contextValue = {
        rooms
    }

  return (
    <RoomContext.Provider value={contextValue}>
    {children}
    </RoomContext.Provider>
  )
}

export default RoomContextProvider