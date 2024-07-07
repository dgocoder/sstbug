/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyWorker: {
      type: "sst.cloudflare.Worker"
      url: string
    }
  }
}
