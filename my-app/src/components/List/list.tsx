import { ListItemInterface } from "../../interface";
import ListItself from "./listItself";
import './list.css'
import { Dispatch, SetStateAction} from "react";

export default function List({items, setItems, searchText}: {items: ListItemInterface[], setItems: Dispatch<SetStateAction<ListItemInterface[]>>, searchText: string}){
    return (
        <div className="lists">
            <ListItself props={{displayCompleted: false, listItems: items, foo: setItems, searchText: searchText}}></ListItself>        
            <ListItself props={{displayCompleted: true, listItems: items, foo: setItems, searchText: searchText}}></ListItself>        
        </div>
    );
}
