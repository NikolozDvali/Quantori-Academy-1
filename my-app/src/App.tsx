import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Routes, Route, useSearchParams} from "react-router-dom";
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import List from './components/List/list';
import Popup from './components/Popup/popup';
import { useDispatch} from "react-redux";
import { setTasksFromServer } from "./redux/tasksSlice";
import { Links } from './components/Links/links';
import { currentTask } from './interface';


function App() {

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);  
  const [currentTask, setCurrentTask] = useState<currentTask>({
    id: 0,
    title: "",
    tag: "",
    date: "",
    isCompleted: false
  });

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
  
  const tagNames = ["all", "health", "work", "home", "other"];

  const [searchParams] = useSearchParams();
  const searchT = searchParams.get("search");

  return (
    <div className="functional-example">
        <div className="container">
          <Header></Header>
          <Navbar setSearchText={setSearchText} value={searchT || ""} showPopup={showPopup} setShowPopup={setShowPopup}></Navbar>
          <Links names={tagNames}></Links>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Routes>
              <Route path='/' element={<List searchText={memorizedText} showPopup={showPopup} setShowPopup={setShowPopup} setCurrentTask={setCurrentTask}></List>}></Route>
              <Route path='/home' element={<List searchText={memorizedText} show={"home"} showPopup={showPopup} setShowPopup={setShowPopup} setCurrentTask={setCurrentTask}></List>}></Route>
              <Route path='/other' element={<List searchText={memorizedText} show={"other"} showPopup={showPopup} setShowPopup={setShowPopup} setCurrentTask={setCurrentTask}></List>}></Route>
              <Route path='/health' element={<List searchText={memorizedText} show={"health"} showPopup={showPopup} setShowPopup={setShowPopup} setCurrentTask={setCurrentTask}></List>}></Route>
              <Route path='/work' element={<List searchText={memorizedText} show={"work"} showPopup={showPopup} setShowPopup={setShowPopup} setCurrentTask={setCurrentTask}></List>}></Route>
            </Routes>
          )} 
          {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} currentTask={currentTask} setCurrentTask={setCurrentTask}></Popup>}
        </div>
      </div>
  );
}

export default App;
