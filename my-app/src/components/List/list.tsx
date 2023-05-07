import ListItself from "./listItself";
import './list.css'
import { currentTask } from "../../interface";

interface ListProps {
  searchText: string;
  show?: string;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTask:  React.Dispatch<React.SetStateAction<currentTask>>;
}

export default function List({searchText, show, showPopup, setShowPopup, setCurrentTask} : ListProps){
    return (
        <div className="lists">
            <ListItself displayCompleted={false} searchText={searchText} show={show} showPopup={showPopup} setShowPopup={setShowPopup} setCurrentTask={setCurrentTask}></ListItself>        
            <ListItself displayCompleted={true} searchText={searchText} show={show} showPopup={showPopup} setShowPopup={setShowPopup} setCurrentTask={setCurrentTask}></ListItself>  
        </div>
    );
}
