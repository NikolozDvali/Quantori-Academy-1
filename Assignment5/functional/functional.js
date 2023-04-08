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
            }
        return img;
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
    
                const pElement = document.createElement('p');
                pElement.classList.add(`taskParagraph--${displayCompleted ? 'completed' : 'uncompleted'}`);
                pElement.textContent = item.name;
                li.appendChild(pElement);
    
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

        if(localStorage.getItem("searchInput") != null && localStorage.getItem("searchInput")!=""){
            search.value = localStorage.getItem("searchInput");
        }

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
    function Popup(items, setItems){
        //function to add new item into list;
        function addItem(){
            if(document.getElementsByClassName("popupField")[0].value.length>0){
                setItems([
                    ...items,
                    { name: document.getElementsByClassName("popupField")[0].value, completed: false},
                  ]);
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
        const [items, setItems] = useState([
          { name: "Task 1 title", completed: false},
          { name: "Task 2 title", completed: false},
          { name: "Task 3 title", completed: false},
        ]);

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
        console.log(items);
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