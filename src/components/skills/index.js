import I18N from "../i18n";

const Partial = ({ data, lang }) => {
  const { skills } = data;

  return (
    <div className="partial">
      <h3>
        <I18N text={skills.title} lang={lang} />
      </h3>
      <ul className="skills">
        {skills.list.map((w, k) => {
          return (
            <li key={k}>
              <h5>{w.title}</h5>
              <div className="bar">
                <div style={{ width: w.value + "%" }}></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Partial;
