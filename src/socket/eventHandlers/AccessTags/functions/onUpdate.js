import store from "@src/redux/store";
export const accessTagsFunctionsOnUpdate = (data) => {
  store.dispatch({
    type: "accessTags/data/main/updateAccessTagsDataMainItem",
    payload: data,
  });
  store.dispatch({
    type: "accessTags/selected/updateAccessTagsSelectedItem",
    payload: data,
  });
};
