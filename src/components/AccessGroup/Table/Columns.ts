import i18next from "@src/locales/i18n";

const AccessGroupsTableColumns = [
  {
    field: "name",
    headerName: i18next.t("global:ui.name"),
    description: i18next.t("accessGroups:nameInfo"),
    flex: 1,
    resizable: true,
    editable: true,
  },
  {
    field: "description",
    headerName: i18next.t("global:ui.description"),
    description: i18next.t("accessGroups:descriptionInfo"),
    flex: 1,
    resizable: true,
    editable: true,
  },
];

export default AccessGroupsTableColumns;
