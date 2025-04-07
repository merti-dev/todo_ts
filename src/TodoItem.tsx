import {listType} from "./appTypes"

type PropsType = {
    item : listType,
    handleDelete(nameToDelete:string):void
}



export default function TodoItem({item, handleDelete}:PropsType) {
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
        <div>{item.taskName}</div>
        <div>{item.workDay}</div>
        <button onClick={()=>handleDelete(item.taskName)}>Delete</button>
    </div>

  )
}
