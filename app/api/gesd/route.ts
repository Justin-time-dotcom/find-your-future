import { NextResponse } from 'next/server';
import { EducationRepository } from '../../../repositories/educationRepository';

export async function GET() {
  const repository = new EducationRepository();
  const countries = await repository.getCountries();
  const systems = await repository.getEducationSystems();
  const subjects = await repository.getSubjects();

  return NextResponse.json({ countries, systems, subjects });
}
