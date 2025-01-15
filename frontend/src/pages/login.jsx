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
            <div style={{position:'absolute',top:'10px',right:'10px' }}> <UserButton /></div>
           
                <Likeme />
                
            </SignedIn>
        </div>
    );
}
