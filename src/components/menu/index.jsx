import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import {
  faPencil,
  faEraser,
  faFileArrowDown,
  faRotateRight,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS } from "../../constants";
import { menuItemClick, actionItemClick } from "../../slice/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const activemenuItem = useSelector((state) => state.menu.activeMenuItem);
  console.log(activemenuItem);
  const handleMenuClick = (item) => {
    dispatch(menuItemClick(item));
  };

  const handleActionItemClick = (item) => {
    dispatch(actionItemClick(item));
  };
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activemenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
