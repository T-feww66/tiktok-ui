import { useEffect, useState } from "react";
import classNames from "classnames/bind";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faDownload,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

//Tippy
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";

import images from "@/assests/images";
import { Wrapper as PopperWrapper } from "@/Components/Popper";
import AccountItem from "@/Components/AccountItem";
import Button from "@/Components/Button";

const cx = classNames.bind(styles);
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
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faDownload} />}
                        outline
                        className={cx("customclassname")}
                    >
                        Upload
                    </Button>
                    <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>Log In</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
