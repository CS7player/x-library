import { useState } from 'react';
import styles from './text-field.module.css';
import { Icons } from '../';
import { LabelHeader, LabelHeaderLib } from '../';

type InputType = 'text' | 'password' | 'number' | 'email';

export class TextField {
 public label: string = '';
 public placeholder: string = '';
 public value: string = '';
 public disabled: boolean = false;
 public type: InputType = 'text';
 public isMandatory: boolean = false;
 public icon: React.JSX.Element | null = null;
 public infoText: string = '';
 constructor(label: string = '', placeholder: string = '', value: string = '', type: InputType = 'text', isMandatory: boolean = false) {
  this.label = label;
  this.placeholder = placeholder;
  this.value = value;
  this.type = type;
  this.isMandatory = isMandatory;
 }
 setValue(value: string) {
  this.value = value;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setIcon(icon: React.JSX.Element) {
  this.icon = icon;
 }
 setIsMandatory(isMandatory: boolean) {
  this.isMandatory = isMandatory;
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
 }
}

interface TextFieldProperties {
 textfield: TextField;
}

export function TextFieldLib({ textfield }: TextFieldProperties) {
 const [value, valueUpdater] = useState(textfield.value);
 const [isPassword, setPassword] = useState(true);
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (textfield.disabled) return;
  valueUpdater(e.target.value);
  textfield.setValue?.(e.target.value);
 };

 let labelHeader: LabelHeader = new LabelHeader(textfield.label, textfield.isMandatory, textfield.infoText);

 let tfHtml = null;
 switch (textfield.type) {
  case 'text': {
   tfHtml = <input type="text" value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
   break;
  }
  case 'email': {
   tfHtml = <input type="text" value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
   break;
  }
  case 'number': {
   tfHtml = <input type="number" value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
   break;
  }
  case 'password': {
   tfHtml = <input type={isPassword ? 'password' : 'text'} value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
   break;
  }
 }

 let passwordHtml = null;
 if (textfield.type == 'password') {
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
    <div className={`${styles.container} ${textfield.disabled ? styles.disabled : ''}`}>
     {textfield.icon}
     {tfHtml}
     {passwordHtml}
    </div>
   </div>
  </>
 );
}
