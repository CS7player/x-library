import styles from './checkbox.module.css';
import { useSyncExternalStore } from 'react';
import { LabelHeaderLib, LabelHeader } from '../';
import { Observable } from '../utils/observable';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class CheckBox extends Observable<CheckBox> {
 public label: string = '';
 public options!: Options;
 public array!: any[];
 public selectedValues: any[] = [];
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], selectedValues: any[] = [], isMandatory: boolean = false) {
  super();
  this.label = label;
  this.options = options;
  this.array = array;
  this.selectedValues = selectedValues;
  this.isMandatory = isMandatory;
 }
 setValue(selectedValues: any[]) {
  this.selectedValues = selectedValues;
  this.uiRender();
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
  this.uiRender();
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
  this.uiRender();
 }
}

interface CheckBoxProperties {
 checkbox: CheckBox;
 clickHandler?: () => void;
}

export function CheckBoxLib({ checkbox, clickHandler }: CheckBoxProperties) {
 const snapshot = useSyncExternalStore(checkbox.subscribe, checkbox.snapshot);
 const checkboxObj = snapshot.state;

 const eventHandler = (value: any, isChecked: boolean) => {
  if (checkboxObj.disabled) return;
  let updated: any[];
  if (isChecked) {
   updated = [...checkboxObj.selectedValues, value];
  } else {
   updated = checkboxObj.selectedValues.filter((i) => i !== value);
  }
  checkboxObj.setValue(updated);
  clickHandler?.();
 };

 let labelHeader: LabelHeader = new LabelHeader(checkboxObj.label, checkboxObj.isMandatory, checkboxObj.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}>
     {checkboxObj.array.map((ele) => (
      <div key={String(ele[checkboxObj.options.valueKey])} className={`${styles.checkbox_container} ${checkboxObj.disabled ? styles.disabled : ''}`}>
       <input
        id={ele[checkboxObj.options['labelKey']]}
        type="checkbox"
        checked={checkboxObj.selectedValues.includes(ele[checkboxObj.options['valueKey']])}
        onChange={(e) => eventHandler(ele[checkboxObj.options['valueKey']], e.target.checked)}
       />
       <label htmlFor={ele[checkboxObj.options['labelKey']]}>{ele[checkboxObj.options['labelKey']]}</label>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}
