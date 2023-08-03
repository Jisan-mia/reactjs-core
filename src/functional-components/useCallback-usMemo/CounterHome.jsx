import React, { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import ShowCount from "./ShowCount";
import Title from "./Title";

const CounterHome = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrementByOne = useCallback(() => setCount1((prevCount) => prevCount + 1), []);
  const handleIncrementByFive = useCallback(() => setCount2((prevCount) => prevCount + 5),[]);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while(i < 1000000000) i += 1
    return count1 % 2 === 0
  }, [count1])

  return <div>
    <Title />
    <ShowCount title='Counter 1' count={count1} />
    <p>{isEvenOrOdd ? 'Even' : 'Odd'}</p>
    <Button handleClick={handleIncrementByOne}>Increment by 1</Button>
    
    <hr />
    <ShowCount title='Counter 2' count={count2} />
    <Button handleClick={handleIncrementByFive}>Increment by 5</Button>
    
  </div>;
};

export default CounterHome;
