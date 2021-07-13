import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    <div style={{
        display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
    }}> appCHAT </div>

    return (

        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '10', fontWeight: '600', color: 'red' }} onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>

    )
}

export default SignIn