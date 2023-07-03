import { RouteHandler } from './RouteHandler';

export interface Routes {
  [url: string]: RouteHandler;
}
