
export interface Item{
    title: string,
    isCompleted: boolean,
    tag: string,
    date: string,
    id: number,
}
  
export interface State{
    tasks: Item[],
    searchText: string,
}

export interface Position {
    coords: {
      latitude: number;
      longitude: number;
    };
}
  
export interface Tag {
   tag: string | null;
}
  
export interface tagItem{
    html: HTMLElement,
    title: string,
}