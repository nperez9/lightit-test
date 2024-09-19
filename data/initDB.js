const sql = require('better-sqlite3');
const db = sql('light.db');

const dummyPatients = [
  {
    name: 'Niclas Fulkrug',
    email: 'niclasfulkrug@gmail.com',
    phone: '+32 12345678',
    document: 12345678,
    document_image: '/images/documets/fullkrug.png',
  },
  {
    name: 'Lionel Messi',
    email: 'lionelmessi@gmail.com',
    phone: '+34 98765432',
    document: 23456789,
    document_image: '/images/documents/messi.png',
  },
  {
    name: 'Cristiano Ronaldo',
    email: 'cristianoronaldo@gmail.com',
    phone: '+39 87654321',
    document: 34567890,
    document_image: '/images/documents/ronaldo.png',
  },
  {
    name: 'Neymar Jr',
    email: 'neymarjr@gmail.com',
    phone: '+55 76543210',
    document: 45678901,
    document_image: '/images/documents/neymar.png',
  },
  {
    name: 'Kylian Mbappé',
    email: 'kylianmbappe@gmail.com',
    phone: '+33 65432109',
    document: 56789012,
    document_image: '/images/documents/mbappe.png',
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS Patients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      document INTEGER NOT NULL,
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
         @document,
         @document_image
      )
   `);

  for (const patient of dummyPatients) {
    stmt.run(patient);
  }
}

initData();
