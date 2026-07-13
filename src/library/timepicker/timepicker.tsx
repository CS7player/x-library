import styles from './timepicker.module.css';
import { LabelHeaderLib, LabelHeader } from '../';

export class TimePicker {
 public label: string = '';
 public value: string | number | null = null;
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
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

export function DropDownLib({ timePicker }: TimePickerProperties) {
 let labelHeader: LabelHeader = new LabelHeader(timePicker.label, timePicker.isMandatory, timePicker.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}></div>
   </div>
  </>
 );
}
