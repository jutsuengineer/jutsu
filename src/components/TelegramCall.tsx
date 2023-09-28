import React from "react";
import Link from "next/link";
import styles from "@/styles/telegram.module.css";

const TelegramCall = () => {
  return (
    <div className={styles.telegramcallout}>
      <p>
        <Link
          className={styles.telegramJoin}
          href="https://t.me/your_telegram_group_or_channel_link"
        >
          Join
        </Link>{" "}
        our Telegram Group for the latest updates and discussions!
      </p>
    </div>
  );
};

export default TelegramCall;
