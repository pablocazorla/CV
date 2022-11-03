const Switch = ({ lang, setLang }) => {
  return (
    <div className="switch">
      <div
        className={"switch-opt" + (lang === "en" ? " current" : "")}
        onClick={() => {
          setLang("en");
        }}
      >
        English
      </div>
      <div
        className={"switch-opt" + (lang === "es" ? " current" : "")}
        onClick={() => {
          setLang("es");
        }}
      >
        Español
      </div>
    </div>
  );
};
export default Switch;
