const { PythonShell } = require("python-shell");

(async () => {
  try {
    console.log("Starting Python execution...");

    PythonShell.runString(
      'print("Hello, PythonShell!")',
      { mode: "text", pythonOptions: ["-u"], pythonPath: "python" },
      (err, results) => {
        if (err) {
          console.error("Python execution error:", err);
          return;
        }

        console.log("Python execution results:", results.join("\n"));
      }
    );
  } catch (error) {
    console.error("Error executing PythonShell:", error);
  }
})();
