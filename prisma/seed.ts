import { PrismaClient } from '@prisma/client';
import { exampleSeedData } from '../data/seed/gesd-seed';

const prisma = new PrismaClient();

async function main() {
  const { countries, educationLevels, subjectGroups, subjects, educationSystems, gradingSystems, grades, equivalencies } = exampleSeedData;

  await prisma.$transaction(async (tx) => {
    await tx.language.createMany({ data: [{ slug: 'english', name: 'English', code: 'en' }, { slug: 'swahili', name: 'Swahili', code: 'sw' }] });
    await tx.currency.createMany({ data: [{ slug: 'kenyan-shilling', code: 'KES', name: 'Kenyan Shilling' }, { slug: 'pound-sterling', code: 'GBP', name: 'Pound Sterling' }, { slug: 'us-dollar', code: 'USD', name: 'US Dollar' }] });

    for (const level of educationLevels) {
      await tx.educationLevel.create({ data: { ...level } });
    }

    for (const group of subjectGroups) {
      await tx.subjectGroup.create({ data: { ...group } });
    }

    for (const subject of subjects) {
      await tx.subject.create({ data: { ...subject, subjectGroupId: subject.subjectGroupId as string } });
    }

    for (const country of countries) {
      await tx.country.create({ data: { ...country, currencyId: country.currencyId ?? undefined } });
    }

    for (const system of educationSystems) {
      await tx.educationSystem.create({ data: { ...system } });
    }

    for (const gradingSystem of gradingSystems) {
      await tx.gradingSystem.create({ data: { ...gradingSystem } });
    }

    for (const grade of grades) {
      await tx.grade.create({ data: { ...grade } });
    }

    for (const equivalency of equivalencies) {
      await tx.gradeEquivalency.create({ data: { ...equivalency } });
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
