import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const PasswordPage = () => {
    const [passLength, setPassLength] = useState(16);

    function callTwoFunctions() {
        slider();
        getPassword();
    }

    function slider() {
        let myRange = document.getElementById('myRange');
        setPassLength(myRange.value);
    }

    function getPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
        var passwordLength = passLength;
        var password = "";

        for (var i = 0; i < passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }

        document.getElementById('password').value = password

        /* Reset the alert the copied text */
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copiar!";
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
        tooltip.innerHTML = "Copiado!";
    }

    return (
        <Password>
            <Link href="/"><Image src="/Logo.png" width={460} height={100} alt="Logotipo" /></Link>

            <hr />

            <h2>Gere uma senha segura</h2>
            <div className="break" />

            <p>Use nosso gerador de senhas para instantaneamente criar uma senha aleatória segura.
            </p>
            <div className="break" />

            <input type="range" min="8" max="64" value={passLength} onChange={callTwoFunctions} id="myRange" className="slider" />

            <h3 style={{ color: '#555' }}>Tamanho: {passLength} caracteres</h3>

            <input type="text" placeholder="Copie sua nova senha" id="password" readonly="" />
            <div className="break" />

            <button id="btnPassword" onClick={getPassword}>Gere sua senha</button>

            <div className="tooltip">
                <button id="btnCopy" onClick={copyPassword}>
                    <span className="tooltiptext" id="myTooltip">Copiar!</span>
                    Copie sua senha</button>
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
        background: #7159c1;
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
        background: #333;
    }

    #btnCopy {
        position: relative;
        background: #333;
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
        background: #7159c1;
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

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 25px;
        border: none;
        background: #333;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        border-radius: 50px;
        transition: opacity .2s;
        margin-bottom: -1rem;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        border-radius: 50px;
        height: 25px;
        background: #9278ec;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #9278ec;
        cursor: pointer;
    }
`