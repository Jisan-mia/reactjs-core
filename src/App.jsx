// import ClockList from './components/ClockList'
// import Form from './components/Form'

import React from "react";
import Section from "./components/context-api/Section";
import ThemeContext from "./components/context-api/themeContext";

export default class App extends React.Component {
  state = {
    lists: [1],
    theme: "dark",
  };

  handleChangeTheme = (newTheme) => {
    this.setState({
      theme: newTheme
    })
  }

  render() {
    const {theme} = this.state
    return (
      <div>
        {/* <ClockList lists={this.state.lists} />
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
        {/* <MyCounter
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
      /> */}

        {/* context api */}
        <ThemeContext.Provider value={{theme: theme, handleChangeTheme: this.handleChangeTheme}}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
