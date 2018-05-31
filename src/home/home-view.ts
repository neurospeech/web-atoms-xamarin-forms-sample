import { AtomControl } from "web-atoms-core/bin/controls/atom-control";
import { AtomBridge, bindableProperty, IAtomElement } from "web-atoms-core/bin/core";
import { AtomPage } from "../core/atom-page";

export class HomeView extends AtomPage {

    @bindableProperty
    public message: string = "Hello World";

    public create(): void {
        super.create();

        const bridge = AtomBridge.instance;

        this.bind(this.element, "Title", ["title"]);

        const grid = bridge.create("Xamarin.Forms.Grid");
        const label = bridge.create("Xamarin.Forms.Label");

        bridge.appendChild(grid, label);

        this.append(grid);

        this.bind(label, "Text", ["message"]);
    }

}
