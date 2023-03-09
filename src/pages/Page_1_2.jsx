import React from "react";

import { Grid, Box, Stack } from "@mui/material";

import { injectAccessTagsReducers } from "@src/redux/slices/AccessTags/initAccessTagsRedux";
import { useAccessTagsDispatch } from "@src/hooks/accessTags/useAccessTagsRedux";
import { setSidebarActiveByLink } from "@src/redux/slices/Basic/sidebarSlice";

import { useAccessTagsClearPage } from "@src/hooks/accessTags";
import {
  AccessTagsSearch,
  AccessTagsEdit,
  AccessTagsTable,
  AccessTagsToolbar,
  AccessTagsWindowsFullHistoryWindow,
  AccessTagsTableFooter,
  AccessTagsToolsOpenFiltersButton,
  AccessTagsWindowsFilterWindow,
  AccessTagsWindowsMiniHistoryWindow,
  AccessTagsWarningsDelete,
} from "@src/components/AccessTags";
function Page_1_2() {
  const dispatch = useAccessTagsDispatch();

  injectAccessTagsReducers();
  useAccessTagsClearPage();

  React.useEffect(() => {
    dispatch(setSidebarActiveByLink("page/1_2"));
  }, [dispatch]);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: 2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facere voluptas in beatae temporibus aperiam ex distinctio placeat
            eos cupiditate numquam sunt, illum inventore ab id architecto,
            libero repellendus quos. Animi modi expedita voluptate alias ratione
            quas laudantium earum praesentium quod incidunt, sunt odit iusto ad.
            Odit earum odio inventore rerum consequuntur expedita saepe, aliquid
            praesentium rem doloremque fugit ex illo culpa modi soluta quia
            assumenda incidunt nulla atque adipisci esse. Maxime ullam,
            voluptate numquam architecto id eius, libero non illum deleniti
            molestiae autem neque blanditiis nostrum natus omnis expedita sunt
            provident qui in quos excepturi distinctio repellendus laboriosam.
            Quas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates quas, nihil illum temporibus fugit vel ratione debitis
            suscipit molestiae dicta sapiente optio est, quos fuga iste
            perferendis id voluptatem aut aperiam molestias eum omnis similique?
            Error quos architecto quibusdam aspernatur perferendis ipsam rem
            alias. Impedit nostrum iusto obcaecati molestiae. Tempora vitae
            aliquid possimus assumenda velit libero deserunt optio odio
            reiciendis at quas quis ullam, eveniet qui dolores excepturi
            voluptas iure enim dolor, obcaecati illum beatae soluta dolorum.
            Reprehenderit repellat repellendus quam tempore totam! Nisi eveniet
            voluptatem nobis magni dolorum consequuntur quis? Repellendus ipsum
            quas accusantium consectetur, porro quam eum sunt impedit atque
            numquam inventore, perferendis aliquam voluptates consequuntur
            doloribus consequatur, culpa reiciendis tempora est esse praesentium
            delectus cum. Autem dolorum dolores quisquam aliquam, eos sint
            corporis inventore esse in iusto vero nobis, molestiae
            exercitationem assumenda amet praesentium nihil, asperiores
            voluptatibus. Saepe necessitatibus id cum molestias perspiciatis
            repellendus optio soluta aliquid! Qui dolores praesentium similique
            rerum enim fugit ipsum, quod totam non veritatis deleniti nemo, iste
            aut reiciendis hic harum velit accusamus corporis quibusdam facere
            ratione fugiat neque. Autem alias molestiae aspernatur provident
            beatae commodi sapiente facilis eligendi, quae quisquam quaerat
            consequatur labori Lorem ipsum dolor sit amet consectetur
            adipisicinercitationem non quod dolorem cupiditate. At magni nam
            voluptatibus, delectus eos tempore consequuntur dolor. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Laboriosam adipisci
            corrupti qui blanditiis exercitationem omnis, sed quas iure ducimus
            minus voluptatum, sint repudiandae labore quis accusantium id
            aliquam maiores quia officia. Magni possimus quos temporibus
            architecto, laborum voluptatibus quod explicabo.
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .editContainer": {
                padding: 2,
                marginBottom: 2,
              },
            }}
          >
            <AccessTagsEdit />
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              padding: 2,
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <AccessTagsSearch />
              <AccessTagsToolsOpenFiltersButton />
            </Stack>
            <AccessTagsToolbar />
            <AccessTagsTable />
            <AccessTagsTableFooter />
          </Box>
        </Grid>
      </Grid>

      <AccessTagsWindowsMiniHistoryWindow />
      <AccessTagsWindowsFullHistoryWindow />
      <AccessTagsWindowsFilterWindow />
      <AccessTagsWarningsDelete />
    </>
  );
}

export default Page_1_2;
