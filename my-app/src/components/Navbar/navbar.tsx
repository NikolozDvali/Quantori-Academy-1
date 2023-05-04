import './navbar.css'
import Button from '../Button/button'
import { ListItemInterface } from '../../interface';
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Navbar({setSearchText, value}: {setSearchText: Dispatch<SetStateAction<string>>, value: string}){

    let navigate = useNavigate();

    function openPopup(){
        const popupDiv = document.getElementsByClassName("popupDiv")[0] as HTMLElement;
        popupDiv.style.display = "flex";
    }

    const makeSomeVisible = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const str = input.value;
        setSearchText(str);
        navigate(`/?search=${encodeURIComponent(str)}`);
    };
    
    const makeSomeVisibleForString = (str: string) => {
        setSearchText(str);
        navigate(`/?search=${encodeURIComponent(str)}`);
    };

    //on first render (or refresh looks for value in tasks);
    useEffect(() => {
        if (value !== '') {
            makeSomeVisibleForString(value)
    }}, [value]);
    

    return (
        <div className="navBar">
            <form className="navBar--form">
                <input type="text" placeholder="Search Task" className="searchBar" onInput={(event)=>makeSomeVisible(event)} value={value}></input>
            </form>
            <Button name="addNewButton" text="+ New Task" foo={openPopup}></Button>
        </div>
    );
}