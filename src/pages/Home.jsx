import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import {HeroSection} from "@/components/HeroSection"
import {AboutSection} from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import {Navbar} from "@/components/Navbar"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { FooterSection } from "@/components/FooterSection"

export const  Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/*theme toggle*/ }
        <ThemeToggle/>
        {/*background effects*/ }
        <StarBackground/>
        {/*navbar*/ }
        <Navbar/>
        {/*main content*/ }
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection />
            <ContactSection />
        </main>
        {/*footer*/ }
        <FooterSection />

    </div>
}