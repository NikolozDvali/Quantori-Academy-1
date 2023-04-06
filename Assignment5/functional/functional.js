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
    function ListTitle(){
        const h1 = document.createElement('h1');
        h1.innerText = "All Tasks";
        h1.classList.add("listTitle");
        return h1;
    }

    /**
     * Functional component for the list
     * @param items {string[]}
     * @returns {HTMLElement} - List element
     */
    function List({items}) {
        const div = document.createElement("div");
        div.classList.add("listsDiv");
        div.appendChild(ListTitle());

        const listItems = items.map((item, index) => {
            const radio = `<input type="radio" name="task" onClick="console.log('hello')">`;
            const p = `<p class="${item.completed ? 'completed' : ''}">${item.name}</p>`;
            const img = `<img src="images/Delete.svg" class="deleteIcon">`;
            return `<li class="listItem">${radio}${p}${img}</li>`;
        }).join("");

        const ul = document.createElement("ul");
        ul.classList.add("ul");
        ul.innerHTML = listItems;
        div.appendChild(ul);
        return div;
    }
    /**
     * Button component
     * @param text {string}
     * @param onClick {function}
     * @returns {HTMLButtonElement} - Button element
     */
    function Button({text, onClick}) {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.onclick = onClick;
        return button;
    }

    //returns searchBar;
    function SearchBar(){
        const form = document.createElement("form");
        form.classList.add("navBar--form");

        const search = document.createElement('input');
        search.setAttribute('type', 'text');
        search.setAttribute('placeHolder', "Search Task");
        search.classList.add("searchBar");

        form.appendChild(search);
        return form;
    }

    //returns navBar;
    function NavBar(){
        const div = document.createElement("div");
        const searchBar = SearchBar();
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

    /**
     * App container
     * @returns {HTMLDivElement} - The app container
     */
    function App() {
        const [items, setItems] = useState([{name:"Task 1 title", completed: false}, {name:"Task 2 title", completed:false}, {name:"Task 3 title", completed: false}]);
        
        function addItem() {
            setItems([...items, {name: `Task ${items.length + 1} title`, completed: false}]);
        }
        
        const div = document.createElement("div");
        div.classList.add("container");
        const header = Header();
        const navBar = NavBar();
        const list = List({items});
        const button = Button({text: "+ New Task", onClick: addItem});
        button.classList.add("addNewButton");
        navBar.appendChild(button);

        div.append(header, navBar, list);
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