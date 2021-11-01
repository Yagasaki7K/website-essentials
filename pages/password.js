import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const PasswordPage = () => {
    function getPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
        var passwordLength = 12;
        var password = "";

        for (var i = 0; i < passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }

        document.getElementById('password').value = password

        /* Reset the alert the copied text */
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }

    function copyPassword() {
        /* Get the text field */
        var copyText = document.getElementById("password");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied!";
    }

    return (
        <Password>
            <Link href="/"><a><Image src="/logo.png" alt="Logotipo" /></a></Link>
            
            <hr />
            
            <h2>Generate a secure password</h2>
            <div className="break" />
            
            <p>Use our online password generator to instantly
                create a secure random password.
            </p>
            <div className="break" />
            
            <input type="text" placeholder="Copy your new password" id="password" readonly="" />
            <div className="break" />
            
            <button id="btnPassword" onClick={getPassword}>Generate Password</button>
            
            <div class="tooltip">
                <button id="btnCopy" onClick={copyPassword}>
                <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                Copy Password</button>
            </div>
        </Password>
    )
}

export default PasswordPage

const Password = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    margin-top: 150px;
    width: 700px;
    
    img {
        width: 400px;
    }

    hr {
        margin-top: 30px;
        margin-bottom: -10px;
    }

    .break {
        flex-basis: 100%;
        height: 0;
    }

    h2 {
        font-size: 2rem;
        color: #9278EC;
    }

    p {
        font-size: 18px;
        margin-top: -20px;
        color: #555;
    }

    input {
        height: 60px;
        width: 80%;
        background: transparent;
        border: 1px solid #333;
        border-radius: 8px;
        color: #777;
        margin: 15px 0 20px;
        outline: none;
        font-size: 24px;
        padding: 0 20px;
        letter-spacing: 2px;
    }

    input::placeholder {
        letter-spacing: 0;
        color: #777;
    }

    #btnPassword {
        position: relative;
        background: #333;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        display: inline-block;
        padding: 10px 15px;
        border-radius: 8px;
        border: none;
    }

    #btnPassword:hover {
        transition: 2s;
        background: #7159c1;
    }

    #btnCopy {
        position: relative;
        background: #7159c1;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        display: inline-block;
        padding: 10px 15px;
        border-radius: 8px;
        margin-left: 10px;
        margin-top: 20px;
        border: none;
    }

    #btnCopy:hover {
        transition: 2s;
        background: #333;
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 150px;
        background-color: #0A8C66;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -75px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 18px;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #0A8C66 transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
`