import styles from './switch-field.module.css';

export class SwitchField {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface SwitchFieldProperties {
  switchField: SwitchField;
}

export function SwitchFieldLib({ switchField }: SwitchFieldProperties) {
  return (
    <>
      <div className={styles.test}>{switchField.label}</div>
    </>
  );
}
