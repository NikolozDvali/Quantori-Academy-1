import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './links.css'

export function Links({names}:{names: string[]}){
    return(
      <div className="tagButtons">
      {names.map((name, index) => {
        if (name === "all") {
          return (
            <Link key={index} to="/" className={"tagButton__"+name}>
              {name}
            </Link>
          );
        } else {
          return (
            <Link key={index} to={`/${name}`}  className={"tagButton__"+name}>
              {name}
            </Link>
          );
        }
      })}
    </div>
    );
}