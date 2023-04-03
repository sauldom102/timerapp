/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTaskBody } from '../models/CreateTaskBody';
import type { PaginatedTasks } from '../models/PaginatedTasks';
import type { Task } from '../models/Task';
import type { TaskStats } from '../models/TaskStats';
import type { UpdateTaskBody } from '../models/UpdateTaskBody';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TasksService {

    /**
     * List of tasks
     * @param page Page number
     * @returns any Success
     * @throws ApiError
     */
    public static getTasks(
        page: number = 1,
    ): CancelablePromise<{
        status?: string;
        data?: PaginatedTasks;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks',
            query: {
                'page': page,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a new task
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postTasks(
        requestBody: CreateTaskBody,
    ): CancelablePromise<{
        status?: string;
        data?: Task;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Category provided not found`,
            },
        });
    }

    /**
     * Get a task by id
     * @param taskId
     * @returns any Success
     * @throws ApiError
     */
    public static getTasks1(
        taskId: string,
    ): CancelablePromise<{
        status?: string;
        data?: Task;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks/{taskId}/',
            path: {
                'taskId': taskId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Task not found`,
            },
        });
    }

    /**
     * Delete a task given its id
     * @param taskId
     * @returns any Success
     * @throws ApiError
     */
    public static deleteTasks(
        taskId: string,
    ): CancelablePromise<{
        status?: string;
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tasks/{taskId}/',
            path: {
                'taskId': taskId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Task not found`,
            },
        });
    }

    /**
     * Update a task given its id
     * @param taskId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putTasks(
        taskId: string,
        requestBody: UpdateTaskBody,
    ): CancelablePromise<{
        status?: string;
        data?: Task;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tasks/{taskId}/',
            path: {
                'taskId': taskId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Task not found`,
            },
        });
    }

    /**
     * Receive tasks assigned for today
     * @returns any Success
     * @throws ApiError
     */
    public static getTasksToday(): CancelablePromise<{
        status?: string;
        data?: Array<Task>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks/today',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Reset task time
     * Resets the time for a task with the specified ID.
     * @param taskId ID of the task to reset
     * @returns any Task time reset successfully
     * @throws ApiError
     */
    public static postTasksReset(
        taskId: string,
    ): CancelablePromise<{
        status?: string;
        data?: Task;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks/{taskId}/reset',
            path: {
                'taskId': taskId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Task not found`,
            },
        });
    }

    /**
     * Get task stats
     * @returns any Task stats successfully retrieved
     * @throws ApiError
     */
    public static getTasksStats(): CancelablePromise<{
        status?: string;
        data?: TaskStats;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks/stats',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Add task registries
     * Add registries for a task with the specified ID.
     * @param taskId ID of the task to add registries to.
     * @param requestBody
     * @returns any Task registries created successfully
     * @throws ApiError
     */
    public static postTasksRegistries(
        taskId: string,
        requestBody?: Array<{
            from: string;
            to: string;
            seconds: number;
        }>,
    ): CancelablePromise<{
        status?: string;
        data?: Task;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks/{taskId}/registries',
            path: {
                'taskId': taskId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Task not found`,
            },
        });
    }

}
