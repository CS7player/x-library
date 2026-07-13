import styles from './switch-field.module.css';
import { LabelHeaderLib, LabelHeader } from '../';

export class SwitchField {
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

interface SwitchFieldProperties {
 switchField: SwitchField;
}

export function SwitchFieldLib({ switchField }: SwitchFieldProperties) {
 let labelHeader: LabelHeader = new LabelHeader(switchField.label, switchField.isMandatory, switchField.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}></div>
   </div>
  </>
 );
}
