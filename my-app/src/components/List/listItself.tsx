import { ListProps } from "../../interface";
import { ListItemInterface } from "../../interface";
import ListItem from "./listItem";
import './list.css'


export default function ListItself({ props }: { props: ListProps }) {
    return (
      <div className={`listsDiv--${props.displayCompleted ? 'isCompleted' : 'uncompleted'}`}>
        <h1 className="listTitle">{props.displayCompleted ? 'Completed Tasks' : 'All tasks'}</h1>
        <ul className="ul">
          {props.listItems.map((item: ListItemInterface) => (
            <ListItem key={item.id} data={item} display={props.displayCompleted} setItems={props.foo} listItems={props.listItems} />
          ))}
        </ul>
      </div>
    );
  }
  