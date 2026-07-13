import styles from './dropdown.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
import { useState } from 'react';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class DropDown {
 public label: string = '';
 public options!: Options;
 public array!: any[];
 public value: string | number = '';
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], value: string | number = '', isMandatory: boolean = false) {
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

interface DropDownProperties {
 dropdown: DropDown;
}

export function DropDownLib({ dropdown }: DropDownProperties) {
 let [value, setValue] = useState(dropdown.value);
 const clickHandler = (val: string | number) => {
  if (dropdown.disabled) return;
  setValue(val);
  dropdown.setValue(val);
 };
 let labelHeader: LabelHeader = new LabelHeader(dropdown.label, dropdown.isMandatory, dropdown.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${dropdown.disabled ? styles.disabled : ''}`}>
     <select disabled={dropdown.disabled} name={dropdown.label} id={dropdown.label} value={value ?? ''} onChange={(e) => clickHandler(e.target.value)}>
      <option value="">Select</option>
      {dropdown.array.map((ele) => {
       return <option value={ele[dropdown.options.valueKey]}>{ele[dropdown.options.labelKey]}</option>;
      })}
     </select>
    </div>
   </div>
  </>
 );
}
