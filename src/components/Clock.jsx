import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      locale: "bn-BD",
    };

    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // handleClick() {
  //   this.setState({
  //     locale: 'en-US'
  //   })
  // }
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="header">
          <span className="timer">
            Current Time: {date.toLocaleTimeString(locale)}
          </span>
        </h1>

        {locale === "en-US" ? (
          <button
            onClick={() => {
              this.handleClick("bn-BD");
            }}
          >
            Change locale to BD
          </button>
        ) : (
          <button
            onClick={() => {
              this.handleClick("en-US");
            }}
          >
            Change locale to US
          </button>
        )}
      </div>
    );
  }
}

export default Clock;
