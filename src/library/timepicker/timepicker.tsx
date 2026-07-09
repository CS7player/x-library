import styles from './timepicker.module.css';

export class TimePicker {
  public label: string = '';
  constructor(label: string = '') {
    this.label = label;
  }
}

interface TimePickerProperties {
  timePicker: TimePicker;
}

export function DropDownLib({ timePicker }: TimePickerProperties) {
  return (
    <>
      <div className={styles.test}>{timePicker.label}</div>
    </>
  );
}
