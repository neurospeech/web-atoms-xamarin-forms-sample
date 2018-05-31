import { AtomBridge } from "web-atoms-core/bin/core";
import { AtomApp } from "./core/app";
import { HomeView } from "./home/home-view";

export class App extends AtomApp {

    public main(): void {
        const homeView = new HomeView();

        this.page = homeView;

        let i = 1;
        setInterval(() => {
            homeView.message = `Hello world ${i++}`;
        }, 1000);
    }

}
