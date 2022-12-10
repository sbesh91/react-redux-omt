export class Worker {
  onmessage: (m?: any) => void;
  constructor() {
    this.onmessage = () => {};
  }

  addEventListener(_event: string, func: () => void) {
    this.onmessage = func;
  }

  postMessage(msg: any) {
    this.onmessage(msg);
  }
}
