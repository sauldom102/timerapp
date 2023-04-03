/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { SignUpRequest } from '../models/SignUpRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Sign up a new user
     * @param requestBody The request body should contain an email and password for the new user
     * @returns any User was signed up successfully
     * @throws ApiError
     */
    public static postAuthSignUp(
        requestBody: SignUpRequest,
    ): CancelablePromise<{
        status?: string;
        data?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/sign-up',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Log in an existing user
     * @param requestBody The request body should contain an email and password for the user
     * @returns any User was logged in successfully
     * @throws ApiError
     */
    public static postAuthLogin(
        requestBody: LoginRequest,
    ): CancelablePromise<{
        status?: string;
        data?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
