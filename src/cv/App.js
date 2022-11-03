import { useState } from "react";
import data from "./data";
import Page from "../components/page";
import Switch from "../components/switch";

const App = () => {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <Switch lang={lang} setLang={setLang} />
      <Page data={data} lang={lang} />
    </div>
  );
};

export default App;
