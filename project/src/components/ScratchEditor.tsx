import React from 'react';

interface ScratchEditorProps {
  description: string;
}

const ScratchEditor: React.FC<ScratchEditorProps> = ({ description }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Scratch Editor</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>

      <iframe
        src="http://localhost:8601"
        width="100%"
        height="600px"
        frameBorder="0"
        className="rounded-lg shadow-md"
        title="Scratch Editor"
      ></iframe>
    </div>
  );
};

export default ScratchEditor;
