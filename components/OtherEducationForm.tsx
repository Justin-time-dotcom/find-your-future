'use client';

import { useEffect, useMemo, useState } from 'react';
import { useJourney } from './JourneyContext';

export function OtherEducationForm() {
  const { otherEducationSystemName, customGradingScale, customSubjects, customGrades, setOtherEducationSystemName, setCustomGradingScale, setCustomSubjects, setCustomGrades } = useJourney();
  const [subjectInput, setSubjectInput] = useState('');

  const subjects = useMemo(() => customSubjects.join(', '), [customSubjects]);

  useEffect(() => {
    if (!customSubjects.length) {
      setCustomSubjects(['English', 'Mathematics']);
    }
  }, [customSubjects.length, setCustomSubjects]);

  const addSubject = () => {
    const trimmed = subjectInput.trim();
    if (!trimmed) return;
    const nextSubjects = Array.from(new Set([...customSubjects, trimmed]));
    setCustomSubjects(nextSubjects);
    setSubjectInput('');
  };

  return (
    <div className="space-y-4 rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-5">
      <div>
        <label className="text-sm font-medium text-slate-200" htmlFor="other-system-name">
          Your education system name
        </label>
        <input
          id="other-system-name"
          value={otherEducationSystemName}
          onChange={(event) => setOtherEducationSystemName(event.target.value)}
          placeholder="e.g. National Curriculum"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-200" htmlFor="custom-grading-scale">
          Grading scale
        </label>
        <input
          id="custom-grading-scale"
          value={customGradingScale}
          onChange={(event) => setCustomGradingScale(event.target.value)}
          placeholder="e.g. 1 - 5"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-200" htmlFor="subject-entry">
          Add subjects
        </label>
        <div className="mt-2 flex gap-2">
          <input
            id="subject-entry"
            value={subjectInput}
            onChange={(event) => setSubjectInput(event.target.value)}
            placeholder="Type a subject"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
          />
          <button
            type="button"
            onClick={addSubject}
            className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Add
          </button>
        </div>
        <p className="mt-2 text-sm text-slate-400">Current subjects: {subjects || 'None yet'}</p>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-200">Grades</label>
        <textarea
          value={Object.entries(customGrades)
            .map(([subject, grade]) => `${subject}: ${grade}`)
            .join('\n')}
          onChange={(event) => {
            const parsed = event.target.value
              .split('\n')
              .filter(Boolean)
              .reduce<Record<string, string>>((acc, item) => {
                const [subject, grade] = item.split(':');
                if (subject && grade) acc[subject.trim()] = grade.trim();
                return acc;
              }, {});
            setCustomGrades(parsed);
          }}
          placeholder="English: A\nMathematics: B"
          className="mt-2 min-h-28 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
        />
      </div>
    </div>
  );
}
