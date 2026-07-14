import { useState, useSyncExternalStore } from 'react';
import styles from './text-field.module.css';
import { Icons } from '../';
import { LabelHeader, LabelHeaderLib } from '../';
import { Observable } from '../utils/observable';

type InputType = 'text' | 'password' | 'number' | 'email';

export class TextField extends Observable<TextField> {
 public label: string = '';
 public placeholder: string = '';
 public value: string = '';
 public disabled: boolean = false;
 public type: InputType = 'text';
 public isMandatory: boolean = false;
 public icon: React.JSX.Element | null = null;
 public infoText: string = '';
 constructor(label: string = '', placeholder: string = '', value: string = '', type: InputType = 'text', isMandatory: boolean = false) {
  super();
  this.label = label;
  this.placeholder = placeholder;
  this.value = value;
  this.type = type;
  this.isMandatory = isMandatory;
 }
 setValue(value: string) {
  this.value = value;
  this.uiRender();
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
  this.uiRender();
 }
 setIcon(icon: React.JSX.Element) {
  this.icon = icon;
  this.uiRender();
 }
 setIsMandatory(isMandatory: boolean) {
  this.isMandatory = isMandatory;
  this.uiRender();
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
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
