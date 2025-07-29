import * as FlagIcons from "country-flag-icons/react/3x2";

const languagesCodes = {
  en: "US",
  it: "IT",
  fr: "FR",
  es: "ES",
  ja: "JP",
  zh: "CN",
  ko: "KR",
  de: "DE",
  ru: "RU",
  hi: "IN",
};

export default function LanguageFlags({ language }) {
  const languageCode = languagesCodes[language];
  const Flags = FlagIcons[languageCode];

  return (
    <>
      <Flags title={language} />
    </>
  );
}
