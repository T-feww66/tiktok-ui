import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import style from "./Button.module.scss";

const cx = classNames.bind(style);

function Button({
    className,
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    outlinePrimary = false,
    disabled = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = "button";

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    const classes = cx("btn", {
        [className]: className,
        primary,
        outline,
        rounded,
        outlinePrimary,
        disabled,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("btn__icon")}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx("btn__icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
