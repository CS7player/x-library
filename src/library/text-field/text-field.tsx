import { useState } from 'react';
import './text-field.css';

type InputType = 'text' | 'password' | 'number' | 'email';

export const Icon = {
  // User
  User: 'fa-solid fa-user',
  Users: 'fa-solid fa-users',
  UserPlus: 'fa-solid fa-user-plus',
  // Search
  Search: 'fa-solid fa-magnifying-glass',
  SearchPlus: 'fa-solid fa-magnifying-glass-plus',
  SearchMinus: 'fa-solid fa-magnifying-glass-minus',
  // Authentication
  Lock: 'fa-solid fa-lock',
  Unlock: 'fa-solid fa-lock-open',
  Key: 'fa-solid fa-key',
  Eye: 'fa-solid fa-eye',
  EyeSlash: 'fa-solid fa-eye-slash',
  // Edit
  Pen: 'fa-solid fa-pen',
  Pencil: 'fa-solid fa-pencil',
  Edit: 'fa-solid fa-pen-to-square',
  Eraser: 'fa-solid fa-eraser',
  // Email
  Mail: 'fa-solid fa-envelope',
  MailOpen: 'fa-solid fa-envelope-open',
  PaperPlane: 'fa-solid fa-paper-plane',
  // Files
  File: 'fa-solid fa-file',
  FileText: 'fa-solid fa-file-lines',
  Folder: 'fa-solid fa-folder',
  FolderOpen: 'fa-solid fa-folder-open',
  // Actions
  Plus: 'fa-solid fa-plus',
  Minus: 'fa-solid fa-minus',
  Check: 'fa-solid fa-check',
  XMark: 'fa-solid fa-xmark',
  Trash: 'fa-solid fa-trash',
  Download: 'fa-solid fa-download',
  Upload: 'fa-solid fa-upload',
  Refresh: 'fa-solid fa-rotate-right',
  // Navigation
  Home: 'fa-solid fa-house',
  Menu: 'fa-solid fa-bars',
  ArrowLeft: 'fa-solid fa-arrow-left',
  ArrowRight: 'fa-solid fa-arrow-right',
  ArrowUp: 'fa-solid fa-arrow-up',
  ArrowDown: 'fa-solid fa-arrow-down',
  // Communication
  Phone: 'fa-solid fa-phone',
  Mobile: 'fa-solid fa-mobile-screen',
  Message: 'fa-solid fa-message',
  Bell: 'fa-solid fa-bell',
  // Date & Time
  Calendar: 'fa-solid fa-calendar',
  Clock: 'fa-solid fa-clock',
  // Misc
  Heart: 'fa-solid fa-heart',
  Star: 'fa-solid fa-star',
  Bookmark: 'fa-solid fa-bookmark',
  Settings: 'fa-solid fa-gear',
  Info: 'fa-solid fa-circle-info',
  Warning: 'fa-solid fa-triangle-exclamation',
} as const;

export type Icon = (typeof Icon)[keyof typeof Icon];

export class TextField {
  public label: string = '';
  public placeholder: string = '';
  public value: string = '';
  public type: InputType = 'text';
  public isMandatory: boolean = false;
  public icon: Icon | null = null;
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
  setIcon(icon: Icon) {
    this.icon = icon;
  }
  setIsMandatory(isMandatory: boolean) {
    this.isMandatory = isMandatory;
  }
  setInfoText(infoText: string) {
    this.infoText = infoText;
  }
}

interface TfProps {
  tf: TextField;
}

export function TextFieldLib({ tf }: TfProps) {
  const [value, valueUpdater] = useState(tf.value);
  const [isPassword, setPassword] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueUpdater(e.target.value);
    tf.setValue?.(e.target.value);
  };

  let labelHtml = null;
  if (tf.label.length > 0) {
    labelHtml = <div>{tf.label}</div>;
  }

  let mandatoryHtml = null;
  if (tf.isMandatory) {
    mandatoryHtml = <div className="isMandatory">*</div>;
  }

  let infoHtml = null;
  if (tf.infoText.length > 0) {
    infoHtml = (
      <div className="info-container">
        <i className={Icon.Info}></i>
        <div className="info">{tf.infoText}</div>
      </div>
    );
  }

  let headerElements = null;
  if (mandatoryHtml || infoHtml) {
    headerElements = (
      <div className="headerElements">
        {mandatoryHtml}
        {infoHtml}
      </div>
    );
  }

  let iconHtml = null;
  if (tf.icon != null) {
    iconHtml = <i className={tf.icon}></i>;
  }

  let tfHtml = null;
  switch (tf.type) {
    case 'text': {
      tfHtml = <input type="text" value={value} placeholder={tf.placeholder} onChange={handleChange} />;
      break;
    }
    case 'email': {
      tfHtml = <input type="text" value={value} placeholder={tf.placeholder} onChange={handleChange} />;
      break;
    }
    case 'number': {
      tfHtml = <input type="number" value={value} placeholder={tf.placeholder} onChange={handleChange} />;
      break;
    }
    case 'password': {
      tfHtml = <input type={isPassword ? 'password' : 'text'} value={value} placeholder={tf.placeholder} onChange={handleChange} />;
      break;
    }
  }

  let passwordHtml = null;
  if (tf.type == 'password') {
    if (isPassword) {
      passwordHtml = <i className={Icon.Eye} onClick={() => setPassword(false)}></i>;
    } else {
      passwordHtml = <i className={Icon.EyeSlash} onClick={() => setPassword(true)}></i>;
    }
  }

  return (
    <>
      <div className="main">
        <div className="header">
          {labelHtml}
          {headerElements}
        </div>
        <div className="container">
          {iconHtml}
          {tfHtml}
          {passwordHtml}
        </div>
      </div>
    </>
  );
}
