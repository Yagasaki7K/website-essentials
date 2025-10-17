import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavigationAlt from "@/components/NavigationAlt";

const PasswordPage = () => {
	const [passLength, setPassLength] = useState(16);
	const [message, setMessage] = useState("Copy your new password");

	function callTwoFunctions() {
		slider();
		getPassword();
	}

	function slider() {
		const myRange = document.getElementById("myRange");
		setPassLength(myRange.value);
	}

	const toggleMessage = () => {
		var tooltip = document.getElementById("myTooltip");
		setMessage("Copied!");
		tooltip.innerHTML = "Copied!";

		setTimeout(() => {
			setMessage("Copy your new password");
			tooltip.innerHTML = "Copy!";
		}, 2000);
	};

	function getPassword() {
		const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
		const passwordLength = passLength;
		let password = "";

		for (let i = 0; i < passwordLength; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length);
			password += chars.substring(randomNumber, randomNumber + 1);
		}

		document.getElementById("password").value = password;
	}

	function copyPassword() {
		var copyText = document.getElementById("password");

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */

		/* Copy the text inside the text field */
		navigator.clipboard.writeText(copyText.value);
	}

	const router = useRouter();
	const uwuUrl = router.asPath;
	const [uwu, setUwu] = useState(false);

	useEffect(() => {
		if (uwuUrl !== undefined && uwuUrl !== null) {
			if (uwuUrl.includes("uwu=true")) {
				setUwu(true);
			} else {
				setUwu(false);
			}
		}
	}, [uwuUrl]);

	return (
		<>
			<NavigationAlt />
			<Password>
				<Link href="/">{uwu ? <Image src="/uwu.png" width={460} height={130} alt="Logotipo" /> : <Image src="/Logo.png" width={460} height={100} alt="Logotipo" />}</Link>

				<hr />

				<h2>Generate a secure password</h2>
				<div className="break" />

				<p>
					Use our password generator to instantly create a random, secure password for your daily use. We recommend using a secondary application like BitWarden or 1Password to
					store your passwords.
				</p>
				<div className="break" />

				<input type="range" min="8" max="64" value={passLength} onChange={callTwoFunctions} id="myRange" className="slider" />

				<h3>Size: {passLength} caracteres</h3>

				<input type="text" placeholder="Copy your new password" id="password" readonly="" />
				<div className="break" />

				<div id="buttonWrapper">
					<button id="btnPassword" onClick={getPassword}>
						Generate your password
					</button>

					{message === "Copy your new password" ? (
						<div className="tooltip">
							<button
								id="btnCopy"
								className="btnCopy"
								onClick={() => {
									copyPassword(), toggleMessage();
								}}
							>
								<span className="tooltiptext" id="myTooltip">
									Copy!
								</span>
								{message}
							</button>
						</div>
					) : (
						<div className="tooltip">
							<button
								id="btnCopy"
								className="copied"
								onClick={() => {
									copyPassword(), toggleMessage();
								}}
							>
								<span className="tooltiptext" id="myTooltip">
									Copy!
								</span>
								{message}
							</button>
						</div>
					)}
				</div>
			</Password>
		</>
	);
};

export default PasswordPage;

const Password = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    margin-top: 60px;
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
        background: -webkit-linear-gradient(90deg, var(--purple), var(--blue));
        background-clip: text;
        -webkit-text-fill-color: transparent;
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

    #buttonWrapper {
        display: flex;
        gap: 10px;
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
        margin-left: 10px;
        margin-top: 20px;
        border: none;
        margin-bottom: 2rem;
    }

    #btnPassword:hover {
        transition: 0.7s;
        filter: brightness(110%);
        transform: scale(1.03);
    }

    #btnPassword:active {
        transition: 0.2s;
        transform: scale(1);
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
        transition: 0.7s;
        filter: brightness(110%);
        transform: scale(1.03);
        background: var(--green);
    }

    #btnCopy:active {
        transition: 0.2s;
        transform: scale(1);
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
`;
