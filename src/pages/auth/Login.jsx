import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../DB/firebase';
import { Container, Box, TextField, Button, Typography } from '@mui/material';


export default function Login() {
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [loading, setLoading] = React.useState(false);
const navigate = useNavigate();


const login = async () => {
try {
setLoading(true);
await signInWithEmailAndPassword(auth, email, password);
navigate('/');
} catch (e) {
alert(e.message);
} finally { setLoading(false); }
};


return (
<Container sx={{ py: 6, display: 'flex', justifyContent: 'center' }}>
<Box sx={{ width: 420, p: 4, borderRadius: 2, boxShadow: '0 8px 30px rgba(2,6,23,0.08)' }}>
<Typography variant='h5' sx={{ mb: 2, fontWeight: 700 }}>Login</Typography>
<TextField fullWidth label='Email' sx={{ mb: 2 }} value={email} onChange={(e)=>setEmail(e.target.value)} />
<TextField fullWidth label='Password' type='password' sx={{ mb: 2 }} value={password} onChange={(e)=>setPassword(e.target.value)} />
<Button fullWidth variant='contained' onClick={login} disabled={loading}>Sign in</Button>
<Typography sx={{ mt: 2, fontSize: 14 }}>Don't have an account? <Link to='/register'>Register</Link></Typography>
</Box>
</Container>
);
}