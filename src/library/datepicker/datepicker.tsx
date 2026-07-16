import styles from './datepicker.module.css';
import { LabelHeader, LabelHeaderLib } from '../';
import { Icons } from '../';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
import { DateHelper } from '../utils/dateHelper';
import { IconSize } from '../utils/icon';
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

let monthNames = [
 { id: 1, name: 'Jan' },
 { id: 2, name: 'Feb' },
 { id: 3, name: 'Mar' },
 { id: 4, name: 'Apr' },
 { id: 5, name: 'May' },
 { id: 6, name: 'Jun' },
 { id: 7, name: 'Jul' },
 { id: 8, name: 'Aug' },
 { id: 9, name: 'Sep' },
 { id: 10, name: 'Oct' },
 { id: 11, name: 'Nov' },
 { id: 12, name: 'Dec' },
];

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

 let [calenderType, setCalenderType] = useState(1);
 let [isCalenderOpen, setCalenderOpen] = useState(false);
 let [calendarDates, setCalendarDates] = useState<any[]>([]);
 let [selectedMonth, setSelectedMonth] = useState(getMonth());
 let [yearsList, setYearsList] = useState<number[]>([]);
 useEffect(() => {
  const date = parseDate(datepickerObj.selectedDate);
  if (date) {
   datepickerObj.setValue(formatDate(date));
  } else {
   datepicker.setDisabled(true);
   datepickerObj.setValue('Invalid Date');
  }
 }, [datepickerObj.selectedDate]);

 const OpenCalender = () => {
  if (datepicker.disabled) return;
  setCalenderOpen((prev) => !prev);
  const ymd = DateHelper.convertDMYToYMD(datepickerObj.selectedDate);
  const month = getMonth(new Date(ymd));
  setSelectedMonth(month);
  setYearsList(prepareYearsList(month.year));
  monthNames.forEach((month: any) => {
   month['year'] = month.year;
  });
  setCalendarDates(DateHelper.getMonthDates(month.id, month.year));
 };

 const toggleMonths = (monthObj: any) => {
  setSelectedMonth(monthObj);
  setYearsList(prepareYearsList(monthObj['year']));
  setCalendarDates(DateHelper.getMonthDates(monthObj['id'], monthObj['year']));
  setCalenderType(1);
 };

 const onDateSelected = (date: any) => {
  datepickerObj.setValue(date['display_date_format']);
  setCalenderOpen(false);
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
     <CalendarHeader
      calenderType={calenderType}
      setCalenderType={setCalenderType}
      selectedMonth={selectedMonth}
      setSelectedMonth={setSelectedMonth}
      toggleMonths={toggleMonths}
      setYearsList={setYearsList}
     />
     {calenderType === 1 && <CalendarDays calendarDates={calendarDates} onDateSelected={onDateSelected} selectedDate={datepickerObj.selectedDate} />}
     {calenderType === 2 && <CalendarMonths toggleMonths={toggleMonths} selectedMonth={selectedMonth} />}
     {calenderType === 3 && (
      <CalendarYears yearsLoopList={yearsList} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} setCalenderType={setCalenderType} />
     )}
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

function CalendarDays({ calendarDates, onDateSelected, selectedDate }: any) {
 let endBoxHtml = null;
 if (7 - ((calendarDates?.[0]?.day + calendarDates.length) % 7) != 7) {
  endBoxHtml = Array.from({ length: 7 - ((calendarDates?.[0]?.day + calendarDates.length) % 7) }).map((_, index) => (
   <div key={index} className={`${styles.box} ${styles.not_used}`}></div>
  ));
 }

 return (
  <>
   <div className={styles.dates}>
    {DateHelper.weekDays.map((day) => {
     return <div key={day}>{day}</div>;
    })}
    {Array.from({ length: calendarDates?.[0]?.day }).map((_, index) => (
     <div key={index} className={`${styles.box} ${styles.not_used}`}></div>
    ))}
    {calendarDates.map((date: any) => {
     return (
      <div
       key={date.unix_date_format}
       className={`${styles.box} ${date['display_date_format'] == selectedDate ? styles.active : ''}`}
       onClick={() => onDateSelected(date)}
      >
       {date['format_day']}
      </div>
     );
    })}
    {endBoxHtml}
   </div>
  </>
 );
}

