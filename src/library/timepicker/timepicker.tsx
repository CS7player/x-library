import styles from './timepicker.module.css';
import { LabelHeaderLib, LabelHeader, Icons } from '../';

export class TimePicker {
 public label: string = '';
 public value: string | number | null = null;
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 public hoursArray: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
 public minutesArray: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
 public merdian: string[] = ['AM', 'PM'];
 constructor(label: string = '', value: string | number, isMandatory: boolean) {
  this.label = label;
  this.value = value;
  this.isMandatory = isMandatory;
 }
 setValue(value: string) {
  this.value = value;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
 }
}

interface TimePickerProperties {
 timePicker: TimePicker;
}

export function TimePickerLib({ timePicker }: TimePickerProperties) {
 let labelHeader: LabelHeader = new LabelHeader(timePicker.label, timePicker.isMandatory, timePicker.infoText);
 const eventHandler = (type: number, val: string) => {};
 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}>
     <div className={styles.time_container}>
      <div>
       <select
        disabled={timePicker.disabled}
        name={timePicker.label}
        id={timePicker.label}
        // value={timePicker.value ?? ''}
        onChange={(e) => eventHandler(1, e.target.value)}
       >
        {timePicker.hoursArray.map((hh) => {
         return <option value={hh}>{hh}</option>;
        })}
       </select>
      </div>
      <div>
       <select
        disabled={timePicker.disabled}
        name={timePicker.label}
        id={timePicker.label}
        // value={timePicker.value ?? ''}
        onChange={(e) => eventHandler(2, e.target.value)}
       >
        {timePicker.minutesArray.map((mm) => {
         return <option value={mm}>{mm}</option>;
        })}
       </select>
      </div>
      <div>
       <select
        disabled={timePicker.disabled}
        name={timePicker.label}
        id={timePicker.label}
        // value={timePicker.value ?? ''}
        onChange={(e) => eventHandler(3, e.target.value)}
       >
        {timePicker.merdian.map((merdian) => {
         return <option value={merdian}>{merdian}</option>;
        })}
       </select>
      </div>
     </div>
     <div>
      <Icons.Clock />
     </div>
    </div>
   </div>
  </>
 );
}
