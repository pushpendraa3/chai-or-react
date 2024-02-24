import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <div className='border-2 inline-flex p-2 m-2'>
        <h2 className='p-3'>Count: {count}</h2>
        <button className='m-1' onClick={ () => { setCount( count + 1 ) } }>+</button>
        <button className='m-1' onClick={ () => { if(count > 0) setCount( count - 1 ) }}>-</button>
    </div>
  )
}

export default Counter
