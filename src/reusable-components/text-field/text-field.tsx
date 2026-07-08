import { useState } from "react";
import "./text-field.css";

export class TextField {
  public label: string = "";
  public placeholder: string = "";
  public value: string = "";
  constructor(label: string, placeholder: string, value: string) {
    this.label = label;
    this.placeholder = placeholder;
    this.value = value;
  }
  setValue(value: string) {
    this.value = value;
  }
}

interface TfProps {
  tf: TextField;
}

export function TextFieldLib({ tf }: TfProps) {
  const [value, valueUpdater] = useState(tf.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueUpdater(e.target.value);
    tf.setValue?.(e.target.value);
  };
  return (
    <>
      <div className="container">
        {tf.label.length > 0 ? <div>{tf.label}</div> : null}
        <input
          className="tf"
          type="text"
          value={value}
          placeholder={tf.placeholder}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
