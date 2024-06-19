import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "@/Components/Popper";

import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    // render ra cac item vd language, help or dark mode
    const renderItem = () => {
        return items.map((item, index) => {
            return (
                <MenuItem className={cx("menu-item")} key={index} data={item} />
            );
        });
    };

    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement={"bottom-end"}
            render={(attrs) => (
                <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
