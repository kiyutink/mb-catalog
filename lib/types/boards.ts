export enum BoardLayoutTypes {
  Lhoft = "lhoft",
  Default = "default",
  Remote = "remote",
}

export enum BoardDataTypes {
  Common = "common",
  Default = "default",
  Remote = "remote",
  TalentBerlin = "talent-berlin",
}

export interface Board {
  layoutType: BoardLayoutTypes;
  dataType: BoardDataTypes;
  subdomain: string | null;
}
