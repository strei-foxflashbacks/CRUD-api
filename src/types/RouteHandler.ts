import { IncomingMessage, ServerResponse } from 'http';

export interface RouteHandler {
  (req: IncomingMessage, res: ServerResponse): void;
}
