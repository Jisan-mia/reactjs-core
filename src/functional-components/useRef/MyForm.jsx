import React, { useEffect, useRef } from "react";
import Input from "./Input";
import MyTimer from "./MyTimer";

const MyForm = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <MyTimer />
      <hr />
      <p>
        {/* <input ref={inputRef} type="text" placeholder="enter something.." /> */}
        <Input ref={inputRef} type={'text'} placeholder={'type something'} />
      </p>
    </div>
  );
};

export default MyForm;
