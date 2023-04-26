import Button from '../Button/button';
import './popup.css'

export default function Popup(){
    let selectedTag: string = "";
    const handleClosePopup = () => {
        const popupDiv = document.querySelector('.popupDiv') as HTMLElement;
        if (popupDiv) {
            popupDiv.style.display = 'none';
        }
    };

    const checkValidation = () => {
        const but = document.getElementsByClassName("addTaskButton")[0] as HTMLElement;
        function makeButtonValid(){
            if(but.classList.contains("addTaskButton--grey")) but.classList.remove("addTaskButton--grey");
            but.classList.add("addTaskButton--blue");
        }
        function makeButtonInvalid(){
            but.classList.add("addTaskButton--grey");
            if(but.classList.contains("addTaskButton--blue"))but.classList.remove("addTaskButton--blue");
        }
        const titleInput = document.getElementsByClassName("popupField")[0] as HTMLInputElement;
        if(titleInput.value.length===0) {
            makeButtonInvalid(); 
            return false;
        }
        if(selectedTag === "") {
            makeButtonInvalid(); 
            return false;
        }
        const dateInput = document.getElementsByClassName("dateInput")[0] as HTMLInputElement;
        if(dateInput.value==="") {
            makeButtonInvalid(); 
            return false;
        }
        makeButtonValid();
        return true;
        
    }

    const handleAddTask = () => {
        if(checkValidation()) console.log("yey");
        else{
            console.log("sory")
        }
    }

    const handleTagChange = (newTag: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(event.target===null) return;
        const nt = event.target as HTMLElement;
        if(selectedTag === newTag){
            selectedTag = "";
            nt.classList.remove(`tagsInput__${newTag}--selected`);
            checkValidation();
            return;
        }
        if(selectedTag!==""){
            const prev = document.getElementsByClassName(`tagsInput__${selectedTag}--selected`)[0] as HTMLElement;
            prev.classList.remove(`tagsInput__${selectedTag}--selected`);
        }
        nt.classList.add(`tagsInput__${newTag}--selected`);
        selectedTag = newTag;
        checkValidation();
    }
    
    return (
        <div className="popupDiv">
            <p className="popupTitle">Add new Task</p>
            <input className="popupField" placeholder="Task Title" type="text" onInput={checkValidation}></input>
            <div className="tagsInput">
                <div className="listItem__Tag--health--uncompleted cursorOnTag" onClick={(event)=>handleTagChange("health", event)}>health</div>
                <div className="listItem__Tag--work--uncompleted cursorOnTag" onClick={(event)=>handleTagChange("work", event)}>work</div>
                <div className="listItem__Tag--home--uncompleted cursorOnTag" onClick={(event)=>handleTagChange("home", event)}>home</div>
                <div className="listItem__Tag--other--uncompleted cursorOnTag" onClick={(event)=>handleTagChange("other", event)}>other</div>
            </div>
            <input type="date" className="dateInput"></input>
            <Button text="Cancel" name="cancelButton" foo={handleClosePopup}></Button>
            <Button text="Add Task" name="addTaskButton--grey addTaskButton" foo={handleAddTask}></Button>
        </div>
    );
}
