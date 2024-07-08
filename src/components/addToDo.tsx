import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/fetures/todoSlice";

const AddToDo: React.FC = () => {
    const dispatch=useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

 const handleSubmit=()=>{

    const payload={title,description,id:"wjduj"}

    dispatch(addTodo({...payload}))

 }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
        <button onClick={handleSubmit}> Add To Todo</button>
      </div>
    </>
  );
};

export default AddToDo;
