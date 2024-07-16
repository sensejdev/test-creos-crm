import { RouteProps } from "react-router-dom";
import { Main } from "src/pages/Main/ui/Main.tsx";
import { Tasks } from "src/pages/Tasks/ui/Tasks.tsx";
import { DesignerTable } from "src/pages/DesignerTable";

export enum AppRoutes {
  MAIN = "main",
  TASKS = "tasks",
  DESIGNERS = "designers",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.TASKS]: "/tasks",
  [AppRoutes.DESIGNERS]: "/designers",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
  [AppRoutes.TASKS]: {
    path: RoutePath.tasks,
    element: <Tasks />,
  },
  [AppRoutes.DESIGNERS]: {
    path: RoutePath.designers,
    element: <DesignerTable />,
  },
};
