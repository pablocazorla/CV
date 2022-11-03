import pabloImg from "../../assets/img/pablo-img.jpg";
import I18N from "../i18n";

const Summary = ({ data, lang }) => {
  const { summary } = data;
  return (
    <div className="summary">
      <div className="portrait">
        <img src={pabloImg} alt="Pablo Cazorla" />
      </div>
      <div className="portrait-print">
        <img src={pabloImg} alt="Pablo Cazorla" />
      </div>
      <div className="summary-content">
        <h1>Pablo Cazorla</h1>
        <h2>
          <I18N text={summary.title} lang={lang} />
        </h2>
        <ul className="clearfix basic-data-list">
          <li>
            <span className="icon">
              <i className="fa fa-calendar"></i>
            </span>{" "}
            <I18N text={summary.date} lang={lang} />
          </li>

          <li>
            <span className="icon">
              <i className="fa fa-map-marker"></i>
            </span>{" "}
            <I18N text={summary.location} lang={lang} />
          </li>
          <li>
            <span className="icon">
              <i className="fa fa-envelope"></i>
            </span>{" "}
            <span style={{ fontSize: "8pt" }}>
              <I18N text={summary.email} lang={lang} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;
