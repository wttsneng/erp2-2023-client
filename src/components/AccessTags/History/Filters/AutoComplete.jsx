import React from "react";
import { Autocomplete, Box } from "@mui/material";
import Input from "@src/components/Basic/Input/input";
import { axios } from "@src/core";
import qs from "qs";

import { useDispatch } from "react-redux";
import { setAccessTagsHistoryFiltersMainId } from "@src/redux/slices/AccessTags/history/filters/main";

function AccessTagsHistoryFiltersAutoComplete() {
  const dispatch = useDispatch();
  const [accessTags, setAccessTags] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    const query = qs.stringify({
      quickSearchValue: searchValue,
      name: "",
      description: "",
      includeMode: 1,
      order: "ASC",
      sortBy: "name",
      limit: 10,
      page: 1,
    });
    axios.get(`/api/accounts/access_tags?${query}`).then((response) => {
      setAccessTags(response.data.rows);
    });
  }, [searchValue]);
  const normalizedAccessTags = accessTags.map((accessTag) => {
    return {
      label: `${accessTag.id} - ${accessTag.name}`,
      id: accessTag.id,
    };
  });
  const onInputChange = (event, newInputValue) => {
    setSearchValue(newInputValue);
  };
  return (
    <Box
      sx={{
        marginBottom: 2,
      }}
    >
      <Autocomplete
        options={normalizedAccessTags}
        onChange={(event, newValue) => {
          dispatch(setAccessTagsHistoryFiltersMainId(newValue.id));
        }}
        onInputChange={onInputChange}
        clearOnEscape={true}
        renderInput={(params) => <Input {...params} label="Find Tag" />}
      />
    </Box>
  );
}

export default AccessTagsHistoryFiltersAutoComplete;
