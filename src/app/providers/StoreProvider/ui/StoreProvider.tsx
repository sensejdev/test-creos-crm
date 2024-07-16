import { Provider } from "react-redux";
import { store } from "src/app/providers/StoreProvider";
import { ReactNode } from "react";

interface IStoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider = ({ children }: IStoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
