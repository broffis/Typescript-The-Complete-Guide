import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K] // => K refers to the Key in Type T
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // get on() {
  //   return this.events.on;
  // }

  on = this.events.on;

  // get trigger() {
  //   return this.events.trigger;
  // }

  trigger = this.events.trigger;

  // get get() {
  //   return this.attributes.get;
  // }

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((resp: AxiosResponse): void => {
      this.set(resp.data)
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((resp: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}