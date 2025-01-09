const { PythonShell } = require("python-shell");

function runPythonCode(code) {
  return new Promise((resolve, reject) => {
    console.log("Starting Python execution..."); // Debug log

    PythonShell.runString(
      code,
      { mode: "text", pythonOptions: ["-u"] }, // Ensure unbuffered mode
      (err, results) => {
        if (err) {
          console.error("Python execution error:", err); // Debug log
          return reject(err);
        }

        console.log("Python execution results:", results); // Debug log
        resolve(results ? results.join("\n") : "No output");
      }
    );
  });
}

module.exports = { runPythonCode };
