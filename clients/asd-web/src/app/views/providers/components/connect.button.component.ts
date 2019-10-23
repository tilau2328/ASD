import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {CreateConnectionDto} from "../../../modules/providers/dto/connection.dto";

@Component({
  selector: 'app-connect-button',
  templateUrl: './connect.button.component.html',
  styleUrls: ['./connect.button.component.css']
})
export class ConnectButtonComponent implements OnInit {
  private readonly state: string = Math.random().toString().substr(2);
  private readonly redirectUri: string = 'http://localhost:4200';
  private readonly clientId: string = '07bef450190f644b46e6';
  private readonly scope: string = 'repo read:user';

  @Output('onSuccess') onSuccess = new EventEmitter<CreateConnectionDto>();
  @Output('onRemove') onRemove = new EventEmitter<void>();

  @Input('connected') connected: boolean = false;
  @Input('provider') provider: string;
  @Input('method') method: string;

  message: string;

  get icon() {
    return faGithub;
  }

  get uri() {
    const redirectUri = `${this.redirectUri}/auth/${this.method}?provider=${this.provider}`;
    return 'https://github.com/login/oauth/authorize?' +
      `client_id=${this.clientId}&redirect_uri=${redirectUri}&scope=${this.scope}&state=${this.state}`;
  }

  ngOnInit(): void {
    if (this.method && this.provider) {
      this.message = `${capitalize(this.method)} with ${capitalize(this.provider)}`;
    }
  }

  capitalize(value: string): string {
    return value[0].toUpperCase() + value.substr(1);
  }

  onClick(): void {
    if (this.connected) {
      return this.onRemove.emit();
    }
    const uri: string = this.uri;
    const onSuccess: EventEmitter<CreateConnectionDto> = this.onSuccess;
    const win = window.open(this.uri,'Authorize Provider','width=600');
    const id = setInterval(function () {
      if (!win.location.href.includes(uri) && !win.location.href.includes('about:blank')) {
        const { provider, code, state } = getParamsFromUrl(win.location.href, 'provider', 'state', 'code');
        if (provider && code && state) {
          onSuccess.emit({ provider, state, code });
          clearInterval(id);
          win.close();
        }
      }
    }, 500);
  }
}

function capitalize(value: string): string {
  return value[0].toUpperCase() + value.substr(1);
}

function getParamsFromUrl(url: string, ...params: string[]): any {
  let result: any = {};
  let values: string[] = url.split('?');
  if (values.length > 2) { return; }
  values = values[1].split('&');
  if (values.length > 3) { return; }
  for (const param of params) {
    const pair: string = values.find((value: string) => value.includes(`${param}=`));
    if (!pair) { return; }
    const val: string[] = pair.split('=');
    if (!val) { return; }
    result[param] = val[1];
  }
  console.log(result);
  return result;
}
