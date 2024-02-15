import NavigationDetails from "@/components/NavigationDetails";
import SidebarMenuDetails from "@/components/SidebarMenuDetails";
import HomeDetails from "@/components/HomeDetails";
import { useState } from "react";
import itemsImported from '@/pages/api/items'

export default function Home() {
    const [categories, setCategories] = useState('');
    const [search, setSearch] = useState('')

    const firstRender = itemsImported
    const [items, setItems] = useState(sortItemsById(firstRender))

    function getItemsFromSpecificArray(selectedCategories) {
        setCategories(selectedCategories);
    }

    function sortItemsById(items) {
        return items
            .sort((a, b) => {
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
        console.log(query)

        setSearch(query);
    }

    const filteredItems = search !== "" ? items.filter((item) => item.name && item.name.toLowerCase().includes(search.toLowerCase())) : items;


    return (
        <HomeDetails>
            <NavigationDetails>
                <a href="/">
                    <img src="/Logo.png" alt="Web Essentials" />
                </a>

                <div className="search">
                    <input type="text" name="" id="" placeholder='Qual software está buscando?' onChange={handleSearch} />
                </div>

                <div className="navItems">
                    <a href="https://twitter.com/KalifyInc" target="_blank">
                        <i className="uil uil-twitter-alt"></i>
                    </a>

                    <a href="https://github.com/Yagasaki7K/website-essentials" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.paypal.com/donate?business=BGK9ZCFE6G4C8&no_recurring=0&currency_code=BRL" target="_blank">
                        <i className="uil uil-paypal"></i>
                    </a>

                    <a href="/download">
                        <i className="uil uil-download-alt"></i>
                    </a>
                </div>
            </NavigationDetails>

            <div className="container">
                <SidebarMenuDetails>
                    <ul>
                        <li onClick={() => { getItemsFromSpecificArray('backup') }}>Backup / Nuvem</li>
                        <li onClick={() => { getItemsFromSpecificArray('communication') }}>Comunicação</li>
                        <li onClick={() => { getItemsFromSpecificArray('development') }}>Desenvolvimento</li>
                        <li onClick={() => { getItemsFromSpecificArray('entertainment') }}>Entretenimento</li>
                        <li onClick={() => { getItemsFromSpecificArray('browser') }}>Navegadores</li>
                        <li onClick={() => { getItemsFromSpecificArray('system') }}>Sistemas</li>
                        <li onClick={() => { getItemsFromSpecificArray('utility') }}>Utilitários</li>
                        <li onClick={() => { getItemsFromSpecificArray('extension') }}>Extensões</li>
                        <hr />
                        <li className="page"><a href="/password">Gerador de Password</a></li>
                        <hr />
                        <p>v24.02</p>
                        <p>Powered by Kalify Inc.</p>
                    </ul>
                </SidebarMenuDetails>

                <div className="content">
                    <div className="content-cards">
                        {filteredItems
                            .filter(item => item.categories && item.categories.includes(categories))
                            .map((item) => (
                                <a href={item.url} key={item} target="_blank">
                                    <div className="columnDetails">
                                        <div className="cardDetails">
                                            <img src={item.img} width={64} height={64} alt={item.name} />
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
