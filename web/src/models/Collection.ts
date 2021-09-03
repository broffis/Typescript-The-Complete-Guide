import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";



export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize:(json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  // This is what he had
  // fetch(): void {
  //   axios.get(this.rootUrl)
  //     .then((resp: AxiosResponse): void => {
  //       resp.data.forEach((val: K) => {
  //         this.models.push(this.deserialize(val));
  //       })
  //     })

  //     this.trigger('change');
  // }

  // This works, but void is not a valid return for async promises
  async fetch(): void {
    let response: AxiosResponse = await axios.get(this.rootUrl);
    response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
    });

    this.trigger("change");
  }
}