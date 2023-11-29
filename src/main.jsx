import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="bg-[#F5F7F8]">
          <RouterProvider router={Routes}></RouterProvider>
          <Toaster />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
