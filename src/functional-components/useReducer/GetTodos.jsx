import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  todos: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        todos: action.result,
        error: "",
      };
    case "FAILURE":
      return {
        loading: false,
        todos: [],
        error: "Something went wrong fetching todos",
      };
  }
};

const GetTodos = () => {
  const [todosState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        dispatch({
          type: "SUCCESS",
          result: data,
        });
      } catch {
        dispatch({
          type: "FAILURE",
        });
      }
    })();
  }, []);

  return (
    <div>
      {todosState.loading ? (
        "Loading todo.."
      ) : todosState?.todos?.length > 0 && (
        <ol>
          {todosState.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      )}
      {todosState.error || null}
    </div>
  );
};

export default GetTodos;
