import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
import styles from './btn.module.css';
export class Button extends Observable<Button> {
 public label: string = '';
 public disabled: boolean = false;
 public startIcon: React.JSX.Element | null = null;
 public endIcon: React.JSX.Element | null = null;
 constructor(label: string) {
  super();
  this.label = label;
 }
 setDisabled(disabled: boolean) {
  this.disabled = disabled;
  this.uiRender();
 }
 setStartIcon(icon: React.JSX.Element) {
  this.startIcon = icon;
  this.uiRender();
 }
 setEndIcon(icon: React.JSX.Element) {
  this.endIcon = icon;
  this.uiRender();
 }
}
interface ButtonProperties {
 button: Button;
 clickHandler?: () => void;
}

export function ButtonLib({ button, clickHandler }: ButtonProperties) {
 const snapshot = useSyncExternalStore(button.subscribe, button.snapshot);
 const buttonObj = snapshot.state;
 const handleClick = () => {
  if (button.disabled) return;
  clickHandler?.();
 };

 return (
  <>
   <div className={`${styles.container} ${buttonObj.disabled ? styles.disabled : ''}`}>
    <button className={styles.button} onClick={() => handleClick()}>
     <div className={styles.box}>
      {buttonObj.startIcon}
      {buttonObj.label}
      {buttonObj.endIcon}
     </div>
    </button>
   </div>
  </>
 );
}
