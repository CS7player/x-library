import { useState } from 'react';
import styles from './textarea.module.css';
import { LabelHeader, LabelHeaderLib } from '../';

export class TextArea {
 public label: string = '';
 public placeholder: string = '';
 public value: string = '';
 public disabled: boolean = false;
 public row: number = 2;
 public isMandatory: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', placeholder: string = '', value: string = '', isMandatory: boolean = false) {
  this.label = label;
  this.placeholder = placeholder;
  this.value = value;
  this.isMandatory = isMandatory;
 }
 setValue(value: string) {
  this.value = value;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setIsMandatory(isMandatory: boolean) {
  this.isMandatory = isMandatory;
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
 }
 setRow(row: number) {
  this.row = row;
 }
}

interface TextAreaProperties {
 textarea: TextArea;
}

export function TextAreaLib({ textarea }: TextAreaProperties) {
 const [value, setValue] = useState(textarea.value);
 const handleChange = (val: string) => {
  if (textarea.disabled) return;
  setValue(val);
  textarea.setValue?.(val);
 };

 let labelHeader: LabelHeader = new LabelHeader(textarea.label, textarea.isMandatory, textarea.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${textarea.disabled ? styles.disabled : ''}`}>
     <textarea rows={textarea.row} value={value} placeholder={textarea.placeholder} onChange={(e) => handleChange(e.target.value)}></textarea>
    </div>
   </div>
  </>
 );
}
