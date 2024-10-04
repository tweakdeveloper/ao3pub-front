import { z } from 'zod';

export const WorkMetadata = z.object({
  title: z.string(),
});
