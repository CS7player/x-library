import styles from './datepicker.module.css';

export class DatePicker {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface DatePickerProperties {
  datepicker: DatePicker;
}

export function DatePickerLib({ datepicker }: DatePickerProperties) {
  return (
    <>
      <div className={styles.test}>{datepicker.label}</div>
    </>
  );
}
