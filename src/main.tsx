import { render } from "preact";
import "../styles/index.css";
import { AppRouter } from "./router";
import { NotificationPop, QueryClientProvider } from "fenextjs";

render(
    <>
        <QueryClientProvider>
            <NotificationPop />
            <AppRouter />
        </QueryClientProvider>
    </>,
    document.getElementById("app")!,
);
