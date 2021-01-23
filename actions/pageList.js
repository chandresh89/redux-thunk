import {GET_PAGE_LIST} from '../constants';
export function setPageList(pageList) {
  return {
    type: GET_PAGE_LIST,
    payload: pageList,
  };
}
export function getPageList() {
  return async (dispatch) => {
    try {
      const apiReq = await fetch(
        'http://dummy.restapiexample.com/api/v1/employees',
        {
          method: 'GET',
        },
      )
        .then((response) => response.json())
        .then((res) => {
          // const abc = res;
          // console.log('abc', abc);
          return res;
        });
      // const data = apiReq.json();
      console.log('page list', apiReq);
      await dispatch(setPageList(apiReq));

      return apiReq || [];
    } catch (error) {
      console.error(error);
    }
  };
}
