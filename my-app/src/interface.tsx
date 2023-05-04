import { Dispatch, SetStateAction } from "react";

export interface ButtonProps{
    foo: ()=>void;
    name: string;
    text: string;
    myRef?: any;
}

export interface ListItem{
    title: string;
    isCompleted: boolean;
    tag: string;
    date: string;
    id: number;
}

export interface ListItemInterface{
    id: number;
    isCompleted: boolean;
    title: string;
    tag:string;
    date: string;
    key: number;
}

export interface ListProps{
    displayCompleted: boolean;
    listItems: ListItemInterface[];
    foo: Dispatch<SetStateAction<ListItemInterface[]>>;
    searchText: string;
}

export interface Position {
    coords: {
      latitude: number;
      longitude: number;
    };
}

export interface PopupPropsInterface{
    newTaskState: ListItemInterface;
    setNewTaskState: React.Dispatch<React.SetStateAction<ListItemInterface>>;
}

export interface currentTask {
    id: number;
    title: string;
    tag: string;
    date: string;
    isCompleted: boolean;
}
