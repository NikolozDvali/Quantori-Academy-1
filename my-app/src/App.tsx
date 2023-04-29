import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import List from './components/List/list';
import Popup from './components/Popup/popup';
import { ListItemInterface } from './interface';

function App() {
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState<ListItemInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //fetches initial data when page is loaded;
  useEffect(() => {
    fetch('http://localhost:3004/tasks')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(error =>
        console.error(error));
      return () => {
        setIsLoading(false);
      }
  }, []);

  //so that unnecessary calculations are avoided; 
  const memoizedItems = useMemo(() => {
    return items.map((item) => {
        return {
          ...item,
        }
    });
  }, [items]);

  const memorizedText = useMemo(() => {
    return searchText;
  }, [searchText]);
  
  return (
    <div className="functional-example">
      <div className="container">
        <Header></Header>
        <Navbar items={memoizedItems} searchText={memorizedText} setSearchText={setSearchText}></Navbar>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <List items={memoizedItems} setItems={setItems} searchText={memorizedText}></List>
        )}
        <Popup items={memoizedItems} setItems={setItems}></Popup>
      </div>
    </div>
  );
}

export default App;
