import { FormEvent, useEffect, useRef } from 'react';
import Button from '../Button/button';
import './popup.css'
import Tag from '../Tag/tag';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, modifyTask} from '../../redux/tasksSlice'
import { currentTask } from '../../interface';

export default function Popup({showPopup, setShowPopup, currentTask, setCurrentTask}: {showPopup: boolean, setShowPopup: React.Dispatch<React.SetStateAction<boolean>>, currentTask: currentTask, setCurrentTask: React.Dispatch<React.SetStateAction<currentTask>>}){
    const items = useSelector((state:any)=>state.tasks.tasks);
    const dispatch = useDispatch();

    let selectedTag: string = "";
    const butRef = useRef<any>();
    const handleClosePopup = () => {
        const newCurrentTask = {...currentTask, id: 0};
        setCurrentTask(newCurrentTask)
        setShowPopup(!showPopup);
    };

    const checkValidation = () => {
        function makeButtonValid(){
            if(butRef.current.classList.contains("addTaskButton--grey")) butRef.current.classList.remove("addTaskButton--grey");
            butRef.current.classList.add("addTaskButton--blue");
        }
        function makeButtonInvalid(){
            butRef.current.classList.add("addTaskButton--grey");
            if(butRef.current.classList.contains("addTaskButton--blue"))butRef.current.classList.remove("addTaskButton--blue");
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

    const handleEditTask = () => { 
        dispatch(modifyTask(currentTask));
        fetch(`http://localhost:3004/tasks/${currentTask.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({...currentTask})
            })
        const makePopupUnused = () => {
            const titleInput = document.getElementsByClassName("popupField")[0] as HTMLInputElement;
            const dateInput = document.getElementsByClassName("dateInput")[0] as HTMLInputElement;
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
    const validDate = (date: string) =>{
        const dt = new Date(date);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const output = days[dt.getDay()] + ", " + dt.getDate() + " " + months[dt.getMonth()];
        return output;
    }

    const handleAddTask = () => {
        if(currentTask.id !== 0){
            handleEditTask();
            return;
        }
        if(checkValidation()){
            const titleInput = document.getElementsByClassName("popupField")[0] as HTMLInputElement;
            const dateInput = document.getElementsByClassName("dateInput")[0] as HTMLInputElement;
            //turns date to valid format;
            //returns current max id;
            const maxId = items.reduce(
                (max: number, item: any) => (item.id > max ? item.id : max),
                0
            );
            //initializes task to be added;
            const task = {
                title: titleInput.value,
                tag: selectedTag,
                date: validDate(dateInput.value),
                isCompleted: false,
                key: Math.random()*1000,
                id: maxId+1,
            };

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
            dispatch(addTask(task));
            makePopupUnused();
            handleClosePopup();
        }
    }
    
    const handleTagChangeString = (str: string) => {
        selectedTag = str;
        const nt = document.getElementsByClassName(`tagInPopup--${selectedTag}`)[0] as HTMLElement;
        nt.classList.add(`tagsInput__${str}--selected`);
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
        currentTask.tag = selectedTag;
        checkValidation();
    }

    const handleDateChange = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        const val = input.value;
        if(val!=="") input.classList.add("dateInput--filled");
        else{input.classList.remove("dateInput--filled");}
        currentTask.date = validDate(val);
        checkValidation();
    }

    const tagNames = ["health", "work", "home", "other"];

    const getTitle = () => {
        if(currentTask.id!==0){
            return currentTask.title;
        }
        return "";
    }

    function stringToDate(dateString: string): Date {
        const [dayOfWeek, dayOfMonth, month] = dateString.split(' ');
        const year = new Date().getFullYear(); // assumes current year
        const monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(month);
        const isoDateString = `${year}-${monthIndex + 1}-${dayOfMonth}`; // month is zero-indexed
        return new Date(isoDateString);
    }
      
    const getDate = () => {
        if (currentTask.id !== 0) {
          const date = stringToDate(currentTask.date);
          return date.toISOString().slice(0, 10); 
        }
        return "";
      };

    const setTag = () => {
        if(currentTask.id !== 0){
            handleTagChangeString(currentTask.tag);
        }
    }

    useEffect(()=>{
        if(currentTask.id===0) return;
        const titleInput = document.getElementsByClassName("popupField")[0] as HTMLInputElement;
        titleInput.value = getTitle();
        const dateInput = document.getElementsByClassName("dateInput")[0] as HTMLInputElement;
        dateInput.value = getDate();
        setTag();
        checkValidation()
    }, []);

    return (
        <div className="popupDiv">
            <p className="popupTitle">Add new Task</p>
            <input className="popupField" placeholder="Task Title" type="text"  onInput={(event) => {const inputElement = event.target as HTMLInputElement; checkValidation(); currentTask.title = inputElement.value;}}></input>
            <Tag names={tagNames} handleTagChange={handleTagChange} className='tagsInput'></Tag>
            <input type="date" className="dateInput" onInput={(event)=>handleDateChange(event)}></input>
            <Button text="Cancel" name="cancelButton" foo={handleClosePopup}></Button>
            <Button text="Add Task" name="addTaskButton--grey addTaskButton" foo={handleAddTask} myRef={butRef}></Button>
        </div>
    );
}