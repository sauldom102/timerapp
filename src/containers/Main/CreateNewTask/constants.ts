import {z} from 'zod';

export const validationSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date(),
  expectedDuration: z.date(),
  category: z.string(),
});

export type Values = z.infer<typeof validationSchema>;
