export interface OnSubmitType {
  detail: string;
  isOneCheck: boolean;
  isEveryCheck: boolean;
  startTime?: string;
  endTime?: string;
  everyDayTime?: string;
};

export interface inputWrapPropsType {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todos: todosType[];
  setTodos: React.Dispatch<React.SetStateAction<todosType[]>>;
};

export interface TodoBoxPropsType {
  item: todosType;
  id: string;
  title: string;
  upodateTime: string; 
  startTime?:string;
  endTime?: string;
  everyDayTime?: string;
};

export interface todosType {
  id: string;
  title: string;
  upodateTime: string;
  isFinish: boolean;
  startTime?:string;
  endTime?: string;
  everyDayTime?: string;
};

export interface todosPropsType {
  todos: todosType[];
  setTodos: React.Dispatch<React.SetStateAction<todosType[]>>;
}