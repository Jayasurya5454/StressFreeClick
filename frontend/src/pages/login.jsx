import React from 'react';
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import Likeme from '../components/likeme';
import backgroundImage from '../components/image.png'; // Adjust the path if necessary

export default function LoginPage() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}> 
            <SignedOut>
            <h2>Login to Your Account</h2>
                <SignIn />
            </SignedOut>
            
            <SignedIn>
            <div style={{position:'absolute',top:'15px',right:'20px' }}> <UserButton /></div>
           
                <Likeme />
                
            </SignedIn>
        </div>
    );
}
