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
 textArea: TextArea;
}

export function TextAreaLib({ textArea }: TextAreaProperties) {
 const [value, setValue] = useState(textArea.value);
 const handleChange = (val: string) => {
  if (textArea.disabled) return;
  setValue(val);
  textArea.setValue?.(val);
 };

 let labelHeader: LabelHeader = new LabelHeader(textArea.label, textArea.isMandatory, textArea.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${textArea.disabled ? styles.disabled : ''}`}>
     <textarea rows={textArea.row} value={value} placeholder={textArea.placeholder} onChange={(e) => handleChange(e.target.value)}></textarea>
    </div>
   </div>
  </>
 );
}
