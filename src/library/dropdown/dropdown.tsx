import styles from './dropdown.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class DropDown extends Observable<DropDown> {
 public label: string = '';
 public options!: Options;
 public array!: any[];
 public value: string | number = '';
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], value: string | number = '', isMandatory: boolean = false) {
  super();
  this.label = label;
  this.options = options;
  this.array = array;
  this.value = value;
  this.isMandatory = isMandatory;
 }
 setValue(value: string | number) {
  this.value = value;
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
