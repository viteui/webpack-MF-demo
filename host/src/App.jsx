import React, { Suspense } from 'react';

const RemoteButton = React.lazy(() => import("remote/Button"));

export default function App() {
    return (
        <div>
            <h1>Host Application</h1>
            <Suspense fallback={<div>Loading Button...</div>}>
                <RemoteButton>Host Button (Remote Component)</RemoteButton>
            </Suspense>
        </div>
    );
}