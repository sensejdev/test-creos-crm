import React from "react";
import { YAxis, YAxisProps } from "recharts";

export const CustomYAxis: React.FC<YAxisProps> = (props) => {
  const { ...rest } = props;
  return <YAxis {...rest} />;
};
