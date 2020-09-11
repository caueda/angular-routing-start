import { Server } from './server/server.model';

export class ServersService {
  private servers: Server[] = [
    new Server(1, 'Production Server', 'oline'),
    new Server(2, 'Test Server', 'online'),
    new Server(3, 'Dev Server', 'online')
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
