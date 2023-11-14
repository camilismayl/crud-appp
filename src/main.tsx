import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTodo from "./pages/Add/AddTodo";
import EditTodo from "./pages/Edit/EditTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-todo",
    element: <AddTodo />,
  },
  {
    path: "/edit-todo/:id",
    element: <EditTodo />,
  },
  {
    path: "*",
    element: <h1>Page not found: 404</h1>,
  },
]);
// ...
const queryClient = new QueryClient({
  queries: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  },
  mutations: {},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
