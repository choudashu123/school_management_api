const db = require('../config/db');
const getDistance = require('../utils/distance');

exports.addSchool = async (req, res) => {
    const { name, address, longitude, latitude } = req.body;

    if (!name || !address || isNaN(longitude) || isNaN(latitude)) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        await db.execute(
            'INSERT INTO schools (name, address, longitude, latitude) VALUES (?, ?, ?, ?)',
            [name, address, longitude, latitude]
        );
        res.status(201).json({ message: 'School added successfully' });
    } catch (error) {
        console.error('Error adding school:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: "Invalid coordinates" });
    }

    try {
        const [schools] = await db.execute('SELECT * FROM schools');
        const sorted = schools.map(school => ({
            ...school, 
            distance: getDistance(parseFloat(latitude), parseFloat(longitude), school.latitude, school.longitude) 
        }))
        .sort((a, b) => a.distance - b.distance);

        res.json(sorted);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};