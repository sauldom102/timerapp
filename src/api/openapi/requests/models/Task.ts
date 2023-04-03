/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';

export type Task = {
    id: string;
    title: string;
    description?: string;
    estimatedDuration: number;
    seconds: number;
    date: string;
    completed?: boolean;
    category: Category;
};

