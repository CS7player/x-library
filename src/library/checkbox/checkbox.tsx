import styles from './checkbox.module.css';

export class Checkbox {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface CheckBoxProperties {
  checkbox: Checkbox;
}

export function CheckBoxLib({ checkbox }: CheckBoxProperties) {
  return (
    <>
      <div className={styles.test}>{checkbox.label}</div>
    </>
  );
}
