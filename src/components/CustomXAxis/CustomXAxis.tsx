import React from "react";
import { XAxis, XAxisProps } from "recharts";

export const CustomXAxis: React.FC<XAxisProps> = (props) => {
  const { dataKey = "week", ...rest } = props;
  return <XAxis dataKey={dataKey} {...rest} />;
};
