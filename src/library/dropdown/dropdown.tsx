import styles from './dropdown.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class DropDown extends Observable<DropDown> {
 private _label: string = '';
 private _options!: Options;
 private _array!: any[];
 private _value: string | number = '';
 private _isMandatory: boolean = false;
 private _disabled: boolean = false;
 private _infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], value: string | number = '', isMandatory: boolean = false) {
  super();
  this._label = label;
  this._options = options;
  this._array = array;
  this._value = value;
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
 get value(): string | number {
  return this._value;
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

interface DropDownProperties {
 dropdown: DropDown;
 clickHandler?: () => void;
}

export function DropDownLib({ dropdown, clickHandler }: DropDownProperties) {
 const snapshot = useSyncExternalStore(dropdown.subscribe, dropdown.snapshot);
 const dropdownObj = snapshot.state;
 const eventHandler = (val: string | number) => {
  if (dropdownObj.disabled) return;
  dropdownObj.setValue(val);
  clickHandler?.();
 };
 let labelHeader: LabelHeader = new LabelHeader(dropdownObj.label, dropdownObj.isMandatory, dropdownObj.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${dropdownObj.disabled ? styles.disabled : ''}`}>
     <select
      disabled={dropdownObj.disabled}
      name={dropdownObj.label}
      id={dropdownObj.label}
      value={dropdownObj.value ?? ''}
      onChange={(e) => eventHandler(e.target.value)}
     >
      <option value="">Select</option>
      {dropdownObj.array.map((ele) => {
       return <option value={ele[dropdownObj.options.valueKey]}>{ele[dropdownObj.options.labelKey]}</option>;
      })}
     </select>
    </div>
   </div>
  </>
 );
}
