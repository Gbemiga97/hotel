import { useState } from "react"
import ReactDatePicker from "react-datepicker"
import { BsCalendar } from "react-icons/bs"
import 'react-datepicker/dist/react-datepicker.module.css'
import '../datepicker.css'

const CheckOut = () => {

  const [endDate, setEndDate] = useState(false)

  return (
    <div className='relative  flex items-center justify-end  h-full'>
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar 
          className="text-accent text-base"
          />
        </div>
      </div>
      <ReactDatePicker 
      className='w-full h-full'
      selected={endDate}
      placeholderText="Check Out"
      onChange={(date) => setEndDate(date)}
      />
      
    </div>
  )
}

export default CheckOut