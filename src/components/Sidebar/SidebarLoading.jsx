import { Stack, Skeleton } from "@mui/material";
export default function SidebarLoading() {
  return (
    <Stack spacing={1}>
      {Array(11)
        .fill()
        .map((_, index) => (
          <Skeleton variant={"rounded"} key={index} height={50} />
        ))}
    </Stack>
  );
}
