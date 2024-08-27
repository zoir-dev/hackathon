import { forwardRef, ReactNode } from 'react';
import StyledLabel from './style';

interface LabelProps {
  children: ReactNode;
  color?: 'default' | 'warning' | 'success' | 'error' | 'info'; 
  variant?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string; 
  sx?: string;
  // Other props
  [key: string]: any;
}

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({
    children,
    color = 'default',
    variant = 'soft',
    startIcon,
    endIcon,
    className,
    ...other
  }) => {
    const iconStyle = {
      width: 16,
      height: 18,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };
    return (
      <StyledLabel
        {...other}
        ownerState={{ color, variant, className: className || '' }} 
        className={`${startIcon ? 'pl-3' : ''} ${endIcon ? 'pr-3' : ''} ${className || ''}`} 
      >
        {startIcon && (
          <span className='mr-2' style={iconStyle}>
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className='ml-2' style={iconStyle}>
            {endIcon}
          </span>
        )}
      </StyledLabel>
    );
  }
);

export default Label;
