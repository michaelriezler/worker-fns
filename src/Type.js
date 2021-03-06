// @flow

export type WebWorker = {
  postMessage (any): void,
  addEventListener (string, ({ data: Message }) => void): void
};

export let event = {
  INIT: 'INIT',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  VALUE: 'VALUE',
  CALL: 'CALL'
}

export type Event = $Keys<typeof event>;

export type Message = 
  | { type: typeof event.SUCCESS, functions: FunctionDefinition }
  | { type: typeof event.ERROR, error: ?string }
  | { type: typeof event.VALUE, data: any, id: number, error: ?string }
;

export type FunctionDefinition = {
  [string]: [string]
};

export type PromiseFns = { 
  resolve: (any) => void, 
  reject: (any) => void 
};

export type FunctionMap = Map<number, PromiseFns>;

export type FNClient = {
  [string]: {
    [string]: (any) => any
  }
};


export type CreateFunctionClient = 
  (FunctionDefinition, WebWorker) => FNClient;

export type MessageBody = { data: Message };
export type MessageHandler = (MessageBody)  => void;