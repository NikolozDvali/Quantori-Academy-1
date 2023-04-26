import { useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import List from './components/List/list';
import Popup from './components/Popup/popup';
import { ListItemInterface } from './interface';

function App() {
  const [items, setItems] = useState<ListItemInterface[]>([
    {
      "title": "grgwheh",
      "isCompleted": true,
      "tag": "health",
      "date": "Sunday, 2 May",
      "id": 25
    },
    {
      "title": "gamarjoba",
      "isCompleted": false,
      "tag": "home",
      "date": "Thursday, 4 Dec",
      "id": 27
    },
    {
      "title": "gfgds",
      "isCompleted": false,
      "tag": "home",
      "date": "Thursday, 14 Mar",
      "id": 29
    },
    {
      "title": "me var nika",
      "tag": "other",
      "date": "Thursday, 4 Dec",
      "isCompleted": false,
      "id": 30
    },
    {
      "title": "salami",
      "tag": "work",
      "date": "Thursday, 5 Mar",
      "isCompleted": true,
      "id": 31
    },
    {
      "title": "bolo testi",
      "tag": "health",
      "date": "Friday, 11 Nov",
      "isCompleted": false,
      "id": 32
    }
  ]);
 

  return (
    <div className="functional-example">
      <div className="container">
        <Header></Header>
        <Navbar></Navbar>
        <List items={items} setItems={setItems}></List>
        <Popup></Popup>
      </div>
    </div>
  );
}

export default App;
