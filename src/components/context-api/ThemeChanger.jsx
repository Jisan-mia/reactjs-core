const ThemeChanger = ({ theme, handleChangeTheme }) => {
  const style =
    theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;

  function changeTheme(e) {
    handleChangeTheme(e.target.id);
  }
  return (
    <div style={{ ...style, padding: "0.5rem" }}>
      <label htmlFor="light">
        <input
          onChange={changeTheme}
          type="radio"
          checked={theme === "light"}
          name="theme"
          id="light"
        />
        Light
      </label>
      <label htmlFor="dark">
        <input
          onChange={changeTheme}
          type="radio"
          checked={theme === "dark"}
          name="theme"
          id="dark"
        />
        Dark
      </label>
    </div>
  );
};

export default ThemeChanger;
