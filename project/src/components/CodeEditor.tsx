import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language: string;
  code: string;
  onChange: (value: string | undefined) => void;
}

export default function CodeEditor({ language, code, onChange }: CodeEditorProps) {
  return (
    <div className="h-[600px] border rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage={language}
        defaultValue={code}
        theme="vs-dark"
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}