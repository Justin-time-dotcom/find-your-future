import { prisma } from '../lib/database/prisma';

export class EducationRepository {
  async getCountries() {
    return prisma.country.findMany({ where: { deletedAt: null } });
  }

  async getEducationSystems() {
    return prisma.educationSystem.findMany({ where: { deletedAt: null } });
  }

  async getSubjects() {
    return prisma.subject.findMany({ where: { deletedAt: null } });
  }

  async getValidationRules(systemId: string) {
    const system = await prisma.educationSystem.findUnique({ where: { id: systemId } });
    return {
      minimumSubjects: system?.minimumSubjects ?? null,
      maximumSubjects: system?.maximumSubjects ?? null,
      compulsorySubjects: system?.compulsorySubjects ?? [],
    };
  }
}
