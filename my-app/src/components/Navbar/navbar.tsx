import './navbar.css'
import Button from '../Button/button'

export default function Navbar(){
    function openPopup(){
        const popupDiv = document.getElementsByClassName("popupDiv")[0] as HTMLElement;
        popupDiv.style.display = "flex";
    }

    return (
        <div className="navBar">
            <form className="navBar--form">
                <input type="text" placeholder="Search Task" className="searchBar"></input>
            </form>
            <Button name="addNewButton" text="+ New Task" foo={openPopup}></Button>
        </div>
    );
}