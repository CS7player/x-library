import styles from './autocomplete.module.css';
import { LabelHeaderLib, LabelHeader } from '../';
interface Options {
 labelKey: string;
 valueKey: string | number;
}
export class AutoComplete {
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

interface AutoCompleteProperties {
 autoComplete: AutoComplete;
 clickHandler?: () => void;
}

export function AutoCompleteLib({ autoComplete, clickHandler }: AutoCompleteProperties) {
 let labelHeader: LabelHeader = new LabelHeader(autoComplete.label, autoComplete.isMandatory, autoComplete.infoText);

 return (
  <>
   <div className={styles.main}>
    <LabelHeaderLib labelHeader={labelHeader} />
    <div className={styles.container}></div>
   </div>
  </>
 );
}
