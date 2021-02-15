export interface ButtonProps {
  label: string; 
  type: 'button' | 'reset' | 'submit'; 
  modifier: string; 
  size: string; 
  onClick?: any;
  href?: string, 
  className?: string;
}