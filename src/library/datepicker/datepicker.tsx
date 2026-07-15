import styles from './datepicker.module.css';
import { LabelHeader, LabelHeaderLib } from '../';
import { Icons } from '../';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
import { DateHelper } from '../utils/dateHelper';
export class DatePicker extends Observable<DatePicker> {
 private _label: string = '';
 private _selectedDate: string = '';
 private _isMandatory: boolean = false;
 private _disabled: boolean = false;
 private _infoText: string = '';
 constructor(label: string = '', selectedDate: string = '', isMandatory: boolean) {
  super();
  this._label = label;
  this._selectedDate = selectedDate;
  this._isMandatory = isMandatory;
 }
 get label(): string {
  return this._label;
 }
 get selectedDate(): string {
  return this._selectedDate;
 }
 get isMandatory(): boolean {
  return this._isMandatory;
 }
 get disabled(): boolean {
  return this._disabled;
 }
 get infoText(): string {
  return this._infoText;
 }
 setValue(selectedDate: string) {
  this._selectedDate = selectedDate;
  this.uiRender();
 }
 setDisabled(disabled: boolean) {
  this._disabled = disabled;
  this.uiRender();
 }
 setInfoText(infoText: string) {
  this._infoText = infoText;
  this.uiRender();
 }
}

interface DatePickerProperties {
 datepicker: DatePicker;
}

export function DatePickerLib({ datepicker }: DatePickerProperties) {
 const snapshot = useSyncExternalStore(datepicker.subscribe, datepicker.snapshot);
 const datepickerObj = snapshot.state;
 const [calenderType, setCalenderType] = useState(1);
 let [isCalenderOpen, setCalenderOpen] = useState(false);
 let selected_month: any = {};
 useEffect(() => {
  const date = parseDate(datepickerObj.selectedDate);
  if (date) {
   datepickerObj.setValue(formatDate(date));
  } else {
   datepicker.setDisabled(true);
   datepickerObj.setValue('Invalid Date');
  }
 }, [datepicker.selectedDate]);
 const OpenCalender = () => {
  if (datepicker.disabled) return;
  setCalenderOpen((isCalenderOpen = !isCalenderOpen));
 };

 let labelHeader: LabelHeader = new LabelHeader(datepicker.label, datepicker.isMandatory, datepicker.infoText);
 let calenderIconHtml = <Icons.Calendar />;
 let inputHtml = <input readOnly type="text" value={datepickerObj.selectedDate} />;
 // let downArrowHtml = <i className={isCalenderOpen ? Icon.ArrowUp : Icon.ArrowDown}></i>;

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${datepicker.disabled ? styles.disabled : ''}`} onClick={() => OpenCalender()}>
     {calenderIconHtml}
     {inputHtml}
    </div>
    <div className={`${styles.calender} ${isCalenderOpen ? styles.show : ''}`}>
     {calenderType === 1 && <CalendarDays />}
     {calenderType === 2 && <CalendarMonths />}
     {calenderType === 3 && <CalendarYears />}
    </div>
   </div>
  </>
 );
}

function parseDate(value: string): Date | null {
 if (value == '') return new Date();
 const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
 if (!regex.test(value)) {
  return null;
 }
 const [day, month, year] = value.split('/').map(Number);
 const date = new Date(year, month - 1, day);
 return date;
}

function formatDate(date: Date): string {
 const day = String(date.getDate()).padStart(2, '0');
 const month = String(date.getMonth() + 1).padStart(2, '0');
 const year = date.getFullYear();
 return `${day}/${month}/${year}`;
}

function getMonthDates(month: any, year: any) {
 month = ('0' + month).slice(-2);
 var firstDate = new Date(`${year + '-' + month + '-01'}T00:00:00Z`);
 var lastDate = new Date(year, month, 0);
 let diff = lastDate.getDate() + 1;
 lastDate = new Date(lastDate.setDate(diff));
 return DateHelper.getDatesBetweenDates(firstDate, lastDate);
}

function CalendarDays() {
 return (
  <>
   <div>
    <p>Days</p>
    <button>Months</button>
   </div>
  </>
 );
}

function CalendarMonths() {
 return (
  <>
   <div>
    <p>Months</p>
    <button>Years</button>
   </div>
  </>
 );
}

function CalendarYears() {
 return (
  <>
   <div>
    <p>Years</p>
    <button>Days</button>
   </div>
  </>
 );
}
