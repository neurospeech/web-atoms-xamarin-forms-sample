import { XFApp } from "web-atoms-core/bin/XFApp";
import { HomeView } from "./home/HomeView";

export class App extends XFApp {

    public main(): void {
        const homeView = new HomeView(this);

        this.page = homeView;

        let i = 1;
        setInterval(() => {
            homeView.message = `Hello world ${i++}`;
        }, 1000);
    }

}
