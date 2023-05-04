import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import List from './components/List/list';
import Popup from './components/Popup/popup';

import { useDispatch} from "react-redux";
import { setTasksFromServer } from "./redux/tasksSlice";

function App() {

  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //fetches initial data when page is loaded;
  useEffect(() => {
    fetch('http://localhost:3004/tasks')
      .then(response => response.json())
      .then(data => {
        dispatch(setTasksFromServer(data));
      })
      .catch(error =>
        console.error(error));
      return () => {
        setIsLoading(false);
      }
  }, [dispatch]);

  const memorizedText = useMemo(() => {
    return searchText;
  }, [searchText]);
  
  return (
    <div className="functional-example">
      <div className="container">
        <Header></Header>
        <Navbar setSearchText={setSearchText}></Navbar>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <List searchText={memorizedText}></List>
         )} 
        <Popup></Popup>
      </div>
    </div>
  );
}

export default App;
