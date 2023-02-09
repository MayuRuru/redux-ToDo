import { formatDistanceToNow } from "date-fns";

import React from "react";

const TimeConverter = ({ timestamp }) => {
  let timePassed = "";
  if (timestamp) {
    //const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(new Date(timestamp));
    timePassed = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timePassed}</i>
    </span>
  );
};

export default TimeConverter;
