import React, { useState } from "react";


const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <div>
            <h3>LOG IN</h3>
            {isSignedIn ? (
                <h3>Signed In</h3>
            ) : (
                <h3>Not Signed In </h3>
            )}
            
        </div>
    )
}

export default Login;