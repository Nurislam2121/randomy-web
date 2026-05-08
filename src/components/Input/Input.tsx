import './Input.css';
import { type FC, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    error?: string
}

const Input: FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      
      <input 
        className={`custom-input ${error ? 'input-error' : ''}`} 
        {...props} 
      />
      
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Input;