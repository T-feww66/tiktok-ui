import classNames from "classnames/bind";

import style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx("account-item")}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9a6fa459ade1b7b80594866516716a9f.jpeg?lk3s=a5d48078&nonce=34692&refresh_token=39e5341d96415c508b170fd41e75c9d3&x-expires=1718866800&x-signature=T1RUN2jmOj2b%2FlHSrh2HqUmM494%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
                className={cx("account-item__avatar")}
            />
            <div className={cx("account__info")}>
                <h3 className={cx("account__username")}>
                    Dao Le Phuong Hoa
                    <FontAwesomeIcon icon={faCheckCircle} className={cx("account__icon")} />
                </h3>
                <p className={cx("account__username-desc")}>hoa@daole</p>
            </div>
        </div>
    );
}

export default AccountItem;
