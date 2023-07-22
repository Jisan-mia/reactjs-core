import React from "react";
import MyCounter from "../render-props/MyCounter";
import MyHoverCounter from "../render-props/MyHoverCounter";
import ThemeChanger from "./ThemeChanger";
import ThemeContext from "./themeContext";

export default class Content extends React.Component {
  render() {
    const {theme, handleChangeTheme} = this.context
    return (
    <div>
      <h3>Contents</h3>

      <div style={{ border: "1px solid lightgrey", marginBottom: "0.8rem" }}>
        <h1>Hover Counter</h1>
        <MyCounter
          render={(count, handleIncrementCount) => (
            <MyHoverCounter
              count={count}
              handleIncrementCount={handleIncrementCount}
            />
          )}
        />
      </div>

      <div style={{ border: "1px solid lightgrey" }}>
        <h1>Theme Switcher</h1>
        {/* render props way */}
        {/* <ThemeContext.Consumer>
          {({ theme, handleChangeTheme }) => <ThemeChanger theme={theme} handleChangeTheme={handleChangeTheme}/>}
        </ThemeContext.Consumer> */}

        <ThemeChanger theme={theme} handleChangeTheme={handleChangeTheme} />
      </div>
    </div>
  );
  }
}
Content.contextType = ThemeContext