// import ClockList from './components/ClockList'
// import Form from './components/Form'

import HOCExample from "./components/hoc";



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


      <HOCExample />
    </div>
  );
}

export default App;
