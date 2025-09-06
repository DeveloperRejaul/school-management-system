
interface IButtonProps {
    text?:string;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger'| 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}
export default function Button(props: IButtonProps) {
  const {
    children,
    onClick,
    isLoading= false,
    className = '',
    type = 'button',
    variant = 'primary',
    size = 'md',
    text,
  } = props;

  const base = 'btn';

  const sizes = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }[size];

  const variants = {
    primary: 'bg-primary',
    secondary: 'btn',
    accent: 'btn',
    danger: 'btn',
    outline:"btn"
  }[variant]

  const disabledClasses = isLoading? 'opacity-50 cursor-not-allowed pointer-events-none': 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={isLoading ? undefined : onClick}
      disabled={isLoading}
      className={`${base} ${sizes} ${variants} ${disabledClasses} ${className}`}
    >
      {isLoading ? (
        <span
          className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin p-2"
          aria-hidden="true" 
        />
      ) :children ?? text }
    </button>
  );
}