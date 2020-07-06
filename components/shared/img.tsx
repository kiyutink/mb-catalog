import React, { useState, ImgHTMLAttributes } from "react";

const DEFAULT_IMAGE_SRC = "/assets/default-logo.png";

export const Img: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  width,
  height,
  ...rest
}) => {
  const [loadingError, setLoadingError] = useState(false);

  return (
    <img
      onError={() => {
        setLoadingError(true);
      }}
      style={{
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        overflow: "hidden",
      }}
      width={width}
      height={height}
      src={loadingError ? DEFAULT_IMAGE_SRC : src}
      {...rest}
    />
  );
};
