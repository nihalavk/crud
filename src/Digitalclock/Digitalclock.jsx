import React, { useEffect, useState } from 'react'
import Useffect from '../Useffect'

function Digitalclock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId=setInterval(() => {
            setDate(new Date())
        }, 1000);
        return()=>clearInterval(intervalId);  
    }, [])
    
  return (
    <div>
<p className='clock'>
    {date.toLocaleTimeString()}
</p>
    </div>
  )
}

export default Digitalclock