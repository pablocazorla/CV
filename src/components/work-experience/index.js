import I18N from "../i18n";

const Partial = ({ data, lang }) => {
  const { work } = data;

  return (
    <div className="partial pb-0">
      <h3>
        <I18N text={work.title} lang={lang} />
      </h3>
      <ul className="item-list laboral">
        {work.list.map((w, k) => {
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
