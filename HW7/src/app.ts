import "./styles/main.css"
import { List } from "./List";
import { Popup } from "./Popup";
import { getWeatherData, WeatherContainer } from "./Weather";
import { Item } from "./Interfaces";
import { State } from "./Interfaces";

(function () {

    let state: State = {
        searchText: '',
        tasks: [],
    };

    /**
     * Global application state
     * @template T
     * @param {T} initialValue
     * @returns {[T, function(T): void]}
     */
    function useState(initialValue: State): [State, (newValue: State) => void] {
        state = state || initialValue;

        function setValue(newValue: State) {
            state.tasks = newValue.tasks;
            state.searchText = newValue.searchText;
            if(newValue.hasOwnProperty("searchText")){
                localStorage.setItem("searchText", newValue.searchText);
            }
            renderApp();
        }

        return [state, setValue];
    }


    /**
     * Button component
     * @param text {string}
     * @param onClick {function}
     * @returns {HTMLButtonElement} - Button element
     */
    function Button({ text, onClick, className }: { text: string, onClick: () => void, className: string }): HTMLButtonElement {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.onclick = onClick;
        button.classList.add(className);
        return button;
      }

    function makeSomeVisible(state: State, str: string){
        state.tasks.map((item, index) => {
            let uncompletedItem = document.getElementById(`listItem--uncompleted--${index}`);
            let completedItem = document.getElementById(`listItem--isCompleted--${index}`);
            if(item.title.toLowerCase().includes(str.toLowerCase())){
                if(item.isCompleted==false && uncompletedItem!=null){
                    uncompletedItem.style.display = "flex";
                }else if(completedItem!=null){
                    completedItem.style.display = "flex";
                }
            }else{
                if(item.isCompleted==false && uncompletedItem!=null){
                    uncompletedItem.style.display = "none";
                }else if(completedItem!=null){
                    completedItem.style.display = "none";
                }
            }
        });
    }

    //returns searchBar;
    function SearchBar(state: State, setState: (state: State)=>void){
        const form = document.createElement("form");
        form.classList.add("navBar--form");

        const search = document.createElement('input');
        search.setAttribute('type', 'text');
        search.setAttribute('placeHolder', "Search Task");
        search.classList.add("searchBar");

        if(state.searchText!=null){
            search.value = state.searchText;
            setTimeout(()=>search.focus(), 0);
            setTimeout(()=>makeSomeVisible(state, search.value),0);
        }

        search.oninput = (event) =>{
            const str = (event.target as HTMLInputElement).value;
            makeSomeVisible(state, str);
            let newState: State = state;
            newState.searchText = str;
            setState(newState);
        }

        form.appendChild(search);
        return form;
    }

    //returns navBar;
    function NavBar(state: State, setState: (state: State)=>void){
        const div = document.createElement("div");
        const searchBar = SearchBar(state, setState);
        div.appendChild(searchBar);
        div.classList.add("navBar");
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

    /**
     * App container
     * @returns {HTMLDivElement} - The app container
     */
    function App(): HTMLDivElement {
        //on the first enter on the page, gets data from the server;
        const [innerState, setInnerState] = useState({
            searchText: '',
            tasks: [],
          });
          
        if (state.tasks.length === 0) {
            fetch('http://localhost:3004/tasks')
                .then(response => response.json())
                .then(data => {
                let newState = innerState;
                newState.tasks = data;
                setInnerState(newState);
            })
                .catch(error => console.error(error));
        }

        if(localStorage.getItem("searchText")){
            state.searchText = localStorage.getItem("searchText");
        }

        function openPopup(){
            const popupDiv = document.getElementsByClassName("popupDiv")[0] as HTMLElement;
            popupDiv.style.display = "flex";
        }
      
         const div = document.createElement("div");
         div.classList.add("container");
         const header = Header();
         const list = List(innerState,setInnerState);
         const navBar = NavBar(innerState, setInnerState);
         const button = Button({ text: "+ New Task", className: "addNewButton", onClick: openPopup });
         navBar.appendChild(button);
         const popup = Popup();
      
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
        getWeatherData();
    }

    // initial render
    renderApp();
})();