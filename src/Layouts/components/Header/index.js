import { useEffect, useState } from "react";
import classNames from "classnames/bind";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faQuestionCircle,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

//Tippy
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";

import images from "@/assests/images";
import { Wrapper as PopperWrapper } from "@/Components/Popper";
import AccountItem from "@/Components/AccountItem";
import Button from "@/Components/Button";
import Menu from "@/Components/Popper/Menu";

const cx = classNames.bind(styles);

//list cac item trong menu o header
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    title: "English",
                    code: "en",
                },
                {
                    title: "VietNam",
                    code: "vi",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: "Feedback and help",
        to: "/feedback",
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    placement={"bottom"}
                    render={(attrs) => (
                        <div
                            className={cx("search__result")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            {/* drop down search bar */}
                            <PopperWrapper>
                                <h4 className={cx("search__title")}>
                                    {" "}
                                    Account
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <div className={cx("search__left")}>
                            <input
                                className={cx("search__input")}
                                type="text"
                                placeholder="Search your placeholder"
                            />
                            <button className={cx("search__close", "icon")}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className={cx("search__loading", "icon")}
                                icon={faSpinner}
                            />
                        </div>
                        <button className={cx("search__submit")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx("action")}>
                    <Button outline>Upload</Button>
                    <Button primary>Log In</Button>

                    {/* Menu tai day */}
                    <Menu items={MENU_ITEMS}>
                        <button className={cx("menu_more")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
