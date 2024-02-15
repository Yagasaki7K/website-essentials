import React from 'react'
import NavigationDetails from './NavigationDetails'

const NavigationAlt = () => {
    return (
        <NavigationDetails>
            <a href="/">
                <img src="/Logo.png" alt="Web Essentials" />
            </a>

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
    )
}

export default NavigationAlt