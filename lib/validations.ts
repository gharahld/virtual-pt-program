import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const childSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number().min(0).max(18).optional(),
  diagnosis: z.string().optional(),
  notes: z.string().optional(),
});

export const exerciseProgramSchema = z.object({
  name: z.string().min(3, 'Program name must be at least 3 characters'),
  description: z.string().optional(),
  frequency: z.string().optional(),
  duration: z.string().optional(),
  childId: z.string().cuid(),
});

export const progressSchema = z.object({
  completed: z.boolean(),
  sets: z.number().min(0).optional(),
  reps: z.number().min(0).optional(),
  notes: z.string().optional(),
  painLevel: z.number().min(0).max(10).optional(),
  difficulty: z.enum(['Easy', 'Moderate', 'Difficult']).optional(),
  programExerciseId: z.string().cuid(),
  childId: z.string().cuid(),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type ChildInput = z.infer<typeof childSchema>;
export type ExerciseProgramInput = z.infer<typeof exerciseProgramSchema>;
export type ProgressInput = z.infer<typeof progressSchema>;
