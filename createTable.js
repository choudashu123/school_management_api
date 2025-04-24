const db= require('./config/db');

const createTableIfNotExists = async () => {
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS schools(
            id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(255) NOT NULL, 
            address VARCHAR(255) NOT NULL, 
            longitude FLOAT NOT NULL, 
            latitude FLOAT NOT NULL
        )
    `;

    try {
        await db.execute(createTableSQL);
        console.log('Table created or already exists.');
        process.exit(0);
    } catch (error){
        console.error('Error creating table:', error.message);
        process.exit(1);
    }
}

createTableIfNotExists();