import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && title !== '') {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12 ">
        <input
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          value={title}
          type="text"
          id="title"
          className=" validate"
          placeholder="Введите название задачи"
        />
      </div>
    </div>
  );
};

export default TodoForm;
