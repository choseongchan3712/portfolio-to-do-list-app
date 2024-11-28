export interface OnSubmitType {
  detail: string;
  isOneCheck: boolean;
  isEveryCheck: boolean;
  startTime?: string;
  endTime?: string;
  everyDayTime?: string;
};

export interface isOpenType {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}