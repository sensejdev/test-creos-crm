import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "src/config/routeConfig/routeConfig.tsx";

const AppRouter = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
