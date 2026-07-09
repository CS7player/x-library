import styles from './btn.module.css';
import type { IconType } from '../constants';
export class Button {
  public label: string = '';
  public disabled: boolean = false;
  public startIcon: IconType | null = null;
  public endIcon: IconType | null = null;
  constructor(label: string) {
    this.label = label;
  }
  setDisabled(disabled: boolean) {
    this.disabled = disabled;
  }
  setStartIcon(icon: IconType) {
    this.startIcon = icon;
  }
  setEndIcon(icon: IconType) {
    this.endIcon = icon;
  }
}
interface ButtonProperties {
  button: Button;
  eventHandler: () => void;
}

export function ButtonLib({ button, eventHandler }: ButtonProperties) {
  const handleClick = () => {
    if (button.disabled) return;
    eventHandler();
  };

  let startIconHtml = null;
  if (button.startIcon != null) {
    startIconHtml = <i className={button.startIcon}></i>;
  }
  let endIconHtml = null;
  if (button.endIcon != null) {
    endIconHtml = <i className={button.endIcon}></i>;
  }
  return (
    <>
      <div className={`${styles.container} ${button.disabled ? styles.disabled : ''}`}>
        <button className={styles.button} onClick={() => handleClick()}>
          <div className={styles.box}>
            {startIconHtml}
            {button.label}
            {endIconHtml}
          </div>
        </button>
      </div>
    </>
  );
}
