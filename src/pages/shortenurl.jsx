import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import NavigationAlt from "@/components/NavigationAlt";
import { useRouter } from "next/router";
import { toast } from "sonner";

const ShortenPage = () => {
	const [message, setMessage] = useState("Copy your shortened link!");
	const [newUrl, setNewUrl] = useState("");
	const [shortenUrl, setShortenUrl] = useState("");
	const [backupUrl, setBackupUrl] = useState("");

	const toggleMessage = () => {
		setMessage("Copied!");

		setTimeout(() => {
			setMessage("Copy your shortened link!");
		}, 2000);
	};

	function getNewUrlShorten() {
		var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
		var url = "";

		for (var i = 0; i < 8; i++) {
			var randomNumber = Math.floor(Math.random() * chars.length);
			url += chars.substring(randomNumber, randomNumber + 1);
		}

		if (newUrl === "" || newUrl === null) {
			toast.error("Enter a URL to be shortened!");
		}

		if (backupUrl === shortenUrl) {
			toast.warning(
				"URL is already shortened! Your link is copied to your clipboard.",
			);
			navigator.clipboard.writeText(backupUrl);
		} else {
			const data = new URLSearchParams({
				url: newUrl,
				alias: url,
				"max-clicks": "200",
			});

			fetch("https://spoo.me/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Accept: "application/json",
				},
				body: data,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setShortenUrl(data.short_url);
					setBackupUrl(data.short_url);

					if (shortenUrl) {
						toast.success("URL is shortened!");
						navigator.clipboard.writeText(shortenUrl);
					}
				})
				.catch((error) => {
					console.error(error);
				});

			if (backupUrl === "") {
				console.log("Generated URL is failed");
			}

			copyUrl(shortenUrl);
		}
	}

	function copyUrl(url) {
		if (!url) {
			toast.error("Enter a URL to be shortened");
		} else {
			navigator.clipboard.writeText(url);

			/* Alert the copied text */
			var tooltip = document.getElementById("myTooltip");
			tooltip.innerHTML = "Copiado!";
		}
	}

	const router = useRouter();
	const uwuUrl = router.asPath;
	const [uwu, setUwu] = useState(false);

	useEffect(() => {
		if (uwuUrl) {
			setUwu(uwuUrl.includes("uwu=true"));
		}
	}, [uwuUrl]);

	return (
		<>
			<NavigationAlt />
			<Password>
				<Link href="/">
					{uwu ? (
						<Image src="/uwu.png" width={460} height={130} alt="Logotipo" />
					) : (
						<Image src="/Logo.png" width={460} height={100} alt="Logotipo" />
					)}
				</Link>

				<hr />

				<h2>Generate a shorter link!</h2>
				<div className="break" />

				<p>
					Use our link shortener to make your daily life easier and avoid
					sending long e-commerce or even massive reference site links.
				</p>

				<div className="break" />

				<input
					type="text"
					name=""
					id=""
					placeholder="Enter a URL to be shortened"
					onChange={(e) => setNewUrl(e.target.value)}
				/>

				<div className="break" />

				<button id="btnPassword" onClick={getNewUrlShorten}>
					Generate URL
				</button>

				{message === "Copy your shortened link!" ? (
					<div className="tooltip">
						<button
							id="btnCopy"
							className="btnCopy"
							onClick={() => {
								copyUrl(backupUrl);
								toggleMessage();
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
								copyUrl(backupUrl);
								toggleMessage();
							}}
						>
							<span className="tooltiptext" id="myTooltip">
								Copy!
							</span>
							{message}
						</button>
					</div>
				)}
			</Password>
		</>
	);
};

export default ShortenPage;

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
`;
