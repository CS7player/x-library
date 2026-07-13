import styles from './switch-field.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
import { useState } from 'react';

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
 clickHandler?: () => void;
}

export function SwitchFieldLib({ switchField, clickHandler }: SwitchFieldProperties) {
 const [value, setValue] = useState(switchField.value);
 let labelHeader: LabelHeader = new LabelHeader(switchField.label, switchField.isMandatory, switchField.infoText);
 const handleClick = () => {
  if (switchField.disabled) return;
  setValue(!value);
  switchField.setValue(!value);
  clickHandler?.();
 };
 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${switchField.disabled ? styles.disabled : ''}`}>
     <div className={styles.switch_container} onClick={handleClick}>
      <div className={styles.content}>on</div>
      <div className={styles.content}>yes</div>
      <div className={`${styles.toggler} ${switchField.value ? styles.right : styles.left}`}></div>
     </div>
    </div>
   </div>
  </>
 );
}
