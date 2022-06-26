import styles from "./PopperNotLoginSettings.module.scss";

import languageIcon from "assets/icons/language-icon.svg";
import reportHelpIcon from "assets/icons/report-help-icon.svg";
import keyboardIcon from "assets/icons/keyboard-icon.svg";

function PopperNotLoginSettings() {
  return (
    <div className={styles["wrap-popper-settings"]}>
      <div className={styles["settings-item"]}>
        <img
          className={styles["settings-item-icon"]}
          src={languageIcon}
          alt="icon"
        />
        <h4 className={styles["settings-item-name"]}>Tiếng Việt</h4>
      </div>
      <div className={styles["settings-item"]}>
        <img
          className={styles["settings-item-icon"]}
          src={reportHelpIcon}
          alt="icon"
        />
        <h4 className={styles["settings-item-name"]}>Phản hồi và trợ giúp</h4>
      </div>
      <div className={styles["settings-item"]}>
        <img
          className={styles["settings-item-icon"]}
          src={keyboardIcon}
          alt="icon"
        />
        <h4 className={styles["settings-item-name"]}>Phím tắt trên bàn phím</h4>
      </div>
    </div>
  );
}

export default PopperNotLoginSettings;
