import { useSyncExternalStore, type ReactNode } from 'react';
import { Observable } from '../utils/observable';
import styles from './loader.module.css';
import loaderGif from '../../assets/gif/loader.gif';

export class Loader extends Observable<Loader> {
 private static instance = new Loader();
 public showLoader: boolean = false;
 static getInstance() {
  return Loader.instance;
 }
 static show() {
  const obj = Loader.instance;
  obj.showLoader = true;
  obj.uiRender();
 }
 static hide() {
  const obj = Loader.instance;
  obj.showLoader = false;
  obj.uiRender();
 }
}

interface LoaderProperties {
 children?: ReactNode;
}

export function LoaderLib({ children }: LoaderProperties) {
 const loaderObj = Loader.getInstance();
 useSyncExternalStore(loaderObj.subscribe, loaderObj.snapshot);
 let logoHtml: ReactNode = <img className={styles.logo} src={loaderGif} alt="loader"></img>;
 if (children != null) {
  logoHtml = children;
 }
 let loaderHtml = null;
 if (loaderObj.showLoader) {
  loaderHtml = <div className={styles.container}>{logoHtml}</div>;
 }
 return <>{loaderHtml}</>;
}
