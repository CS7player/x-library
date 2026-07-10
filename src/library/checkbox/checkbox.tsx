import styles from './checkbox.module.css';
import { useState } from 'react';
import { LabelHeaderLib, LabelHeader } from '..';
interface CheckBoxOptions {
  labelKey: string;
  valueKey: string | number;
}
export class CheckBox {
  public label: string = '';
  public checkBoxOptions!: CheckBoxOptions;
  public checkBoxArray!: any[];
  public selectedValues: any[] = [];
  public isMandatory: boolean = false;
  public disabled: boolean = false;
  public infoText: string = '';
  constructor(label: string = '', checkBoxOptions: CheckBoxOptions, checkBoxArray: any[] = [], selectedValues: any[] = [], isMandatory: boolean) {
    this.label = label;
    this.checkBoxOptions = checkBoxOptions;
    this.checkBoxArray = checkBoxArray;
    this.selectedValues = selectedValues;
    this.isMandatory = isMandatory;
  }
  setValue(selectedValues: any[]) {
    this.selectedValues = selectedValues;
  }
  setDisabled(disabled: boolean) {
    this.disabled = disabled;
  }
  setInfoText(infoText: string) {
    this.infoText = infoText;
  }
}

interface CheckBoxProperties {
  checkbox: CheckBox;
}

export function CheckBoxLib({ checkbox }: CheckBoxProperties) {
  let [selectedArray, valueUpdater] = useState(checkbox.selectedValues);

  const clickHandler = (value: any, isChecked: boolean) => {
    if (checkbox.disabled) return;
    let updated: any[];
    if (isChecked) {
      updated = [...selectedArray, value];
    } else {
      updated = selectedArray.filter((i) => i !== value);
    }
    valueUpdater(updated);
    checkbox.setValue(updated);
  };

  let labelHeader: LabelHeader = new LabelHeader(checkbox.label, checkbox.isMandatory, checkbox.infoText);

  return (
    <>
      <div className={styles.main}>
        <LabelHeaderLib labelHeader={labelHeader} />
        <div className={styles.container}>
          {checkbox.checkBoxArray.map((ele) => (
            <div key={String(ele[checkbox.checkBoxOptions.valueKey])} className={`${styles.checkbox_container} ${checkbox.disabled ? styles.disabled : ''}`}>
              <input
                id={ele[checkbox.checkBoxOptions['labelKey']]}
                type="checkbox"
                checked={selectedArray.includes(ele[checkbox.checkBoxOptions['valueKey']])}
                onChange={(e) => clickHandler(ele[checkbox.checkBoxOptions['valueKey']], e.target.checked)}
              />
              <label htmlFor={ele[checkbox.checkBoxOptions['labelKey']]}>{ele[checkbox.checkBoxOptions['labelKey']]}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
