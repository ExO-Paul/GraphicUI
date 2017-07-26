import {Endpoint} from "./Endpoint";
import {GraphComponent} from "../graph/graph.component";

export const ENDPOINTS: Endpoint[] = [
  {
    tabName: "Updates Count",
    apiUrl: "/updates",
    route: {
      path: 'updates',
      component: GraphComponent
    }
  },
  {
    tabName: "Last Cleanup",
    route: {
      path: 'cleanup',
      component: GraphComponent
    },
    apiUrl: "/cleanup"
  }
];
