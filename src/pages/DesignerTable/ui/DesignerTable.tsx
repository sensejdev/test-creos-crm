import React, { useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
} from "src/app/providers/StoreProvider/config/store.ts";
import { fetchDesigners } from "src/entities/Designers/model/slices/designersSlice.ts";
import { Avatar, Breakpoint, Table } from "antd";
import { IDesigner } from "src/shared/types";
import styles from "./DesignerTable.module.scss";
import { useTranslation } from "react-i18next";

export const DesignerTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const designers = useSelector(
    (state: RootState) => state.designers.designers,
  );
  const loading = useSelector((state: RootState) => state.designers.loading);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchDesigners());
  }, [dispatch]);

  const columns = [
    {
      title: t("Аватар"),
      dataIndex: "avatar",
      key: "avatar",
      responsive: ["md"] as Breakpoint[],
      render: (avatar: string) => <Avatar src={avatar} />,
    },
    {
      title: t("Имя дизайнера"),
      dataIndex: "username",
      key: "username",
      sorter: (a: IDesigner, b: IDesigner) =>
        a.username.localeCompare(b.username),
    },
    {
      title: t("Почта"),
      className: "hide-on-small",
      dataIndex: "email",
      responsive: ["md"] as Breakpoint[],
      key: "email",
      sorter: (a: IDesigner, b: IDesigner) => a.email.localeCompare(b.email),
    },
    {
      title: t("Задачи закрытые"),
      dataIndex: "tasksClosed",
      key: "tasksClosed",
      render: (_, designer: IDesigner) =>
        designer.issues.filter((issue) => issue.status === "Done").length,
    },
    {
      title: t("Задачи в процессе"),
      dataIndex: "tasksInProgress",
      key: "tasksInProgress",
      render: (_, designer: IDesigner) =>
        designer.issues.filter((issue) => issue.status === "In Progress")
          .length,
    },
  ];

  return (
    <div className={clsx("container", styles.box)}>
      <Table
        className={styles.table}
        dataSource={designers}
        columns={columns}
        loading={loading}
        rowKey={(record) => record.username}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};
