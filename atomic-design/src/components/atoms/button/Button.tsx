type ButtonProps = {
  children: string;
  onClick: (e?: any) => void;
  href: string;
};

const Button = ({ children, onClick, href, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      Basic {children}
    </button>
  );
};

export default Button;
