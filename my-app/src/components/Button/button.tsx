import { ButtonProps } from "../../interface";
import './button.css'

export default function Button(props: ButtonProps){
    return (
        <button onClick={props.foo} className={props.name} ref={props.myRef}>{props.text}</button>
    );
}