function CalendarMonths({ toggleMonths, selectedMonth }: any) {
 return (
  <>
   <div className={styles.months}>
    {monthNames.map((month: any) => {
     return (
      <div key={month.id} className={`${styles.box} ${selectedMonth['id'] == month.id ? styles.active : ''}`} onClick={() => toggleMonths(month)}>
       {month['name']}
      </div>
     );
    })}
   </div>
  </>
 );
}

function CalendarYears({ yearsLoopList, selectedMonth, setSelectedMonth, setCalenderType }: any) {
 const setYear = (year: number) => {
  selectedMonth['year'] = year;
  monthNames.forEach((month: any) => {
   month['year'] = year;
  });
  setSelectedMonth(setSelectedMonth);
  setCalenderType(2);
 };
 return (
  <>
   <div className={styles.years}>
    {yearsLoopList.map((year: any) => {
     return (
      <div key={year} className={`${styles.box} ${selectedMonth['year'] == year ? styles.active : ''}`} onClick={() => setYear(year)}>
       {year}
      </div>
     );
    })}
   </div>
  </>
 );
}
function CalendarHeader({ calenderType, setCalenderType, selectedMonth, setSelectedMonth, toggleMonths, setYearsList }: any) {
 const changeMonths = (i: number) => {
  let presentMonthId = selectedMonth['id'];
  let destinationMonthId = presentMonthId + i;
  if (destinationMonthId == 13) destinationMonthId = 1;
  if (destinationMonthId == 0) destinationMonthId = 12;
  let monthObj: any = monthNames.filter((month: any) => month.id == destinationMonthId)[0];
  monthObj['year'] = selectedMonth['year'];
  if (destinationMonthId == 1 && presentMonthId == 12) {
   monthObj['year'] = selectedMonth['year'] + 1;
  } else if (destinationMonthId == 12 && presentMonthId == 1) {
   monthObj['year'] = selectedMonth['year'] - 1;
  }
  toggleMonths(monthObj);
 };

 const changeYear = (i: number) => {
  selectedMonth['year'] = selectedMonth['year'] + i;
  toggleMonths(selectedMonth);
 };

 const toggleYear = (i: number) => {
  let yearArr: any = [];
  let presentYear = selectedMonth['year'];
  for (let index = 0; index < 12; index++) {
   if (i == 1) {
    yearArr.push(presentYear + (index + 7));
   } else {
    yearArr.unshift(presentYear - (6 + index));
   }
  }
  selectedMonth['year'] = i == 1 ? selectedMonth['year'] + 12 : selectedMonth['year'] - 12;
  setSelectedMonth(selectedMonth);
  setYearsList(yearArr);
 };

 switch (calenderType) {
  case 1:
   return (
    <div className={styles.box_header}>
     <div className={styles.header_part}>
      <button onClick={() => setCalenderType(2)}>{selectedMonth['name']}</button>
      <button onClick={() => setCalenderType(3)}>{selectedMonth['year']}</button>
     </div>
     <div className={styles.header_part}>
      <div onClick={() => changeMonths(-1)}>
       <Icons.ChevronLeft size={IconSize.LG} />
      </div>
      <div onClick={() => changeMonths(1)}>
       <Icons.ChevronRight size={IconSize.LG} />
      </div>
     </div>
    </div>
   );

  case 2:
   return (
    <div className={styles.box_header}>
     <button onClick={() => setCalenderType(3)}>{selectedMonth['year']}</button>
     <div className={styles.header_part}>
      <div onClick={() => changeYear(-1)}>
       <Icons.ChevronLeft size={IconSize.LG} />
      </div>
      <div onClick={() => changeYear(1)}>
       <Icons.ChevronRight size={IconSize.LG} />
      </div>
     </div>
    </div>
   );

  case 3:
   return (
    <div className={styles.box_header}>
     <div onClick={() => toggleYear(-1)}>
      <Icons.ChevronLeft size={IconSize.LG} />
     </div>
     <div onClick={() => toggleYear(1)}>
      <Icons.ChevronRight size={IconSize.LG} />
     </div>
    </div>
   );

  default:
   return null;
 }
}
