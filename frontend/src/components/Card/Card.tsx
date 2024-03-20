import React from "react";
import styles from "./Card.module.css";
import { TPeopleInfo } from "utils/types";
import phoneIcon from "images/phone-icon.svg";
import mailIcon from "images/mail-icon.svg";

type TCardPeopleInfoProps = {
  data: TPeopleInfo;
  onClick?: () => void;
};

export const Card = ({ data, onClick }: TCardPeopleInfoProps): JSX.Element => {
  return (
    <div className={styles.card} onClick={() => onClick && onClick()}>
      <div className={styles.card__title}>{data.name}</div>
      <div className={styles.card__content}>
        <div className={styles.content__row}>
          <img className={styles.content__icon} src={phoneIcon} alt="" />
          <span className={styles.content_text}>{data.phone}</span>
        </div>
        <div className={styles.content__row}>
          <img className={styles.content__icon} src={mailIcon} alt="" />
          <span className={styles.content_text}>{data.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
