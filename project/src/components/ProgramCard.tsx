import { ChevronRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
  onClick: () => void;
}

export default function ProgramCard({ program, onClick }: ProgramCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={program.image}
          alt={program.name}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.name}</h3>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <div className="flex items-center text-indigo-600">
          <span className="font-medium">View Program</span>
          <ChevronRight className="w-5 h-5 ml-1" />
        </div>
      </div>
    </div>
  );
}