interface ImportMetaEnv {
    readonly NG_APP_FIREBASE_API_KEY: string;
    readonly NG_APP_MEASUREMENT_ID: string;
    // Add more env variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}