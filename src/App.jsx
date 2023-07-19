// import ClockList from './components/ClockList'
// import Form from './components/Form'

import MyClickCounter from "./components/render-props/MyClickCounter";
import MyCounter from "./components/render-props/MyCounter";
import MyHoverCounter from "./components/render-props/MyHoverCounter";

function App() {
  const lists = [1];
  return (
    <div>
      {/* <ClockList lists={lists} />
      <hr />
      <h1>React Forms</h1>
      <Form /> */}

      {/* <BoilingCalc /> */}

      {/* inheritance */}
      {/* <Text /> */}

      {/* composition */}
      {/* <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji> */}

      {/* <FilterableProductTable /> */}

      {/* <HOCExample /> */}

      {/* render props */}
      <MyCounter
        render={(count, handleIncrementCount) => (
          <MyClickCounter
            count={count}
            handleIncrementCount={handleIncrementCount}
          />
        )}
      />

      <MyCounter
        render={(count, handleIncrementCount) => (
          <MyHoverCounter
            count={count}
            handleIncrementCount={handleIncrementCount}
          />
        )}
      />
    </div>
  );
}

export default App;
