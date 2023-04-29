import { ListProps } from "../../interface";
import { ListItemInterface } from "../../interface";
import ListItem from "./listItem";
import './list.css'


export default function ListItself({ props }: { props: ListProps }) {
  const filteredListItems = props.listItems.filter(
    (item: ListItemInterface) =>
      item.title.includes(props.searchText) || props.searchText === ""
  );

  return (
    <div
      className={`listsDiv--${
        props.displayCompleted ? "isCompleted" : "uncompleted"
      }`}
    >
      <h1 className="listTitle">
        {props.displayCompleted ? "Completed Tasks" : "All tasks"}
      </h1>
      <ul className="ul">
        {filteredListItems.map((item: ListItemInterface) => (
          <ListItem
            key={item.key}
            data={item}
            display={props.displayCompleted}
            setItems={props.foo}
            listItems={props.listItems}
          />
        ))}
      </ul>
    </div>
  );
}
