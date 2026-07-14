import { useState, useSyncExternalStore } from 'react';
import styles from './text-field.module.css';
import { Icons } from '../';
import { LabelHeader, LabelHeaderLib } from '../';
import { Observable } from '../utils/observable';

type InputType = 'text' | 'password' | 'number' | 'email';

export class TextField extends Observable<TextField> {
 private _label: string = '';
 private _placeholder: string = '';
 private _value: string = '';
 private _disabled: boolean = false;
 private _type: InputType = 'text';
 private _isMandatory: boolean = false;
 private _icon: React.JSX.Element | null = null;
 private _infoText: string = '';
 constructor(label: string = '', placeholder: string = '', value: string = '', type: InputType = 'text', isMandatory: boolean = false) {
  super();
  this._label = label;
  this._placeholder = placeholder;
  this._value = value;
  this._type = type;
  this._isMandatory = isMandatory;
 }
 get label() {
  return this._label;
 }
 get placeholder() {
  return this._placeholder;
 }
 get type() {
  return this._type;
 }
 get value() {
  return this._value;
 }
 get icon() {
  return this._icon;
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
 setValue(value: string) {
  this._value = value;
  this.uiRender();
 }
 setDisabled(disabled: boolean) {
  this._disabled = disabled;
  this.uiRender();
 }
 setIcon(icon: React.JSX.Element) {
  this._icon = icon;
  this.uiRender();
 }
 setIsMandatory(isMandatory: boolean) {
  this._isMandatory = isMandatory;
  this.uiRender();
 }
 setInfoText(infoText: string) {
  this._infoText = infoText;
  this.uiRender();
 }
}

interface TextFieldProperties {
 textfield: TextField;
 clickHandler?: () => void;
}

export function TextFieldLib({ textfield, clickHandler }: TextFieldProperties) {
 const snapshot = useSyncExternalStore(textfield.subscribe, textfield.snapshot);
 const textfieldObj = snapshot.state;
 const [isPassword, setPassword] = useState(true);
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (textfieldObj.disabled) return;
  textfieldObj.setValue?.(e.target.value);
  clickHandler?.();
 };

 let labelHeader: LabelHeader = new LabelHeader(textfieldObj.label, textfieldObj.isMandatory, textfieldObj.infoText);

 let tfHtml = null;
 switch (textfieldObj.type) {
  case 'text': {
   tfHtml = <input type="text" value={textfieldObj.value} placeholder={textfieldObj.placeholder} onChange={handleChange} />;
   break;
  }
  case 'email': {
   tfHtml = <input type="text" value={textfieldObj.value} placeholder={textfieldObj.placeholder} onChange={handleChange} />;
   break;
  }
  case 'number': {
   tfHtml = <input type="number" value={textfieldObj.value} placeholder={textfieldObj.placeholder} onChange={handleChange} />;
   break;
  }
  case 'password': {
   tfHtml = <input type={isPassword ? 'password' : 'text'} value={textfieldObj.value} placeholder={textfieldObj.placeholder} onChange={handleChange} />;
   break;
  }
 }

 let passwordHtml = null;
 if (textfieldObj.type == 'password') {
  if (isPassword) {
   passwordHtml = (
    <div className={styles.iconBox} onClick={() => setPassword(false)}>
     <Icons.Eye />
    </div>
   );
  } else {
   passwordHtml = (
    <div className={styles.iconBox} onClick={() => setPassword(true)}>
     <Icons.EyeSlash />
    </div>
   );
  }
 }

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${textfieldObj.disabled ? styles.disabled : ''}`}>
     {textfieldObj.icon}
     {tfHtml}
     {passwordHtml}
    </div>
   </div>
  </>
 );
}
