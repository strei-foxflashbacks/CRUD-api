import { IncomingMessage } from 'http';

export interface RequestParams extends IncomingMessage {
  params?: {
    id?: string;
  };
}
