import Axios from "axios";
import {
  TABLE_DATA_FAIL,
  TABLE_DATA_REQUEST,
  TABLE_DATA_sUCCESS,
  UPDATE_TABLE_DATA,
} from "../constants/tableDataConstants";

export const tableData = () => async (dispatch) => {
  dispatch({
    type: TABLE_DATA_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "http://universities.hipolabs.com/search?country=United+States"
    );
    dispatch({
      type: TABLE_DATA_sUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TABLE_DATA_FAIL,
      payload: error,
    });
  }
};

export const updateTableData = (data) => {
  return {
    type: UPDATE_TABLE_DATA,
    payload: data,
  };
};
