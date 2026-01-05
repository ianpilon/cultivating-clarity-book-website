import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/dark_veiled_figure_art_photography.png";
import polaroidsImage from "@assets/poliroids_1767624991769.png";
import { useEffect, useState, useRef } from "react";

const BOOK_ASIN = "B0D477YKPZ";

const SOCIAL_POSTS = [
  {
    name: "Riley",
    handle: "@rileyngg",
    date: "Nov 30, 2025",
    content: "loved reading this. going deeper with customer feedback is essential for product development.",
    verified: true,
    avatar: "https://pbs.twimg.com/profile_images/1973783136224894976/CrhyB_fX_400x400.jpg"
  },
  {
    name: "BTC_C_The_Light",
    handle: "@BTC_C_The_Light",
    date: "Dec 31, 2025",
    content: "Would love a copy. many thanks.",
    verified: false,
    avatar: "https://pbs.twimg.com/profile_images/1475926990926581764/iPaamI89_400x400.jpg"
  },
  {
    name: "John Huo",
    handle: "@stjohnhuo",
    date: "Jan 1",
    content: "Thanks in advance for a copy of the Book",
    verified: false,
    avatar: "https://pbs.twimg.com/profile_images/1572541237865123841/D1cURNml_400x400.jpg"
  },
  {
    name: "zed em",
    handle: "@FoodyLondon",
    date: "Jan 2",
    content: "would be keen to read",
    verified: false,
    avatar: "https://pbs.twimg.com/profile_images/1257977232/plate_400x400.jpg"
  },
  {
    name: "Adam Hassan",
    handle: "@adamislucky",
    date: "Dec 31, 2025",
    content: "Please do. I'd like a copy.",
    verified: true,
    avatar: "https://pbs.twimg.com/profile_images/1683185550805663744/w3r6KI5r_400x400.jpg"
  },
  {
    name: "Lestan",
    handle: "@lestandsouza",
    date: "Dec 31, 2025",
    content: "I'd love to read it",
    verified: false,
    avatar: "https://pbs.twimg.com/profile_images/1477497745439084549/KMkbEGaH_400x400.jpg"
  },
  {
    name: "Steve Peterson",
    handle: "@EmergencyComms",
    date: "Dec 31, 2025",
    content: "I'd be interested in reading it, thank you.",
    verified: false,
    avatar: "https://pbs.twimg.com/profile_images/1921985068324564992/9S3Zs9J4_400x400.jpg"
  },
  {
    name: "Haba(rosso)nero",
    handle: "@habarossonero",
    date: "Jan 1",
    content: "I'd like a copy too. Thanks",
    verified: false,
    avatar: "https://pbs.twimg.com/profile_images/1993834017091637248/xq0WCa4D_400x400.jpg"
  },
  {
    name: "Jasmeet Singh",
    handle: "⭐⭐⭐⭐⭐ Amazon Canada",
    date: "Nov 7, 2024",
    content: "A great read for emphasizing Contextual Intelligence as key to aligning Physical AI solutions with human needs.",
    verified: false,
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQEWUx-arGoz-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693939683480?e=1769040000&v=beta&t=7bx8UdMuDaXi73mqw3oWd0Lmk91FL-gdpIKp5XpNg9I",
    isAmazonReview: true
  },
  {
    name: "Stefano Leone",
    handle: "⭐⭐⭐⭐⭐ Amazon Germany",
    date: "Oct 24, 2025",
    content: "Cultivating Clarity helped me reframe 'context' from something static into something dynamic — a living system of motivations, constraints, and emotions.",
    verified: false,
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQHp-LPpO8LotA/profile-displayphoto-crop_800_800/B4EZmAXKFiIUAI-/0/1758795178941?e=1769040000&v=beta&t=qiby4pzn2miuyS3Geb20oEfe_HTrSGoBrKQClMPVIXw",
    isAmazonReview: true
  },
  {
    name: "O",
    handle: "⭐⭐⭐⭐⭐ Amazon Netherlands",
    date: "Jun 17, 2024",
    content: "Ian's mode of thinking and communicating is both inspiring and contagious. His deep curiosity encourages readers to explore, challenge, and learn in new ways.",
    verified: false,
    avatar: null,
    isAmazonReview: true
  }
];

