import { useRoomContext } from "../context/RoomContext"
import Room from "./Room"
import {SpinnerDotted} from 'spinners-react'

const Rooms = () => {

  const {rooms, loading} = useRoomContext()

  return (
    <section className="py-24 ">
      
      {
        loading && (
          <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full
        z-50 flex justify-center items-center">
            <SpinnerDotted color="white" />
          </div>
        )
      }
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <p className="font-tertiary uppercase text-[0.9rem] tracking-[6px]">
            Hotel & Spa Adina</p>
          <h2 className="font-primary text-[45px] mb-4 ">
            Room & Suites</h2>
        </div>
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[1.8rem]
        lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {
            rooms.map((room, i) => (
              <Room room={room} key={i} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Rooms