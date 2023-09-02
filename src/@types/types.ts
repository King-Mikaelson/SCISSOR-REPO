export interface AppContextProp {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  user: {},
  setUser: React.Dispatch<React.SetStateAction<{}>>
  children?: React.ReactNode;
  validatingUser: boolean,
  setValidatingUser: React.Dispatch<React.SetStateAction<boolean>>
  }