/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateUserBody } from '../models/UpdateUserBody';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get current user information
     * @returns any Success
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<{
        status?: string;
        data?: User;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update current user information
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putUser(
        requestBody: UpdateUserBody,
    ): CancelablePromise<{
        status?: string;
        data?: User;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
