import styles from './radiobutton.module.css';

export class RadioButton {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface RadioButtonProperties {
  radiobutton: RadioButton;
}

export function RadiobuttonLib({ radiobutton }: RadioButtonProperties) {
  return (
    <>
      <div className={styles.test}>{radiobutton.label}</div>
    </>
  );
}
