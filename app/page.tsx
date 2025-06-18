import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-3xl underline font-bold">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id = '123'
          name = 'Neura the Brainy Explorer'
          topic = 'Neural network of Brain'
          subject = 'science'
          duration = {45}
          color = '#ffda6e'
        />
        <CompanionCard 
          id = '456'
          name = 'Neura the Brainy Explorer'
          topic = 'Neural network of Brain'
          subject = 'science'
          duration = {30}
          color = '#e5d0ff'
        />
        <CompanionCard 
          id = '789'
          name = 'Neura the Brainy Explorer'
          topic = 'Neural network of Brain'
          subject = 'science'
          duration = {45}
          color = '#BDE7FF'
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title = "Recently completed session"
          companions={recentSessions}
          classNames= "w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  );
};

export default Page;
