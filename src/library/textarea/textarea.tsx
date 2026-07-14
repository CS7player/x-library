import styles from './textarea.module.css';
import { LabelHeader, LabelHeaderLib } from '../';
import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';

export class TextArea extends Observable<TextArea> {
 public label: string = '';
 public placeholder: string = '';
 public value: string = '';
 public disabled: boolean = false;
 public row: number = 2;
 public isMandatory: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', placeholder: string = '', value: string = '', isMandatory: boolean = false) {
  super();
  this.label = label;
  this.placeholder = placeholder;
  this.value = value;
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
 setIsMandatory(isMandatory: boolean) {
  this.isMandatory = isMandatory;
  this.uiRender();
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
  this.uiRender();
 }
 setRow(row: number) {
  this.row = row;
  this.uiRender();
 }
}

interface TextAreaProperties {
 textArea: TextArea;
 clickHandler?: () => void;
}

export function TextAreaLib({ textArea, clickHandler }: TextAreaProperties) {
 const snapshot = useSyncExternalStore(textArea.subscribe, textArea.snapshot);
 const textAreaObj = snapshot.state;
 const handleChange = (val: string) => {
  if (textAreaObj.disabled) return;
  textAreaObj.setValue?.(val);
  clickHandler?.();
 };

 let labelHeader: LabelHeader = new LabelHeader(textAreaObj.label, textAreaObj.isMandatory, textAreaObj.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={`${styles.container} ${textAreaObj.disabled ? styles.disabled : ''}`}>
     <textarea rows={textAreaObj.row} value={textAreaObj.value} placeholder={textAreaObj.placeholder} onChange={(e) => handleChange(e.target.value)}></textarea>
    </div>
   </div>
  </>
 );
}
