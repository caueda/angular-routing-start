import { ServersService } from './../servers.service';
import { Server } from './server.model';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerResolverService implements Resolve<Server> {

  constructor(private serverService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Server> | Observable<Server> | Server {
    return this.serverService.getServer('1');
  }
}
