import { ListItemInterface } from "../../interface";
import './list.css'
import image from "./assets/Delete.svg"
import chbimage from './assets/checked.svg'
import { useDispatch } from "react-redux";
import { changeCompleted, removeTask } from "../../redux/tasksSlice";


export default function ListItem({ data, display, searchText}: { data: ListItemInterface, display: boolean, searchText: string}) {
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
  
  return (display === data.isCompleted && (searchText === "" || data.title.includes(searchText))) ? (
    <li className={`listItem--${data.isCompleted ? "isCompleted" : "uncompleted"}`} id={`${data.id}`}>
      <input type="checkbox" checked={data.isCompleted} onChange={()=>handleCheck(data.id)} style={{ backgroundImage: `url(${chbimage})` }} />
      <div className="listItem__Middle">
        <p className={`taskParagraph--${data.isCompleted ? "isCompleted" : "uncompleted"}`}>{data.title}</p>
        <div className="listItem__Attributes">
          <div className={`listItem__Tag--${data.tag}--${data.isCompleted ? "isCompleted" : "uncompleted"} cursorOnTag`}>{data.tag}</div>
          <p className="listItem__date">{data.date}</p>
        </div>
      </div>
      {!data.isCompleted && <img alt="remove" className="deleteIcon" src={image} onClick={()=>{handleClick(data.id)}}/>}
    </li>
  ) : null;
}
