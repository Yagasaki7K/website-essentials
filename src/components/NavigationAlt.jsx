import React, { useEffect, useState } from "react";
import NavigationDetails from "./NavigationDetails";
import { useRouter } from "next/router";

const NavigationAlt = () => {
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
		<NavigationDetails>
			<a href="/">
				{uwu ? (
					<img src="/uwu.png" alt="Web Essentials" />
				) : (
					<img src="/Logo.png" alt="Web Essentials" />
				)}
			</a>

			<div className="navItems">
				<a
					href="https://github.com/Yagasaki7K/website-essentials"
					target="_blank"
				>
					<i className="uil uil-github-alt"></i>
				</a>

				<a
					href="https://www.paypal.com/donate?business=BGK9ZCFE6G4C8&no_recurring=0&currency_code=BRL"
					target="_blank"
				>
					<i className="uil uil-paypal"></i>
				</a>
			</div>
		</NavigationDetails>
	);
};

export default NavigationAlt;
