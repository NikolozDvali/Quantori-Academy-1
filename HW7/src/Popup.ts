import "./styles/Popup.css"
import { Tag } from "./Interfaces";
import { tagItem } from "./Interfaces";

/**
     * Button component
     * @param text {string}
     * @param onClick {function}
     * @returns {HTMLButtonElement} - Button element
     */
function Button({text, onClick, className}: {text: string, onClick: () => void, className: string}) {
    const button = document.createElement("button");
    button.innerHTML = text;
    button.onclick = onClick;
    button.classList.add(className);
    return button;
  }

function Tag(title: string, displayCompleted: boolean, cursorOn: boolean){
    const tag = document.createElement("div");
    const className = `listItem__Tag--${title}--${displayCompleted ? 'isCompleted' : 'uncompleted'}`;
    tag.classList.add(className);
    tag.innerText = title;
    if(cursorOn){
        tag.classList.add("cursorOnTag");
    }
    return tag;
}

 //returns popup title paragraph;
 function PopupTitle(title: string){
    const p = document.createElement('p');
    p.innerText = title;
    p.classList.add("popupTitle")
    return p;
}

//returns text input for pupup;
function PopupField(){
    const field = document.createElement("input");
    field.classList.add("popupField");
    field.placeholder = "Task Title";
    field.type = "text";
    return field;
}

//returns array of objects (tags);
// {html: tag itself, title: title of the tag}
function TagInputs(): tagItem[]{
        const healthTag = {html: Tag("health", false, true), title: "health"};
        const workTag = {html: Tag("work", false, true), title: "work"};
        const homeTag = {html: Tag("home", false, true), title: "home"};
        const otherTag = {html: Tag("other", false, true), title: "other"};
        return [healthTag, workTag, homeTag, otherTag];
}

//removes --selected class from all tags;
function makeAllTagsUnselected(tags: tagItem[]){
        for(let i = 0; i<tags.length; i++){
            tags[i].html.classList.remove(`tagsInput__${tags[i].title}--selected`);
        }
}

//when tag is clicked, it becomes selected tag;
//other tags lose class --selected;
function addEventListenerToTag(selectedTag: Tag, tagInputs: tagItem[], i: number){
        tagInputs[i].html.addEventListener("click", ()=>{
            if(tagInputs[i].title==selectedTag.tag){
                selectedTag.tag = null;
                makeAllTagsUnselected(tagInputs);
            }else{
                selectedTag.tag = tagInputs[i].title;
                makeAllTagsUnselected(tagInputs);
                tagInputs[i].html.classList.add(`tagsInput__${selectedTag.tag}--selected`);
            }
        })
}

 //returns tags input div;
 function TagsInput(selectedTag: Tag){
    const div = document.createElement("div");
    div.classList.add("tagsInput");
    const tagInputs = TagInputs();
    
    tagInputs.forEach((tagInput, i) => {
      addEventListenerToTag(selectedTag, tagInputs, i);
      div.appendChild(tagInput.html);
    });
    
    return div;
  }

//returns date input;
function DateInput(){
    const date = document.createElement("input");
    date.type = "date";
    date.classList.add("dateInput");
    date.onchange = ()=>{
        if(date.value!=''){
            date.classList.add("dateInput--filled");
        }else{
            date.classList.remove("dateInput--filled");
        }
    }
    return date;
}


/*  Returns popup for adding new item into list;
    */
export function Popup(){
    let buttonIsValid = false;
    //keeps track of which tag is selected;
    //is object because needs to be passed as reference;
    let selectedTag: Tag = {tag: null};
    //function to add new item into list;
    //new item is added when all inputs are placed;
    function addItem(){
        function toValidForm(date: string){
            const dt = new Date(date);
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const output = days[dt.getDay()] + ", " + dt.getDate() + " " + months[dt.getMonth()];
            return output;
        }
        if(buttonIsValid){
             let data = {title: "", tag: "", date: "", isCompleted: false};
             const popupField = document.getElementsByClassName("popupField")[0] as HTMLInputElement;
             const title = popupField.value;
             data.title = title;
             const tag =  selectedTag.tag; 
             data.tag =tag;
             const dateInput = document.getElementsByClassName("dateInput")[0] as HTMLInputElement;
             const date = toValidForm(dateInput.value);
             data.date = date;

            fetch('http://localhost:3004/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                })
                .catch(error => console.error(error));
                selectedTag.tag = null;
        }
    }
    //function to close popup;
    //makes selected tag null;
    function closePopup(){
        const popupField = document.getElementsByClassName("popupField")[0] as HTMLInputElement;
        popupField.value = "";
        const popupDiv = document.getElementsByClassName("popupDiv")[0] as HTMLElement;
        popupDiv.style.display = "none";
        
        selectedTag.tag=null;
    }
    const cancelButton = Button({text: "Cancel", onClick: closePopup, className: "cancelButton"});
    //checks if all inputs are valid and changes button display;
    //changes buttonIsValid boolean;
    function validateButton(){
        if(selectedTag.tag!=null && dateInput.value!='' && field.value.length>0){
            addButton.classList.add("addTaskButton--blue");
            buttonIsValid = true;
        }else{
            addButton.classList.remove("addTaskButton--blue");
            buttonIsValid = false;
        }
    }

    const div = document.createElement("div");
    const popupTitle = PopupTitle("Add New Task");
    const addButton = Button({text: "Add Task", onClick: addItem, className: "addTaskButton--grey"});
    const field = PopupField();
    const tagsInput = TagsInput(selectedTag);
    const dateInput = DateInput();

    const fields = [field, dateInput];
    fields.forEach((input) => {
        input.oninput = validateButton;
    });
    tagsInput.onclick = validateButton;

    div.classList.add("popupDiv");
    div.append(popupTitle, field, tagsInput, dateInput, addButton, cancelButton);
    return div;
}