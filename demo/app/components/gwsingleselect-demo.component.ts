import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'gwsingleselect-demo',
    template: `

        <h1>gw-single-select</h1>

        <p>
            <gw-toolbar>
                <gw-single-select #gwcontrol
                                  [label]="'单选'"
                                  [closeable]="true"
                                  [disabled]="disabled"

                                  [showSelect]="true"
                                  [(selectModel)]="selectModel"
                                  [selectData]="selectData"
                                  (onSelectChange)="log('select', $event)"

                                  [(ngModel)]="ngModel"
                                  [data]="data"
                                  (onSave)="log('save', $event)"
                                  (onCancel)="log('cancel', $event)"
                >
                </gw-single-select>
            </gw-toolbar>
        </p>
        <p>
            <gw-single-select
                    [label]="'<span style=color:red;>单选</span>'"
                    [closeable]="true"
                    [clearSave]="true"

                    [showSelect]="true"
                    [(selectModel)]="selectModel"
                    [selectData]="selectData"
                    (onSelectChange)="log('select', $event)"

                    [onBeforeSave]="onBeforeSave"
                    [(ngModel)]="ngModel"
                    [data]="data"
                    (onSave)="log('save', $event)"
                    (onCancel)="log('cancel', $event)"
            >
            </gw-single-select>

            {{selectModel | json}}
            {{ngModel | json}}
        </p>

        <p>
            <button class="btn btn-default" (click)="toggleSelectModel()">toggleSelectModel</button>
            <button class="btn btn-default" (click)="toggleSelectData()">toggleSelectData</button>
            <button class="btn btn-default" (click)="toggleNgModel()">toggleNgModel</button>
            <button class="btn btn-default" (click)="toggleNgData()">toggleNgData</button>
            <button class="btn btn-default" (click)="disabled = !disabled">toggleDisabled</button>
        </p>

        <div class="row">
            <div class="col-md-4">
                <gw-single-select
                        [label]="'<span style=color:red;>单选</span>'"
                        [closeable]="false"
                        [clearSave]="true"
                        [gwClass]="'form-control form-control-glowworm'"

                        [showSelect]="true"
                        [(selectModel)]="selectModel"
                        [selectData]="selectData"
                        (onSelectChange)="log('select', $event)"

                        [onBeforeSave]="onBeforeSave"
                        [(ngModel)]="ngModel"
                        [data]="data"
                        (onSave)="log('save', $event)"
                        (onCancel)="log('cancel', $event)"
                >
                </gw-single-select>
            </div>
            <div class="col-md-4"><input type="text" class="form-control"/></div>
            <div class="col-md-4"><input type="text" class="form-control"/></div>
        </div>

        <p>
            <gw-single-select
                    [label]="'<span style=color:red;>单选</span>'"
                    [closeable]="false"
                    [clearSave]="true"
                    [gwClass]="'form-control form-control-glowworm'"
                    [formatter]="formatter()"

                    [showSelect]="true"
                    [(selectModel)]="selectModel"
                    [selectData]="selectData"
                    (onSelectChange)="log('select', $event)"

                    [(ngModel)]="ngModel"
                    [data]="data"
                    (onSave)="log('save', $event)"
                    (onCancel)="log('cancel', $event)">
            </gw-single-select>
        </p>
    `
})
export class GwSingleSelectDemoComponent implements OnInit {

    disabled = false;

    selectModel: any = 'a';
    selectData = [];

    ngModel: any = '@';
    data = [];

    msg: any;

    ngOnInit() {
        this.selectData = [
            {id: 'a', text: `<span style="color:red;">AA</span>`},
            {id: 'b', text: 'BB'},
            {id: 'c', text: 'CC'},
            {id: 'd', text: 'DD'}
        ];

        this.data = [
            {id: '@', text: `<span style="color:red;">@@</span>`},
            {id: '!', text: '!!', disabled: true},
            {id: '#', text: '##'}
        ]
    }

    onBeforeSave(): Observable<boolean> {
        console.log(arguments);
        const confirm = window.confirm('Save ?');
        return Observable.of(confirm);
    }

    toggleSelectModel() {
        this.selectModel = this.selectModel == 'aaa' ? 'a' : 'aaa';
    }

    toggleSelectData() {
        if (this.selectData.length == 3) {
            this.selectData = [
                {id: 'a', text: 'AA'},
                {id: 'b', text: 'BB'},
                {id: 'c', text: 'CC'},
                {id: 'd', text: 'DD'},
                {id: 'x', text: '《还珠格格》重播引热议 你为啥对老剧百看不厌？'}
            ];
        } else {
            this.selectData = [
                {id: 'aaa', text: 'AAA'},
                {id: 'bbb', text: 'BBB'},
                {id: 'ccc', text: 'CCC'}
            ];
        }
    }

    toggleNgModel() {
        this.ngModel = this.ngModel == '*' ? '@' : '*';
    }

    toggleNgData() {
        if (this.data.length == 3) {
            this.data = [
                {id: '^', text: '^^'},
                {id: '&', text: '&&'},
                {id: '*', text: '**'},
                {id: '-', text: '-- 《还珠格格》重播引热议 你为啥对老剧百看不厌？'}
            ]
        } else {
            this.data = [
                {id: '@', text: '@@'},
                {id: '!', text: '!!'},
                {id: '#', text: '## 《还珠格格》重播引热议 你为啥对老剧百看不厌？'}
            ]
        }
    }

    log(event_type, event) {
        this.msg = `触发事件: ${event_type} ${event}`;
        console.warn(arguments);
    }

    formatter() {
        let formatter = () => {
            return `<b>类型</b>：${this.selectModel}, <b>取值</b>：${this.ngModel}`;
        };
        return formatter.bind(this);
    }
}