'use client';

import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react';

type JourneyState = {
  selectedCountry: string | null;
  selectedEducationSystem: string | null;
  otherEducationSystemName: string;
  customGradingScale: string;
  customSubjects: string[];
  customGrades: Record<string, string>;
  isWizardOpen: boolean;
  currentStep: number;
  isComplete: boolean;
};

type JourneyContextValue = JourneyState & {
  openWizard: () => void;
  closeWizard: () => void;
  setCountry: (country: string | null) => void;
  setEducationSystem: (system: string | null) => void;
  setOtherEducationSystemName: (name: string) => void;
  setCustomGradingScale: (scale: string) => void;
  setCustomSubjects: (subjects: string[]) => void;
  setCustomGrades: (grades: Record<string, string>) => void;
  nextStep: () => void;
  previousStep: () => void;
  resetJourney: () => void;
  completeJourney: () => void;
};

type JourneyAction =
  | { type: 'OPEN_WIZARD' }
  | { type: 'CLOSE_WIZARD' }
  | { type: 'SET_COUNTRY'; payload: string | null }
  | { type: 'SET_EDUCATION_SYSTEM'; payload: string | null }
  | { type: 'SET_OTHER_EDUCATION_SYSTEM_NAME'; payload: string }
  | { type: 'SET_CUSTOM_GRADING_SCALE'; payload: string }
  | { type: 'SET_CUSTOM_SUBJECTS'; payload: string[] }
  | { type: 'SET_CUSTOM_GRADES'; payload: Record<string, string> }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'RESET_JOURNEY' }
  | { type: 'COMPLETE_JOURNEY' };

const initialState: JourneyState = {
  selectedCountry: null,
  selectedEducationSystem: null,
  otherEducationSystemName: '',
  customGradingScale: '',
  customSubjects: [],
  customGrades: {},
  isWizardOpen: false,
  currentStep: 0,
  isComplete: false,
};

function journeyReducer(state: JourneyState, action: JourneyAction): JourneyState {
  switch (action.type) {
    case 'OPEN_WIZARD':
      return { ...state, isWizardOpen: true, currentStep: 0, isComplete: false };
    case 'CLOSE_WIZARD':
      return { ...state, isWizardOpen: false };
    case 'SET_COUNTRY':
      return { ...state, selectedCountry: action.payload, selectedEducationSystem: null };
    case 'SET_EDUCATION_SYSTEM':
      return { ...state, selectedEducationSystem: action.payload };
    case 'SET_OTHER_EDUCATION_SYSTEM_NAME':
      return { ...state, otherEducationSystemName: action.payload };
    case 'SET_CUSTOM_GRADING_SCALE':
      return { ...state, customGradingScale: action.payload };
    case 'SET_CUSTOM_SUBJECTS':
      return { ...state, customSubjects: action.payload };
    case 'SET_CUSTOM_GRADES':
      return { ...state, customGrades: action.payload };
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, 3) };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0) };
    case 'RESET_JOURNEY':
      return initialState;
    case 'COMPLETE_JOURNEY':
      return { ...state, isComplete: true, isWizardOpen: false };
    default:
      return state;
  }
}

const JourneyContext = createContext<JourneyContextValue | undefined>(undefined);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(journeyReducer, initialState);

  const value = useMemo<JourneyContextValue>(
    () => ({
      ...state,
      openWizard: () => dispatch({ type: 'OPEN_WIZARD' }),
      closeWizard: () => dispatch({ type: 'CLOSE_WIZARD' }),
      setCountry: (country) => dispatch({ type: 'SET_COUNTRY', payload: country }),
      setEducationSystem: (system) => dispatch({ type: 'SET_EDUCATION_SYSTEM', payload: system }),
      setOtherEducationSystemName: (name) => dispatch({ type: 'SET_OTHER_EDUCATION_SYSTEM_NAME', payload: name }),
      setCustomGradingScale: (scale) => dispatch({ type: 'SET_CUSTOM_GRADING_SCALE', payload: scale }),
      setCustomSubjects: (subjects) => dispatch({ type: 'SET_CUSTOM_SUBJECTS', payload: subjects }),
      setCustomGrades: (grades) => dispatch({ type: 'SET_CUSTOM_GRADES', payload: grades }),
      nextStep: () => dispatch({ type: 'NEXT_STEP' }),
      previousStep: () => dispatch({ type: 'PREVIOUS_STEP' }),
      resetJourney: () => dispatch({ type: 'RESET_JOURNEY' }),
      completeJourney: () => dispatch({ type: 'COMPLETE_JOURNEY' }),
    }),
    [state],
  );

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const context = useContext(JourneyContext);

  if (!context) {
    throw new Error('useJourney must be used within a JourneyProvider');
  }

  return context;
}
