import {z} from 'zod';

export const validationSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  username: z.string().optional(),
});

export type Values = z.infer<typeof validationSchema>;
