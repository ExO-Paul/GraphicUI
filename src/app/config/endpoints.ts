import {Endpoint} from "./Endpoint";
import {GraphComponent} from "../graph/graph.component";

const server: string = "http://10.6.97.56:8080";

export const ENDPOINTS: Endpoint[] = [
  {
    tabName: "KafkaLag",
    apiUrl: server.concat("/lag?size=100&isAsc=false"),
    route: {
      path: 'lag',
      component: GraphComponent
    }
  },
  {
    tabName: "Offer Cache",
    apiUrl:  server.concat("/offer_cache?size=100&isAsc=false"),
    route: {
      path: 'offer_cache',
      component: GraphComponent
    }
  }
];
