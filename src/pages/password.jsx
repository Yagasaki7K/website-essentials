import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import NavigationAlt from '@/components/NavigationAlt'

const PasswordPage = () => {
    const [passLength, setPassLength] = useState(16);
    const [message, setMessage] = useState('Copie sua senha!');

    function callTwoFunctions() {
        slider();
        getPassword();
    }

    function slider() {
        let myRange = document.getElementById('myRange');
        setPassLength(myRange.value);
    }

    const toggleMessage = () => {
        setMessage('Copiado!');

        setTimeout(() => {
            setMessage('Copie sua senha!')
        }, 2000);
    };

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
        <>
            <NavigationAlt />
            <Password>
                <Link href="/"><Image src="/Logo.png" width={460} height={100} alt="Logotipo" /></Link>

                <hr />

                <h2>Gere uma senha segura</h2>
                <div className="break" />

                <p>Use nosso gerador de senhas para instantaneamente criar uma senha aleatória, segura e para seu uso diário, é recomendável utilizar um aplicativo secundário como BitWarden ou 1Password para armazenar suas senhas.
                </p>
                <div className="break" />

                <input type="range" min="8" max="64" value={passLength} onChange={callTwoFunctions} id="myRange" className="slider" />

                <h3>Tamanho: {passLength} caracteres</h3>

                <input type="text" placeholder="Copie sua nova senha" id="password" readonly="" />
                <div className="break" />

                <button id="btnPassword" onClick={getPassword}>Gere sua senha</button>

                {
                    message === 'Copie sua senha!' ?
                        (
                            <div className="tooltip">
                                <button id="btnCopy" className="btnCopy" onClick={() => { copyPassword(), toggleMessage() }}>
                                    <span className="tooltiptext" id="myTooltip">Copiar!</span>
                                    {message}
                                </button>
                            </div>
                        ) : (
                            <div className="tooltip">
                                <button id="btnCopy" className="copied" onClick={() => { copyPassword(), toggleMessage() }}>
                                    <span className="tooltiptext" id="myTooltip">Copiar!</span>
                                    {message}
                                </button>
                            </div>
                        )
                }

            </Password>
        </>
    )
}

export default PasswordPage

const Password = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    margin-top: 120px;
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
        color: var(--purple);
        margin: 2rem 0;
    }

    h3 {
        color: var(--gray-alt);
    }

    p {
        font-size: 18px;
        margin-top: -20px;
        color: var(--gray-alt);
    }

    input {
        height: 60px;
        width: 80%;
        background: transparent;
        border: 1px solid var(--gray);
        border-radius: 8px;
        color: var(--purple);
        margin: 15px 0 20px;
        outline: none;
        font-size: 24px;
        padding: 0 20px;
        letter-spacing: 2px;
    }

    input::placeholder {
        letter-spacing: 0;
        color: var(--gray-alt);
    }

    #btnPassword {
        position: relative;
        background: var(--purple);
        color: var(--white);
        cursor: pointer;
        font-size: 24px;
        display: inline-block;
        padding: 10px 15px;
        border-radius: 8px;
        border: none;
        margin-bottom: 2rem;
    }

    #btnPassword:hover {
        transition: 2s;
        filter: brightness(110%);
        transform: scale(1.04);
    }

    .btnCopy {
        background: var(--gray-alt);
    }

    #btnCopy {
        position: relative;
        color: var(--white);
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
        background: var(--green);
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .copied {
        background: var(--green);
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 150px;
        background: var(--green);
        color: var(--font);
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
        border-color: var(--green) transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .slider {
        appearance: none;
        width: 100%;
        height: 15px;
        border: none;
        background: var(--gray);
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        border-radius: 50px;
        transition: opacity .2s;
        margin-bottom: -1rem;
    }

    .slider::-webkit-slider-thumb {
        appearance: none;
        width: 25px;
        border-radius: 50px;
        height: 25px;
        background: var(--purple);
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: var(--purple);
        cursor: pointer;
    }
`
