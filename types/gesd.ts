export type RecordStatus = 'Draft' | 'Active' | 'Deprecated' | 'Retired' | 'Archived';
export type SourceType = 'Government' | 'MinistryOfEducation' | 'University' | 'ExaminationCouncil' | 'ScholarshipProvider' | 'ProfessionalBody' | 'ResearchInstitution' | 'InternationalOrganization';

export interface BaseRecord {
  id: string;
  slug: string;
  version: number;
  effectiveFrom: string;
  effectiveTo?: string | null;
  status: RecordStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  sourceType?: SourceType | null;
  sourceName?: string | null;
  sourceOrganization?: string | null;
  sourceUrl?: string | null;
  documentVersion?: string | null;
  verified?: boolean;
  verifiedBy?: string | null;
  verifiedAt?: string | null;
  reviewDue?: string | null;
  confidenceScore?: number | null;
  notes?: string | null;
  keywords: string[];
  tags: string[];
  aliases: string[];
  commonAbbreviations: string[];
  seoTitle?: string | null;
  seoDescription?: string | null;
  aiSummary?: string | null;
  embeddingReady: boolean;
  relatedEntities: string[];
  semanticKeywords: string[];
  searchKeywords: string[];
}

export interface Country extends BaseRecord {
  isoCode: string;
  officialName: string;
  shortName: string;
  capital?: string | null;
  currencyId?: string | null;
  timeZone?: string | null;
  continent?: string | null;
  subRegion?: string | null;
  flag?: string | null;
  nationality?: string | null;
  drivingSide?: string | null;
  educationAuthority?: string | null;
}

export interface EducationLevel extends BaseRecord {
  name: string;
  shortName?: string | null;
  description?: string | null;
  parentLevelId?: string | null;
}

export interface SubjectGroup extends BaseRecord {
  name: string;
  description?: string | null;
}

export interface Subject extends BaseRecord {
  name: string;
  code: string;
  subjectGroupId: string;
  description?: string | null;
  difficultyIndex?: number | null;
  relatedSubjects: string[];
  careerRelevance?: number | null;
  universityRelevance?: number | null;
}

export interface EducationSystem extends BaseRecord {
  countryId: string;
  name: string;
  shortName?: string | null;
  qualificationLevel?: string | null;
  minimumSubjects?: number | null;
  maximumSubjects?: number | null;
  compulsorySubjects: string[];
  optionalSubjectGroups: string[];
  schoolStructure?: string | null;
  assessmentType?: string | null;
}

export interface EducationSystemSubject {
  id: string;
  educationSystemId: string;
  subjectId: string;
  required: boolean;
  optional: boolean;
  minimumGrade?: string | null;
  maximumGrade?: string | null;
  displayOrder?: number | null;
  validationRules?: string | null;
}

export interface GradingSystem extends BaseRecord {
  educationSystemId: string;
  name: string;
  description?: string | null;
}

export interface Grade extends BaseRecord {
  gradingSystemId: string;
  label: string;
  value: string;
  rank?: number | null;
  description?: string | null;
}

export interface GradeEquivalency extends BaseRecord {
  fromGrade: string;
  fromScale: string;
  toGrade: string;
  toScale: string;
  confidence?: number | null;
  source?: string | null;
}
