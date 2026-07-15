import { useSyncExternalStore } from 'react';
import { Observable } from '../utils/observable';
import styles from './dialog.module.css';
import { Button, ButtonLib } from '../button/btn';

export class Dialog extends Observable<Dialog> {
 private _title: string = '';
 private _context: string = '';
 private _show: boolean = false;
 private _yesCallBack: () => void = () => {};
 private _noCallBack: () => void = () => {};
 constructor(title: string, context: string, yesCallBack: () => void, noCallBack: () => void = () => {}) {
  super();
  this._title = title;
  this._context = context;
  this._yesCallBack = yesCallBack;
  this._noCallBack = noCallBack;
 }
 get title(): string {
  return this._title;
 }
 get context(): string {
  return this._context;
 }
 get show(): boolean {
  return this._show;
 }
 start(): void {
  this._show = true;
  this.uiRender();
 }
 stop(): void {
  this._show = false;
  this.uiRender();
 }
 yesCallBack = () => {
  this._show = false;
  this._yesCallBack();
  this.uiRender();
 };
 noCallBack = () => {
  this._show = false;
  this._noCallBack();
  this.uiRender();
 };
}

interface DialogProperties {
 dialog: Dialog;
}

export function DialogLib({ dialog }: DialogProperties) {
 const snapshot = useSyncExternalStore(dialog.subscribe, dialog.snapshot);
 const dialogObj = snapshot.state;
 const yesBtn = new Button('Yes');
 const noBtn = new Button('No');

 let dialogHtml = null;
 if (dialogObj.show) {
  dialogHtml = (
   <div className={styles.container}>
    <div className={styles.dialog}>
     <div className={styles.header}>{dialogObj.title}</div>
     <div className={styles.context}>{dialogObj.context}</div>
     <div className={styles.btn}>
      <ButtonLib button={yesBtn} clickHandler={dialogObj.yesCallBack} />
      <ButtonLib button={noBtn} clickHandler={dialogObj.noCallBack} />
     </div>
    </div>
   </div>
  );
 }
 return <>{dialogHtml}</>;
}
