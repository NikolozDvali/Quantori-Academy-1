import { Dispatch, FormEvent, SetStateAction } from 'react';
import Button from '../Button/button';
import './popup.css'
import { ListItemInterface } from '../../interface';

export default function Popup({items, setItems}: {items: ListItemInterface[], setItems: Dispatch<SetStateAction<ListItemInterface[]>>}){
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
        if(checkValidation()){
            const titleInput = document.getElementsByClassName("popupField")[0] as HTMLInputElement;
            const dateInput = document.getElementsByClassName("dateInput")[0] as HTMLInputElement;
            //turns date to valid format;
            const validDate = (date: string) =>{
                const dt = new Date(date);
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const output = days[dt.getDay()] + ", " + dt.getDate() + " " + months[dt.getMonth()];
                return output;
            }
            //returns current max id;
            const maxId = items.reduce(
                (max, item) => (item.id > max ? item.id : max),
                0
            );
            //initializes task to be added;
            const task = {
                title: titleInput.value,
                tag: selectedTag,
                date: validDate(dateInput.value),
                isCompleted: false,
                key: 0,
                id: maxId+1,
            };
            setItems([...items, task]);

            fetch('http://localhost:3004/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            })
            //returns popup to initial properties;
            const makePopupUnused = () => {
                const seltag = document.getElementsByClassName(`tagsInput__${selectedTag}--selected`)[0] as HTMLElement;
                seltag.classList.remove(`tagsInput__${selectedTag}--selected`);
                selectedTag = "";
                titleInput.value="";
                dateInput.value="";
                dateInput.classList.remove("dateInput--filled");
                const but = document.getElementsByClassName("addTaskButton--blue")[0] as HTMLElement;
                but.classList.remove("addTaskButton--blue");
                but.classList.add("addTaskButton--grey");
            }
            makePopupUnused();
            handleClosePopup();
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

    const handleDateChange = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const val = input.value;
        if(val!=="") input.classList.add("dateInput--filled");
        else{input.classList.remove("dateInput--filled");}
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
            <input type="date" className="dateInput" onInput={(event)=>handleDateChange(event)}></input>
            <Button text="Cancel" name="cancelButton" foo={handleClosePopup}></Button>
            <Button text="Add Task" name="addTaskButton--grey addTaskButton" foo={handleAddTask}></Button>
        </div>
    );
}
