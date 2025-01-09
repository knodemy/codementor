import { Video, BookOpen } from 'lucide-react';
import { Class } from '../types';
import { Link } from 'react-router-dom';

interface ClassCardProps {
  classItem: Class;
}

export default function ClassCard({ classItem }: ClassCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{classItem.name}</h3>
          <p className="text-gray-600 mb-3">{classItem.description}</p>
          <p className="text-sm text-gray-500 mb-4">Instructor: {classItem.instructor}</p>
          <div className="flex space-x-4">
            <a
              href={classItem.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              <Video className="w-4 h-4 mr-2" />
              Join Class
            </a>
            <Link
              to={`/assignments/${classItem.id}`}
              className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Assignments ({classItem.assignments.length})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}