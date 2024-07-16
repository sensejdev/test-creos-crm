import React from "react";
import { useSelector } from "react-redux";
import styles from "./TopDesigners.module.scss";
import { RootState } from "src/app/providers/StoreProvider/config/store.ts";
import { selectTopDesigners } from "src/entities/Designers/model/selectors/designersSelector.ts";
import { useTranslation } from "react-i18next";

export const TopDesigners: React.FC = () => {
  const designers = useSelector((state: RootState) =>
    selectTopDesigners(state),
  );
  const { t } = useTranslation();

  return (
    <>
      <h2 className={styles.title}>{t("Топ дизайнеры")}</h2>
      <div className={styles.list}>
        {designers.map((designer) => (
          <div key={designer.username} className={styles.item}>
            <img src={designer.avatar} alt={`${designer.username} avatar`} />
            <p>{designer.username}</p>
            <p>{designer.medianTime}</p>
            <p>{designer.completedTasks}</p>
          </div>
        ))}
      </div>
    </>
  );
};
