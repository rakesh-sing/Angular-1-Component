import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Online';

  getServerStatus() {
    return this.serverStatus;
  }
}
