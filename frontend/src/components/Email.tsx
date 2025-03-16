import React, { useState } from 'react';
import { sendVerificationEmail } from '../api/authApi';
import { Container, Input, Button, Message } from '../styles/AuthStyles';

const EmailVerification: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleVerification = async () => {
        try {
            await sendVerificationEmail(email);
            setMessage('Verification email sent. Check your inbox.');
        } catch (error) {
            setMessage('Failed to send verification email.');
        }
    };

    return (
        <Container>
            <h2>Verify Your Email</h2>
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleVerification}>Send Verification Email</Button>
            {message && <Message>{message}</Message>}
        </Container>
    );
};

export default EmailVerification;
