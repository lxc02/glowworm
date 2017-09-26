import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {GlowwormModule} from "../../src/glowworm.module";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {PopconfirmDemoComponent} from "./components/popconfirm-demo.conponent";
import {ToolbarDemoComponent} from "./components/toolbar-demo.component";
import {PopinputDemoComponent} from "./components/popinput-demo.conponent";
import {GwInputDemoComponent} from "./components/gwinput-demo.component";
import {GwconfirmDemoComponent, GwconfirmDemoXComponent} from "./components/gwconfirm-demo.component";
import {PopselectDemoComponent} from "./components/popselect-demo.conponent";
import {ContextMenuDemoComponent} from "./components/contextmenu-demo.component";

@NgModule({
    declarations: [
        AppComponent,
        PopconfirmDemoComponent,
        ToolbarDemoComponent,
        PopinputDemoComponent,
        GwInputDemoComponent,
        GwconfirmDemoComponent,
        GwconfirmDemoXComponent,
        PopselectDemoComponent,
        ContextMenuDemoComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        GlowwormModule.forRoot()
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        GwconfirmDemoXComponent
    ]
})
export class AppModule {
    constructor() {
    }
}
