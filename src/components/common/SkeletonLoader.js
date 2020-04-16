import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoader = ({ number }) => {
  const skeletonArr = [];

  for (let i = 0; i < number; i++) {
    skeletonArr.push(
      <Skeleton key={i} animation="wave" variant="text" height={40} />
    );
  }

  return <>{skeletonArr}</>;
};

export default SkeletonLoader;
