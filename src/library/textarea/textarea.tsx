import styles from './textarea.module.css';
import { LabelHeader, LabelHeaderLib } from '../';
import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';

export class TextArea extends Observable<TextArea> {
 private _label: string = '';
 private _isMandatory: boolean = false;
 private _infoText: string = '';
 private _placeholder: string = '';
 private _value: string = '';
 private _disabled: boolean = false;
 private _row: number = 2;
 constructor(label: string = '', placeholder: string = '', value: string = '', isMandatory: boolean = false) {
  super();
  this._label = label;
  this._placeholder = placeholder;
  this._value = value;
  this._isMandatory = isMandatory;
 }
 get label(): string {
  return this._label;
 }
 get placeholder(): string {
  return this._placeholder;
 }
 get row(): number {
  return this._row;
 }
 get value(): string {
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
 setValue(value: string) {
  this._value = value;
  this.uiRender();
 }
 setDisabled(disabled: boolean) {
  this._disabled = disabled;
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
 setRow(row: number) {
  this._row = row;
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
