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

const monthNames = [
 { id: 1, name: 'Jan' },
 { id: 2, name: 'Feb' },
 { id: 3, name: 'Mar' },
 { id: 4, name: 'April' },
 { id: 5, name: 'May' },
 { id: 6, name: 'Jun' },
 { id: 7, name: 'Jul' },
 { id: 8, name: 'Aug' },
 { id: 9, name: 'Sep' },
 { id: 10, name: 'Oct' },
 { id: 11, name: 'Nov' },
 { id: 12, name: 'Dec' },
];

const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface DatePickerProperties {
 datepicker: DatePicker;
}

export function DatePickerLib({ datepicker }: DatePickerProperties) {
 const snapshot = useSyncExternalStore(datepicker.subscribe, datepicker.snapshot);
 const datepickerObj = snapshot.state;

 const getMonth = (tdate = new Date()) => {
  let month = tdate.getMonth() + 1;
  var filter_data = monthNames.filter((m) => m['id'] == month);
  if (filter_data.length > 0) {
   var tmpObj = JSON.parse(JSON.stringify(filter_data[0]));
   tmpObj['year'] = tdate.getFullYear();
   return tmpObj;
  }
  return {};
 };
 const prepareYearsList = (yr: any) => {
  var yearsArr = [];
  for (let index = 0; index < 12; index++) {
   if (index < 6) {
    yearsArr.push(yr - (5 - index));
   } else {
    yearsArr.push(yr + (index - 5));
   }
  }
  return yearsArr;
 };
 const getMonthDates = (month: any, year: any) => {
  month = ('0' + month).slice(-2);
  var firstDate = new Date(`${year + '-' + month + '-01'}T00:00:00Z`);
  var lastDate = new Date(year, month, 0);
  let diff = lastDate.getDate() + 1;
  lastDate = new Date(lastDate.setDate(diff));
  return DateHelper.getDatesBetweenDates(firstDate, lastDate);
 };

 let [calenderType, setCalenderType] = useState(1);
 let [isCalenderOpen, setCalenderOpen] = useState(false);
 let [calendarDates, setCalendarDates] = useState<any[]>([]);
 let [selectedMonth, setSelectedMonth] = useState(getMonth());
 let [yearsLoopList, setYearsLoopList] = useState<number[]>([]);
 let [monthDayStartIdx, setMonthDayStartIdx] = useState(0);
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
  const ymd = DateHelper.convertDMYToYMD(datepickerObj.selectedDate);
  setSelectedMonth(getMonth(new Date(ymd)));
  setYearsLoopList(prepareYearsList(selectedMonth['year']));
  setCalendarDates(getMonthDates(selectedMonth['id'], selectedMonth['year']));
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
     {calenderType === 1 && <CalendarDays calendarDates={calendarDates} setCalenderType={setCalenderType} />}
     {calenderType === 2 && <CalendarMonths setCalenderType={setCalenderType} />}
     {calenderType === 3 && <CalendarYears yearsLoopList={yearsLoopList} setCalenderType={setCalenderType} />}
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

function CalendarDays({ calendarDates, setCalenderType }: any) {
 // const firstDay = calendarDates?.[0]?.day;
 // console.log(firstDay['day']);
 // let day = firstdate['shortDayName'] || '';
 let monthDayStartIdx = dayNames.indexOf('Wed');
 return (
  <>
   <div>
    <button onClick={() => setCalenderType(2)}>Months</button>
    <div className={styles.dates}>
     {dayNames.map((day) => {
      return <div key={day}>{day}</div>;
     })}
     {Array.from({ length: calendarDates?.[0]?.day }).map((_, index) => (
      <div key={index} className={`${styles.box} ${styles.not_used}`}></div>
     ))}
     {calendarDates.map((date: any) => {
      return (
       <div key={date.unix_date_format} className={styles.box}>
        {date['format_day']}
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
}

function CalendarMonths({ setCalenderType }: any) {
 return (
  <>
   <div>
    <button onClick={() => setCalenderType(3)}>Years</button>
    <div className={styles.months}>
     {monthNames.map((month: any) => {
      return (
       <div key={month.id} className={styles.box}>
        {month['name']}
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
}

function CalendarYears({ yearsLoopList, setCalenderType }: any) {
 return (
  <>
   <div>
    <button onClick={() => setCalenderType(1)}>Days</button>
    <div className={styles.years}>
     {yearsLoopList.map((year: any) => {
      return (
       <div key={year} className={styles.box}>
        {year}
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
}
