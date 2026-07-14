import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
import styles from './btn.module.css';
export class Button extends Observable<Button> {
 private _label: string = '';
 private _disabled: boolean = false;
 private _startIcon: React.JSX.Element | null = null;
 private _endIcon: React.JSX.Element | null = null;
 constructor(label: string) {
  super();
  this._label = label;
 }
 get label(): string {
  return this._label;
 }
 get disabled(): boolean {
  return this._disabled;
 }
 get startIcon(): React.JSX.Element | null {
  return this._startIcon;
 }
 get endIcon(): React.JSX.Element | null {
  return this._endIcon;
 }
 setDisabled(disabled: boolean) {
  this._disabled = disabled;
  this.uiRender();
 }
 setStartIcon(icon: React.JSX.Element) {
  this._startIcon = icon;
  this.uiRender();
 }
 setEndIcon(icon: React.JSX.Element) {
  this._endIcon = icon;
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
