import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import "@/app.css";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/login"
            element={
                <div>Hell world</div>
            }
        />
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
