import { AtomPage } from "./atom-page";

declare var App: any;

export class AtomApp {

    private mPage: AtomPage;
    public get page(): AtomPage {
        return this.mPage;
    }

    public set page(v: AtomPage) {
        this.mPage = v;
        App.CurrentPage = v.element;
    }

}
