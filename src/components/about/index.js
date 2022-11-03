import I18N from "../i18n";

const Partial = ({ data, lang }) => {
  const { about } = data;
  return (
    <div className="partial">
      <h3>
        <I18N text={about.title} lang={lang} />
      </h3>
      <p className="editable">
        <I18N text={about.desc} lang={lang} />
      </p>
    </div>
  );
};

export default Partial;
