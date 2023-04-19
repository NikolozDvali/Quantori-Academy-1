import { getWeatherData } from "./weather.js";
import { Popup } from "./popup.js";
import { List } from "./list.js";
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

    function makeSomeVisible(items, str){
        items.map((item, index) => {
            let uncompletedItem = document.getElementById(`listItem--uncompleted--${index}`);
            let completedItem = document.getElementById(`listItem--isCompleted--${index}`);
            if(item.name.toLowerCase().includes(str.toLowerCase())){
                if(item.isCompleted==false){
                    uncompletedItem.style.display = "flex";
                }else{
                    completedItem.style.display = "flex";
                }
            }else{
                if(item.isCompleted==false){
                    uncompletedItem.style.display = "none";
                }else{
                    completedItem.style.display = "none";
                }
            }
        });
    }

    //returns searchBar;
    function SearchBar(items, setItems){
        const form = document.createElement("form");
        form.classList.add("navBar--form");

        const search = document.createElement('input');
        search.setAttribute('type', 'text');
        search.setAttribute('placeHolder', "Search Task");
        search.classList.add("searchBar");


        search.oninput = (event) =>{
            const str = event.target.value;
            makeSomeVisible(items, str);
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