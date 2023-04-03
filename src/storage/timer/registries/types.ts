export type StoredQueuedTaskRegistry = {
  taskId: string;
  from: string;
  to?: string;
  seconds: number;
};

export type QueuedTaskRegistry = {
  taskId: string;
  from: Date;
  to?: Date;
  seconds: number;
};

export type AddQueuedTaskRegistry = {
  taskId: string;
  play: boolean;
};
