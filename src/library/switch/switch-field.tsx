import styles from './switch-field.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';

interface Options {
 rightSideName: string;
 leftSideName: string;
}
export class SwitchField extends Observable<SwitchField> {
 private _label: string = '';
 private _value: boolean = false;
 private _isMandatory: boolean = false;
 private _options: Options = { rightSideName: ' ', leftSideName: ' ' };
 private _disabled: boolean = false;
 private _infoText: string = '';
 constructor(label: string = '', value: false, isMandatory: boolean) {
  super();
  this._label = label;
  this._value = value;
  this._isMandatory = isMandatory;
 }
 get label() {
  return this._label;
 }
 get options() {
  return this._options;
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
 setValue(value: boolean) {
  this._value = value;
  this.uiRender();
 }
 setOptions(options: Options) {
  this._options = options;
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

interface SwitchFieldProperties {
 switchField: SwitchField;
 clickHandler?: () => void;
}

export function SwitchFieldLib({ switchField, clickHandler }: SwitchFieldProperties) {
 const snapshot = useSyncExternalStore(switchField.subscribe, switchField.snapshot);
 const switchFieldObj = snapshot.state;
 let labelHeader: LabelHeader = new LabelHeader(switchFieldObj.label, switchFieldObj.isMandatory, switchFieldObj.infoText);
 const handleClick = () => {
  if (switchFieldObj.disabled) return;
  switchFieldObj.setValue(!switchFieldObj.value);
  clickHandler?.();
 };
 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}>
     <div className={`${styles.switch_container} ${switchFieldObj.disabled ? styles.disabled : ''}`} onClick={handleClick}>
      <div className={styles.content}>{switchFieldObj.options.leftSideName ?? ' '}</div>
      <div className={styles.content}>{switchFieldObj.options.rightSideName ?? ' '}</div>
      <div className={`${styles.toggler} ${switchFieldObj.value ? styles.right : styles.left}`}></div>
     </div>
    </div>
   </div>
  </>
 );
}
