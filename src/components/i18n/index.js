const I18N = ({ text, lang }) => {
  const t = text[lang] || text?.en || "";
  return <>{t}</>;
};
export default I18N;
