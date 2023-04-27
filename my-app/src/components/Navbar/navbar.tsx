import './navbar.css'
import Button from '../Button/button'
import { ListItemInterface } from '../../interface';
import { Dispatch, FormEvent, SetStateAction } from 'react';

export default function Navbar({items, searchText, setSearchText}:{items: ListItemInterface[], searchText: string, setSearchText: Dispatch<SetStateAction<string>>}){
    function openPopup(){
        const popupDiv = document.getElementsByClassName("popupDiv")[0] as HTMLElement;
        popupDiv.style.display = "flex";
    }

    const makeSomeVisible = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const str = input.value;
        setSearchText(str);
    }

    return (
        <div className="navBar">
            <form className="navBar--form">
                <input type="text" placeholder="Search Task" className="searchBar" onInput={(event)=>makeSomeVisible(event)}></input>
            </form>
            <Button name="addNewButton" text="+ New Task" foo={openPopup}></Button>
        </div>
    );
}