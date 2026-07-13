import styles from './checkbox.module.css';
import { useState } from 'react';
import { LabelHeaderLib, LabelHeader } from '../';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class CheckBox {
 public label: string = '';
 public options!: Options;
 public array!: any[];
 public selectedValues: any[] = [];
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], selectedValues: any[] = [], isMandatory: boolean = false) {
  this.label = label;
  this.options = options;
  this.array = array;
  this.selectedValues = selectedValues;
  this.isMandatory = isMandatory;
 }
 setValue(selectedValues: any[]) {
  this.selectedValues = selectedValues;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
 }
}

interface CheckBoxProperties {
 checkbox: CheckBox;
 clickHandler?: () => void;
}

export function CheckBoxLib({ checkbox, clickHandler }: CheckBoxProperties) {
 let [selectedArray, valueUpdater] = useState(checkbox.selectedValues);

 const eventHandler = (value: any, isChecked: boolean) => {
  if (checkbox.disabled) return;
  let updated: any[];
  if (isChecked) {
   updated = [...selectedArray, value];
  } else {
   updated = selectedArray.filter((i) => i !== value);
  }
  valueUpdater(updated);
  checkbox.setValue(updated);
  clickHandler?.();
 };

 let labelHeader: LabelHeader = new LabelHeader(checkbox.label, checkbox.isMandatory, checkbox.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}>
     {checkbox.array.map((ele) => (
      <div key={String(ele[checkbox.options.valueKey])} className={`${styles.checkbox_container} ${checkbox.disabled ? styles.disabled : ''}`}>
       <input
        id={ele[checkbox.options['labelKey']]}
        type="checkbox"
        checked={selectedArray.includes(ele[checkbox.options['valueKey']])}
        onChange={(e) => eventHandler(ele[checkbox.options['valueKey']], e.target.checked)}
       />
       <label htmlFor={ele[checkbox.options['labelKey']]}>{ele[checkbox.options['labelKey']]}</label>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}
