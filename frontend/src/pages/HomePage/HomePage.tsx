import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import searchIcon from "images/search-icon.svg";
import Card from "components/Card/Card";
import { useAppDispatch } from "hooks/UseAppDispatch";
import { getPeopleInfoFilterList, getPeopleInfoList } from "services/PeopleInfo/action";
import { useAppSelector } from "hooks/UseAppSelector";
import Modal from "components/Modal/Modal";
import { TPeopleInfo } from "utils/types";
import PeopleInfoDetails from "components/PeopleInfoDetails/PeopleInfoDetails";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const [modalRender, setModalRender] = useState<boolean>(false);
  const [selectedPeopleInfo, setSelectedPeopleInfo] = useState<TPeopleInfo | null>(null);

  useEffect(() => {
    dispatch(getPeopleInfoList());
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      dispatch(getPeopleInfoList());
    } else {
      dispatch(getPeopleInfoFilterList(searchValue));
    }
  }, [searchValue]);

  const peopleInfoList = useAppSelector(
    (state) => state.peopleInfoReducer.peopleInfoList
  );

  const handleClickOpenModal = (data: TPeopleInfo) => {
    console.log(data)
    setSelectedPeopleInfo(data)
    setModalRender(true)
  }
  const handleClickCloseModal = () => {
    setModalRender(false)
  }

  return (
    <>
    <div className={styles.home_page}>
      <div className={styles.container}>
        <div className={styles.search}>
          <input
            className={styles.search__input}
            type="text"
            value={searchValue}
            onChange={(ev) => {
              setSearchValue(ev.target.value);
            }}
          />
          <img className={styles.search__icon} src={searchIcon} alt="" />
        </div>
        <div className={styles.content}>
          {peopleInfoList &&
            peopleInfoList.map((el, index) => <Card key={index} data={el} onClick={() => handleClickOpenModal(el)}/>)}
        </div>
      </div>
    </div>
    {modalRender && (
      <Modal onClose={handleClickCloseModal} title={selectedPeopleInfo?.name}>
        <PeopleInfoDetails data={selectedPeopleInfo} />
      </Modal>
    )}
    </>
  );
};

export default HomePage;
