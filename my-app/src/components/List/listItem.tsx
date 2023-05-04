import { ListItemInterface, currentTask } from "../../interface";
import './list.css'
import image from "./assets/Delete.svg"
import chbimage from './assets/checked.svg'
import { useDispatch, useSelector } from "react-redux";
import { changeCompleted, removeTask } from "../../redux/tasksSlice";


export default function ListItem({ data, display, searchText, showPopup, setShowPopup, setCurrentTask}: { data: ListItemInterface, display: boolean, searchText: string, showPopup: boolean, setShowPopup: React.Dispatch<React.SetStateAction<boolean>>, setCurrentTask:  React.Dispatch<React.SetStateAction<currentTask>>}) {
  let tasks = useSelector((state:any)=>state.tasks.tasks);
  const dispatch = useDispatch()

  const handleCheck = (id: number) => {
    dispatch(changeCompleted(id));

    fetch(`http://localhost:3004/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...data, isCompleted: !data.isCompleted })
      })
  };

  const handleClick = (id: number) => {
    dispatch(removeTask(id));
    fetch(`http://localhost:3004/tasks/${id}`, {
    method: 'DELETE'
  })
  };

  const handleEditTask = (id: number) => {
    const get = (id: number, prop: string) => {
      const task = tasks.find((t: any) => t.id === id);
      return task ? task[prop] : "";
    };    

    setShowPopup(true);
    const newCurrentTask = {
      title: get(id, "title"),
      tag: get(id, "tag"),
      date: get(id, "date"),
      id: id,
      isCompleted: get(id, "isCompleted")
    };
    setCurrentTask(newCurrentTask);
  };
  
  
  return (display === data.isCompleted && (searchText === "" || data.title.toLowerCase().includes(searchText.toLowerCase()))) ? (
    <li className={`listItem--${data.isCompleted ? "isCompleted" : "uncompleted"}`} id={`${data.id}`}>
      <input type="checkbox" checked={data.isCompleted} onChange={()=>handleCheck(data.id)} style={{ backgroundImage: `url(${chbimage})` }} />
      <div className="listItem__Middle">
        <p className={`taskParagraph--${data.isCompleted ? "isCompleted" : "uncompleted"}`}>{data.title}</p>
        <div className="listItem__Attributes">
          <div className={`listItem__Tag--${data.tag}--${data.isCompleted ? "isCompleted" : "uncompleted"} cursorOnTag`}>{data.tag}</div>
          <p className="listItem__date">{data.date}</p>
        </div>
      </div>
      {!data.isCompleted && <div className="editIcon" onClick={()=>handleEditTask(data.id)}></div>}
      {!data.isCompleted && <img alt="remove" className="deleteIcon" src={image} onClick={()=>{handleClick(data.id)}}/>}
    </li>
  ) : null;
}
