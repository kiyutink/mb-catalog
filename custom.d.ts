interface Window {
  google: any;
}

type ObjectLiteral<T = string> = {
  [key: string]: T;
};
