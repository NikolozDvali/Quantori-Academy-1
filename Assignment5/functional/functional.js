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

    //returns radio element for uncompleted tasks;
    function RadioElement(items, item, index, setItems){
          const radioElement = document.createElement("input");
          radioElement.type = "checkbox";
          radioElement.checked = item.completed;
          radioElement.onchange = (event) => {
            if (event.target.checked) {
              const updatedItems = items.map((item, idx) => {
                if (idx === index) {
                  return {
                    ...item,
                    completed: true,
                  };
                }
                return item;
              });
              sessionStorage.setItem("items", JSON.stringify(updatedItems));
              setItems(updatedItems);            
            }else{
                const updatedItems = items.map((item, idx) => {
                  if (idx === index) {
                    return {
                      ...item,
                      completed: false,
                    };
                  }
                  return item;
                });
                sessionStorage.setItem("items", JSON.stringify(updatedItems));
                setItems(updatedItems);            
              }
            }
        return radioElement;
    }


    //Image is reserved word so I called this function 'MyImage' :)
    //returns remove image for uncompleted tasks;
    function MyImage(items, index, setItems){
        const img = document.createElement('img');
        img.src = 'images/Delete.svg';
        img.classList.add('deleteIcon');
        img.onclick = () =>{
        const updatedItems = items.map((item, idx) => {
            if (idx === index) {
                return {};
            }
            return item;
            });
            setItems(updatedItems.filter((element) => {
                if (Object.keys(element).length !== 0) {
                    return true;
                }
                return false;
                }));  
            let locItems = JSON.parse(sessionStorage.getItem("items"));
            locItems.splice(index, 1);
            console.log(locItems);
            sessionStorage.setItem("items", JSON.stringify(locItems));
            }
        return img;
    }

    function MiddleOfListItem(displayCompleted, item){
        const mid = document.createElement("div");
                mid.classList.add("listItem__Middle")
                const pElement = document.createElement('p');
                pElement.classList.add(`taskParagraph--${displayCompleted ? 'completed' : 'uncompleted'}`);
                pElement.textContent = item.name;

                const attributes = document.createElement("div");
                attributes.classList.add("listItem__Attributes");

                const tag = document.createElement("div");
                tag.classList.add(`listItem__Tag--${item.tag}--${displayCompleted ? 'completed' : 'uncompleted'}`);
                tag.innerText = item.tag;

                const date = document.createElement("p");
                date.classList.add("listItem__date");
                date.innerText = item.date;

                attributes.appendChild(tag);
                attributes.appendChild(date);
        
                mid.appendChild(pElement);
                mid.appendChild(attributes);
        return mid;
    }


    //returns list itself, 'displayCompleted' is bool that indicates whether it should be list of completed tasks or uncompleted tasks;
    function ListCompletedAndUncompleted(items, setItems, displayCompleted) {
        const div = document.createElement('div');
        div.classList.add(`listsDiv--${displayCompleted ? 'completed' : 'uncompleted'}`);
        div.appendChild(ListTitle(displayCompleted ? 'Completed Tasks' : 'All tasks'));
        const ul = document.createElement('ul');
        ul.classList.add('ul');
        items.forEach((item, index) => {
            if (item.completed === displayCompleted) {
                const li = document.createElement('li');
                li.classList.add(`listItem--${displayCompleted ? 'completed' : 'uncompleted'}`);
                li.setAttribute("id", `listItem--${displayCompleted ? 'completed' : 'uncompleted'}--${index}`)
    
                const radioElement = RadioElement(items, item, index, setItems);
                li.appendChild(radioElement);
    
                const mid = MiddleOfListItem(displayCompleted, item);
                li.appendChild(mid);
    
                if (!displayCompleted) {
                    const img = MyImage(items, index, setItems);
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
                if(item.name.substring(0,str.length)===str){
                    if(item.completed==false){
                        document.getElementById(`listItem--uncompleted--${index}`).style.display = "flex";
                    }else{
                        document.getElementById(`listItem--completed--${index}`).style.display = "flex";
                    }
                }else{
                    if(item.completed==false){
                        document.getElementById(`listItem--uncompleted--${index}`).style.display = "none";
                    }else{
                        document.getElementById(`listItem--completed--${index}`).style.display = "none";
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

    //returns header element;
    function Header(){
        let header = document.createElement("h1");
        header.innerText = "To Do List";
        header.classList.add("header");
        return header;
    }

    //returns popup title paragraph;
    function PopupTitle(name){
        const p = document.createElement('p');
        p.innerText = name;
        p.classList.add("popupTitle")
        return p;
    }

    //returns text input for pupup;
    function PopupField(){
        const field = document.createElement("input");
        field.classList.add("popupField");
        field.placeholder = "Task Title";
        field.type = "text";
        field.oninput = (event) => {
            let text = event.target.value;
            const button = document.getElementsByClassName("addTaskButton--grey")[0];
            if(text.length>0){
                button.classList.add("addTaskButton--blue");
            }else{
                button.classList.remove("addTaskButton--blue");
            }
        }

        return field;
    }

    /*  Returns popup for adding new item into list;
    */
    function Popup(setItems){
        //function to add new item into list;
        function addItem(){
            if(document.getElementsByClassName("popupField")[0].value.length>0){
                const prevItems = sessionStorage.getItem("items");
                const newItems = JSON.parse(prevItems);
                newItems.push({ name: document.getElementsByClassName("popupField")[0].value, completed: false });
                sessionStorage.setItem("items", JSON.stringify(newItems));
                setItems(JSON.parse(sessionStorage.getItem("items")));
            }
        }
        //function to close popup;
        function closePopup(){
            document.getElementsByClassName("popupField")[0].value = "";
            document.getElementsByClassName("popupDiv")[0].style.display="none";
        }
        const div = document.createElement("div");
        const popupTitle = PopupTitle("Add New Task");
        const field = PopupField();
        const addButton = Button({text: "Add Task", onClick: addItem ,class: "addTaskButton--grey"});
        const cancelButton = Button({text: "Cancel", onClick: closePopup, class: "cancelButton"});
        div.classList.add("popupDiv");
        div.append(popupTitle, field, addButton, cancelButton);
        return div;
    }

    /**
     * App container
     * @returns {HTMLDivElement} - The app container
     */
    function App() {
        if(sessionStorage.getItem("items")==null){
            sessionStorage.setItem("items", JSON.stringify([
                { name: "Task 1 Title", completed: false, tag: "Tag", date: "Today"},
                { name: "Task 2 Title", completed: false, tag: "Work", date: "Tomorrow"},
                { name: "Task 3 Title", completed: false, tag: "Health", date: "Friday, 23 Mar"},
            ]));
        }
          
        const [items, setItems] = useState(JSON.parse(sessionStorage.getItem("items")));        
        console.log(items);

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

        const popup = Popup(setItems);
      
        div.append(header, navBar, list, popup);
        return div;
      }

    /**
     * Render the app.
     * On change whole app is re-rendered.
     */
    function renderApp() {
        const appContainer = document.getElementById("functional-example");
        appContainer.innerHTML = "";
        appContainer.append(App());
    }

    // initial render
    renderApp();
})();