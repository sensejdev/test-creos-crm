import React from "react";
import { useSelector } from "react-redux";
import { selectLatestComments } from "src/entities/Comments/model/selectors/commentsSelectors.ts";
import styles from "./CommentsList.module.scss";
import { useTranslation } from "react-i18next";

export const CommentsList: React.FC = () => {
  const comments = useSelector(selectLatestComments);
  const { t } = useTranslation();

  return (
    <>
      <h2 className={styles.title}>{t("Последние комментарии")}</h2>
      <div className={styles.list}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.item}>
            <img
              src={comment.designer.avatar}
              alt={`${comment.designer.username} avatar`}
              className={styles.avatar}
            />
            <p>{new Date(comment.date_created).toLocaleString()}</p>
            <p>{comment.designer.username}</p>
            <p>{comment.issue}</p>
            <p className={styles.message}>{comment.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};
