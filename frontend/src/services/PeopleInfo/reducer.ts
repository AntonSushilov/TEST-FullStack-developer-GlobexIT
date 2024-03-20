import { TPeopleInfoListActions } from "services/PeopleInfo/action";
import {
  GET_PEOPLE_INFO_LIST_REQUEST,
  GET_PEOPLE_INFO_LIST_SUCCESS,
  GET_PEOPLE_INFO_LIST_FAILED,
} from "services/PeopleInfo/type";

import { TPeopleInfo, TPeopleInfoList } from "utils/types";

type TPeopleInfoState = {
  peopleInfoList: TPeopleInfoList;
  peopleInfoListRequest: boolean;
  peopleInfoListFailed: boolean;
};

export const initialState: TPeopleInfoState = {
  peopleInfoList: [],
  peopleInfoListRequest: false,
  peopleInfoListFailed: false,
};

export const peopleInfoReducer = (
  state = initialState,
  action: TPeopleInfoListActions
): TPeopleInfoState => {
  switch (action.type) {
    case GET_PEOPLE_INFO_LIST_REQUEST: {
      return {
        ...state,
        peopleInfoListRequest: true,
        peopleInfoListFailed: false,
      };
    }
    case GET_PEOPLE_INFO_LIST_SUCCESS: {
      return {
        ...state,
        peopleInfoList: action.peopleInfoList,
        peopleInfoListRequest: false,
        peopleInfoListFailed: false,
      };
    }
    case GET_PEOPLE_INFO_LIST_FAILED: {
      return {
        ...state,
        peopleInfoList: state.peopleInfoList,
        peopleInfoListRequest: false,
        peopleInfoListFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
