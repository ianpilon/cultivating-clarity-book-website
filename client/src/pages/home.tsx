import { motion } from "framer-motion";
import { Search, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/dark_veiled_figure_art_photography.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden relative">
      {/* Noise overlay handled in global CSS */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-display font-light tracking-widest"
        >
          1/.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-12 text-xs uppercase tracking-[0.2em] text-muted-foreground/80"
        >
          <a href="#home" className="hover:text-white transition-colors">Cultivating Clarity</a>
          <a href="#author" className="hover:text-white transition-colors">Author</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <div className="flex gap-6 text-white ml-4">
            <ShoppingBag size={18} strokeWidth={1} />
            <Search size={18} strokeWidth={1} />
          </div>
        </motion.div>
      </nav>

      {/* Main Content Sections */}
      <div className="w-full">
        {/* Section 1: Home */}
        <section id="home" className="h-screen w-full grid grid-cols-12 grid-rows-1 relative snap-start">
        
        {/* Left Sidebar - Socials */}
        <div className="col-span-2 relative flex flex-col justify-end pb-32 pl-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-12 items-start"
          >
            <div className="flex flex-col gap-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-vertical hover:text-white transition-colors cursor-pointer whitespace-nowrap">Instagram</span>
              <span className="text-vertical hover:text-white transition-colors cursor-pointer whitespace-nowrap">Twitter</span>
            </div>
          </motion.div>

          {/* Circle Indicator */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-24 left-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </div>

        {/* Center - Image & Title */}
        <div className="col-span-8 relative flex items-center justify-center">
          
          {/* Main Image Wrapper */}
          <div className="relative w-[45vh] h-[65vh]">
            {/* Image with Grayscale */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full grayscale contrast-125 brightness-90"
            >
              <img 
                src="/bookCover.jpg" 
                alt="Cultivating Clarity Book Cover" 
                className="w-full h-full object-cover"
                onError={(e) => e.currentTarget.src = heroImage}
              />
            </motion.div>
            
            {/* Orange Frame Overlay - Removed for Book Page */}
            {/* <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "60%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute top-[calc(50%-100px)] -translate-y-1/2 -right-12 w-24 border border-primary z-20"
            /> */}
          </div>

          {/* Typography Overlay */}
          <div className="absolute bottom-[15%] left-4 md:left-8 lg:left-12 z-30 pointer-events-none w-full">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-white tracking-widest"
            >
              Ian<br/>
              <span className="ml-8 md:ml-16 lg:ml-24 flex items-center gap-4 md:gap-6 whitespace-nowrap">
                <span className="h-[2px] w-8 md:w-16 lg:w-24 bg-white/50 block"></span>
                Timotheos Pilon
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 md:mt-12 ml-8 md:ml-16 lg:ml-24 max-w-xs md:max-w-sm text-xs md:text-sm text-white/70 leading-relaxed font-sans font-light border-b border-white/20 pb-4 tracking-wide"
            >
              Author of <span className="text-white font-normal italic">Cultivating Clarity</span>: The art of discerning what matters using <span className="text-white font-normal underline decoration-primary decoration-1 underline-offset-4">contextual intelligence</span>
            </motion.p>
          </div>
        </div>

        {/* Right Sidebar - Pagination & Controls */}
        <div className="col-span-2 relative flex flex-col justify-center items-end pr-12">
          
          {/* Pagination */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col items-center gap-4 text-xs font-mono text-muted-foreground/50 absolute top-1/2 -translate-y-1/2 right-12"
          >
            <span>01</span>
            <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
               <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: "30%" }}
                 transition={{ duration: 1.5, delay: 1 }}
                 className="w-full bg-white absolute top-0"
               />
            </div>
            <span>05</span>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-24 right-12 flex gap-8 text-white/50"
          >
            <ChevronLeft className="hover:text-white cursor-pointer transition-colors" size={20} strokeWidth={1} />
            <ChevronRight className="hover:text-white cursor-pointer transition-colors" size={20} strokeWidth={1} />
          </motion.div>
        </div>
        </section>

        {/* Section 2: Author (Duplicated) */}
        <section id="author" className="h-screen w-full grid grid-cols-12 grid-rows-1 relative snap-start">
        
        {/* Left Sidebar - Socials */}
        <div className="col-span-2 relative flex flex-col justify-end pb-32 pl-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-12 items-start"
          >
            <div className="flex flex-col gap-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-vertical hover:text-white transition-colors cursor-pointer whitespace-nowrap">Instagram</span>
              <span className="text-vertical hover:text-white transition-colors cursor-pointer whitespace-nowrap">Twitter</span>
            </div>
          </motion.div>

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

        {/* Center - Image & Title */}
        <div className="col-span-8 relative flex items-center justify-center">
          
          {/* Main Image Wrapper */}
          <div className="relative w-[45vh] h-[65vh]">
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
            
            {/* Orange Frame Overlay - Outside Grayscale */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute top-[calc(50%-100px)] -translate-y-1/2 -right-12 w-24 border border-primary z-20"
            />
          </div>

          {/* Typography Overlay */}
          <div className="absolute bottom-[15%] left-4 md:left-8 lg:left-12 z-30 pointer-events-none w-full">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-white tracking-widest"
            >
              Ian<br/>
              <span className="ml-8 md:ml-16 lg:ml-24 flex items-center gap-4 md:gap-6 whitespace-nowrap">
                <span className="h-[2px] w-8 md:w-16 lg:w-24 bg-white/50 block"></span>
                Timotheos Pilon
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 md:mt-12 ml-8 md:ml-16 lg:ml-24 max-w-xs md:max-w-sm text-xs md:text-sm text-white/70 leading-relaxed font-sans font-light border-b border-white/20 pb-4 tracking-wide"
            >
              Author of <span className="text-white font-normal italic">Cultivating Clarity</span>: The art of discerning what matters using <span className="text-white font-normal underline decoration-primary decoration-1 underline-offset-4">contextual intelligence</span>
            </motion.p>
          </div>
        </div>

        {/* Right Sidebar - Pagination & Controls */}
        <div className="col-span-2 relative flex flex-col justify-center items-end pr-12">
          
          {/* Pagination */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col items-center gap-4 text-xs font-mono text-muted-foreground/50 absolute top-1/2 -translate-y-1/2 right-12"
          >
            <span>02</span>
            <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: "30%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 1 }}
                 className="w-full bg-white absolute top-0"
               />
            </div>
            <span>05</span>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-24 right-12 flex gap-8 text-white/50"
          >
            <ChevronLeft className="hover:text-white cursor-pointer transition-colors" size={20} strokeWidth={1} />
            <ChevronRight className="hover:text-white cursor-pointer transition-colors" size={20} strokeWidth={1} />
          </motion.div>
        </div>
        </section>
      </div>

      {/* Footer Info */}
      <footer className="fixed bottom-0 left-0 right-0 p-12 pointer-events-none flex justify-center gap-32 text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-mono z-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-white mb-2">Office</h3>
          <p>Sandekra 240</p>
          <p>1396 Billingstad</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <h3 className="text-white mb-2">Get in Touch</h3>
          <p>T. +0085 3456 2188</p>
          <p className="hover:text-primary transition-colors pointer-events-auto cursor-pointer">E. info@baygulov.com</p>
        </motion.div>
      </footer>
    </div>
  );
}
