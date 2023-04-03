import {z} from 'zod';

export const validationSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, 'Password needs to be at least 8 characters'),
    repeatPassword: z.string(),
  })
  .refine(data => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  });

export type Values = z.infer<typeof validationSchema>;
