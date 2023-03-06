import {
  accessTagsFunctionsOnAdd,
  accessTagsFunctionsOnDelete,
  accessTagsFunctionsOnUpdate,
  accessTagsFunctionsOnEditingUpdate,
} from "./functions";
const accessTagsEventCollection = {
  "accessTags/updateAccessTags": accessTagsFunctionsOnUpdate,
  "accessTags/deleteAccessTags": accessTagsFunctionsOnDelete,
  "accessTags/updateEditingItems": accessTagsFunctionsOnEditingUpdate,
  "accessTags/addAccessTags": accessTagsFunctionsOnAdd,
};

export default accessTagsEventCollection;
