import React from "react";
import { TPeopleInfo } from "utils/types";
import styles from "./PeopleInfoDetails.module.css";

type TCardPeopleInfoProps = {
  data: TPeopleInfo | null;
};

export const PeopleInfoDetails = ({
  data,
}: TCardPeopleInfoProps): JSX.Element => {
  console.log(data);
  return (
    <div className={styles.content}>
      <section className={styles.section__info}>
        <div className={styles.section__row}>
          <div className={styles.row__title}>Телефон:</div>
          <div className={styles.row__text}>{data?.phone}</div>
        </div>
        <div className={styles.section__row}>
          <div className={styles.row__title}>Почта:</div>
          <div className={styles.row__text}>{data?.email}</div>
        </div>
        <div className={styles.section__row}>
          <div className={styles.row__title}>Дата приема:</div>
          <div className={styles.row__text}>{data?.hire_date}</div>
        </div>
        <div className={styles.section__row}>
          <div className={styles.row__title}>Должность:</div>
          <div className={styles.row__text}>{data?.position_name}</div>
        </div>
        <div className={styles.section__row}>
          <div className={styles.row__title}>Подразделение:</div>
          <div className={styles.row__text}>{data?.department}</div>
        </div>
      </section>
      <section className={styles.section__description}>
        <div className={styles.row__title}>Дополнительная информация:</div>
        <div className={styles.row__text}>
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </div>
      </section>
    </div>
  );
};

export default PeopleInfoDetails;
