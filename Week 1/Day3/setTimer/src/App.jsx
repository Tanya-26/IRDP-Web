import { useEffect, useState } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [darkMode, setDark] = useState(false)

  useEffect(() => {
    if (!loading || seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setLoading(false)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [loading])

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSec = seconds % 60

  return (
    <>
      <div
        className={`flex border-2 border-black flex-col min-h-screen ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-amber-50'
        } items-center justify-center`}
      >
        {/* Theme Button */}
        <button
          onClick={() => {
            setDark(!darkMode)
          }}
          className={`border border-black py-4 mb-10 rounded-2xl px-4 hover:bg-gray-600 ${
            darkMode ? 'bg-gray-500' : 'bg-amber-50'
          }`}
        >
          ToggleTheme {darkMode ? 'light mode' : 'dark mode'}
        </button>

        {/* Timer Card */}
        <div
          className={`flex flex-col h-96 w-96 shadow-2xl rounded-2xl items-center justify-center gap-4 ${
            darkMode ? 'bg-gray-500' : 'bg-amber-50'
          }`}
        >
          <h1 className='text-3xl font-bold'>Countdown Timer</h1>

          {/* Input */}
          <label className='font-semibold'>Enter Time</label>

          <input
            type='number'
            placeholder='Enter time'
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setSeconds(Number(e.target.value))
            }}
            className='border border-black rounded-lg px-3 py-2 text-black'
          />

          {/* Timer */}
          <p>
            {hours} hours, {minutes} minutes, {remainingSec} seconds
          </p>

          {/* Start */}
          <button
            className='border border-black rounded-2xl py-1 px-3 bg-green-500 text-white hover:bg-green-300'
            type='button'
            onClick={() => setLoading(true)}
          >
            Start
          </button>

          {/* Stop */}
          <button
            className='border border-black rounded-2xl py-1 px-3 bg-red-500 text-white hover:bg-red-200'
            onClick={() => setLoading(false)}
          >
            Stop
          </button>

          {/* Restart */}
          <button
            className='border border-black rounded-2xl py-1 px-3 bg-blue-700 text-white hover:bg-blue-500'
            onClick={() => {
              setSeconds(0)
              setInput('')
              setLoading(false)
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </>
  )
}

export default App