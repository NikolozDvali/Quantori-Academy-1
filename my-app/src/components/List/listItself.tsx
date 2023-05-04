import { ListItemInterface } from '../../interface';
import './list.css'
import { useSelector} from 'react-redux';
import ListItem from './listItem';

interface ListItselfProps {
  displayCompleted: boolean;
  searchText: string;
  show?: string;
}

export default function ListItself({displayCompleted, searchText, show}: ListItselfProps) {
  const items = useSelector((state: any) => state.tasks.tasks);

  const filteredItems = show ? items.filter((item: ListItemInterface) => item.tag === show) : items;

  return (
    <div
      className={`listsDiv--${
        displayCompleted ? "isCompleted" : "uncompleted"
      }`}
    >
      <h1 className="listTitle">
        {displayCompleted ? "Completed Tasks" : "All tasks"}
      </h1>
      <ul className="ul">
        {filteredItems.map((item: ListItemInterface) => (
          <ListItem
            key={item.key}
            data={item}
            display={displayCompleted}
            searchText={searchText}
          />
        ))}
      </ul>
    </div>
  );
}
