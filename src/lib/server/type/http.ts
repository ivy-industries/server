import type { Server } from 'node:http';

import { createServer } from 'node:http';

import { listen } from '../listen/listen.js';
import { listener } from '../listener.js';
import { RoutingIncomingMessage, RoutingServerResponse } from '../routing.js';

export async function http( port: number, address: string ): Promise<Server> {

  const http_instance = createServer( {
    IncomingMessage: RoutingIncomingMessage,
    ServerResponse: RoutingServerResponse,
    keepAlive: true
  }, listener );

  listen( http_instance, port, address );

  http_instance.on( 'error', console.error );

  return http_instance;
}
