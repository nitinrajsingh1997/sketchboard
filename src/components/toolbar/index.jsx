import styles from "./index.module.css";
import cx from "classnames";
import { COLORS, MENU_ITEMS } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { changeColor, changeBrushSize } from "../../slice/toolbarSlice";

const Toolbar = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbar[activeMenuItem]);
  const showToolStrokeOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };

  return (
    <div className={styles.toolbarContainer}>
      {showToolStrokeOption && (
        <div className={styles.item}>
          <h4 className={styles.text}>Stroke Color</h4>

          <div className={styles.itemContainer}>
            <div
              className={cx(styles.color, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
            />
            <div
              className={cx(styles.color, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            <div
              className={cx(styles.color, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.color, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            <div
              className={cx(styles.color, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
            <div
              className={cx(styles.color, {
                [styles.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
            />
          </div>
        </div>
      )}

      {showBrushToolOption && (
        <div className={styles.item}>
          <h4 className={styles.text}>Brush Size</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              name=""
              min={1}
              max={10}
              step={1}
              value={size}
              onChange={updateBrushSize}
              id=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
