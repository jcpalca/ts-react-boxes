export interface IBoxFormData {
  width: string | number;
  height: string | number;
  backgroundColor: string;
}

export interface IBox extends IBoxFormData {
  id: string;
}

export interface IBoxProps extends IBox {
  remove: (id: string) => void;
}

export interface INewBoxFormProps {
  createBox: (box: IBox) => void;
}
