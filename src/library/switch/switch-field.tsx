import styles from './switch-field.module.css';
import { LabelHeaderLib, LabelHeader } from '../';

interface Options {
 rightSideName: string;
 leftSideName: string;
}
export class SwitchField {
 public label: string = '';
 public value: boolean = false;
 public isMandatory: boolean = false;
 public options: Options = { rightSideName: '', leftSideName: '' };
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', value: false, isMandatory: boolean) {
  this.label = label;
  this.value = value;
  this.isMandatory = isMandatory;
 }
 setValue(value: boolean) {
  this.value = value;
 }
 setOptions(options: Options) {
  this.options = options;
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
