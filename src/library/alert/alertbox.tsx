import styles from './alertbox.module.css';

export class AlertBox {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface AlertBoxProperties {
  alertBox: AlertBox;
}

export function AlertBoxLib({ alertBox }: AlertBoxProperties) {
  return (
    <>
      <div className={styles.test}>{alertBox.label}</div>
    </>
  );
}
