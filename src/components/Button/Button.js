 

const Button = ({
  label = '',
  ...restProps
}) => {
  return (
    <butotn {...restProps}>
      {label}
    </butotn>
  );
}

export default Button;
