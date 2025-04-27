const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Helper Functions
function readJSON(filePath) {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'data', filePath)));
}

function writeJSON(filePath, data) {
    fs.writeFileSync(path.join(__dirname, 'data', filePath), JSON.stringify(data, null, 2));
}

// Routes
// Registration
app.post('/api/register', (req, res) => {
    const { email, password, role } = req.body;
    const users = readJSON('users.json');
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ id: Date.now(), email, password, role: role || 'student' });
    writeJSON('users.json', users);
    res.json({ message: 'Registration successful' });
});

// Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const users = readJSON('users.json');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful', user });
});

// Get hostels
app.get('/api/hostels', (req, res) => {
    const hostels = readJSON('hostels.json');
    res.json(hostels);
});

// Apply for hostel
app.post('/api/apply', (req, res) => {
    const { studentId, roomPreference, personalDetails } = req.body;
    const applications = readJSON('applications.json');
    applications.push({ id: Date.now(), studentId, roomPreference, personalDetails, status: 'pending' });
    writeJSON('applications.json', applications);
    res.json({ message: 'Application submitted' });
});

// Admin - View applications
app.get('/api/applications', (req, res) => {
    const applications = readJSON('applications.json');
    res.json(applications);
});

// Admin - Approve/Reject
app.post('/api/application/:id/decision', (req, res) => {
    const { id } = req.params;
    const { decision } = req.body;
    const applications = readJSON('applications.json');
    const appIndex = applications.findIndex(a => a.id == id);
    if (appIndex === -1) {
        return res.status(404).json({ message: 'Application not found' });
    }
    applications[appIndex].status = decision;
    writeJSON('applications.json', applications);
    res.json({ message: `Application ${decision}` });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
