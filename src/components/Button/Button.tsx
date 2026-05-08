import { type FC, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ leftIcon, rightIcon, children, className = '', ...props }) => {
  return (
    <button className={`custom-button ${className}`} {...props}>
      {leftIcon && <span className="btn-icon left">{leftIcon}</span>}
      <span className="btn-text">{children}</span>
      {rightIcon && <span className="btn-icon right">{rightIcon}</span>}
    </button>
  );
};

export default Button;