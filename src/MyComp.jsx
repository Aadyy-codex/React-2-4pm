import React, {useState} from 'react'

const MyComp = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p> Counter: {count}</p>
      <button onClick={() => setCount((pval)=>pval+1)} > Increment </button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)} > Decrement </button>
    </div>
  )
}

export default MyComp
