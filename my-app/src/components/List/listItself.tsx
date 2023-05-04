import { ListItemInterface } from '../../interface';
import './list.css'
import { useSelector} from 'react-redux';
import ListItem from './listItem';

export default function ListItself({displayCompleted, searchText}: {displayCompleted: boolean, searchText: string}) {
  const items = useSelector((state: any) => state.tasks.tasks);

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
        {items.map((item: ListItemInterface) => (
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
