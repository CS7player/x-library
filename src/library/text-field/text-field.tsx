import { useState } from 'react';
import styles from './text-field.module.css';
import { Icon } from '../constants';
import type { IconType } from '../constants';

type InputType = 'text' | 'password' | 'number' | 'email';

export class TextField {
  public label: string = '';
  public placeholder: string = '';
  public value: string = '';
  public type: InputType = 'text';
  public isMandatory: boolean = false;
  public icon: IconType | null = null;
  public infoText: string = '';
  constructor(label: string = '', placeholder: string = '', value: string = '', type: InputType = 'text') {
    this.label = label;
    this.placeholder = placeholder;
    this.value = value;
    this.type = type;
  }
  setValue(value: string) {
    this.value = value;
  }
  setIcon(icon: IconType) {
    this.icon = icon;
  }
  setIsMandatory(isMandatory: boolean) {
    this.isMandatory = isMandatory;
  }
  setInfoText(infoText: string) {
    this.infoText = infoText;
  }
}

interface TextFieldProperties {
  textfield: TextField;
}

export function TextFieldLib({ textfield }: TextFieldProperties) {
  const [value, valueUpdater] = useState(textfield.value);
  const [isPassword, setPassword] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueUpdater(e.target.value);
    textfield.setValue?.(e.target.value);
  };

  let labelHtml = null;
  if (textfield.label.length > 0) {
    labelHtml = <div>{textfield.label}</div>;
  }

  let mandatoryHtml = null;
  if (textfield.isMandatory) {
    mandatoryHtml = <div className={styles.isMandatory}>*</div>;
  }

  let infoHtml = null;
  if (textfield.infoText.length > 0) {
    infoHtml = (
      <div className={styles.info_container}>
        <i className={Icon.Info}></i>
        <div className={styles.info}>{textfield.infoText}</div>
      </div>
    );
  }

  let headerElements = null;
  if (mandatoryHtml || infoHtml) {
    headerElements = (
      <div className={styles.headerElements}>
        {mandatoryHtml}
        {infoHtml}
      </div>
    );
  }

  let iconHtml = null;
  if (textfield.icon != null) {
    iconHtml = <i className={textfield.icon}></i>;
  }

  let tfHtml = null;
  switch (textfield.type) {
    case 'text': {
      tfHtml = <input type="text" value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
      break;
    }
    case 'email': {
      tfHtml = <input type="text" value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
      break;
    }
    case 'number': {
      tfHtml = <input type="number" value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
      break;
    }
    case 'password': {
      tfHtml = <input type={isPassword ? 'password' : 'text'} value={value} placeholder={textfield.placeholder} onChange={handleChange} />;
      break;
    }
  }

  let passwordHtml = null;
  if (textfield.type == 'password') {
    if (isPassword) {
      passwordHtml = <i className={Icon.Eye} onClick={() => setPassword(false)}></i>;
    } else {
      passwordHtml = <i className={Icon.EyeSlash} onClick={() => setPassword(true)}></i>;
    }
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          {labelHtml}
          {headerElements}
        </div>
        <div className={styles.container}>
          {iconHtml}
          {tfHtml}
          {passwordHtml}
        </div>
      </div>
    </>
  );
}
