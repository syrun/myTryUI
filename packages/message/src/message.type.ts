type TMessageType = 'sucess' | 'info' | 'error' | 'warning'

export interface TMessagType {
  id?: number,
  message?: string,
  type?: TMessageType,
  duration?: number,
  center?: boolean,
  offset?: number,
  showClose?: boolean,
  onclose?: () => void,
}

export type TMessageOptions = TMessagType | string