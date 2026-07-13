import styles from './loader.module.css';

export class Loader {
 public label: string = '';
 constructor(label: string = '') {
  this.label = label;
 }
}

interface LoaderProperties {
 loader: Loader;
}

export function LoaderLib({ loader }: LoaderProperties) {
 return (
  <>
   <div className={styles.test}>{loader.label}</div>
  </>
 );
}
