import {parseISO} from 'date-fns';
import type {QueuedTaskRegistry, StoredQueuedTaskRegistry} from './types';

export const parseQueuedTaskRegistries = (value?: string) => {
  if (!value) {
    return [] as QueuedTaskRegistry[];
  }

  const parsed = JSON.parse(value) as StoredQueuedTaskRegistry[];
  return parsed.map(registry => ({
    ...registry,
    from: parseISO(registry.from),
    to: registry?.to ? parseISO(registry.to) : undefined,
  })) as QueuedTaskRegistry[];
};
