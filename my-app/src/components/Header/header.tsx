import './header.css'
import Weather from '../Weather/weather'

export default function Header(){
    return (<div className="header">
        <p className='headerName'>To Do List</p>
        <Weather></Weather>
    </div>);
}