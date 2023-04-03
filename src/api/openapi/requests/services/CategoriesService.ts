/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoriesService {

    /**
     * List all categories
     * @returns any Return all categories
     * @throws ApiError
     */
    public static getCategories(): CancelablePromise<{
        status?: string;
        data?: Array<Category>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/',
        });
    }

}
