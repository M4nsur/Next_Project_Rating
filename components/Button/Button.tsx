import { ButtonProps } from './Button.props';
import styles from "./Button.module.css";
import cn from "classnames";
import Arrow from "./Arrow.svg";
//в пропсах (...props) содержатся свойства кнопки
const Button = ({appearance, arrow = "none", children, className, ...props}: ButtonProps): JSX.Element => {
    return (
         <button className={cn(styles.button, 
            {
                [styles.primary]: appearance == "primary",
                [styles.ghost]: appearance == "ghost"
            }
            )} {...props}>
                {children}
                {arrow != "none" && <span className={cn(styles.arrow, {
                    [styles.right]:arrow == "right",
                    [styles.down]:arrow == "down"
                })}><></>
                <Arrow/>
                </span>}               
                </button>
    );
};

export default Button;