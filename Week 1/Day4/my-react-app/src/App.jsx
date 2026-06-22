import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState('');
  
  const handleAddTask = () => {
    if (textInput.trim() === '') return;
    setTasks([...tasks, textInput]);
    setTextInput('');
  };
  
  // const handleDeleteTask = (indexToDelete) => {
  //   const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
  //   setTasks(updatedTasks);
  // };
  
  return (
    <>
      <div style={{maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif'}}>
        <h1>To Do List</h1>
        <input type="text" placeholder='Add a new task' value={textInput} onChange={(e) => setTextInput(e.target.value)} style={{width: '100%', padding: '10px', fontSize: '16px'}} />
        <button onClick={handleAddTask}>Add</button>
        <ul style={{listStyle: 'none', padding: '0', marginTop: '20px'}}>
          {tasks.map((task, index) => (
            <li key={index} style={{padding: '10px', borderBottom: '1px solid #ccc'}}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
