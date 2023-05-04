import ListItself from "./listItself";
import './list.css'

export default function List({searchText} : {searchText:string}){
    return (
        <div className="lists">
            <ListItself displayCompleted={false} searchText={searchText}></ListItself>        
            <ListItself displayCompleted={true} searchText={searchText}></ListItself>        
        </div>
    );
}
