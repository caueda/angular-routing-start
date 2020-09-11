import { Server } from './server.model';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServersService,
      private activatedRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    // const id = +this.activatedRoute.snapshot.params['id'];
    // this.activatedRoute.params.subscribe((p: Params) => {
    //   this.server = this.serversService.getServer(+p['id']);
    // });
    // this.server = this.serversService.getServer(id);
    this.activatedRoute.data.subscribe((data: Data) => {
      console.log('data: ...', data);
      this.server = data['server'];
      console.log('this.server....', this.server);
    });
  }

  onEdit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const allowEdit = this.activatedRoute.snapshot.queryParams['allowEdit'];
    console.log('allowEdit ', allowEdit);
    this.router.navigate(['/servers', id, 'edit'], {queryParamsHandling: 'preserve'});
  }
}
