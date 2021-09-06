import React, { useRef, useState } from 'react';

interface ITodoFormProps {
  onSubmit(text: string): void;
}

// const TodoForm: React.FC<{ onSubmit: (text: string) => void }> = ({
const TodoForm: React.FC<ITodoFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>('');
  // const ref = useRef<HTMLInputElement>(null);

  let activeClass = 'label color active';

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handelForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // console.log(ref.current!.value);
    // console.log(ref.current!.isConnected); // true or false
    // ref.current!.value /= ''; // setText('');
    onSubmit(text);
    setText('');
  };

  return (
    <>
      <form className="input-field col s12" onSubmit={handelForm}>
        <input
          id="text"
          type="text"
          // ref={ref}
          value={text}
          className="validate"
          onChange={changeHandler}
        />
        <label htmlFor="text" className={activeClass}>
          Enter text
        </label>
      </form>
    </>
  );
};

export default TodoForm;
