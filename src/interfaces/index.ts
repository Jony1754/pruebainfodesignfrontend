export type Input = {
  name: string;
  label: string;
  type: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  inputs: Input[];
};

export type FormData = {
  [key: string]: string;
};
