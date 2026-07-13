import { useState } from 'react';
import { LabelHeader, LabelHeaderLib } from '../';
import styles from './radiobutton.module.css';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class RadioButton {
 public label: string = '';
 public options!: Options;
 public array!: any[];
 public value: string | number | null = null;
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], value: string | number, isMandatory: boolean = false) {
  this.label = label;
  this.options = options;
  this.array = array;
  this.value = value;
  this.isMandatory = isMandatory;
 }
 setValue(value: string | number) {
  this.value = value;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
 }
}

interface RadioButtonProperties {
 radiobutton: RadioButton;
}

export function RadioButtonLib({ radiobutton }: RadioButtonProperties) {
 let [value, setValue] = useState(radiobutton.value);

 const clickHandler = (val: any) => {
  if (radiobutton.disabled) return;
  setValue(val);
  radiobutton.setValue(val);
 };
 let labelHeader: LabelHeader = new LabelHeader(radiobutton.label, radiobutton.isMandatory, radiobutton.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}>
     {radiobutton.array.map((ele) => (
      <div key={String(ele[radiobutton.options.valueKey])} className={`${styles.radiobutton_container} ${radiobutton.disabled ? styles.disabled : ''}`}>
       <input
        type="radio"
        name={radiobutton.label}
        id={String(ele[radiobutton.options.valueKey])}
        value={ele[radiobutton.options.valueKey]}
        checked={value == ele[radiobutton.options.valueKey]}
        disabled={radiobutton.disabled}
        onChange={(e) => clickHandler(e.target.value)}
       />
       <label htmlFor={String(ele[radiobutton.options.valueKey])}>{ele[radiobutton.options.labelKey]}</label>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}
