import styles from "./index.module.css";
import { COLORS } from "../../constants";

const Toolbar = () => {
  const changeBrushSize = () => {};
  return (
    <div className={styles.toolbarContainer}>
      <div className={styles.item}>
        <h4 className={styles.text}>Stroke Color</h4>
        <div className={styles.itemContainer}>
          <div
            className={styles.color}
            style={{ backgroundColor: COLORS.BLACK }}
          />
          <div
            className={styles.color}
            style={{ backgroundColor: COLORS.RED }}
          />
          <div
            className={styles.color}
            style={{ backgroundColor: COLORS.GREEN }}
          />
          <div
            className={styles.color}
            style={{ backgroundColor: COLORS.YELLOW }}
          />
          <div
            className={styles.color}
            style={{ backgroundColor: COLORS.WHITE }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <h4 className={styles.text}>Brush Size</h4>
        <div className={styles.itemContainer}>
          <input
            type="range"
            name=""
            min={1}
            max={10}
            step={1}
            onChange={changeBrushSize}
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
