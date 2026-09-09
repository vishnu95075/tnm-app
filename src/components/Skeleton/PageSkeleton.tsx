import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

const PageSkeleton: React.FC = () => {
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Page Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="circular" width={80} height={80} />

        <Skeleton variant="circular" width={80} height={80} />

        <Skeleton variant="circular" width={80} height={80} />
        <Skeleton variant="circular" width={80} height={80} />


      </Stack>
      <Stack spacing={2}>
        <Skeleton variant="rectangular" width={320} height={445} />
        <Skeleton variant="rectangular" width={320} height={445} />
      </Stack>
    </Box>
  );
};

export default PageSkeleton;