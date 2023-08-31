import React, { useEffect } from 'react';
import './styles/App.css';
import {  AuthProvider, DatabaseProvider, FirestoreProvider, useFirebaseApp, useFirestore, useFirestoreDocData } from 'reactfire';
import {  connectFirestoreEmulator, doc, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { RouteHandler } from './setup/RouteHandler';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './styles/Theme';
import { ErrorBoundary } from './common/ErrorBoundary';
import { SnackbarProvider } from 'notistack';


const App: React.FC = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app)
  const database = getDatabase(app)
  const firestoreInstance = getFirestore(app)
  if (process.env.NODE_ENV !== 'production') {
    connectFirestoreEmulator(firestoreInstance, "localhost", 8088);
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  useEffect(() => {

  }, [])


  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={database}>
          <SnackbarProvider autoHideDuration={1000}>
            <ThemeProvider theme={defaultTheme}>
              <ErrorBoundary>
                <div className="App">
                  <RouteHandler />
                  {/* <BurritoTaste /> */}
                </div>
              </ErrorBoundary>
            </ThemeProvider>
          </SnackbarProvider>

        </DatabaseProvider>
      </AuthProvider>
    </FirestoreProvider>
  );
}

export default App;
