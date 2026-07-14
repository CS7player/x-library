import { useSyncExternalStore } from 'react';
import { LabelHeader, LabelHeaderLib } from '../';
import styles from './radiobutton.module.css';
import { Observable } from '../utils/observable';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class RadioButton extends Observable<RadioButton> {
 private _label: string = '';
 private _options!: Options;
 private _array!: any[];
 private _value: string | number | null = null;
 private _isMandatory: boolean = false;
 private _disabled: boolean = false;
 private _infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], value: string | number, isMandatory: boolean = false) {
  super();
  this._label = label;
  this._options = options;
  this._array = array;
  this._value = value;
  this._isMandatory = isMandatory;
 }
 get label() {
  return this._label;
 }
 get options() {
  return this._options;
 }
 get array() {
  return this._array;
 }
 get value() {
  return this._value;
 }
 get isMandatory() {
  return this._isMandatory;
 }
 get disabled() {
  return this._disabled;
 }
 get infoText() {
  return this._infoText;
 }
 setValue(value: string | number) {
  this._value = value;
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

interface RadioButtonProperties {
 radiobutton: RadioButton;
 clickHandler?: () => void;
}

export function RadioButtonLib({ radiobutton, clickHandler }: RadioButtonProperties) {
 const snapshot = useSyncExternalStore(radiobutton.subscribe, radiobutton.snapshot);
 const radiobuttonObj = snapshot.state;
 const eventHandler = (val: any) => {
  if (radiobuttonObj.disabled) return;
  radiobuttonObj.setValue(val);
  clickHandler?.();
 };
 let labelHeader: LabelHeader = new LabelHeader(radiobuttonObj.label, radiobuttonObj.isMandatory, radiobuttonObj.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}>
     {radiobuttonObj.array.map((ele) => (
      <div key={String(ele[radiobuttonObj.options.valueKey])} className={`${styles.radiobuttonObj_container} ${radiobuttonObj.disabled ? styles.disabled : ''}`}>
       <input
        type="radio"
        name={radiobuttonObj.label}
        id={String(ele[radiobuttonObj.options.valueKey])}
        value={ele[radiobuttonObj.options.valueKey]}
        checked={radiobuttonObj.value == ele[radiobuttonObj.options.valueKey]}
        disabled={radiobuttonObj.disabled}
        onChange={(e) => eventHandler(e.target.value)}
       />
       <label htmlFor={String(ele[radiobuttonObj.options.valueKey])}>{ele[radiobuttonObj.options.labelKey]}</label>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}
