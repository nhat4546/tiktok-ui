import styles from "./PopperLoginSettings.module.scss";

import { CoinIcon, LogoutIcon, SettingsIcon, UserIcon } from "components/Icons";

function PopperLoginSettings() {
  return (
    <div className={styles["wrap-popper-settings"]}>
      <div className={styles["settings-item"]}>
        <UserIcon className={styles["settings-item-icon"]} />
        <h4 className={styles["settings-item-name"]}>Xem hồ sơ</h4>
      </div>
      <div className={styles["settings-item"]}>
        <CoinIcon className={styles["settings-item-icon"]} />
        <h4 className={styles["settings-item-name"]}>Nhận xu</h4>
      </div>
      <div className={styles["settings-item"]}>
        <SettingsIcon className={styles["settings-item-icon"]} />
        <h4 className={styles["settings-item-name"]}>Cài đặt</h4>
      </div>
      <div className="global-line-sprate"></div>
      <div className={styles["settings-item"]}>
        <LogoutIcon className={styles["settings-item-icon"]} />
        <h4 className={styles["settings-item-name"]}>Đăng xuất</h4>
      </div>
    </div>
  );
}

export default PopperLoginSettings;
