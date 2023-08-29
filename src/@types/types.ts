export interface AppContextProp {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  createUser: (email: string, password: string,username:string) => void; 
  signInUser: (email: string, password: string) => void;
  user:any
  children?: React.ReactNode;
  }