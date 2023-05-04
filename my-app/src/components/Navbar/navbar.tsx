import './navbar.css'
import Button from '../Button/button'
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

export default function Navbar({setSearchText, value, showPopup, setShowPopup}: {setSearchText: Dispatch<SetStateAction<string>>, value: string, showPopup: boolean, setShowPopup: React.Dispatch<React.SetStateAction<boolean>>}){

    let navigate = useNavigate();

    function openPopup(){
        setShowPopup(!showPopup);
    }

    const makeSomeVisible = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const str = input.value;
        setSearchText(str);
        navigate(`/?search=${encodeURIComponent(str)}`);
    };
    
    useEffect(() => {
        const makeSomeVisibleForString = (str: string) => {
            setSearchText(str);
            navigate(`/?search=${encodeURIComponent(str)}`);
        };
    
        if (value !== '') {
            makeSomeVisibleForString(value)
        }
    }, [value, setSearchText, navigate]);
    
    

    return (
        <div className="navBar">
            <form className="navBar--form">
                <input type="text" placeholder="Search Task" className="searchBar" onInput={(event)=>makeSomeVisible(event)} value={value}></input>
            </form>
            <Button name="addNewButton" text="+ New Task" foo={openPopup}></Button>
        </div>
    );
}