import { useRoomContext } from "../context/RoomContext"
import { Menu } from "@headlessui/react"
import { BsChevronDown } from "react-icons/bs"


const list = [
  {name: '1 Adult'},
  {name: '2 Adults'},
  {name: '3 Adults'},
  {name: '4 Adults'},
]

const AdultsDropdown = () => {

  const {adults, setAdults} = useRoomContext()


  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {adults}
      <BsChevronDown  className="text-base text-accent-hover"/>
      </Menu.Button>

      <Menu.Items as='ul' 
      className='bg-white absolute w-full flex flex-col z-40'>
        {
          list.map(({name}, i) => (
             <Menu.Item
             onClick={() => setAdults(name)}
             key={i}
             className='border-b last-of-type:border-0 h-12 hover:bg-accent transition
             hover:text-white w-full flex justify-center items-center cursor-pointer'
             as='li'>
              {name}
             </Menu.Item>
          ))
        }
      </Menu.Items>
    </Menu>
  )
}

export default AdultsDropdown