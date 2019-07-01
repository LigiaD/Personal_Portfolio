import React, { Component } from "react";
import Login from "../auth/login";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulAuth();
        this.props.history.push("/");
    }

    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulAuth();

    }
    render() {
        return (
        <div className = "auth-page-wrapper">
            <div className = "left-column"
                style = {{
                    backgroundImage: 'url("../../../static/assets/images/auth/login.jpg")'
                }}
            />

        
            <div className = "right-column">
                <Login
                    handleSuccessfulAuth = {this.handleSuccessfulAuth}
                    handleUnSuccessfulAuth = {this.handleUnSuccessfulAuth}
                />
            </div>

        </div>
        );
    }
}