import { TPeopleInfo, TPeopleInfoList } from "utils/types";
import {
  GET_PEOPLE_INFO_LIST_REQUEST,
  GET_PEOPLE_INFO_LIST_SUCCESS,
  GET_PEOPLE_INFO_LIST_FAILED,
} from "services/PeopleInfo/type";
import { AppDispatch } from "index";
import { requestApi } from "utils/requestApi";

export interface IGetPeopleInfoListRequestAction {
  readonly type: typeof GET_PEOPLE_INFO_LIST_REQUEST;
}

export interface IGetPeopleInfoListSuccessAction {
  readonly type: typeof GET_PEOPLE_INFO_LIST_SUCCESS;
  readonly peopleInfoList: TPeopleInfoList;
}

export interface IGetPeopleInfoListFailedAction {
  readonly type: typeof GET_PEOPLE_INFO_LIST_FAILED;
}

export type TPeopleInfoListActions =
  | IGetPeopleInfoListRequestAction
  | IGetPeopleInfoListSuccessAction
  | IGetPeopleInfoListFailedAction;

export const getPeopleInfoList = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_PEOPLE_INFO_LIST_REQUEST,
    });
    requestApi("/").then((res) => {
      if (res) {
        dispatch({
          type: GET_PEOPLE_INFO_LIST_SUCCESS,
          peopleInfoList: res,
        });
      } else {
        dispatch({
          type: GET_PEOPLE_INFO_LIST_FAILED,
        });
      }
    });
  };
};

export const getPeopleInfoFilterList = (searchValue: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_PEOPLE_INFO_LIST_REQUEST,
    });
    requestApi("/?term=" + searchValue).then((res) => {
      if (res) {
        dispatch({
          type: GET_PEOPLE_INFO_LIST_SUCCESS,
          peopleInfoList: res,
        });
      } else {
        dispatch({
          type: GET_PEOPLE_INFO_LIST_FAILED,
        });
      }
    });
  };
};