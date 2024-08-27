import React from 'react';
import { cn } from '@/lib/utils';

interface OwnerState {
  variant: string;
  className: string;
  color: 'warning' | 'success' | 'error' | 'info' | 'default';
}

interface StyledLabelProps {
  className?: string;
  ownerState: OwnerState;
  children: React.ReactNode;
}

const StyledLabel: React.FC<StyledLabelProps> = ({
  children,
  className,
  ownerState,
}) => {
  
  const filledColours = {
    error: 'bg-red-600 text-white',
    info: 'bg-cyan-600 text-white',
    default: 'bg-gray-600 text-white',
    warning: 'bg-amber-600 text-white',
    success: 'bg-green-600 text-white',
  };
  
  const defaultColours = {
    error: 'bg-red-200 text-red-500',
    info: 'bg-cyan-200 text-cyan-500',
    default: 'bg-gray-200 text-gray-500',
    warning: 'bg-amber-200 text-amber-500',
    success: 'bg-green-200 text-green-500',
  };

  const outlinedColours = {
    error: 'border-2 border-red-500 text-red-500',
    info: 'border-2 border-cyan-500 text-cyan-500',
    default: 'border-2 border-gray-500 text-gray-500',
    warning: 'border-2 border-amber-500 text-amber-500',
    success: 'border-2 border-green-500 text-green-500',
  };

  const classes = cn(
    className,
    'h-6',
    'px-2',
    'text-sm',
    'font-sans',
    'rounded-md',
    'capitalize',
    'inline-flex',
    'leading-none',
    'items-center',
    'font-semibold',
    'cursor-default',
    'justify-center',
    'whitespace-nowrap',
    ownerState.variant === 'soft'
      ? defaultColours[ownerState.color]
      : ownerState.variant === 'outlined'
      ? outlinedColours[ownerState.color]
      : ownerState.variant === 'filled' && filledColours[ownerState.color]
  );

  return <div className={classes}>{children}</div>;
};

export default StyledLabel;
