import styles from './datepicker.module.css';
import { LabelHeader, LabelHeaderLib } from '../';
import { Icons } from '../';
import { useEffect, useState } from 'react';
export class DatePicker {
 public label: string = '';
 public selectedDate: string = '';
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', selectedDate: string = '', isMandatory: boolean) {
  this.label = label;
  this.selectedDate = selectedDate;
  this.isMandatory = isMandatory;
 }
 setValue(selectedDate: string) {
  this.selectedDate = selectedDate;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
 }
}

interface DatePickerProperties {
 datepicker: DatePicker;
}

export function DatePickerLib({ datepicker }: DatePickerProperties) {
 const [displayDate, setDisplayDate] = useState('Invalid Date');
 const [calenderType, setCalenderType] = useState(1);
 useEffect(() => {
  const date = parseDate(datepicker.selectedDate);
  if (date) {
   setDisplayDate(formatDate(date));
  } else {
   datepicker.setDisabled(true);
   setDisplayDate('Invalid Date');
  }
 }, [datepicker.selectedDate]);
 let [isCalenderOpen, setCalenderOpen] = useState(false);
 const OpenCalender = () => {
  if (datepicker.disabled) return;
  setCalenderOpen((isCalenderOpen = !isCalenderOpen));
 };
 let labelHeader: LabelHeader = new LabelHeader(datepicker.label, datepicker.isMandatory, datepicker.infoText);

 let calenderIconHtml = <Icons.Calendar />;
 let inputHtml = <input readOnly type="text" value={displayDate} />;
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
