import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverName: string = '';
  serverCreationStatus: string = 'No Server Available';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreation() {
    return (this.serverCreationStatus =
      'New Server is Created and Name of Server is' + this.serverName);
  }

  // onUpdateServerName(event: any) {
  //   console.log(event.target.value);
  //   return (this.serverName = event.target.value);
  // }
}
