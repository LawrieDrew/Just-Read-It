import React from 'react'
import './App.css';
import { UserProvider } from "./utils/UserContext";
import AppRouter from './pages';


const AuthExample = () => (
	<UserProvider>
		<AppRouter />
	</UserProvider>
)

export default AuthExample

