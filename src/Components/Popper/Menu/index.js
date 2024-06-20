import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "@/Components/Popper";
import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; //item cuoi cung cua trang

    // render ra cac item vd language, help or dark mode
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            const classes = cx("menu-item", {
                separate: item.separate,
            });
            return (
                <MenuItem
                    className={classes}
                    key={index}
                    data={item}
                    onClick={() => {
                        //push object vao trong mang vao trong history
                        if (isParent)
                            setHistory((prev) => [...prev, item.children]);
                    }}
                />
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
                    {/* Dropdown cua menu */}
                    <PopperWrapper>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() =>
                                    setHistory((prev) => {
                                        return prev.slice(0, prev.length - 1);
                                    })
                                }
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
