/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Task } from './Task';

export type PaginatedTasks = {
    /**
     * Array of task items
     */
    items: Array<Task>;
    /**
     * Total count of tasks
     */
    count: number;
    /**
     * Next page number or null
     */
    nextPage?: number;
    /**
     * Previous page number or null
     */
    prevPage?: number;
    /**
     * Total number of pages
     */
    totalPages: number;
};

