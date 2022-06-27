import styles from "./PopperNotLoginSettings.module.scss";

import { LanguageIcon, ReportHelpIcon, KeyboardIcon } from "components/Icons";

function PopperNotLoginSettings() {
  return (
    <div className={styles["wrap-popper-settings"]}>
      <div className={styles["settings-item"]}>
        <LanguageIcon className={styles["settings-item-icon"]} />
        <h4 className={styles["settings-item-name"]}>Tiếng Việt</h4>
      </div>
      <div className={styles["settings-item"]}>
        <ReportHelpIcon className={styles["settings-item-icon"]} />
        <h4 className={styles["settings-item-name"]}>Phản hồi và trợ giúp</h4>
      </div>
      <div className={styles["settings-item"]}>
        <KeyboardIcon className={styles["settings-item-icon"]} />
        <h4 className={styles["settings-item-name"]}>Phím tắt trên bàn phím</h4>
      </div>
    </div>
  );
}

export default PopperNotLoginSettings;
