import React, { InputHTMLAttributes } from 'react';

// import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <input
        type="text"
        ref={ref}
        // ref={nameInputRef}
        {...rest}/>
    </div>
  )
}

export default React.forwardRef(Input);