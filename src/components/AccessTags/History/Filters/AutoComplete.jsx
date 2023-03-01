import React from "react";
import { Autocomplete, Box } from "@mui/material";
import Input from "@src/components/Basic/Input/input";
import { axios } from "@src/core";
import qs from "qs";

import { useDispatch } from "react-redux";
import { setAccessTagsFullHistoryFilterId } from "@src/redux/slices/AccessTags/fullHistoryFilter";

function AccessTagsHistoryFiltersAutoComplete() {
  const dispatch = useDispatch();
  const [accessTags, setAccessTags] = React.useState([]);
  React.useEffect(() => {
    const query = qs.stringify({
      quickSearchValue: "",
      name: "",
      description: "",
      includeMode: 1,
      order: "ASC",
      sortBy: "name",
      limit: 10,
      page: 1,
      all: true,
    });
    axios.get(`/api/accounts/access_tags?${query}`).then((response) => {
      setAccessTags(response.data.rows);
    });
  }, []);
  const normalizedAccessTags = accessTags.map((accessTag) => {
    return {
      label: `${accessTag.id} - ${accessTag.name}`,
      id: accessTag.id,
    };
  });
  return (
    <Box
      sx={{
        marginBottom: 2,
      }}
    >
      <Autocomplete
        options={normalizedAccessTags}
        onChange={(event, newValue) => {
          dispatch(setAccessTagsFullHistoryFilterId(newValue.id));
        }}
        onInputChange={(event, newInputValue) => {
          dispatch(setAccessTagsFullHistoryFilterId(null));
        }}
        clearOnEscape={true}
        renderInput={(params) => <Input {...params} label="Find Tag" />}
      />
    </Box>
  );
}

export default AccessTagsHistoryFiltersAutoComplete;
