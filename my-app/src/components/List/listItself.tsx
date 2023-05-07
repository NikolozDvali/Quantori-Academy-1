import { ListItemInterface, currentTask } from '../../interface';
import './list.css'
import { useSelector} from 'react-redux';
import ListItem from './listItem';

interface ListItselfProps {
  displayCompleted: boolean;
  searchText: string;
  show?: string;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTask: React.Dispatch<React.SetStateAction<currentTask>>;
}

export default function ListItself({displayCompleted, searchText, show, showPopup, setShowPopup, setCurrentTask} : ListItselfProps) {
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
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            setCurrentTask={setCurrentTask}
          />
        ))}
      </ul>
    </div>
  );
}
