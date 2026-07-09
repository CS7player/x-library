import styles from './dropdown.module.css';

export class DropDown {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface DropDownProperties {
  dropdown: DropDown;
}

export function DropDownLib({ dropdown }: DropDownProperties) {
  return (
    <>
      <div className={styles.test}>{dropdown.label}</div>
    </>
  );
}
