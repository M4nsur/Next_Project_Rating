import styles from "./Tag.module.css";
import cn from "classnames";
import { tagProps } from './Tag.props';


const Tag = ({color = "grey", size, children, href, ...props}: tagProps) => {
    return (
        <div className={cn(styles.tag, {
            [styles.s]: size == "s",
            [styles.m]: size == "m",
            [styles.ghost]: color == "ghost",
            [styles.main]: color == "main",
            [styles.greenLight]: color == "greenLight",
            [styles.red]: color == "red",
            [styles.grey]: color == "grey",
            [styles.greenLight]: color == "greenLight",
        })}
        {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};

export default Tag;