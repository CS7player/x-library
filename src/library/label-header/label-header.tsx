import styles from './label-header.module.css';
import { Icons } from '../';

export class LabelHeader {
  public label: string = '';
  public isMandatory: boolean = false;
  public infoText: string = '';
  constructor(label: string = '', isMandatory: boolean = false, infoText: string = '') {
    this.label = label;
    this.isMandatory = isMandatory;
    this.infoText = infoText;
  }
}
interface labelHeaderProperties {
  labelHeader: LabelHeader;
}

export function LabelHeaderLib({ labelHeader }: labelHeaderProperties) {
  let labelHtml = null;
  if (labelHeader.label.length > 0) {
    labelHtml = <div>{labelHeader.label}</div>;
  }
  let mandatoryHtml = null;
  if (labelHeader.isMandatory) {
    mandatoryHtml = <div className={styles.isMandatory}>*</div>;
  }

  let infoHtml = null;
  if (labelHeader.infoText.length > 0) {
    infoHtml = (
      <div className={styles.info_container}>
        <Icons.Info />
        <div className={styles.info}>{labelHeader.infoText}</div>
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
      <div className={styles.header}>
        {labelHtml}
        {headerElements}
      </div>
    </>
  );
}
