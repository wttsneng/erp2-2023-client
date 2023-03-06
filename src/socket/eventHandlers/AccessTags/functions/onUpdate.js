import { store } from "@src/index";
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
