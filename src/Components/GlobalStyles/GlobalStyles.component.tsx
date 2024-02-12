import { ReactNode } from "react";

import styles from "./GlobalStyles.module.scss";
import classNames from "classnames/bind";

type GlobalStylesProps = {
    children: ReactNode;
};
const cx = classNames.bind(styles);

function GlobalStyles({ children }: GlobalStylesProps) {
    return <div className={cx("global_wrapper")}>{children}</div>;
}

export default GlobalStyles;
