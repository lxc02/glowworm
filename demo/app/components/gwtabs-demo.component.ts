import {Component, OnInit, ViewChild} from "@angular/core";
import {GwconfirmDemoComponent} from "./gwconfirm-demo.component";
import {GwTabsComponent} from "../../../src/tabs/tabs.component";
import {GwTab} from "../../../src/tabs/tab";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Component({
    selector: 'gwtabs-demo',
    template: `
        <h1>Gw tabs</h1>
        <div class="row">
            <input type="text" [(ngModel)]="tabId">
            <button class="btn btn-xs btn-primary" (click)="addTab()">addTab</button>
            <button class="btn btn-xs btn-primary" (click)="insertTab()">insertTab</button>
            <button class="btn btn-xs btn-primary" (click)="disabledTab()">disabledTab</button>
            <button class="btn btn-xs btn-primary" (click)="enabledTab()">enabledTab</button>
            <button class="btn btn-xs btn-primary" (click)="selectTab()">selectTab</button>
            <button class="btn btn-xs btn-primary" (click)="closeTab()">closeTab</button>
            <button class="btn btn-xs btn-primary" (click)="getSelected()">getSelected</button>
        </div>
        <gw-tabs [sortable]="true"
                 [storeKey]="'tabsdemo'"
                 [storeType]="'local'"
                 [onClosing]="onClosing">
            <gw-tab title="this is a title" content="this is a content" [tabId]="'tab1'">
                use content input
            </gw-tab>
            <gw-tab title="this is a title 2" content="this is a disabled tab"
                    [disabled]="true"
                    [tabId]="'tab2'">
            </gw-tab>
            <gw-tab [closable]="true" [tabId]="'tab3'">
                <ng-template #gwTabTitle>
                    title 3
                </ng-template>
                <ng-template #gwTabContent>
                    use &lt;ng-template #gwTabTitle&gt;
                    title 3
                    &lt;/ng-template&gt;

                    <br>

                    use &lt;ng-template #gwTabContent&gt;
                    title 3
                    &lt;/ng-template&gt;
                </ng-template>
            </gw-tab>
            <gw-tab title="lazy load" [lazy]="true" [content]="component" [tabId]="'tab4'"></gw-tab>
        </gw-tabs>
    `
})
export class GwTabsDemoComponent implements OnInit {

    tabId: string;

    component = GwconfirmDemoComponent;

    @ViewChild(GwTabsComponent) tabs: GwTabsComponent;

    ngOnInit(): void {
    }

    addTab() {
        this.tabs.addTab(new GwTab({
            title: 'dynamic tab title',
            content: 'dynamic tab content'
        }));
    }

    insertTab() {
        this.tabs.insertTab(2, new GwTab({
            title: 'dynamic tab title',
            content: 'dynamic tab content'
        }));
    }

    closeTab() {
        this.tabs.closeTab(this.tabId);
    }

    getSelected() {
        console.log(this.tabs.getSelected());
    }

    selectTab() {
        this.tabs.selectTab(this.tabId);
    }

    enabledTab() {
        this.tabs.enabledTab(this.tabId);
    }

    disabledTab() {
        this.tabs.disabledTab(this.tabId);
    }

    onClosing(tab): Observable<boolean> {
        const confirm = window.confirm('Do you really want to remove this tag?');
        return Observable.of(confirm);
    }
}