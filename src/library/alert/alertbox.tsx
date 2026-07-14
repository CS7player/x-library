import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
import styles from './alertbox.module.css';
import { Icons } from '../';
interface AlertObj {
 text: string;
 id: number;
}

export class AlertBox extends Observable<AlertBox> {
 private static instance = new AlertBox();
 private date = new Date();
 private _alertArray: AlertObj[] = [];
 private timer: number = 2000;
 get alertArray() {
  return this._alertArray;
 }
 static getInstance() {
  return AlertBox.instance;
 }
 static ShowAlert(text: string) {
  if (!text) return;
  const obj = AlertBox.instance;
  const id = obj.date.getTime();
  obj._alertArray.push({ text, id });
  obj.uiRender();
  obj.autoRemover(id);
 }

 autoRemover(id: number) {
  setTimeout(() => {
   this._alertArray = this._alertArray.filter((e) => e.id != id);
   this.uiRender();
  }, this.timer);
 }

 static setTimer(time: number) {
  const obj = AlertBox.instance;
  obj.timer = time;
 }

 remove(index: number) {
  this._alertArray.splice(index, 1);
  this.uiRender();
 }
}

export function AlertBoxLib() {
 const alertBox = AlertBox.getInstance();
 useSyncExternalStore(alertBox.subscribe, alertBox.snapshot);
 return (
  <div className={styles.container}>
   {alertBox.alertArray.map((ele, index) => (
    <div key={index} className={styles.alert_box}>
     <div>{ele.text}</div>

     <div className={styles.closer} onClick={() => alertBox.remove(index)}>
      <Icons.Trash />
     </div>
    </div>
   ))}
  </div>
 );
}
