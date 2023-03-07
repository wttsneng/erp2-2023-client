import store from "@src/redux/store";
export const accessTagsFunctionsOnDelete = (data) => {
  store.dispatch({
    type: "accessTags/data/main/deleteAccessTagsDataMainItem",
    payload: data,
  });
  store.dispatch({
    type: "accessTags/selected/deleteAccessTagsSelectedItem",
    payload: data,
  });
};
