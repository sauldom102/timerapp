import {z} from 'zod';

export const validationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type Values = z.infer<typeof validationSchema>;
