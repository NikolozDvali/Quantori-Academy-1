
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
      items.tasks[index].isCompleted = isCompleted;
      const updatedTask = items.tasks[index];
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
function MyImage(item) {
    const {classList } = {
      classList: ['deleteIcon'],
    };
  
    const deleteItem = () => {
      fetch(`http://localhost:3004/tasks/${item.id}`, {
        method: 'DELETE'
        }).catch(error => console.error(error));
    };
  
    const img = document.createElement('img');
    img.src = './assets/images/Delete.png';
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
    items.tasks.forEach((item, index) => {
        if (item.isCompleted === displayCompleted) {
            const li = document.createElement('li');
            li.classList.add(`listItem--${displayCompleted ? 'isCompleted' : 'uncompleted'}`);
            li.setAttribute("id", `listItem--${displayCompleted ? 'isCompleted' : 'uncompleted'}--${index}`)

            const radioElement = RadioElement(items, item, index, setItems);
            li.appendChild(radioElement);

            const mid = MiddleOfListItem(displayCompleted, item);
            li.appendChild(mid);

            if (!displayCompleted) {
                const img = MyImage(item);
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
export function List(items, setItems) {
    const div = document.createElement("div");
    
    const uncompletedList = ListCompletedAndUncompleted(items, setItems, false);
    const completedList = ListCompletedAndUncompleted(items, setItems, true);
    
    div.classList.add("lists");
    div.appendChild(uncompletedList);
    div.appendChild(completedList);
    return div;
  }