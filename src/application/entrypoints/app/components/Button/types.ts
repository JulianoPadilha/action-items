export interface ButtonProps {
  label: string; 
  type: 'button' | 'reset' | 'submit'; 
  modifier: string; 
  size: string; 
  onClick?: () => void;
  href?: string, 
  className?: string;
}