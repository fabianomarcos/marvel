import React from "react";

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";
import { StoreProvider } from "./store";

function AppProvider({ children }: any) {
  return (
    <AuthProvider>
      <StoreProvider>
        <ToastProvider>{children}</ToastProvider>
      </StoreProvider>
    </AuthProvider>
  );
}

export default AppProvider;
