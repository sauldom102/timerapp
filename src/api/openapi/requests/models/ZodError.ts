/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ZodError = {
    type?: string;
    errors?: {
        name?: string;
        issues?: Array<{
            code?: string;
            expected?: string;
            received?: string;
            path?: Array<string>;
            message?: string;
        }>;
    };
};

