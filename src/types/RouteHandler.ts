import { ServerResponse } from 'http';
import { RequestParams } from './RequestParams';

export interface RouteHandler {
  (req: RequestParams, res: ServerResponse): void;
}
