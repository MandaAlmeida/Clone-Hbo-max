import { Button } from "../components/button";
import LogoHbo from '../assets/image/Logo-Hbo-Home.png'
import '../styles/global.css'
import '../styles/fonte.css'
import { Perfil } from "../components/perfil";
import { ButtonLink } from "../components/link";

export function Home(){
    return(
        <body className="flex flex-col bg-fundoHome w-screen h-screen bg-center bg-no-repeat bg-cover bg-black items-center box-border">
            <header className="flex justify-center my-[22px] mx-12 w-full absolute items-center">
                <div className='w-[134px] my-[7px]'><img src={LogoHbo}  className='w-full' alt="Logo da Hbo" /></div>
            
            </header>
            <main className="flex flex-col justify-center mt-[84px]"> 
  
            <h1 className="text-white font-[StreetLCG2] font-semibold  text-4xl leading-[48px] mt-4 text-center">Quem está assistindo?</h1>

            <div className="flex flex-row m-auto justify-center items-center flex-wrap my-24">
            <Perfil className="bg-fundoPerfil1"
           textLink="Q"
            textP="Quem paga"/>
             <Perfil
             className="bg-fundoPerfil2"
           textLink="P"
            textP="Parasita 1"/>
             <Perfil
             className="bg-fundoPerfil3"
           textLink="P"
            textP="Parasita 2"/>
             <Perfil
             className="bg-fundoPerfil4"
           textLink="P"
            textP="Parasita 3"/>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-center gap-3 mb-5">
                <Button className="min-w-[144px]" 
            text="ADICIONAR ADULTO"/>
            <Button className="min-w-[144px]" 
            text="ADICIONAR CRIANÇA"/>
                </div>
                <ButtonLink 
                text="GERENCIAR PERFIS"/>

            
            </div>
            </main>
           
        </body>
    )
}