import { AtomPage } from "web-atoms-core/bin/controls/xf/AtomPage";
import { AtomBridge, bindableProperty, IAtomElement } from "web-atoms-core/bin/core";

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
            xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
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
                Text="Sample"
                />
            <Label
                x:Name="label1"
                Grid.Row="1"
                Grid.Column="1"
            />
        </Grid>
    </ContentPage>`);

        const e = bridge.findChild(this.element, "label1");
        this.bind(e, "Text", [["message"]]);
    }

}
