import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../types/todoTypes";

// StateType

const ListContainer: React.FC = () => {
  const { todoList } = useSelector((state: StateType) => state.todo);

  return (
    <>
      <ul>
        {todoList.length > 0 &&
          todoList.map(({ title, description, id }) => {
            return (
              <li key={id}>
                {title} {description}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ListContainer;
