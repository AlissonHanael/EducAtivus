import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import HomeSection from '../components/HomeSection'
import HomeSectionReverse from '../components/HomeSectionReverse'
import Footer from '../components/Footer'
import SapLogo from '../assets/sap_logo.png'
import AtivusCargasLogo from '../assets/ativuscargas.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Tutoriais Exclusivos" text="Multi empresarial" />
      <HomeSection
        logo={SapLogo}
        title="O que é a SAP?"
        aboutText="A SAP é um dos líderes mundiais de desenvolvimento de softwares para
            gerenciamento de processos de negócios, criando soluções que
            facilitam o processamento efetivo de dados e o fluxo de informações
            entre as organizações. Fundada em 1972, a empresa foi inicialmente
            chamada de System Analysis Program Development (Systemanalysis
            Programmentwicklung), mais tarde consolidada na sigla SAP. Desde
            então, cresceu de um pequeno esforço de cinco pessoas para uma
            empresa multinacional com sede em Walldorf, Alemanha, com mais de
            105.000 colaboradores em todo o mundo."
      />
      <HomeSectionReverse
        logo={AtivusCargasLogo}
        title="O que é o Ativus Cargas?"
        aboutText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore natus ratione eius suscipit veniam incidunt quasi nulla error fuga soluta, numquam obcaecati expedita in asperiores, eligendi tempora laudantium quaerat."
      />
      <Footer />
    </div>
  )
}

export default Home
