export interface TodoType{
    title:string
    description:string
    id:string
}

export interface StateType {
    todo: { todoList: TodoType[] };
  }