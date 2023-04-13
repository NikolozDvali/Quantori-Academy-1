(function () {
    let state = undefined;

    /**
     * Global application state
     * @template T
     * @param {T} initialValue
     * @returns {[T, function(T): void]}
     */
    function useState(initialValue) {
        state = state || initialValue;

        function setValue(newValue) {
            state = newValue;
            renderApp();
        }

        return [state, setValue];
    }

    //returns list title;
    function ListTitle(title){
        const h1 = document.createElement('h1');
        h1.innerText = title;
        h1.classList.add("listTitle");
        return h1;
    }

    //returns radio element;
    function RadioElement(items, item, index) {
        const { isCompleted } = item;
        
        const updateItems = (isCompleted) => {
          items[index].isCompleted = isCompleted;
          const updatedTask = items[index];
            fetch(`http://localhost:3004/tasks/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
                })
                .catch(error => console.error(error));
        };
        
        const radioElement = document.createElement("input");
        radioElement.type = "checkbox";
        radioElement.checked = isCompleted;
        radioElement.onchange = (event) => {
          const isCompleted = event.target.checked;
          updateItems(isCompleted);
        };
        
        return radioElement;
      }

    //Image is reserved word so I called this function 'MyImage' :)
    //returns remove image for uncompleted tasks;
    function MyImage(item, setItems) {

        const { src, classList } = {
          src: 'images/Delete.svg',
          classList: ['deleteIcon'],
        };
      
        const deleteItem = () => {
          fetch(`http://localhost:3004/tasks/${item.id}`, {
            method: 'DELETE'
            }).catch(error => console.error(error));
        };
      
        const img = document.createElement('img');
        img.src = src;
        img.classList.add(...classList);
        img.onclick = deleteItem;
        
        return img;
      }
      
    function Tag(title, displayCompleted, cursorOn){
        const tag = document.createElement("div");
        const className = `listItem__Tag--${title}--${displayCompleted ? 'isCompleted' : 'uncompleted'}`;
        tag.classList.add(className);
        tag.innerText = title;
        if(cursorOn){
            tag.classList.add("cursorOnTag");
        }
        return tag;
    }

    function MiddleOfListItem(displayCompleted, item){
        const mid = document.createElement("div");
                mid.classList.add("listItem__Middle")
                const pElement = document.createElement('p');
                pElement.classList.add(`taskParagraph--${displayCompleted ? 'isCompleted' : 'uncompleted'}`);
                pElement.textContent = item.title;

                const attributes = document.createElement("div");
                attributes.classList.add("listItem__Attributes");

                const tag = Tag(item.tag, displayCompleted);

                const date = document.createElement("p");
                date.classList.add("listItem__date");
                date.innerText = item.date;

                attributes.appendChild(tag);
                attributes.appendChild(date);
        
                mid.appendChild(pElement);
                mid.appendChild(attributes);
        return mid;
    }

    //returns list itself, 'displayCompleted' is bool that indicates whether it should be list of isCompleted tasks or uncompleted tasks;
    function ListCompletedAndUncompleted(items, setItems, displayCompleted) {
        const div = document.createElement('div');
        div.classList.add(`listsDiv--${displayCompleted ? 'isCompleted' : 'uncompleted'}`);
        div.appendChild(ListTitle(displayCompleted ? 'isCompleted Tasks' : 'All tasks'));
        const ul = document.createElement('ul');
        ul.classList.add('ul');
        items.forEach((item, index) => {
            if (item.isCompleted === displayCompleted) {
                const li = document.createElement('li');
                li.classList.add(`listItem--${displayCompleted ? 'isCompleted' : 'uncompleted'}`);
                li.setAttribute("id", `listItem--${displayCompleted ? 'isCompleted' : 'uncompleted'}--${index}`)
    
                const radioElement = RadioElement(items, item, index, setItems);
                li.appendChild(radioElement);
    
                const mid = MiddleOfListItem(displayCompleted, item);
                li.appendChild(mid);
    
                if (!displayCompleted) {
                    const img = MyImage(item, setItems);
                    li.appendChild(img);
                }
    
                ul.appendChild(li);
            }
        });
        div.appendChild(ul);
        return div;
    }

    /**
     * Functional component for the list
     * @param items {string[]}
     * @returns {HTMLElement} - List element
     */
    function List(items, setItems) {
        const div = document.createElement("div");
        
        const uncompletedList = ListCompletedAndUncompleted(items, setItems, false);
        const completedList = ListCompletedAndUncompleted(items, setItems, true);
        
        div.classList.add("lists");
        div.appendChild(uncompletedList);
        div.appendChild(completedList);
        return div;
      }
    /**
     * Button component
     * @param text {string}
     * @param onClick {function}
     * @returns {HTMLButtonElement} - Button element
     */
    function Button({text, onClick, class: className}) {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.onclick = onClick;
        button.classList.add(className);
        return button;
    }

    //returns searchBar;
    function SearchBar(items, setItems){
        function makeSomeVisible(str){
            items.map((item, index) => {
                if(item.title.substring(0,str.length)===str){
                    if(item.isCompleted==false){
                        document.getElementById(`listItem--uncompleted--${index}`).style.display = "flex";
                    }else{
                        document.getElementById(`listItem--isCompleted--${index}`).style.display = "flex";
                    }
                }else{
                    if(item.isCompleted==false){
                        document.getElementById(`listItem--uncompleted--${index}`).style.display = "none";
                    }else{
                        document.getElementById(`listItem--isCompleted--${index}`).style.display = "none";
                    }
                }
            });
        }

        const form = document.createElement("form");
        form.classList.add("navBar--form");

        const search = document.createElement('input');
        search.setAttribute('type', 'text');
        search.setAttribute('placeHolder', "Search Task");
        search.classList.add("searchBar");


        search.oninput = (event) =>{
            const str = event.target.value;
            makeSomeVisible(str);
        }

        form.appendChild(search);
        return form;
    }

    //returns navBar;
    function NavBar(items, setItems){
        const div = document.createElement("div");
        const searchBar = SearchBar(items, setItems);
        div.appendChild(searchBar);
        div.classList.add("navBar");
        return div;
    }

    //returns weather container div;
    function WeatherContainer(){
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.classList.add("weather__icon");
        const degreesP = document.createElement("p");
        degreesP.classList.add("weather__degrees");
        degreesP.innerHTML = "13.4&#176"
        const locationP = document.createElement("p");
        locationP.classList.add("weather__location");
        locationP.innerText = "Tbilisi";
        div.append(img, degreesP, locationP);
        div.classList.add("weatherContainer");
        return div;
    }

    //returns header element;
    function Header(){
        let header = document.createElement("div");
        let headerName = document.createElement("h1");
        headerName.innerText = "To Do List";
        header.append(headerName, WeatherContainer());
        headerName.classList.add("headerName");
        header.classList.add("header");
        return header;
    }

    //returns popup title paragraph;
    function PopupTitle(title){
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
    function TagInputs(){
        const healthTag = {html: Tag("health", false, true), title: "health"};
        const workTag = {html: Tag("work", false, true), title: "work"};
        const homeTag = {html: Tag("home", false, true), title: "home"};
        const otherTag = {html: Tag("other", false, true), title: "other"};
        return [healthTag, workTag, homeTag, otherTag];
    }

    //removes --selected class from all tags;
    function makeAllTagsUnselected(tags){
        for(let i = 0; i<tags.length; i++){
            tags[i].html.classList.remove(`tagsInput__${tags[i].title}--selected`);
        }
    }

    //when tag is clicked, it becomes selected tag;
    //other tags lose class --selected;
    function addEventListenerToTag(selectedTag, tagInputs, i){
        tagInputs[i].html.addEventListener("click", ()=>{
            selectedTag.tag = tagInputs[i].title;
            makeAllTagsUnselected(tagInputs);
            tagInputs[i].html.classList.add(`tagsInput__${selectedTag.tag}--selected`);
        })
    }

    //returns tags input div;
    function TagsInput(selectedTag){
        const div = document.createElement("div");
        div.classList.add("tagsInput");
        const tagInputs = TagInputs();
        for(let i = 0; i<tagInputs.length; i++){
            addEventListenerToTag(selectedTag, tagInputs, i);
            div.appendChild(tagInputs[i].html);
        }
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
    function Popup(){
        let buttonIsValid = false;
        //keeps track of which tag is selected;
        //is object because needs to be passed as reference;
        let selectedTag = {tag: null};
        //function to add new item into list;
        //new item is added when all inputs are placed;
        function addItem(){
            if(buttonIsValid){
                function toValidForm(date){
                    const dt = new Date(date);
                    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    const output = days[dt.getDay()] + ", " + dt.getDate() + " " + months[dt.getMonth()];
                    return output;
                }
                fetch('http://localhost:3004/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title: document.getElementsByClassName("popupField")[0].value, isCompleted: false, tag: selectedTag.tag, date: toValidForm(dateInput.value)})
                    })
                    .catch(error => console.error(error));
                selectedTag.tag = null;
            }
        }
        //function to close popup;
        //makes selected tag null;
        function closePopup(){
            document.getElementsByClassName("popupField")[0].value = "";
            document.getElementsByClassName("popupDiv")[0].style.display="none";
            selectedTag.tag=null;
        }
        const cancelButton = Button({text: "Cancel", onClick: closePopup, class: "cancelButton"});
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
        const addButton = Button({text: "Add Task", onClick: addItem ,class: "addTaskButton--grey"});
        const field = PopupField(selectedTag);
        const tagsInput = TagsInput(selectedTag);
        const dateInput = DateInput();

        const fields = [field, tagsInput, dateInput];
        fields.forEach((input) => {
            input.oninput = validateButton;
        });

        div.classList.add("popupDiv");
        div.append(popupTitle, field, tagsInput, dateInput, addButton, cancelButton);
        return div;
    }

    /**
     * App container
     * @returns {HTMLDivElement} - The app container
     */
    function App() {
        //on the first enter on the page, gets data from the server;
        const [items, setItems] = useState([]);

        if (items.length === 0) {
            fetch('http://localhost:3004/tasks')
                .then(response => response.json())
                .then(data => {
                setItems(data);
                })
                .catch(error => console.error(error));
        }

        function openPopup(){
            document.getElementsByClassName("popupDiv")[0].style.display = "flex";
        }
      
        const div = document.createElement("div");
        div.classList.add("container");
        const header = Header();
        const navBar = NavBar(items, setItems);
        const list = List(items, setItems);
        const button = Button({ text: "+ New Task", class:"addNewButton", onClick: openPopup});
        navBar.appendChild(button);
        const popup = Popup(items, setItems);
      
        div.append(header, navBar, list, popup);
        return div;
      }


      function getWeatherData(){
        function setIcon(data){
            let iconUrl = data.condition.icon;
            iconUrl = iconUrl.substring(20, iconUrl.length);
            document.getElementsByClassName("weather__icon")[0].src = `/Assignment6/images${iconUrl}`
        }

        const key = "95da8a101a2b4fdb8bb185943231204";
        const city = "Tbilisi";
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
        fetch(url).then(response=>response.json()).then(data => {
            document.getElementsByClassName("weather__degrees")[0].innerHTML=`${data.current.temp_c}&#176`;
            setIcon(data.current);
        }
            ).catch(error=>console.log(error));
    }

    /**
     * Render the app.
     * On change whole app is re-rendered.
     */
    function renderApp() {
        const appContainer = document.getElementById("functional-example");
        appContainer.innerHTML = "";
        appContainer.append(App());
        //get weather data;
        getWeatherData();
    }

    // initial render
    renderApp();

})();