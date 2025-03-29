import { Router, Route } from "preact-router";
import { PageLogin } from "./pages/auth/login";
import { URL } from "./url";
import { useUser } from "./hook/useUser";

export function AppRouter() {
    const privateRoutes = [
        <Route key={URL.auth.login.index} path={URL.auth.login.index} component={PageLogin} />,
    ];

    const publicRoutes = [
        <Route key={URL.auth.login.index} path={URL.auth.login.index} component={PageLogin} />,
    ];
    const { isValidUser } = useUser({});
    if (!isValidUser) {
        return (
            <Router>
                <Route key={"/:id"} path={"/:id"} component={PageLogin} />
                {publicRoutes}
            </Router>
        );
    }
    return (
        <>
            <Router>
                {publicRoutes}
                {privateRoutes}
            </Router>
        </>
    );
}
