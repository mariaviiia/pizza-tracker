import "./Button.scss";

interface ButtonProps {
  onClick?: any;
  type?: BUTTON_TYPES;
  size?: BUTTON_SIZES;
  buttonLabel?: string;
  disabled?: boolean;
}

export enum BUTTON_SIZES {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum BUTTON_TYPES {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const Button = (props: ButtonProps) => {
  const {
    onClick,
    type = BUTTON_TYPES.PRIMARY,
    size = BUTTON_SIZES.MD,
    buttonLabel,
    disabled,
  } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button button-${type} button__size-${size}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
