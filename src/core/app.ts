import { AtomPage } from "./atom-page";

declare var global: any;

export class AtomApp {

    private mPage: AtomPage;
    public get page(): AtomPage {
        return this.mPage;
    }

    public set page(v: AtomPage) {
        this.mPage = v;
        global.App.CurrentPage = v.element;
    }

}
