import styles from './tooltip.module.css';

export class ToolTip {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface ToolTipProperties {
  toolTip: ToolTip;
}

export function ToolTipLib({ toolTip }: ToolTipProperties) {
  return (
    <>
      <div className={styles.test}>{toolTip.label}</div>
    </>
  );
}
