import React from "react";
// Import NextUIProvider from the correct package
import { NextUIProvider } from "@nextui-org/react";

// Your main application component
function YourApplication() {
    return (
        <div>
            <h1>Welcome to My Next.js Application with NextUI</h1>
            {/* Add your other components or content here */}
        </div>
    );
}

// Main App component
function App() {
    // Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <YourApplication />
        </NextUIProvider>
    );
}

// Export the App component
export default App;
