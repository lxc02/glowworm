import {Component} from "@angular/core";
import {DatepickerConfig} from "../../../src/datepicker/config.server";
import {InputModal, MultiSelectModal, SelectModal} from "../../../src/utils/select.modal";
import * as moment from 'moment';

@Component({
    selector: 'popconfirm-demo',
    template: `
        <gw-toolbar #bar>

            <p>
                <gw-input #gwcontrol #input
                          [label]="'公司'"
                          [(ngModel)]="inputModel"
                          [closeable]="true"
                          [enabled]="true"
                          [showSelect]="false"
                >
                </gw-input>

                {{inputModel}}

                <button class="btn btn-xs" (click)="inputModel=null;">set null</button>
            </p>

            <p>
                <gw-input #gwcontrol #input
                          [label]="'公司'"
                          [(ngModel)]="inputSelectModel"
                          [closeable]="true"
                          [enabled]="true"
                          [showSelect]="true"
                          [selectData]="[{id: '0', text: 'woman'}, {id: '1', text: 'man'}]"
                >
                </gw-input>
                {{rangeinputSelectModel | json}}
                <gw-rangeinput #gwcontrol #input
                               [label]="'公司'"
                               [(ngModel)]="rangeinputSelectModel"
                               [closeable]="true"
                               [enabled]="true"
                               [showSelect]="false"
                               [selectData]="[{id: '0', text: 'woman'}, {id: '1', text: 'man'}]"
                >
                </gw-rangeinput>

                {{inputSelectModel | json}}

                <button class="btn btn-xs" (click)="inputSelectModel=null;">set null</button>
            </p>

            <p>
                <gw-single-select #gwcontrol
                                  [label]="'配置singleSelect'"
                                  [data]="[{id: '0', text: '测试一'}, {id: '1', text: '测试二'}]"
                                  [(ngModel)]="selectModel"
                                  [closeable]="true"
                                  [enabled]="true"
                                  [showSelect]="false"
                                  (onSave)="log($event);"
                >
                </gw-single-select>

                {{selectModel | json}}

                <button class="btn btn-xs" (click)="selectModel=null;">set null</button>
            </p>

            <p>
                <gw-single-select #gwcontrol
                                  [label]="'配置singleSelect--linkAge'"
                                  [selectData]="[{id: '0', text: '测试一'}, {id: '1', text: '测试二'}]"
                                  [data]="linkAgeData"
                                  [(ngModel)]="selectModel"
                                  [closeable]="true"
                                  [enabled]="true"
                                  [showSelect]="true"
                                  [linkAge]="false"
                                  (onDataselect)="changeData($event)"
                                  (onSave)="log($event);"
                >
                </gw-single-select>

                {{selectModel | json}}

                <button class="btn btn-xs" (click)="selectModel=null;">set null</button>
            </p>

            <p>
                <gw-single-select #gwcontrol
                                  [label]="'配置singleSelect'"
                                  [data]="selectXData"
                                  [(ngModel)]="selectXModel"
                                  [closeable]="true"
                                  [enabled]="true"
                                  [showSelect]="true"
                                  [selectData]="singleSelectData"
                                  (onSave)="log($event)"
                >
                </gw-single-select>

                <gw-single-select #gwcontrol
                                  [label]="'配置singleSelect'"
                                  [data]="selectXData"
                                  [(ngModel)]="selectX2Model"
                                  [closeable]="true"
                                  [enabled]="true"
                                  [showSelect]="true"
                                  [selectData]="singleSelectData"
                                  (onSave)="log($event)"
                >
                </gw-single-select>


                {{selectXModel | json}}

                <button class="btn btn-xs" (click)="selectXModel=null;">set null</button>
            </p>

            <p>
                <gw-multi-select #gwcontrol
                                 [label]="'配置multiSelect'"
                                 [data]="[{id: '0', text: '测试一'}, {id: '1', text: '测试二'}]"
                                 [(ngModel)]="multiSelectModel"
                                 [closeable]="true"
                                 [enabled]="true"
                                 [showSelect]="false"
                                 (onSave)="log($event)"
                >
                </gw-multi-select>

                {{multiSelectModel | json}}

                <button class="btn btn-xs" (click)="multiSelectModel=null;">set null</button>
            </p>

            <p>
                <gw-multi-select #gwcontrol
                                 [label]="'配置multiSelect'"
                                 [data]="[{id: '0', text: '测试一'}, {id: '1', text: '测试二'}]"
                                 [(ngModel)]="multiXSelectModel"
                                 [closeable]="true"
                                 [enabled]="true"
                                 [showSelect]="true"
                                 [selectData]="[{id: '0', text: 'woman'}, {id: '1', text: 'man'}]"
                                 (onSave)="log($event)"
                >
                </gw-multi-select>

                {{multiXSelectModel | json}}

                <button class="btn btn-xs" (click)="multiXSelectModel=null;">set null</button>
            </p>


            <p>
                <gw-datepicker #gwcontrol
                               label="日期"
                               options='{singleDatePicker:false,opens:"center",timePickerIncrement :1,locale:{ format: "YYYY-MM-DD"}}'
                               [(ngModel)]="dateModel">
                </gw-datepicker>
            </p>


            <!-- <app-test [toolbar]="bar"></app-test>-->

        </gw-toolbar>
    `
})
export class ToolbarDemoComponent {
    title = 'app';
    dateModel: any;

