import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../DB/firebase';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';


export default function Register() {
const [name, setName] = React.useState('');
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const navigate = useNavigate();


const register = async () => {
try {
const res = await createUserWithEmailAndPassword(auth, email, password);
await updateProfile(res.user, { displayName: name });
// save basic profile to firestore
await setDoc(doc(db, 'users', res.user.uid), { name, email, createdAt: Date.now() });
navigate('/');
} catch (e) { alert(e.message); }
};


return (
<Container sx={{ py: 6, display: 'flex', justifyContent: 'center' }}>
<Box sx={{ width: 420, p: 4, borderRadius: 2, boxShadow: '0 8px 30px rgba(2,6,23,0.08)' }}>
<Typography variant='h5' sx={{ mb: 2, fontWeight: 700 }}>Create Account</Typography>
<TextField fullWidth label='Full name' sx={{ mb: 2 }} value={name} onChange={(e)=>setName(e.target.value)} />
<TextField fullWidth label='Email' sx={{ mb: 2 }} value={email} onChange={(e)=>setEmail(e.target.value)} />
<TextField fullWidth label='Password' type='password' sx={{ mb: 2 }} value={password} onChange={(e)=>setPassword(e.target.value)} />
<Button fullWidth variant='contained' onClick={register}>Register</Button>
<Typography sx={{ mt: 2, fontSize: 14 }}>Already have an account? <Link to='/login'>Login</Link></Typography>
</Box>
</Container>
);
}