import type { ReactNode } from 'react';
import styles from './tooltip.module.css';

export class ToolTip {
 private _context: string = '';
 constructor(context: string = '') {
  this._context = context;
 }
 get context(): string {
  return this._context;
 }
}

interface ToolTipProperties {
 toolTip: ToolTip;
 children: ReactNode;
}

export function ToolTipLib({ toolTip, children }: ToolTipProperties) {
 return (
  <div className={styles.wrapper}>
   {children}
   <div className={styles.tooltip}>{toolTip.context}</div>
  </div>
 );
}
