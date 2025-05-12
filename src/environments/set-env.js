const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, 'environment.prod.ts');

const envConfig = `
export const firebaseConfig = {
    apiKey: "${process.env.NG_APP_FIREBASE_API_KEY}",
    measurementId: "${process.env.NG_APP_FIREBASE_MEASUREMENT_ID}",
    authDomain: "letcode-586d3.firebaseapp.com",
    projectId: "letcode-586d3",
    storageBucket: "letcode-586d3.firebasestorage.app",
    messagingSenderId: "872685536112",
    appId: "1:872685536112:web:97001a67ec3f47a0a345b5",
};
`;

fs.writeFileSync(targetPath, envConfig, { encoding: 'utf8' });

console.log(`✅ Environment config generated at ${targetPath}`, `${process.env.NG_APP_FIREBASE_API_KEY}`);
