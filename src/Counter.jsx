import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        // console.log("value added")
        // const newCount = count + 1;
        setCount( count + 1 )
    }
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={ () => { setCount( count + 1 ) } }>+</button>
        <button onClick={ () => { if(count > 0) setCount( count - 1 ) }}>-</button>
    </div>
  )
}

export default Counter
