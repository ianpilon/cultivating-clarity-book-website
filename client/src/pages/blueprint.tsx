import { motion } from "framer-motion";
import { Search, ShoppingBag, ArrowLeft, Download, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Blueprint() {
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
          <Link href="/" className="hover:text-primary transition-colors">1/.</Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-12 text-xs uppercase tracking-[0.2em] text-muted-foreground/80"
        >
          <Link href="/#about" className="hover:text-white transition-colors">About</Link>
          <span className="text-white">Context Mapping Blueprint</span>
          <div className="flex gap-6 text-white ml-4">
            <ShoppingBag size={18} strokeWidth={1} />
            <Search size={18} strokeWidth={1} />
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="w-full h-screen flex flex-col items-center justify-center relative pt-24 pb-12 px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full flex flex-col gap-8 h-full"
        >
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
            <div className="flex items-center gap-4 text-primary mb-2">
              <Link href="/">
                <ArrowLeft className="cursor-pointer hover:text-white transition-colors" size={20} />
              </Link>
              <span className="text-xs uppercase tracking-[0.2em]">Resource</span>
            </div>
            <h1 className="font-display uppercase text-3xl md:text-5xl tracking-widest text-white">
              Context Mapping<br/>Blueprint
            </h1>
            <p className="text-sm text-muted-foreground font-mono max-w-xl">
              A practical guide to mapping customer context and uncovering the hidden drivers behind user behavior.
            </p>
          </div>

          {/* PDF Preview / Download Section */}
          <div className="flex-1 w-full bg-black/40 border border-white/10 rounded-sm relative overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-black to-black" />
            
            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12 text-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-24 h-32 md:w-32 md:h-44 bg-white/5 border border-white/20 flex items-center justify-center rounded shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <FileText className="text-white/40" size={48} strokeWidth={1} />
                {/* Corner detail */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/20 to-transparent" />
              </motion.div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white font-display uppercase tracking-widest text-lg">Customer Context Map</h3>
                <p className="text-xs text-muted-foreground font-mono">PDF Document</p>
              </div>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ianpilon/customercontextmap/blob/main/Customer%20Context%20Map.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 bg-primary text-black font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3"
              >
                <Download size={16} />
                View & Download Blueprint
              </motion.a>
              
              <p className="text-[10px] text-muted-foreground/60 mt-4 max-w-sm">
                Redirects to GitHub to view and download the full high-resolution PDF file.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 pointer-events-none flex justify-between text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-mono z-40 opacity-50">
        <span>© 2026 Ian Timotheos Pilon</span>
        <span>Cultivating Clarity</span>
      </footer>
    </div>
  );
}
