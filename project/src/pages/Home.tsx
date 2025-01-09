import { useState } from 'react';
import { programs } from '../data/mockData';
import ProgramCard from '../components/ProgramCard';
import ClassCard from '../components/ClassCard';
import { ChevronRight } from 'lucide-react';
import { Program, Semester } from '../types';

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null);

  const resetSelection = () => {
    setSelectedProgram(null);
    setSelectedSemester(null);
  };

  const renderBreadcrumbs = () => (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <button
        onClick={resetSelection}
        className="hover:text-indigo-600"
      >
        Programs
      </button>
      {selectedProgram && (
        <>
          <ChevronRight className="w-4 h-4" />
          <button
            onClick={() => setSelectedSemester(null)}
            className="hover:text-indigo-600"
          >
            {selectedProgram.name}
          </button>
        </>
      )}
      {selectedSemester && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{selectedSemester.name}</span>
        </>
      )}
    </div>
  );

  const renderContent = () => {
    if (selectedSemester) {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Classes for {selectedSemester.name}
          </h2>
          {selectedSemester.classes.map((classItem) => (
            <ClassCard key={classItem.id} classItem={classItem} />
          ))}
        </div>
      );
    }

    if (selectedProgram) {
      return (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Semesters in {selectedProgram.name}
          </h2>
          <div className="grid gap-6">
            {selectedProgram.semesters.map((semester) => (
              <div
                key={semester.id}
                onClick={() => setSelectedSemester(semester)}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-900">{semester.name}</h3>
                <p className="text-gray-600 mt-2">{semester.classes.length} Classes</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={() => setSelectedProgram(program)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {renderBreadcrumbs()}
        {renderContent()}
      </div>
    </div>
  );
}