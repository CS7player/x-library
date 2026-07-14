import styles from './switch-field.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';

interface Options {
 rightSideName: string;
 leftSideName: string;
}
export class SwitchField extends Observable<SwitchField> {
 public label: string = '';
 public value: boolean = false;
 public isMandatory: boolean = false;
 public options: Options = { rightSideName: ' ', leftSideName: ' ' };
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', value: false, isMandatory: boolean) {
  super();
  this.label = label;
  this.value = value;
  this.isMandatory = isMandatory;
 }
 setValue(value: boolean) {
  this.value = value;
  this.uiRender();
 }
 setOptions(options: Options) {
  this.options = options;
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
