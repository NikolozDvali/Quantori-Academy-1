import ListItself from "./listItself";
import './list.css'

interface ListProps {
  searchText: string;
  show?: string;
}

export default function List({searchText, show} : ListProps){
    return (
        <div className="lists">
            <ListItself displayCompleted={false} searchText={searchText} show={show}></ListItself>        
            <ListItself displayCompleted={true} searchText={searchText} show={show}></ListItself>  
        </div>
    );
}
