import styles from './autocomplete.module.css';

export class AutoComplete {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface AutoCompleteProperties {
  autoComplete: AutoComplete;
}

export function AutoCompleteLib({ autoComplete }: AutoCompleteProperties) {
  return (
    <>
      <div className={styles.test}>{autoComplete.label}</div>
    </>
  );
}
