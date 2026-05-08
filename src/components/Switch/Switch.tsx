import { type FC } from 'react';
import './Switch.css';

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: FC<SwitchProps> = ({ label, checked, onChange }) => {
  return (
    <div className="switch-wrapper">
      <span className="switch-label">{label}</span>
      <label className="switch-body">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={(e) => onChange(e.target.checked)} 
        />
        <span className="switch-slider"></span>
      </label>
    </div>
  );
};

export default Switch;