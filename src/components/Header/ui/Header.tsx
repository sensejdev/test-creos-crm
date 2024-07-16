import { Button, Layout } from "antd";
import { useTranslation } from "react-i18next";
import { getISOWeek } from "date-fns";
import { Link } from "react-router-dom";
import { Theme, useTheme } from "src/app/providers/ThemeProvider";
import { LangSwitcher } from "src/components/LangSwitcher/ui/LangSwitcher.tsx";
import styles from "./Header.module.scss";
import lightIcon from "src/assets/sun-icon.svg";
import darkIcon from "src/assets/moon-icon.svg";
import { useCallback } from "react";

const { Header } = Layout;

export const AppHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const getCurrentWeekNumber = useCallback(() => {
    return getISOWeek(new Date());
  }, []);

  return (
    <Header className={styles.header}>
      <div className={styles.switchers}>
        <div className={styles.langSwitcher}>
          <LangSwitcher />
        </div>

        <div className={styles.week}>{getCurrentWeekNumber()}</div>

        <ul className={styles.links}>
          <li>
            <Link to="/">{t("Главная")}</Link>
          </li>
          <li>
            <Link to="/tasks">{t("Задачи")}</Link>
          </li>
          <li>
            <Link to="/designers">{t("Дизайнеры")}</Link>
          </li>
        </ul>
        <div className={styles.themeSwitcher}>
          <Button
            type="text"
            shape="circle"
            className={styles.btn}
            onClick={toggleTheme}
          >
            {<img src={theme === Theme.DARK ? lightIcon : darkIcon} alt="" />}
          </Button>
        </div>
      </div>
    </Header>
  );
};
