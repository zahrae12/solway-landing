import React from "react";
import { useTranslation } from 'react-i18next';
const IntroductionAbout = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-gray-100 py-12  ">
      <div className="w-full lg:p-12 p-6 mx-auto ">
        <h2 className="text-center font-bold text-yellow-500  uppercase xl:-mt-10 -mt-14">Introducing</h2>
        <h1 className="text-center lg:text-[36px] text-[30px]  lg:font-extrabold text-gray-800 mt-3 font-inter font-semibold align-middle leading-[32px]">
          SOLWAY Consulting & Services
        </h1>

        {/* About Section */}
        <div className="bg-white shadow-lg rounded-3xl mt-10 w-full  p-4"> 

  <h2 className="text-[30px] font-extrabold text-gray-800 font-inter leading-[40px]">
  {t("À propos de SOLWAY Consulting & Services")}
  </h2>
  <p className="mt-4 text-xl font-inter font-normal text-gray-700 pt-4 lg:pt-0">
    {t("Fondée en octobre 2019, SOLWAY Consulting & Services a pour vocation de vous accompagner en mettant à votre disposition son expertise pointue dans la gestion des ressources humaines via les solutions SAP HR (HCM). Grâce à notre équipe de consultants expérimentés, nous vous offrons un conseil personnalisé pour optimiser la gestion de votre capital humain et la performance de vos processus RH.")}
    <br /><br />
   {t("Notre engagement envers l’excellence, la rigueur et l’innovation nous permet de vous proposer des solutions adaptées à vos besoins spécifiques, tout en prenant en compte les défis uniques de votre organisation. Nous plaçons la satisfaction de nos clients au cœur de notre approche, en établissant une relation de partenariat durable et en garantissant la mise en œuvre efficace de vos projets SAP HR.")}
    <br /><br />
    {t("Avec SOLWAY Consulting & Services, vous bénéficiez d’un accompagnement sur mesure et d’une expertise reconnue pour réussir la transformation de vos processus RH et atteindre vos objectifs d’efficacité et de performance.")}
  </p>
  
  <p className="mt-4 text-lg text-gray-600 font-inter">
    {t("Nous sommes présents en France, à Colombes, et également au Maroc, à Rabat, ce qui nous permet d’offrir une couverture géographique étendue et de répondre aux besoins de nos clients, quel que soit leur emplacement.")}
  </p>

  {/* Quote Section */}
  <div className="bg-gray-50  rounded-lg">
    <blockquote className="mt-8 italic border-l-4 lg:h-[55px] h-[115px] border-yellow-500 pl-4 font-inter font-bold">
      “Life shrinks and expands on the proportion of your willingness to take risks and try new things.”  
      <br />
      <h4 className="mt-3 font-normal">Gary Vaynerchuk</h4>  
    </blockquote>
  </div>

  {/* Founder Section */}
  <h2 className="text-[30px] font-extrabold font-inter sm:text-[24px] leading-[32px] text-gray-800 lg:pt-4 pt-16">
  {t("Fondeur de SOLWAY Consulting & Services")}
  </h2>
  <img src="assets/images/ceo.png" alt="Amine Hbibiy" className="w-full h-auto mt-4 pt-6 lg:pt-0 rounded-lg" />
  <h3 className="text-[30px] font-bold font-inter leading-[32px] mt-4 pt-6 lg:pt-0">Amine HIBIBIY</h3>
  <p className="mt-4 text-xl font-inter font-normal text-gray-700">
   {t("Avec plus de 10 ans d’expertise, il a contribué à de nombreux projets RH ayant permis de développer une expertise solide et polyvalente dans la gestion des ressources humaines.")}
    <br /><br />
   {t("Aujourd’hui, il participe à la mise en place de solution SIRH chez nos différents clients.")}
    <br /><br />
   {t("Au titre de ses responsabilités, il développe nos différentes branches : consulting, innovation et formation.")}
  </p>

  {/* SAP Partnership Section */}
  <h2 className="text-[30px] font-bold text-gray-800 pt-6 lg:mt-0 mt-12">{t("Notre partenariat avec l’éditeur SAP")}</h2>
  <div className="flex justify-center mt-4">
    <img 
      src="assets/images/sap.png" 
      alt="SAP Silver Partner" 
      className="w-[400px] h-[236px] shadow-lg mt-12 lg:mt-0 rounded-lg"
    />
  </div>
  
  <p className="mt-4 text-xl font-inter font-normal text-gray-700">
    {t("Notre connaissance approfondie du progiciel SAP et le développement des outils reconnus par SAP, a permis à SOLWAY de devenir un partenaire Silver SAP.")}
  </p>
</div>

      </div>
    </section>
  );
};

export default IntroductionAbout;
