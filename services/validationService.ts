import { validateEducationTranscript } from '../lib/validation/gesd-schemas';
import { EducationRepository } from '../repositories/educationRepository';

export class ValidationService {
  constructor(private readonly repository = new EducationRepository()) {}

  async validateTranscript(systemId: string, subjects: string[], grades: Record<string, string>) {
    const rules = await this.repository.getValidationRules(systemId);
    return validateEducationTranscript({
      subjects,
      grades,
      minimumSubjects: rules.minimumSubjects ?? undefined,
      maximumSubjects: rules.maximumSubjects ?? undefined,
      compulsorySubjects: rules.compulsorySubjects,
    });
  }
}
