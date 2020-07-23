import React from "react";
import { Badge, Button } from "reactstrap";

interface RemovableTagProps {
  onRemove: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

export const RemovableTag: React.FC<RemovableTagProps> = ({
  onRemove,
  children,
}) => {
  return (
    <Badge
      tag="div"
      className="py-0 pr-0 d-inline-flex align-items-center"
      color="primary"
    >
      <div>{children}</div>
      <Button
        size="sm"
        color="primary"
        className="ml-2 py-1"
        onClick={onRemove}
      >
        <i className="fas fa-times-circle" />
      </Button>
    </Badge>
  );
};
