import { Router, Route } from "preact-router";
import { PageLogin } from "./pages/auth/login";
import { URL } from "./url";
import { useUser } from "./hook/useUser";
import { PageRegister } from "./pages/auth/register";
import { PageForgotPassword } from "./pages/auth/forgot-password";
import { PageClient } from "./pages/client";
import { PageClientCreate } from "./pages/client/create";
import { PageClientSingle } from "./pages/client/[id]";
import { PageProduct } from "./pages/product";
import { PageProductSingle } from "./pages/product/[id]";
import { PageProductCreate } from "./pages/product/create";
import { PageUser } from "./pages/user";
import { PageUserSingle } from "./pages/user/[id]";
import { PageUserCreate } from "./pages/user/create";
import { PageSell } from "./pages/sell";
import { PageSellSingle } from "./pages/sell/[id]";
import { PageSellCreate } from "./pages/sell/create";

export function AppRouter() {
    const privateRoutes = [
        <Route key={URL.client.index} path={URL.client.index} component={PageClient} />,
        <Route key={URL.client.index + ":id"} path={URL.client.index + ":id"} component={PageClientSingle} />,
        <Route key={URL.client.create.index} path={URL.client.create.index} component={PageClientCreate} />,

        <Route key={URL.product.index} path={URL.product.index} component={PageProduct} />,
        <Route key={URL.product.index + ":id"} path={URL.product.index + ":id"} component={PageProductSingle} />,
        <Route key={URL.product.create.index} path={URL.product.create.index} component={PageProductCreate} />,

        <Route key={URL.user.index} path={URL.user.index} component={PageUser} />,
        <Route key={URL.user.index + ":id"} path={URL.user.index + ":id"} component={PageUserSingle} />,
        <Route key={URL.user.create.index} path={URL.user.create.index} component={PageUserCreate} />,

        <Route key={URL.sell.index} path={URL.sell.index} component={PageSell} />,
        <Route key={URL.sell.index + ":id"} path={URL.sell.index + ":id"} component={PageSellSingle} />,
        <Route key={URL.sell.create.index} path={URL.sell.create.index} component={PageSellCreate} />,
    ];

    const publicRoutes = [
        <Route key={URL.auth.login.index} path={URL.auth.login.index} component={PageLogin} />,
        <Route key={URL.auth.register.index} path={URL.auth.register.index} component={PageRegister} />,
        <Route key={URL.auth["forgot-password"].index} path={URL.auth["forgot-password"].index} component={PageForgotPassword} />,
    ];
    const { isValidUser } = useUser({});
    if (!isValidUser) {
        return (
            <Router>
                <Route key={"/"} path={"/"} component={PageLogin} />
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
