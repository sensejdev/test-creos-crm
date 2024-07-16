import { useTranslation } from "react-i18next";
import { Button } from "antd";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <Button onClick={toggleLanguage}>
        {i18n.language === "ru" ? "en" : "ru"}
      </Button>
    </div>
  );
};
