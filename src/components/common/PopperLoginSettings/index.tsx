import styles from "./PopperLoginSettings.module.scss";

import userIcon from "assets/icons/header-user-icon.svg";
import getCoinIcon from "assets/icons/header-coin-icon.svg";
import settingIcon from "assets/icons/header-setting-icon.svg";

function PopperLoginSettings() {
  return (
    <div className={styles["wrap-popper-settings"]}>
      <div className={styles["settings-item"]}>
        <img
          className={styles["settings-item-icon"]}
          src={userIcon}
          alt="icon"
        />
        <h4 className={styles["settings-item-name"]}>Xem hồ sơ</h4>
      </div>
      <div className={styles["settings-item"]}>
        <img
          className={styles["settings-item-icon"]}
          src={getCoinIcon}
          alt="icon"
        />
        <h4 className={styles["settings-item-name"]}>Nhận xu</h4>
      </div>
      <div className={styles["settings-item"]}>
        <img
          className={styles["settings-item-icon"]}
          src={settingIcon}
          alt="icon"
        />
        <h4 className={styles["settings-item-name"]}>Cài đặt</h4>
      </div>
    </div>
  );
}

export default PopperLoginSettings;
