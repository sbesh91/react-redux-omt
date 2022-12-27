export declare class Worker {
    onmessage: (m?: any) => void;
    constructor();
    addEventListener(_event: string, func: () => void): void;
    postMessage(msg: any): void;
}
