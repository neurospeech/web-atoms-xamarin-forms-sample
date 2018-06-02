import { AtomControl } from "web-atoms-core/bin/controls/atom-control";
import { AtomBridge, bindableProperty, IAtomElement } from "web-atoms-core/bin/core";
import { AtomPage } from "../core/atom-page";

export class HomeView extends AtomPage {

    @bindableProperty
    public message: string = "Hello World";

    public create(): void {
        super.create();

        const bridge = AtomBridge.instance;

        // this.bind(this.element, "Title", ["title"]);

        // const grid = bridge.create("Xamarin.Forms.Grid");
        // const label = bridge.create("Xamarin.Forms.Label");

        // bridge.appendChild(grid, label);

        // this.append(grid);

        // this.bind(label, "Text", ["message"]);

        bridge.loadContent(this.element, `<ContentPage
            xmlns:atom="clr-namespace:WebAtoms;assembly=WebAtoms"
            xmlns="http://xamarin.com/schemas/2014/forms">
        <Grid>
            <Grid.RowDefinitions>
                <RowDefinition/>
                <RowDefinition/>
                <RowDefinition/>
            </Grid.RowDefinitions>

            <Grid.ColumnDefinitions>
                <ColumnDefinition/>
                <ColumnDefinition/>
                <ColumnDefinition/>
            </Grid.ColumnDefinitions>
            <Label
                x:Name="label1"
                Grid.Row="1"
                Grid.Column="1"
            />
        </Grid>
    </ContentPage>`);

        this.bind(this.element, "Title", ["title"]);
        const e = bridge.findChild(this.element, "label1");
        this.bind(e, "Text", ["message"]);
    }

    public initPage1(e: IAtomElement): void {
        this.bind(e, "Title", ["title"]);
    }

    public initPage2(e: IAtomElement): void {
        this.bind(e, "Text", ["message"]);
    }

}
