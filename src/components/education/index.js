import I18N from "../i18n";

const Partial = ({ data, lang }) => {
  const { education } = data;

  return (
    <div className="partial">
      <h3>
        <I18N text={education.title} lang={lang} />
      </h3>
      <ul className="item-list laboral">
        {education.list.map((w, k) => {
          return (
            <li key={k}>
              <h4>
                <I18N text={w.title} lang={lang} />
              </h4>
              <p>
                <I18N text={w.desc} lang={lang} />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Partial;