    inputModel: string = 'app';
    inputSelectModel: InputModal = {
        value: 'app ...',
        selectValue: '0'
    };

    rangeinputSelectModel = {
        start: '12',
        end: '23',
        selectValue: '0'
    }

    selectData = [
        {label: '012', id: 0},
        {label: '1', id: 1},
        {label: '2', id: 2},
        {label: '3', id: 3},
        {label: '445', id: 4},
        {label: '5', id: 5},
        {label: '6', id: 6},
        {label: '7', id: 7},
        {label: '8', id: 8}
    ];

    selectModel: any;

    selectXModel: SelectModal = {
        value: '1',
        selectValue: '1'
    };

    selectX2Model: SelectModal = {
        value: '1',
        selectValue: '1'
    };

    singleSelectData = [{id: '0', text: 'woman'}, {id: '1', text: 'man'}];

    selectXData = [{id: '0', text: '测试一'}, {id: '1', text: '测试二'}];

    multiSelectModel: any = [{id: '0'}];

    multiXSelectModel: MultiSelectModal = {
        value: [{id: '0'}],
        selectValue: '1'
    };

    constructor(private config: DatepickerConfig) {
        console.log('app', new Boolean(true) === new Boolean(true));
        this.setDateConfig();
    }

    log() {
        console.log(arguments);
    }


    setDateConfig() {
        const format = this.config.locale.format, timePickerIncrement = this.config.timePickerIncrement;
        const today_s = moment(moment().format('YYYY-MM-DD')).format(format),
            today_e = moment(today_s).add(1, 'days').subtract(timePickerIncrement, 's').format(format),
            yesterday_s = moment(moment().format('YYYY-MM-DD')).subtract(1, 'days').format(format),
            yesterday_e = moment(yesterday_s).add(1, 'days').subtract(timePickerIncrement, 's').format(format),
            week_s = moment(today_s).subtract(moment().isoWeekday() - 1, 'days').format(format),
            week_e = moment(week_s).add(7, 'days').subtract(timePickerIncrement, 's').format(format),
            lastWeek_s = moment(week_s).subtract(7, 'days').format(format),
            lastWeek_e = moment(week_e).subtract(7, 'days').format(format),
            month_s = moment(moment().format('YYYY-MM-DD')).subtract(moment().date() - 1, 'days').format(format),
            month_e = moment(month_s).add(1, 'month').subtract(timePickerIncrement, 's').format(format),
            lastMonth_s = moment(month_s).subtract(1, 'month').format(format),
            lastMonth_e = moment(month_e).subtract(1, 'month').format(format);
        Object.assign(
            this.config,
            {
                opens: 'center',
                singleDatePicker: false,
                jqueryPath: '/assets/jquery.min.js',
                momentPath: '/assets/datepicker/moment.min.js',
                datepickerPath: '/assets/datepicker/daterangepicker.js',
                startDate: today_s,
                endDate: today_e,
                ranges: {
                    //今天、昨天  本周、上周 本月、上月
                    '今天': [
                        today_s, today_e
                    ],
                    '昨天': [
                        yesterday_s, yesterday_e
                    ],
                    '本周': [
                        week_s, week_e
                    ],
                    '上周': [
                        lastWeek_s, lastWeek_e
                    ],
                    '本月': [
                        month_s, month_e
                    ],
                    '上月': [
                        lastMonth_s, lastMonth_e
                    ]
                }
            }
        );
    }

    linkAgeData = [{id: '0-01', text: '测试一01'}, {id: '0-02', text: '测试一02'}, {id: '1-01', text: '测试二01'}, {
        id: '2-02',
        text: '测试二02'
    }];

    changeData(ev: any) {
        this.linkAgeData = this.linkAgeData.filter(item => {
            return item.id.startsWith(ev + '-');
        });
        console.log(this.linkAgeData);
    }
}