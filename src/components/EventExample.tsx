import React, { useRef, useState } from 'react';

const EventExample = () => {

  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type='text' placeholder='State'/>
      <input ref={inputRef} type='text' placeholder='Ref'/>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default EventExample;
