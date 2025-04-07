import { useState , FC, ChangeEvent, useEffect} from 'react'
import './App.css'
import { listType } from './appTypes'


const  App:FC = () => {
  const [task, setTask] = useState<string>("")
  const[day, setday] = useState<number>(0)
  const[list, setList] = useState<listType[]>([])

  // useEffect(()=>{
  //   console.log(list)
  //   },[list])
  console.log(list)

  const handleSubmit=():void=>{
    event?.preventDefault()
   const newTask={taskName:task, workDay:day}
   setList([...list, newTask])
   setday(0)
   setTask("")
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
