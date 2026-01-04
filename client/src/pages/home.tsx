import { motion } from "framer-motion";
import { Download } from "lucide-react";
import heroImage from "@assets/generated_images/dark_veiled_figure_art_photography.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "video") setActiveSection(1);
            if (entry.target.id === "about") setActiveSection(2);
            if (entry.target.id === "blueprint") setActiveSection(3);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden relative">
      {/* Noise overlay handled in global CSS */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
        <motion.div 
          key={activeSection}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-display font-light tracking-widest text-primary"
        >
          {activeSection}/.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-12 text-xs uppercase tracking-[0.2em] text-muted-foreground/80"
        >
          <a href="#video" className="hover:text-white transition-colors">Video</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#blueprint" className="hover:text-white transition-colors">Context Mapping Blueprint</a>
          <a href="#buy" className="hover:text-white transition-colors">Buy a Copy</a>
        </motion.div>
      </nav>

      {/* Right Sidebar - Pagination (Fixed) */}
      <div className="fixed right-0 top-0 bottom-0 w-32 flex flex-col justify-center items-end pr-12 z-40 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col items-center gap-4 text-xs font-mono text-muted-foreground/50"
        >
          <motion.span
             key={activeSection}
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            0{activeSection}
          </motion.span>
          <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden rounded-full">
             <motion.div 
               animate={{ height: `${(activeSection / 3) * 100}%` }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className="w-full bg-primary absolute top-0"
             />
          </div>
          <span>03</span>
        </motion.div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full">

        {/* Section: Video */}
        <section id="video" className="min-h-screen w-full grid grid-cols-12 relative snap-start pt-24 pb-32">
        
        {/* Left Sidebar - Socials */}
        <div className="col-span-2 relative flex flex-col justify-end pb-12 pl-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-12 items-start"
          >
            <div className="flex flex-col gap-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <a href="https://www.linkedin.com/in/ianpilon/" target="_blank" rel="noopener noreferrer" className="text-vertical hover:text-white transition-colors cursor-pointer whitespace-nowrap">Linkedin</a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-vertical hover:text-white transition-colors cursor-pointer whitespace-nowrap">Twitter</a>
            </div>
          </motion.div>
        </div>

        {/* Center - Content */}
        <div className="col-span-8 relative flex flex-col items-center justify-center pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full flex flex-col gap-8 h-full"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-white/10 pb-8 text-center items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Cultivating Clarity</span>
              <h1 className="font-display uppercase text-3xl md:text-5xl tracking-widest text-white">
                Contextual<br/>Intelligence
              </h1>
            </div>

            {/* Video Embed Section */}
            <div className="flex-1 w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl relative group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bmxAUfjpjrs"
                  title="Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Pagination & Controls */}
        <div className="col-span-2 relative flex flex-col justify-center items-end pr-12">
        </div>
        </section>

        {/* Section: About */}
        <section id="about" className="min-h-screen w-full grid grid-cols-12 relative snap-start pt-24 pb-32">
        
        {/* Left Sidebar - Socials */}
        <div className="col-span-2 relative flex flex-col justify-end pb-12 pl-12">
        </div>

        {/* Center - Content */}
        <div className="col-span-8 relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 pt-12">
          
          {/* Images Column */}
          <div className="flex shrink-0 items-start justify-center gap-12 relative z-20">
            {/* Column 1: Book + Office + Circle */}
            <div className="flex flex-col gap-12 h-full justify-between min-h-[60vh]">
              <div className="flex flex-col gap-12">
                {/* Book Cover Image */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-[25vh] h-[37.5vh] shadow-xl"
                >
                  <img 
                    src="/bookCoverV3.png" 
                    alt="Cultivating Clarity Book Cover" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Office Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-mono"
                >
                  <h3 className="text-white mb-2">Office</h3>
                  <p>165 King St W</p>
                  <p>Kitchener, ON N2G 1A7</p>
                </motion.div>
              </div>
            </div>

            {/* Column 2: Author + Contact */}
            <div className="flex flex-col gap-12 mt-12 md:mt-0">
              {/* Author Image Wrapper */}
              <div className="relative w-[25vh] h-[37.5vh]">
                {/* Image with Grayscale */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full grayscale contrast-125 brightness-90"
                >
                  <img 
                    src="/ianTBhat.jpg" 
                    alt="Ian T Bhat" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.src = heroImage}
                  />
                </motion.div>
                
                {/* Orange Frame Overlay */}
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  className="absolute top-[calc(50%-100px)] -translate-y-1/2 -right-6 w-12 border border-primary z-20"
                />
              </div>

              {/* Get in Touch Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-mono"
              >
                <h3 className="text-white mb-2">Get in Touch</h3>
                <p>T. 519 277 0970</p>
                <p className="hover:text-primary transition-colors cursor-pointer">E. ianpilon@gmail.com</p>
              </motion.div>
            </div>
          </div>

          {/* Text Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-6 max-w-2xl text-left"
          >
            <h1 className="font-display uppercase text-2xl md:text-3xl leading-tight text-white tracking-widest border-b border-primary/30 pb-4">
              Cultivating Clarity: <br/>
              <span className="text-sm md:text-lg text-muted-foreground tracking-normal normal-case font-mono mt-2 block">
                A Guide to Customer Contextual Intelligence
              </span>
            </h1>

            <div className="space-y-4 text-xs md:text-sm text-muted-foreground font-mono leading-relaxed h-[45vh] overflow-y-auto pr-4 scrollbar-hide relative">
              <p>
                In an age where AI can generate solutions in seconds, the real competitive advantage isn't speed—it's understanding what problems actually matter. As AI commoditizes execution, the ability to deeply understand customer context becomes the only sustainable differentiator.
              </p>
              <p>
                Through nine custom interviews with industry experts and my own decade as a Product Experience Designer, I've developed an approach that addresses the critical gap AI can't fill: knowing why customers struggle, not just what they do.
              </p>
              <p>
                Right now, teams are drowning in data while starving for insight. AI tools can analyze behavior patterns, but they can't grasp the psychological, social, and emotional forces driving those behaviors. They can't understand the difference between a solution customers will tolerate and one they'll genuinely adopt. This is where <span className="text-primary">Customer Contextual Intelligence</span> becomes essential.
              </p>
              <p>
                Drawing on insights from Jeff Jonas, Nick Shackleton-Jones, Bob Moesta, Michael Levin, and others, alongside my own synthesis, this book shows you how to develop the one capability AI can't replicate: human understanding of human context.
              </p>
              <p>
                You'll learn frameworks like System 1/System 2 thinking, Information Foraging Theory, and Jobs to Be Done to uncover the deeper context behind customer decisions. Whether you're a product manager, UX designer, entrepreneur, or innovation leader, you'll gain practical tools to:
              </p>
              <ul className="list-disc pl-4 space-y-2 text-white/80 pt-2">
                <li>Cut through AI-generated noise to identify problems worth solving</li>
                <li>Design products that resonate functionally, emotionally, and socially</li>
                <li>Build irreplaceable customer insight capabilities in your organization</li>
                <li>Use AI as a tool while maintaining human judgment at the center</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Pagination & Controls */}
        <div className="col-span-2 relative flex flex-col justify-center items-end pr-12">
        </div>
        </section>

        {/* Section: Blueprint */}
        <section id="blueprint" className="min-h-screen w-full grid grid-cols-12 relative snap-start pt-24 pb-32">
        
        {/* Left Sidebar - Socials */}
        <div className="col-span-2 relative flex flex-col justify-end pb-12 pl-12">
          {/* Circle Indicator */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-24 left-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </div>

        {/* Center - Content */}
        <div className="col-span-8 relative flex flex-col items-center justify-center pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full flex flex-col gap-8 h-full"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-white/10 pb-8 text-center items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Resource</span>
              <h1 className="font-display uppercase text-3xl md:text-5xl tracking-widest text-white">
                Context Mapping<br/>Blueprint
              </h1>
              <p className="text-sm text-muted-foreground font-mono max-w-xl">
                A practical guide to mapping customer context and uncovering the hidden drivers behind user behavior.
              </p>
            </div>

            {/* PDF Preview / Download Section */}
            <div className="flex-1 w-full flex flex-col items-center justify-center gap-6">
              <div className="flex-1 w-full bg-black/40 border border-white/10 rounded-sm relative overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-black to-black" />
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-full max-w-5xl bg-white/5 border border-white/20 flex items-center justify-center rounded shadow-2xl relative overflow-hidden"
                  >
                    <img 
                      src="/blueprint-preview.png" 
                      alt="Context Mapping Blueprint Preview" 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Download Button - Below Image */}
              <div className="flex flex-col items-center justify-center z-10">
                  <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/Customer_Context_Map.pdf"
                      download="Customer_Context_Map.pdf"
                      className="px-8 py-3 bg-primary text-black font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3 shadow-lg"
                  >
                      <Download size={16} />
                      Download Blueprint
                  </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Pagination & Controls */}
        <div className="col-span-2 relative flex flex-col justify-center items-end pr-12">
        </div>
        </section>

      </div>

    </div>
  );
}
