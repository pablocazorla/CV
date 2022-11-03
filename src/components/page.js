import Summary from "./summary";
import About from "./about";
import Work from "./work-experience";
import Education from "./education";
import Skills from "./skills";
import Expertise from "./expertise";

const Page = ({ data, lang }) => {
  return (
    <div className="page">
      <div className="page-content">
        <Summary data={data} lang={lang} />
        <div className="resume">
          <About data={data} lang={lang} />
          <div className="row">
            <div className="col">
              <Work data={data} lang={lang} />
              <Education data={data} lang={lang} />
            </div>
            <div className="col">
              <Skills data={data} lang={lang} />
              <Expertise data={data} lang={lang} />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <i className="fa fa-envelope-o"></i> pablo.david.cazorla@gmail.com
      </footer>
    </div>
  );
};

export default Page;
