import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { programs } from "../data/mockData";
import { Assignment } from "../types";
import CodeEditor from "../components/CodeEditor";
import { Calendar } from "lucide-react";

export default function AssignmentView() {
  const { classId } = useParams();
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [pyodide, setPyodide] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const loadPyodideInstance = async () => {
      if (typeof window.loadPyodide !== "function") {
        console.error("Pyodide is not available.");
        return;
      }
      try {
        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.0/full/",
        });
        setPyodide(pyodideInstance);
      } catch (error) {
        console.error("Failed to load Pyodide:", error);
      }
    };
    loadPyodideInstance();
  }, []);

  const classItem = programs
    .flatMap((p) => p.semesters.flatMap((s) => s.classes))
    .find((c) => c.id === classId);

  if (!classItem) {
    return <div>Class not found</div>;
  }

  const handleAssignmentSelect = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    if (assignment.type === "code") {
      setCode(assignment.initialCode || "");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log("File submitted:", selectedFile.name);
      alert("File submitted successfully!");
      setSelectedFile(null);
    }
  };

  const runCode = async () => {
    if (!pyodide) {
      setOutput("Pyodide is still loading...");
      return;
    }
    try {
      pyodide.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);
      await pyodide.runPythonAsync(code);
      const capturedOutput = pyodide.runPython("sys.stdout.getvalue()");
      setOutput(capturedOutput || "No output");
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Assignments for {classItem.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            {classItem.assignments.map((assignment) => (
              <div
                key={assignment.id}
                onClick={() => handleAssignmentSelect(assignment)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedAssignment?.id === assignment.id
                    ? "bg-indigo-50 border-2 border-indigo-500"
                    : "bg-white border-2 border-transparent hover:border-indigo-200"
                }`}
              >
                <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            {selectedAssignment ? (
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {selectedAssignment.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{selectedAssignment.description}</p>
                </div>

                {selectedAssignment.type === "code" ? (
                  <div>
                    <CodeEditor
                      language="python"
                      code={code}
                      onChange={(value) => setCode(value || "")}
                    />
                    <button
                      onClick={runCode}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Run Code
                    </button>
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <h4 className="font-semibold text-gray-700">Output:</h4>
                      <pre className="text-gray-800">{output}</pre>
                    </div>
                  </div>
                ) : selectedAssignment.type === "link" ? (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Scratch Editor</h3>
                    <a
                      href={selectedAssignment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Open Scratch Editor
                    </a>
                  </div>
                ) : null}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit Your Work</h3>
                  <input type="file" onChange={handleFileChange} className="mb-2" />
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-500 text-white rounded mt-2"
                  >
                    Submit Work
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600">Select an assignment to begin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
