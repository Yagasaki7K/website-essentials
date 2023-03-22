import React from 'react'
import DownloadDetails from '../src/components/DownloadDetails'
import ContainerDetails from '../src/components/ContainerDetails'

const app = () => {
    return (
        <>
            <ContainerDetails>
                <DownloadDetails>
                    <img src='/desktop.png' alt='Essentials Desktop' />
                    <h1>Apresentamos o Essentials Desktop</h1>
                    <h4>Uma maneira de facilitar o seu cotidiano de aplicativos</h4>

                    <p>
                        O Essentials Desktop é uma maneira de transformar nossa ferramenta em um aplicativo que combina
                        com a sua tela, deixando flexível com o seu dispositivo, melhorando a necessidade do seu cotidiano e deixando os aplicativos
                        que você mais precisa bem mais perto de você.
                    </p>

                    <a href="#install">Vamos começar {'>'}</a>

                    <div className="archor" id="install"></div>

                    <div className="downloadContent">
                        <h2>Fácil de instalar</h2>
                        <p>Existem duas maneiras de realizarmos a instalação do Essentials para o seu dispositivo. Você pode usar a maneira <b>Click-and-Install</b>, aonde iremos somente usar um ícone disponível no navegador e fazer a instalação do aplicativo ou a <b>Instalação Manual</b>, que terá um passo a passo a ser seguido (de acordo com cada navegador) para instalar o aplicativo em seu dispositivo.</p>

                        <h2>Maneira Click-and-Install</h2>
                        <p>A maneira automática para você fazer isso, é apenas localizar o ícone de instalação do aplicativo (um monitor com a seta para baixo) em seu próprio navegador que deverá estar ao lado do botão de favoritos ~ Compatível com: Google Chrome e Microsoft Edge <br /><br /><i>Alguns navegadores como: Opera, Firefox e Safari precisam fazer a instalação manual para funcionar.</i></p>

                        <img src="https://user-images.githubusercontent.com/23272064/227000531-f9a54892-df6b-47d6-879d-11d66526010f.png" alt="Click-and-Install" />

                        <p>É só clicar nele, em seguida clicar no botão de Instalar e aguardar alguns segundos, ele automaticamente irá ser instalado no seu computador e aberto na barra de tarefas como um aplicativo. É só favoritar e deixar ele sempre próximo de você.</p>

                        <h2>Instalação Manual</h2>
                        <p>A instalação manual é mais avançada, porém, deixa você mais livre em fazer certas escolhas com o seu atalho. <b>Antes de iniciar qualquer procedimento, verifique se seu navegador é compatível</b>, você poderá estar buscando suporte diretamente no site oficial dos seguintes navegadores suportados: <a href="" target="_blank" rel="noreferrer">Chrome</a>, <a href="" target="_blank" rel="noreferrer">Firefox</a> e <a href="" target="_blank" rel="noreferrer">Safari</a></p>
                    </div>

                    <div className="blogContent">
                        <h3>Confira o comunicado do Essentials no <a href="https://twitter.com/Yagasaki7K" target='_blank' rel="noreferrer">Twitter</a> ou <a href="https://kalifyinc.vercel.app/blog" target='_blank' rel="noreferrer">Blog</a></h3>
                        <a href="https://kalifyinc.vercel.app/blog" target='_blank' rel="noreferrer"><p>Leia o blog do Ignite {'>'}</p></a>
                    </div>
                </DownloadDetails>
            </ContainerDetails>
        </>
    )
}

export default app

