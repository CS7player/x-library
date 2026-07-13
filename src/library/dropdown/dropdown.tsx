import styles from './dropdown.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class DropDown {
 public label: string = '';
 public options!: Options;
 public array!: any[];
 public value: string | number | null = null;
 public isMandatory: boolean = false;
 public disabled: boolean = false;
 public infoText: string = '';
 constructor(label: string = '', options: Options, array: any[] = [], value: string | number, isMandatory: boolean) {
  this.label = label;
  this.options = options;
  this.array = array;
  this.value = value;
  this.isMandatory = isMandatory;
 }
 setValue(value: string) {
  this.value = value;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setInfoText(infoText: string) {
  this.infoText = infoText;
 }
}

interface DropDownProperties {
 dropdown: DropDown;
}

export function DropDownLib({ dropdown }: DropDownProperties) {
 let labelHeader: LabelHeader = new LabelHeader(dropdown.label, dropdown.isMandatory, dropdown.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}></div>
   </div>
  </>
 );
}
