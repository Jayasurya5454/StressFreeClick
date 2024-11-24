import React from 'react';
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import Likeme from '../components/likeme';

export default function LoginPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}> 
            <SignedOut>
            <h2>Login to Your Account</h2>
                <SignIn />
            </SignedOut>
            
            <SignedIn>
            <UserButton />
                <Likeme />
                
            </SignedIn>
        </div>
    );
}
