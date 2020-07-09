import dynamic from "next/dynamic";
import DefaultComponents from "../default/default-components";
const LhoftHeader = dynamic(() => import("./lhoft-header"));
const LhoftFooter = dynamic(() => import("./lhoft-footer"));

const LhoftComponents = {
  ...DefaultComponents,
  Header: LhoftHeader,
  Footer: LhoftFooter,
};

export default LhoftComponents;
