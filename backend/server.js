const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { runPythonCode } = require('./run-python');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/run-python', async (req, res) => {
    const { code } = req.body;
  
    console.log("Received code:", code);
  
    // Simple validation to check if the code is Python
    if (!code.includes("def ") && !code.includes("print(")) {
      return res.status(400).json({ error: "Invalid Python code provided." });
    }
  
    try {
      const output = await runPythonCode(code);
      console.log("Execution output:", output);
      res.json({ output });
    } catch (error) {
      console.error("Execution error:", error);
      res.status(500).json({ error: error.toString() });
    }
  });
  

// Start the server
const PORT = 5000; // You can change this to any available port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
