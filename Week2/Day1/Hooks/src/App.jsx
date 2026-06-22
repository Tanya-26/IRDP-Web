import { useState } from 'react'
import { useMemo } from 'react'
function App() {
  const [c, setCount] = useState(0)
  const [i, setItem] = useState(10)
  const multiCountMemo = useMemo(() => {
    console.warn("multiCount");
    return c * 5;
  }, [c])
  // helps in saving extra computational cost by saving varia
  function counter(){
    setCount(c + 1)
  }
  function inc(){
    setItem(i + 5)
  }
  // function multiCount(){
  //   console.warn("multiCount");
  //   return c*5
  // }
  return (
    <div>
      <h1>useMemo Hook in React</h1>
      
      <h2>Count: {c}</h2>
      
      <h2>Item: {i}</h2>

      <h2>{multiCountMemo}</h2>
      <button onClick={inc}>Update Item</button><button onClick={counter}>Update Count</button>
      {/* Printing mulicount 2 times because two use states are used  */}
    </div>
  )
  

}

export default App
