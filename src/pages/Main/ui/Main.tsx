import React, { useEffect } from "react";
import clsx from "clsx";
import { CommentsList } from "src/components/CommentsList/ui/CommentsList.tsx";
import { TopDesigners } from "src/components/TopDesigners/ui/TopDesigners.tsx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/app/providers/StoreProvider/config/store.ts";
import { commentsActions } from "src/entities/Comments/model/slices/commentsSlice.ts";
import { designersActions } from "src/entities/Designers/model/slices/designersSlice.ts";
import styles from "./Main.module.scss";
import axios from "axios";

export const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        "https://sandbox.creos.me/api/v1/comment/",
      );
      dispatch(commentsActions.setComments(response.data));
    };

    const fetchDesigners = async () => {
      const response = await axios.get(
        "https://sandbox.creos.me/api/v1/designer/",
      );
      dispatch(designersActions.setDesigners(response.data));
    };

    fetchComments();
    fetchDesigners();
  }, [dispatch]);

  return (
    <div className={clsx("container", styles.main)}>
      <CommentsList />
      <TopDesigners />
    </div>
  );
};
