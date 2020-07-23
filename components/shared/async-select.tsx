import RAsyncSelect, { Props } from "react-select/async";
import { useState } from "react";

export const AsyncSelect: React.FC<Props<any>> = ({ id, ...props }) => {
  return (
    <RAsyncSelect
      components={{
        IndicatorSeparator: null,
      }}
      id={id}
      instanceId={id}
      {...props}
    />
  );
};