const AMAZON_COUNTRIES = [
  { code: "AU", name: "Australia", flag: "🇦🇺", domain: "amazon.com.au" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", domain: "amazon.com.be" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", domain: "amazon.com.br" },
  { code: "CA", name: "Canada", flag: "🇨🇦", domain: "amazon.ca" },
  { code: "CN", name: "China", flag: "🇨🇳", domain: "amazon.cn" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", domain: "amazon.eg" },
  { code: "FR", name: "France", flag: "🇫🇷", domain: "amazon.fr" },
  { code: "DE", name: "Germany", flag: "🇩🇪", domain: "amazon.de" },
  { code: "IN", name: "India", flag: "🇮🇳", domain: "amazon.in" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", domain: "amazon.ie" },
  { code: "IT", name: "Italy", flag: "🇮🇹", domain: "amazon.it" },
  { code: "JP", name: "Japan", flag: "🇯🇵", domain: "amazon.co.jp" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", domain: "amazon.com.mx" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", domain: "amazon.nl" },
  { code: "PL", name: "Poland", flag: "🇵🇱", domain: "amazon.pl" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", domain: "amazon.sa" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", domain: "amazon.sg" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", domain: "amazon.co.za" },
  { code: "ES", name: "Spain", flag: "🇪🇸", domain: "amazon.es" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", domain: "amazon.se" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", domain: "amazon.com.tr" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", domain: "amazon.ae" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", domain: "amazon.co.uk" },
  { code: "US", name: "United States", flag: "🇺🇸", domain: "amazon.com" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSocialPost, setCurrentSocialPost] = useState(0);
  const [showSocialPost, setShowSocialPost] = useState(true);

  const getAmazonUrl = (domain: string) => {
    return `https://www.${domain}/dp/${BOOK_ASIN}`;
  };

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setIsDropdownOpen(false);
    const country = AMAZON_COUNTRIES.find(c => c.code === countryCode);
    if (country) {
      window.open(getAmazonUrl(country.domain), "_blank");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "video") setActiveSection(1);
            if (entry.target.id === "about") setActiveSection(2);
            if (entry.target.id === "blueprint") setActiveSection(3);
            if (entry.target.id === "buy") setActiveSection(4);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const socialTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSocialPost(false);
      socialTimeoutRef.current = setTimeout(() => {
        setCurrentSocialPost((prev) => (prev + 1) % SOCIAL_POSTS.length);
        setShowSocialPost(true);
      }, 500);
    }, 4000);

    return () => {
      clearInterval(interval);
      if (socialTimeoutRef.current) {
        clearTimeout(socialTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden relative">
      {/* Noise overlay handled in global CSS */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-8 flex justify-center items-center z-50">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
               animate={{ height: `${(activeSection / 4) * 100}%` }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className="w-full bg-primary absolute top-0"
             />
          </div>
          <span>04</span>
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

        {/* Section: Buy a Copy */}
        <section id="buy" className="min-h-screen w-full grid grid-cols-12 relative snap-start pt-24 pb-32">
        
        {/* Left Sidebar */}
        <div className="col-span-2 relative flex flex-col justify-end pb-12 pl-12">
        </div>

        {/* Center - Content */}
        <div className="col-span-8 relative flex flex-col items-center justify-center pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full flex flex-col gap-8 h-full items-center"
          >
            {/* Social Proof Toast Popups */}
            <div className="w-full flex justify-center mb-4 min-h-32">
              <motion.div
                key={currentSocialPost}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ 
                  opacity: showSocialPost ? 1 : 0, 
                  x: showSocialPost ? 0 : -100,
                  scale: showSocialPost ? 1 : 0.9
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-black/90 border border-white/20 rounded-sm p-4 max-w-md shadow-2xl backdrop-blur-sm h-fit"
              >
                <div className="flex items-start gap-3">
                  {SOCIAL_POSTS[currentSocialPost].avatar ? (
                    <img 
                      src={SOCIAL_POSTS[currentSocialPost].avatar} 
                      alt={SOCIAL_POSTS[currentSocialPost].name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 flex items-center justify-center text-xs font-mono text-primary shrink-0">
                      {SOCIAL_POSTS[currentSocialPost].name.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="text-white text-xs font-medium">{SOCIAL_POSTS[currentSocialPost].name}</span>
                      {SOCIAL_POSTS[currentSocialPost].verified && (
                        <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
                        </svg>
                      )}
                      <span className="text-muted-foreground text-[10px]">{SOCIAL_POSTS[currentSocialPost].handle}</span>
                      <span className="text-muted-foreground text-[10px]">· {SOCIAL_POSTS[currentSocialPost].date}</span>
                    </div>
                    <p className="text-white/80 text-xs font-mono mt-1 leading-relaxed">
                      {SOCIAL_POSTS[currentSocialPost].content}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-white/10 pb-8 text-center items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Get Your Copy</span>
              <h1 className="font-display uppercase text-3xl md:text-5xl tracking-widest text-white">
                Buy the Book
              </h1>
              <p className="text-sm text-muted-foreground font-mono max-w-xl">
                Available now on Amazon in paperback format and Kindle.
              </p>
            </div>

            {/* Amazon Links */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center flex-wrap">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={getAmazonUrl("amazon.ca")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-colors flex items-center gap-3"
              >
                🇨🇦 Buy on Amazon Canada
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={getAmazonUrl("amazon.com")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-colors flex items-center gap-3"
              >
                🇺🇸 Buy on Amazon USA
              </motion.a>
              {/* Country Selector Dropdown - styled as button */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-8 py-4 bg-transparent border-2 border-primary text-white font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-colors flex items-center gap-3 min-w-[280px] justify-between"
                  data-testid="country-selector-button"
                >
                  <span>
                    {selectedCountry 
                      ? `${AMAZON_COUNTRIES.find(c => c.code === selectedCountry)?.flag} ${AMAZON_COUNTRIES.find(c => c.code === selectedCountry)?.name}`
                      : "🌍 Other Countries"
                    }
                  </span>
                  <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-primary max-h-64 overflow-y-auto z-50 shadow-2xl"
                  >
                    {AMAZON_COUNTRIES.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => handleCountrySelect(country.code)}
                        className="w-full px-4 py-3 text-left text-primary font-mono text-xs hover:bg-primary hover:text-black transition-colors flex items-center gap-3"
                        data-testid={`country-option-${country.code}`}
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Polaroids */}
            <div className="w-full mt-[50px]">
              <img 
                src={polaroidsImage} 
                alt="Readers with Cultivating Clarity book" 
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-2 relative flex flex-col justify-center items-end pr-12">
        </div>
        </section>

      </div>

    </div>
  );
}
