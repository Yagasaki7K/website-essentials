import NavigationDetails from "@/components/NavigationDetails";
import SidebarMenuDetails from "@/components/SidebarMenuDetails";
import HomeDetails from "@/components/HomeDetails";
import { useEffect, useState } from "react";
import itemsImported from "@/pages/api/items";
import { useRouter } from "next/router";

export default function Home() {
	const [categories, setCategories] = useState("");
	const firstRender = itemsImported;
	const [items, setItems] = useState(sortItemsById(firstRender));
	const [filteredItems, setFilteredItems] = useState(firstRender);

	function sortItemsById(items) {
		return items.sort((a, b) => {
			if (a.id < b.id) {
				return -1;
			}
			if (a.id > b.id) {
				return 1;
			}
			return 0;
		});
	}

	function handleSearch(event) {
		const query = event.target.value;

		const filteredItemsBySearch = query !== "" ? items.filter((item) => item.name && item.name.toLowerCase().includes(query.toLowerCase())) : firstRender;

		setFilteredItems(filteredItemsBySearch);
	}

	function getItemsFromSpecificArray(selectedCategories) {
		setCategories(selectedCategories);
		const itemsFilteredByCategory = selectedCategories !== "" ? firstRender.filter((item) => item.categories && item.categories.includes(selectedCategories)) : firstRender;

		setFilteredItems(itemsFilteredByCategory);
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

	// Função para obter informações de CPU
	function getCPUInfo() {
		return navigator.hardwareConcurrency || null;
	}

	function getMemoryInfo() {
		if ("memory" in performance) {
			const memory = performance.memory;
			const totalHeapMB = Number((memory.totalJSHeapSize / 1024 / 1024).toFixed(2));
			const usedHeapMB = Number((memory.usedJSHeapSize / 1024 / 1024).toFixed(2));
			const heapLimitMB = Number((memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2));
			return { totalHeapMB, usedHeapMB, heapLimitMB };
		}
		return null;
	}

	function estimateDeviceMemory() {
		const cores = getCPUInfo();
		let estimatedRAM;

		if (typeof navigator.deviceMemory === "number") {
			estimatedRAM = Math.floor(navigator.deviceMemory);
		} else if (navigator.deviceMemory) {
			estimatedRAM = Math.floor(Number(navigator.deviceMemory));
		} else {
			const memoryInfo = getMemoryInfo();
			if (memoryInfo) {
				const { heapLimitMB } = memoryInfo;
				estimatedRAM = Math.floor(heapLimitMB / 1024);
			} else {
				estimatedRAM = null;
			}
		}
		return { cores, estimatedRAM };
	}

	const deviceInfo = estimateDeviceMemory();

	const showBallAnimation = typeof deviceInfo.estimatedRAM === "number" && deviceInfo.estimatedRAM > 12;

	return (
		<HomeDetails>
			{showBallAnimation ? (
				<>
					<div className="ball"></div>
					<div
						className="ball"
						style={{
							"--delay": "-12s",
							"--size": "0.35",
							"--speed": "25s",
						}}
					></div>
					<div
						className="ball"
						style={{
							"--delay": "-10s",
							"--size": "0.3",
							"--speed": "15s",
						}}
					></div>
				</>
			) : null}

			<NavigationDetails>
				<a href="/">{uwu ? <img src="/uwu.png" alt="Uwueb Essentials" /> : <img src="/Logo.png" alt="Web Essentials" />}</a>

				<div className="search">
					<input type="text" name="" id="" placeholder="Which software are you looking for?" onChange={handleSearch} />
				</div>

				<div className="navItems">
					<a href="https://github.com/Yagasaki7K/website-essentials" target="_blank">
						<i className="uil uil-github-alt"></i>
					</a>

					<a href="https://www.paypal.com/donate?business=BGK9ZCFE6G4C8&no_recurring=0&currency_code=BRL" target="_blank">
						<i className="uil uil-paypal"></i>
					</a>
				</div>
			</NavigationDetails>

			<div className="container">
				<SidebarMenuDetails>
					<ul>
						<li
							onClick={() => {
								getItemsFromSpecificArray("backup");
							}}
						>
							<i className="uil uil-cloud"></i> Backup / Cloud
						</li>
						<li
							onClick={() => {
								getItemsFromSpecificArray("communication");
							}}
						>
							<i className="uil uil-comments"></i> Communication
						</li>
						<li
							onClick={() => {
								getItemsFromSpecificArray("development");
							}}
						>
							<i className="uil uil-brackets-curly"></i> Development
						</li>
						<li
							onClick={() => {
								getItemsFromSpecificArray("entertainment");
							}}
						>
							<i className="uil uil-film"></i> Entertainment
						</li>
						<li
							onClick={() => {
								getItemsFromSpecificArray("browser");
							}}
						>
							<i className="uil uil-browser"></i> Browsers
						</li>
						<li
							onClick={() => {
								getItemsFromSpecificArray("system");
							}}
						>
							<i className="uil uil-desktop"></i> Operational Systems
						</li>
						<li
							onClick={() => {
								getItemsFromSpecificArray("utility");
							}}
						>
							<i className="uil uil-illustration"></i> Utilities
						</li>
						<li
							onClick={() => {
								getItemsFromSpecificArray("extension");
							}}
						>
							<i className="uil uil-flask"></i> Extensions
						</li>
						<hr />
						<li className="page">{/* <a href="/shortenurl">Shorten URL</a> */}</li>
						<li className="page">
							<a href="/password">Password Generator</a>
						</li>
						<hr />
						<p>v25.07</p>
						<p>Powered by Kalify Inc.</p>
					</ul>
				</SidebarMenuDetails>

				<div className="content">
					<div className="content-cards">
						{filteredItems.map((item) => (
							<a href={item.url} key={item} target="_blank">
								<div className="columnDetails">
									<div className="cardDetails">
										<img src={item.img} className="item-image" width={64} height={64} alt={item.name} />
										<h3>{item.name}</h3>
										<h4>{item.corporation}</h4>
										{item?.browser ? <img src={item?.browser} width={20} height={20} alt={item.name} /> : null}
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</HomeDetails>
	);
}
