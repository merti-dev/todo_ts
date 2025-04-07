import { useState , FC, ChangeEvent} from 'react'
import './App.css'

const  App:FC = () => {
  const [task, setTask] = useState<string>("")
  const[day, setday] = useState<number>(0)

  const handleSubmit=()=>{
    setTask(task)
    setday(day)
  }

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
   e.target.name=="task" ? setTask(e.target.value) : setday(Number(e.target.value))
  }
 

  return (
    <>
<form onSubmit={handleSubmit}>
  <input name='task' value={task} type='text' placeholder='Enter your text here' onChange={(e)=>handleChange(e)}></input>
  <input name='day' value={day} type='number' placeholder='Days' onChange={(e)=>handleChange(e)}></input>
<button type='submit'>Submit</button>
</form>
    </>
  )
}

export default App
