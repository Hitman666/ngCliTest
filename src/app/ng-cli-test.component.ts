import { Component } from '@angular/core';
import { NikolaComponent } from './+nikola';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng-cli-test-app',
  templateUrl: 'ng-cli-test.component.html',
  styleUrls: ['ng-cli-test.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/nikola', component: NikolaComponent}
])
export class NgCliTestAppComponent {
  title = 'ng-cli-test works!';
}
