import { useRoomContext } from "../context/RoomContext"
import { Menu } from "@headlessui/react"
import { BsChevronDown } from "react-icons/bs"


const list = [
  {name: '0 Kids'},
  {name: '1 kids'},
  {name: '2 kids'},
  {name: '3 kids'},
  {name: '4 kids'},
]


const KidsDropdown = () => {
  const {kids, setKids} = useRoomContext()


  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
       {kids === '0 Kids' ? 'No kids' : kids}
      <BsChevronDown  className="text-base text-accent-hover"/>
      </Menu.Button>

      <Menu.Items as='ul' 
      className='bg-white absolute w-full flex flex-col z-40'>
        {
          list.map(({name}, i) => (
             <Menu.Item 
             onClick={() => setKids(name)}
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

export default KidsDropdown