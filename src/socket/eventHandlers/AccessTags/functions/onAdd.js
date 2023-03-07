import store from "@src/redux/store";
export const accessTagsFunctionsOnAdd = (data) => {
  store.dispatch({
    type: "accessTags/data/main/addAccessTagsDataMainItem",
    payload: data,
  });
};
