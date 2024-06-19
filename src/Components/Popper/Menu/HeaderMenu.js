import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx("menu__header")}>
            <button className={cx("menu__back")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <h4 className={cx("menu__title")}>{title}</h4>
        </header>
    );
}

export default HeaderMenu;
