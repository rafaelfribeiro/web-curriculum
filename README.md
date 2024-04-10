<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Rafael Ribeiro</title>
</head>

<body>
    <style type="text/css">
        html {
            height: 100%;
        }
        
        body {
            font-family: "Roboto", sans-serif;
            margin: 0px;
            height: 100%;
            overflow: hidden;
            display: flex;
        }
        
        .experiencia p {
            width: 30%;
            text-align: justify;
            text-justify: inter-word;
        }
        
        h1,
        h2,
        h3,
        h4 {
            margin: 0.5em 0px;
            color: #3b3b3b
        }
        
        .technical-font {
            font-family: "Courier New", Courier, monospace;
            letter-spacing: 3px;
        }
        
        #container {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            height: 100%;
        }
        
        .avatar {
            vertical-align: middle;
            width: 7vw;
            height: 7vw;
            border-radius: 50%;
        }
        
        .column {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .conteudo-coluna {
            overflow-y: auto;
            padding: 3vw 3vw 0px 3vw;
        }
        
        .description {
            border-bottom: 1px solid #555;
            padding-bottom: 1em;
            margin-bottom: 3vw;
        }
        
        .experiencia {
            animation: 1s ease-out 0.5s 1 slideInFromBottom;
            animation-fill-mode: forwards;
            opacity: 0;
        }
        
        .bar {
            width: 100%;
            background-color: rgb(0 120 77);
            height: 0.35em;
            border-radius: 15px;
        }
        
        .progress {
            background-color: white;
            height: 0.35em;
            box-shadow: 3px 0px 8px 3px grey;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            animation: 1.5s ease-out progress-effect infinite;
        }
        
        .escolar {
            margin: 0px 0px 1em 0px;
        }
        
        #lateral {
            flex-shrink: 0;
            flex-grow: 1;
            left: 0;
            height: 100%;
            background-color: rgb(11 95 65);
            align-content: center;
            color: white;
            border-right-width: 0.3em;
            border-right-style: solid;
            border-image: linear-gradient( to bottom, #2d562f, rgba(0, 0, 0, 0)) 1 100%;
            animation: 0.5s ease-out 0s 1 slideInFromLeft;
        }
        
        #main {
            flex-shrink: 0;
            flex-grow: 8;
        }
        
        #contato p {
            margin: 0.5em 0px;
            font-size: 13px;
        }
        
        #habilidades,
        #idiomas {
            margin-top: 1.5em;
        }
        
        #habilidades h4,
        #idiomas h4 {
            color: white;
            font-size: 12px;
        }
        
        #escolaridade div h3 {
            margin-bottom: 0px;
        }
        
        @keyframes progress-effect {
            0% {
                box-shadow: 3px 0px 8px 3px grey;
            }
            50% {
                box-shadow: 0px 0px 0px 0px grey;
            }
            100% {
                box-shadow: 3px 0px 8px 3px grey;
            }
        }
        
        @keyframes slideInFromLeft {
            0% {
                opacity: 0;
                transform: translateX(-100%);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInFromBottom {
            0% {
                opacity: 0;
                transform: translateY(-100%);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
    <div id="lateral" class="column">
        <div class="conteudo-coluna">
            <div id="contato">
                <div align="center"><img src="/Images/eu.png" alt="Avatar" class="avatar" alt="picture of Rafael"></div>
                <h2 style="color: white;text-align: center;">Rafael Ribeiro</h2>
                <div>
                    <p>E-mail: contato@rafael-ribeiro.com.br</p>
                    <p>E-mail pessoal: rrafaelrribeiro@gmail.com</p>
                    <p>Telefone: +55 (41) 99597-4881</p>
                </div>
            </div>
            <div id="habilidades">
                <h3 style="color: white;">Habilidades</h3>

                <h4>Python</h4>
                <div class="bar">
                    <div class="progress" style="width: 100%; border-radius: 15px;"></div>
                </div>

                <h4>JavaScript</h4>
                <div class="bar">
                    <div class="progress" style="width: 90%;"></div>
                </div>

                <h4>VB.NET</h4>
                <div class="bar">
                    <div class="progress" style="width: 100%; border-radius: 15px;"></div>
                </div>

                <h4>CSS</h4>
                <div class="bar">
                    <div class="progress" style="width: 70%;"></div>
                </div>

                <h4>Java</h4>
                <div class="bar">
                    <div class="progress" style="width: 40%;"></div>
                </div>

                <h4>Node</h4>
                <div class="bar">
                    <div class="progress" style="width: 60%;"></div>
                </div>

                <h4>SQL e MySQL</h4>
                <div class="bar">
                    <div class="progress" style="width: 100%; border-radius: 15px;"></div>
                </div>

                <h4>NoSQL</h4>
                <div class="bar">
                    <div class="progress" style="width: 70%;"></div>
                </div>

            </div>
            <div id="idiomas">
                <h3 style="color: white;">Idiomas</h3>

                <h4>Português</h4>
                <div class="bar">
                    <div class="progress" style="width: 100%; border-radius: 15px;"></div>
                </div>

                <h4>Inglês</h4>
                <div class="bar">
                    <div class="progress" style="width: 90%; "></div>
                </div>

                <h4>Alemão</h4>
                <div class="bar">
                    <div class="progress" style="width: 30%;"></div>
                </div>

            </div>
        </div>
    </div>
    <div id="main" class="column">
        <div class="conteudo-coluna">
            <div id="experiencias">
                <h1 style="margin: 3vw 0px 6vw 0px;">Experiências Profissionais</h1>
                <div class="experiencia">
                    <h2>AUTOMA CONSULTORIA & INFORMÁTICA LTDA - Menor Aprendiz</h2>
                    <p class="technical-font">Fevereiro 2010 - Janeiro 2011</p>
                    <p class="description">(Empresa Nacional de médio porte do segmento tecnologia e informática)<br> Menor aprendiz - setor administrativo (02/2010 a 07/2010)<br> Menor aprendiz — setor de tecnologia da informação - TI (07/2010 a 01/2011)<br> Rotinas administrativas
                        — controle eletrônico de documentos Lançamento de dados financeiros para conciliação bancária — SGI/ERP Lançamento de dados em sistema financeiro - ERP.<br> Arquivamento de documentos e cópias de segurança.<br>Configuração de estações
                        de trabalho em ambiente de intranet.
                    </p>
                </div>
                <div class="experiencia">
                    <h2>20º BATALHÃO DE INFANTARIA BLINDADO - Aspirante</h2>
                    <p class="technical-font">Fevereiro 2014 - Dezembro 2014</p>
                    <p class="description">Periodo de Formação e Aplicação - (05/2014 a 11/2014)<br> NPOR/CPOR são núcleos e centros de formação do Oficial Temporário do Exército Brasileiro, Onde são desenvolvidas e aprimoradas diversos atributos das áreas afetivastais como
                        equilíbrio emocional, cooperação, zelo, liderança, disciplina, persistência,rusticidade, entre outros afin de consolidar o caráter do Oficial da Reserva e adquirir os atributos necessários para a liderança de um pelotão.
                    </p>
                </div>
                <div class="experiencia">
                    <h2>SOFTWALL SOLUÇÕES EM TECNOLOGIA - Analista de Suporte</h2>
                    <p class="technical-font">Outubro 2016 - Fevereiro 2018</p>
                    <p class="description">Suporte N1 e em casos, N2 para clientes. Instalação, configuração e manutenção de servidores de AD, DNS, DHCP, FileServer e firewalls. <br>Rotinas de backup com Iperius Backup e Veeam Backup.Participação em projetos novos da empresa
                        como integração do sistema de chamados com o PowerBI para criação de relatórios em tempo real.</p>
                </div>
                <div class="experiencia">
                    <h2>BRADESCO S/A - Estagiário</h2>
                    <p class="technical-font">Março 2018 - Novembro 2018</p>
                    <p class="description">Manutenção e criação de ferramentas desktop em VB.NET e aplicações web PHP.<br> Responsável direto pelo planejamento e desenvolvimento de 2 sistemas que substituíram 3 sistemas que são utilizados hoje em todas as agências do varejo
                        do Bradesco para controle de gastos e campanhas contra desperdício.</p>
                </div>
                <div class="experiencia">
                    <h2>BRADESCO S/A - Analista</h2>
                    <p class="technical-font">Novembro 2018 - Presente</p>
                    <p>Além de cumprir as astribuições desempanhadas enquanto estagiário, eu criei um portal administrativo para a centralização de informações referentes às áreas administrativas da instituição, análise de indicadores, entrega de painéis
                        de premiação bem como uma área para contestação dos resultados, confecção e entrega de dashboards que consomem dados de um <i>datawarehouse</i> também estruturado após a minha efetivação.
                        <br>Desde então estou focado em melhorias de processos e sigo com a manutenção dessa robusta ferramenta que trouxe agilidade, controle, eficiência e economia para a rede.
                    </p>
                </div>
            </div>

            <div id="escolaridade">
                <h1 style="margin: 6vw 0px 4vw 0px;">Escolaridade</h1>
                <div class="experiencia">
                    <h3>Ensino Fundamental e Médio - Colégio Curitibano Adventista, Curitiba</h3>
                    <p class="technical-font escolar">Janeiro 2002 - Dezembro 2012</p>
                </div>
                <div class="experiencia">
                    <h3>Técnico em Redes - Federação das Industrias do Estado do Paraná - FIEP, Curitiba</h3>
                    <p class="technical-font escolar">Fevereiro 2013 - Junho 2013</p>
                </div>
                <div class="experiencia">
                    <h3>Bacharel em Sistemas de Informação - Universidade Positivo, Curitiba</h3>
                    <p class="technical-font escolar">Fevereiro 2015 - Março 2021</p>
                    <p>Estou cursando uma única matéria pendente, em 2016 eu pedi transferência de campus durante o 1º semestre e a prova dessa matéria já havia ocorrido no campus em que fui transferido.</p>
                </div>
            </div>
        </div>
</body>

</html>
