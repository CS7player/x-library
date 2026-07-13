import styles from './btn.module.css';
export class Button {
 public label: string = '';
 public disabled: boolean = false;
 public startIcon: React.JSX.Element | null = null;
 public endIcon: React.JSX.Element | null = null;
 constructor(label: string) {
  this.label = label;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
 }
 setStartIcon(icon: React.JSX.Element) {
  this.startIcon = icon;
 }
 setEndIcon(icon: React.JSX.Element) {
  this.endIcon = icon;
 }
}
interface ButtonProperties {
 button: Button;
 clickHandler: () => void;
}

export function ButtonLib({ button, clickHandler }: ButtonProperties) {
 const handleClick = () => {
  if (button.disabled) return;
  clickHandler();
 };

 return (
  <>
   <div className={`${styles.container} ${button.disabled ? styles.disabled : ''}`}>
    <button className={styles.button} onClick={() => handleClick()}>
     <div className={styles.box}>
      {button.startIcon}
      {button.label}
      {button.endIcon}
     </div>
    </button>
   </div>
  </>
 );
}
