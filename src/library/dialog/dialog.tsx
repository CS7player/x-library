import styles from './dialog.module.css';

export class Dialog {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface DialogProperties {
  dialog: Dialog;
}

export function DialogLib({ dialog }: DialogProperties) {
  return (
    <>
      <div className={styles.test}>{dialog.label}</div>
    </>
  );
}
