import styles from './checkbox.module.css';
import { Icon } from '../constants';
import { useState } from 'react';
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
  let labelHtml = null;
  if (checkbox.label.length > 0) {
    labelHtml = <div>{checkbox.label}</div>;
  }
  let mandatoryHtml = null;
  if (checkbox.isMandatory) {
    mandatoryHtml = <div className={styles.isMandatory}>*</div>;
  }

  let infoHtml = null;
  if (checkbox.infoText.length > 0) {
    infoHtml = (
      <div className={styles.info_container}>
        <i className={Icon.Info}></i>
        <div className={styles.info}>{checkbox.infoText}</div>
      </div>
    );
  }

  let headerElements = null;
  if (mandatoryHtml || infoHtml) {
    headerElements = (
      <div className={styles.headerElements}>
        {mandatoryHtml}
        {infoHtml}
      </div>
    );
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          {labelHtml}
          {headerElements}
        </div>
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
