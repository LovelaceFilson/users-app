import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import EditForm from './Components/EditForm';
import Register from './Components/Register';
import Login from './Components/Login';
import ProtectedRoute  from './Components/ProtectedRoute';

const Router = () => {
    return (
        <BrowserRouter>
            <ProtectedRoute exact path="/" component={App} />
            <ProtectedRoute path="/edit/:id" component={EditForm} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

        </BrowserRouter>
      
    );
}
export default Router; 