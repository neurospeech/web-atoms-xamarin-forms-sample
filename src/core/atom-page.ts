import { AtomControl } from "web-atoms-core/bin/controls/atom-control";
import { AtomBridge, bindableProperty, IAtomElement } from "web-atoms-core/bin/core";

export class AtomPage extends AtomControl {

    @bindableProperty
    public title: string = "Page";

    constructor(e: IAtomElement) {
        super(e || AtomBridge.create("Xamarin.Forms.ContentPage"));
    }

}
