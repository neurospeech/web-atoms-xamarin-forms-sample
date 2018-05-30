import { AtomBridge } from "web-atoms-core/bin/core";
import { AtomApp } from "./core/app";
import { HomeView } from "./home/home-view";

export class App extends AtomApp {

    public main(): void {
        const homeView = new HomeView(null);

        this.page = homeView;

        let i = 1;
        setInterval(() => {
            homeView.message = `Hello world ${i++}`;
        }, 3000);
    }

}

const app = new App();
app.main();
