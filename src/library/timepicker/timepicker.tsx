import styles from './timepicker.module.css';
import { LabelHeaderLib, LabelHeader, Icons } from '../';
import { Observable } from '../utils/observable';
import { useSyncExternalStore } from 'react';

export class TimePicker extends Observable<TimePicker> {
 private _label: string = '';
 private _format: 12 | 24 = 12;
 private _value: string = '';
 private _isMandatory: boolean = false;
 private _disabled: boolean = false;
 private _infoText: string = '';
 private _hoursArray: string[] = [];
 private _hoursValue: string = '00';
 private _minutesArray: string[] = [];
 private _minutesValue: string = '00';
 private _merdian: string[] = ['AM', 'PM'];
 private _merdianValue: string = 'AM';
 constructor(label: string = '', format: 12 | 24, value: string, isMandatory: boolean) {
  super();
  this._label = label;
  this._format = format;
  this._hoursArray = this.makeArray(format);
  this._minutesArray = this.makeArray(59);
  this._value = value;
  this._isMandatory = isMandatory;
 }
 get label(): string {
  return this._label;
 }
 get format(): 12 | 24 {
  return this._format;
 }
 get hoursArray(): string[] {
  return this._hoursArray;
 }
 get hoursValue(): string {
  return this._hoursValue;
 }
 get minutesArray(): string[] {
  return this._minutesArray;
 }
 get minutesValue(): string {
  return this._minutesValue;
 }
 get merdian(): string[] {
  return this._merdian;
 }
 get merdianValue(): string {
  return this._merdianValue;
 }
 get value(): string {
  return this._value;
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
 private makeArray(n: number): string[] {
  return Array.from({ length: n + 1 }, (_, i) => i.toString().padStart(2, '0'));
 }
 setValue(value: string) {
  this._value = value;
  this.uiRender();
 }
 setHoursValue(hoursValue: string) {
  this._hoursValue = hoursValue;
 }
 setMinutesValue(minutesValue: string) {
  this._minutesValue = minutesValue;
 }
 setMerdianValue(merdian: string) {
  this._merdianValue = merdian;
 }
 setDisabled(disabled: boolean) {
  this._disabled = disabled;
 }
 setInfoText(infoText: string) {
  this._infoText = infoText;
 }
}

interface TimePickerProperties {
 timePicker: TimePicker;
}

export function TimePickerLib({ timePicker }: TimePickerProperties) {
 const snapshot = useSyncExternalStore(timePicker.subscribe, timePicker.snapshot);
 const timePickerObj = snapshot.state;
 let labelHeader: LabelHeader = new LabelHeader(timePickerObj.label, timePickerObj.isMandatory, timePickerObj.infoText);
 let isValidTIme = false;
 const parseTime = (value: string): void => {
  value = value.trim();
  // 12-hour format (e.g. 12:34 PM)
  const twelveHourRegex = /^(0?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)$/i;
  // 24-hour format (e.g. 23:54)
  const twentyFourHourRegex = /^([01]?\d|2[0-3]):([0-5]\d)$/;
  let match = value.match(twelveHourRegex);
  if (match) {
   isValidTIme = true;
   timePickerObj.setHoursValue(match[1].padStart(2, '0'));
   timePickerObj.setMinutesValue(match[2].padStart(2, '0'));
   timePickerObj.setMerdianValue(match[3].toUpperCase());
  }
  match = value.match(twentyFourHourRegex);
  if (match) {
   isValidTIme = true;
   timePickerObj.setHoursValue(match[1].padStart(2, '0'));
   timePickerObj.setMinutesValue(match[2].padStart(2, '0'));
  }
 };
 parseTime(timePickerObj.value);

 const eventHandler = (type: number, val: string) => {
  switch (type) {
   case 1:
    timePickerObj.setHoursValue(val);
    break;
   case 2:
    timePickerObj.setMinutesValue(val);
    break;
   case 3:
    timePickerObj.setMerdianValue(val);
    break;
  }
  if (timePickerObj.format == 12) {
   timePickerObj.setValue(`${timePickerObj.hoursValue}:${timePickerObj.minutesValue} ${timePickerObj.merdianValue}`);
  } else {
   timePickerObj.setValue(`${timePickerObj.hoursValue}:${timePickerObj.minutesValue}`);
  }
 };

 let hoursHtml = (
  <div>
   <select
    className={styles.no_arrow}
    disabled={timePickerObj.disabled}
    name="hours"
    id="hours"
    value={timePickerObj.hoursValue ?? '00'}
    onChange={(e) => eventHandler(1, e.target.value)}
   >
    {timePickerObj.hoursArray.map((hh) => {
     return (
      <option key={hh} value={hh}>
       {hh}
      </option>
     );
    })}
   </select>
  </div>
 );

 let minutesHtml = (
  <div>
   <select
    className={styles.no_arrow}
    disabled={timePickerObj.disabled}
    name="minutes"
    id="minutes"
    value={timePickerObj.minutesValue ?? '00'}
    onChange={(e) => eventHandler(2, e.target.value)}
   >
    {timePickerObj.minutesArray.map((mm) => {
     return (
      <option key={mm} value={mm}>
       {mm}
      </option>
     );
    })}
   </select>
  </div>
 );

 let merdianHtml = null;
 if (timePickerObj.format == 12) {
  merdianHtml = (
   <div>
    <select
     className={styles.no_arrow}
     disabled={timePickerObj.disabled}
     name="merdian"
     id="merdian"
     value={timePickerObj.merdianValue ?? 'AM'}
     onChange={(e) => eventHandler(3, e.target.value)}
    >
     {timePickerObj.merdian.map((merdian) => {
      return (
       <option key={merdian} value={merdian}>
        {merdian}
       </option>
      );
     })}
    </select>
   </div>
  );
 }

 let timeHtml = <div className={styles.error_text}>Invalid Time!!!</div>;
 if (isValidTIme) {
  timeHtml = (
   <div className={styles.time_container}>
    {hoursHtml}:{minutesHtml}
    {merdianHtml}
   </div>
  );
 }

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}>
     <div>{timeHtml}</div>
     <Icons.Clock />
    </div>
   </div>
  </>
 );
}
