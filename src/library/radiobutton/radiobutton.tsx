import { useSyncExternalStore } from 'react';
import { LabelHeader, LabelHeaderLib } from '../';
import styles from './radiobutton.module.css';
import { Observable } from '../utils/observable';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class RadioButton extends Observable<RadioButton> {
 public label: string = '';
 public options!: Options;
 public array!: any[];
 public value: string | number | null = null;
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], value: string | number, isMandatory: boolean = false) {
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
