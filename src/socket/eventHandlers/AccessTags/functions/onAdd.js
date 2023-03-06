import { store } from "@src/index";
export const accessTagsFunctionsOnAdd = (data) => {
  store.dispatch({
    type: "accessTags/data/main/addAccessTagsDataMainItem",
    payload: data,
  });
};
