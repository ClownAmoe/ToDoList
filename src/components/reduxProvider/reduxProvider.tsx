"use client";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import { ProviderProps } from "./type";

export default function ReduxProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
