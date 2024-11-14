import React from 'react';
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import Likeme from './likeme';

export default function LoginPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h2>Login to Your Account</h2>
            
            <SignedOut>
                <SignIn />
            </SignedOut>
            
            <SignedIn>
                <Likeme />
                <UserButton />
            </SignedIn>
        </div>
    );
}
