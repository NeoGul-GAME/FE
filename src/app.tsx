import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import "@/../app.css";

const LoginPage = lazy(() => import("@/login/page"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/login"
            element={
                <Suspense fallback={<div>Loading login page</div>}>
                    <LoginPage />
                </Suspense>
            }
        />
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
