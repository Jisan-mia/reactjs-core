const rootElement = document.querySelector("#root");

// const myElement = React.createElement(
//     'div',
//     null,
//     [
//         React.createElement('p', null, 'Hello World'),
//         React.createElement('p', null, 'Hello World Again')
//     ]
// )

// jsx
// we need babel to transpile below code into javascript
// const myElement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="btn">Increment</button>
//         </div>
//     </div>
// )

// above equivalent react create element code
// const myElement1 = React.createElement(
//     'div',
//     null,
//     React.createElement(
//         'h1',
//         {
//             id: 'display'
//         },
//         '0'
//     ),
//     React.createElement(
//         'div',
//         null,
//         React.createElement(
//             'button',
//             {
//                 id: 'btn'
//             },
//             'Increment'
//         )
//     )
// )

const Increment = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div id="counter">
      <h1 id="display">{counter}</h1>
      <div>
        <button id="btn" onClick={() => setCounter(counter + 1)}>
          Increment+
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <div id="container">
    <Increment />
    <Increment />
    <Increment />
  </div>,
  rootElement
);
