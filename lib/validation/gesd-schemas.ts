import { z } from 'zod';

export const countrySchema = z.object({
  slug: z.string().min(2),
  isoCode: z.string().length(2),
  officialName: z.string().min(2),
  shortName: z.string().min(2),
  continent: z.string().optional(),
  subRegion: z.string().optional(),
});

export const educationSystemSchema = z.object({
  slug: z.string().min(2),
  countryId: z.string().uuid(),
  name: z.string().min(2),
  minimumSubjects: z.number().int().positive().optional(),
  maximumSubjects: z.number().int().positive().optional(),
  compulsorySubjects: z.array(z.string()).default([]),
  optionalSubjectGroups: z.array(z.string()).default([]),
  schoolStructure: z.string().optional(),
  assessmentType: z.string().optional(),
});

export const transcriptValidationSchema = z.object({
  subjects: z.array(z.string()),
  grades: z.record(z.string(), z.string()),
  minimumSubjects: z.number().int().positive().optional(),
  maximumSubjects: z.number().int().positive().optional(),
  compulsorySubjects: z.array(z.string()).default([]),
});

export type TranscriptValidationInput = z.infer<typeof transcriptValidationSchema>;

export function validateEducationTranscript(input: TranscriptValidationInput) {
  const errors: string[] = [];

  if (input.minimumSubjects && input.subjects.length < input.minimumSubjects) {
    errors.push(`At least ${input.minimumSubjects} subjects are required.`);
  }

  if (input.maximumSubjects && input.subjects.length > input.maximumSubjects) {
    errors.push(`No more than ${input.maximumSubjects} subjects are allowed.`);
  }

  for (const subject of input.compulsorySubjects) {
    if (!input.subjects.includes(subject)) {
      errors.push(`Compulsory subject missing: ${subject}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
