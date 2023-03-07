import store from "@src/redux/store";
export const accessTagsFunctionsOnEditingUpdate = (data) => {
  store.dispatch({
    type: "accessTags/data/main/updateAccessTagsDataMainEditingItems",
    payload: data,
  });
};
