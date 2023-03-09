import React, { FC } from "react";
import {
  AccessTagsFiltersOrderBy,
  AccessTagsFiltersSortBy,
  AccessTagsFiltersDeletedInclude,
  AccessTagsFiltersActiveInclude,
  AccessTagsFiltersAllInclude,
  AccessTagsFiltersNameSearch,
  AccessTagsFiltersDescriptionSearch,
} from "./index";
import { Stack, Box, Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAccessTagsTranslation } from "@src/hooks/accessTags";

const Typography = styled(MuiTypography)({
  fontSize: "0.9rem",
  fontWeight: "bold",
  padding: 0,
  margin: 0,
});

const AccessTagsAllFilters: FC = () => {
  const { t } = useAccessTagsTranslation();
  return (
    <Stack direction={"column"} spacing={1}>
      <Box>
        <Typography>{t("ui.name")}</Typography>
        <AccessTagsFiltersNameSearch />
      </Box>
      <Box>
        <Typography>{t("ui.description")}</Typography>
        <AccessTagsFiltersDescriptionSearch />
      </Box>
      <Box>
        <Typography>{t("filters.sortBy")}</Typography>
        <AccessTagsFiltersSortBy />
      </Box>
      <Box>
        <Typography>{t("filters.orderBy")}</Typography>
        <AccessTagsFiltersOrderBy />
      </Box>
      <Box>
        <Typography>{t("filters.deleteInclude")}</Typography>
        <AccessTagsFiltersDeletedInclude />
        <AccessTagsFiltersActiveInclude />
        <AccessTagsFiltersAllInclude />
      </Box>
    </Stack>
  );
};

export default AccessTagsAllFilters;
