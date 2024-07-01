import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import "./App.scss";
import { MyContextProvider } from "./components/context/EmojiToggler.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Profile from "./routes/Profile.tsx";
import Works from "./routes/Works.tsx";
import Shopping from "./routes/Shopping.tsx";
import { SignInProvider } from "./components/context/SignIn.tsx";
import { MenuContextProvider } from "./components/context/MenuToggler.tsx";
import { MessageContextProvider } from "./components/context/Messages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  { path: "/:_id", element: <Home /> },
  { path: "/shopping", element: <Shopping /> },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/works",
    element: <Works />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyContextProvider>
      <SignInProvider>
        <MenuContextProvider>
          <MessageContextProvider>
            <NextUIProvider>
              <RouterProvider router={router} />
            </NextUIProvider>
          </MessageContextProvider>
        </MenuContextProvider>
      </SignInProvider>
    </MyContextProvider>
  </React.StrictMode>
);
