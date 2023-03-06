import { store } from "@src/index";
export const accessTagsFunctionsOnEditingUpdate = (data) => {
  store.dispatch({
    type: "accessTags/data/main/updateAccessTagsDataMainEditingItems",
    payload: data,
  });
};
