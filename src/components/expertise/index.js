import I18N from "../i18n";

const Partial = ({ data, lang }) => {
  const { expertise } = data;

  return (
    <div className="partial">
      <h3>
        <I18N text={expertise.title} lang={lang} />
      </h3>
      <ul className="item-list laboral">
        {expertise.list.map((w, k) => {
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
