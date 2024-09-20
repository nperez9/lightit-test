const sql = require('better-sqlite3');
const db = sql('database/light.db');

const dummyPatients = [
  {
    name: 'Niclas Fulkrug',
    email: 'niclasfulkrug@gmail.com',
    phone: '+32 12345678',
    document_image: '/images/documents/fullkrug.png',
  },
  {
    name: 'German Hersmmansen',
    email: 'brendford_hermmmansen@gmail.com',
    phone: '+22 334341335',
    document_image: '/images/documents/passport.jpg',
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS Patients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      document_image TEXT NOT NULL
   )
`,
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO Patients VALUES (
         null,
         @name,
         @email,
         @phone,
         @document_image
      )
   `);

  for (const patient of dummyPatients) {
    stmt.run(patient);
  }
}

initData();
