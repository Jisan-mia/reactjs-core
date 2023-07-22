const ThemeChanger = ({ theme, handleChangeTheme }) => {
  const style =
    theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;


  return (
    <div style={{ ...style, padding: "0.5rem" }}>
      <label htmlFor="light">
        <input
          onChange={handleChangeTheme}
          type="radio"
          checked={theme === "light"}
          name="theme"
          id="light"
        />
        Light
      </label>
      <label htmlFor="dark">
        <input
          onChange={handleChangeTheme}
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
