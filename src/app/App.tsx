import React, { Suspense } from "react";
import { Layout } from "antd";
import clsx from "clsx";
import { useTheme } from "./providers/ThemeProvider";
import { AppHeader } from "../components/Header/ui/Header.tsx";
import AppRouter from "src/app/providers/router/ui/AppRouter.tsx";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  color: "#fff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  minHeight: "100vh",
};

function App() {
  const { theme } = useTheme();

  return (
    <div className={clsx("app", theme)}>
      <Suspense fallback="">
        <Layout style={layoutStyle}>
          <AppHeader />
          <Content style={contentStyle}>
            <AppRouter />
          </Content>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
