import { Component } from '@angular/core';
import { NzGraphData } from "ng-zorro-antd/graph";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = new NzGraphData( {
    nodes: [
      { id: `enter`, width: 100, height: 100 },
      { id: `a`, width: 100, height: 100 },
      { id: `b`, width: 100, height: 100 },
      { id: `c`, width: 100, height: 100 },
      { id: `exit`, width: 100, height: 100 },
    ],
    edges: [
      { v: `enter`, w: `a` },
      { v: `a`, w: `c` },
      { v: `c`, w: `exit` },
      { v: `enter`, w: `b` },
      { v: `b`, w: `exit` },
    ],
  } );
}
