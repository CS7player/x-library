import styles from './checkbox.module.css';
import { useSyncExternalStore } from 'react';
import { LabelHeaderLib, LabelHeader } from '../';
import { Observable } from '../utils/observable';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class CheckBox extends Observable<CheckBox> {
 private _label: string = '';
 private _options!: Options;
 private _array!: any[];
 private _selectedValues: any[] = [];
 private _isMandatory: boolean = false;
 private _disabled: boolean = false;
 private _infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], selectedValues: any[] = [], isMandatory: boolean = false) {
  super();
  this._label = label;
  this._options = options;
  this._array = array;
  this._selectedValues = selectedValues;
  this._isMandatory = isMandatory;
 }
 get label(): string {
  return this._label;
 }
 get options(): Options {
  return this._options;
 }
 get array(): any[] {
  return this._array;
 }
 get selectedValues(): any[] {
  return this._selectedValues;
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
 setValue(selectedValues: any[]) {
  this._selectedValues = selectedValues;
  this.uiRender();
 }
 setDisabled(disabled: boolean) {
  this._disabled = disabled;
  this.uiRender();
 }
 setInfoText(infoText: string) {
  this._infoText = infoText;
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
