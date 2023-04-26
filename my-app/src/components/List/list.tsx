import { ListItemInterface } from "../../interface";
import ListItself from "./listItself";
import './list.css'
import { Dispatch, SetStateAction } from "react";

export default function List({items, setItems}: {items: ListItemInterface[], setItems: Dispatch<SetStateAction<ListItemInterface[]>>}){
    return (
        <div className="lists">
            <ListItself props={{displayCompleted: false, listItems: items, foo: setItems}}></ListItself>        
            <ListItself props={{displayCompleted: true, listItems: items, foo: setItems}}></ListItself>        
        </div>
    );
}
