import { ListItemInterface } from "../../interface";
import './list.css'
import image from "../../images/Delete.svg"
import chbimage from '../../images/checked.svg'
import { Dispatch, SetStateAction } from "react";


export default function ListItem({ data, display, setItems, listItems}: { data: ListItemInterface, display: boolean, setItems: Dispatch<SetStateAction<ListItemInterface[]>>,  listItems: ListItemInterface[] }) {
  const handleCheck = (id: number) => {
    setItems(listItems.map((item: ListItemInterface)=>(
      item.id!==id ? item : {...item, isCompleted: !item.isCompleted} 
    )))
  };
  const handleClick = (id: number) => {
    setItems(listItems.filter((item: ListItemInterface)=> item.id !== id))
  };
  

  return display === data.isCompleted ? (
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
