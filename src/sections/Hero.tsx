import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Play, Music, Disc, Calendar, ChevronDown, FileText, Radio, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { heroConfig, topicLinks } from '../config';

const ICON_MAP = {
  disc: Disc,
  play: Play,
  calendar: Calendar,
  music: Music,
  blog: FileText,
  radio: Radio,
};

const Hero = () => {
  // Null check: if config is empty, do not render
  if (!heroConfig.decodeText && !heroConfig.brandName && heroConfig.navItems.length === 0) {
    return null;
  }

  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const topicsRef = useRef<HTMLDivElement>(null);
  const TARGET_TEXT = heroConfig.decodeText;
  const CHARS = heroConfig.decodeChars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const [displayText, setDisplayText] = useState(' '.repeat(TARGET_TEXT.length));
  const [isDecoding, setIsDecoding] = useState(true);

  // Decode text effect
  useEffect(() => {
    let iteration = 0;
    const maxIterations = TARGET_TEXT.length * 8;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return TARGET_TEXT.split('')
          .map((_, index) => {
            if (index < iteration / 8) {
              return TARGET_TEXT[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(TARGET_TEXT);
        setIsDecoding(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Nav slide in
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );

      // Subtitle fade in
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.5 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsMusicPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsMusicPlaying(true);
    const onPause = () => setIsMusicPlaying(false);
    const onEnded = () => setIsMusicPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  // Close Key Topics dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (topicsRef.current && !topicsRef.current.contains(e.target as Node)) {
        setTopicsOpen(false);
      }
    };
    if (topicsOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [topicsOpen]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-void-black"
    >
      {/* Background video (replaces static image) */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/138115-768324070_small.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 video-overlay" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void-black/30 to-void-black" />
      </div>

      {/* Navigation: hamburger menu on mobile, pill centered on desktop */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 md:top-6 md:flex md:justify-center md:items-center md:pointer-events-none md:[&>*]:pointer-events-auto">
        {/* Mobile: top bar with music + menu button */}
        <div className="flex md:hidden items-center justify-between w-full px-4 py-3 nav-pill rounded-none border-x-0 border-t-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 flex-shrink-0 rounded-full bg-neon-cyan/20 flex items-center justify-center">
              <Disc className="w-4 h-4 text-neon-cyan" />
            </div>
            <span className="font-display text-sm text-white truncate">{heroConfig.brandName}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleMusic}
              className="flex-shrink-0 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
            >
              {isMusicPlaying ? <VolumeX className="w-5 h-5 text-neon-cyan" /> : <Volume2 className="w-5 h-5 text-neon-cyan" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="flex-shrink-0 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 nav-pill border-t border-white/10 rounded-b-2xl overflow-hidden max-h-[70vh] overflow-y-auto">
            <div className="py-2 px-2">
              {heroConfig.navItems.map((item) => {
                const IconComponent = ICON_MAP[item.icon];
                const className = "flex items-center gap-2 w-full px-4 py-3 text-xs font-mono-custom uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-lg";
                if (item.path) {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={className}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                }
                return (
                  <button
                    key={item.sectionId}
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      setMobileMenuOpen(false);
                    }}
                    className={className}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="border-t border-white/10 my-2" />
              <p className="px-4 py-2 text-xs font-mono-custom uppercase tracking-wider text-white/50">Key Topics</p>
              {topicLinks.map((link) => (
                <Link
                  key={link.slug}
                  to={link.path}
                  className="flex items-center gap-2 w-full px-4 py-2.5 text-xs font-mono-custom uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-lg pl-8"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Desktop: centered pill (flex + justify-center on nav keeps it truly centered) */}
        <div className="hidden md:flex nav-pill rounded-full px-2 py-2 shrink-0">
          <div className="flex items-center gap-1 flex-nowrap justify-center">
            {heroConfig.navItems.map((item) => {
              const IconComponent = ICON_MAP[item.icon];
              const className = "flex items-center gap-2 px-4 py-2 text-xs font-mono-custom uppercase tracking-wider text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/5";
              if (item.path) {
                return (
                  <Link key={item.path} to={item.path} className={className}>
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </Link>
                );
              }
              return (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={className}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="relative" ref={topicsRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setTopicsOpen((o) => !o);
                }}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono-custom uppercase tracking-wider text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <span>Key Topics</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${topicsOpen ? 'rotate-180' : ''}`} />
              </button>
              {topicsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 min-w-[200px] rounded-xl bg-void-black/95 border border-white/10 shadow-xl z-50">
                  {topicLinks.map((link) => (
                    <Link
                      key={link.slug}
                      to={link.path}
                      className="block px-4 py-2.5 text-xs font-mono-custom uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setTopicsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 px-4">
        {/* Background music - uses a working sample URL; replace with /your-music.mp3 in public/ if you prefer */}
        <audio ref={audioRef} src="/background-track.mp3" loop preload="auto" />
        {/* Logo / Brand */}
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
              <Disc className="w-4 h-4 text-neon-cyan" />
            </div>
            <span className="font-display text-lg text-white">{heroConfig.brandName}</span>
          </div>
        </div>

        {/* Main title with decode effect */}
        <h1
          ref={titleRef}
          className="decode-text text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold text-white leading-none tracking-tighter mb-4"
        >
          <span className={`${isDecoding ? 'text-glow-cyan' : ''} transition-all duration-300`}>
            {displayText}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-mono-custom text-sm md:text-base text-neon-soft/70 uppercase tracking-[0.3em] mb-8"
        >
          {heroConfig.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection(heroConfig.ctaPrimaryTarget)}
            className="px-8 py-3 bg-white text-void-black font-display text-sm uppercase tracking-wider rounded-full hover:bg-neon-soft transition-colors duration-300"
          >
            {heroConfig.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToSection(heroConfig.ctaSecondaryTarget)}
            className="px-8 py-3 border border-white/30 text-white font-display text-sm uppercase tracking-wider rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-300"
          >
            {heroConfig.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-20 right-8 text-right">
        <p className="font-mono-custom text-xs text-white/40 uppercase tracking-wider">{heroConfig.cornerLabel}</p>
        <p className="font-mono-custom text-xs text-neon-soft/60">{heroConfig.cornerDetail}</p>
      </div>

      {/* Music button - desktop only (top right); on mobile it's in the nav bar */}
      <button
        type="button"
        onClick={toggleMusic}
        className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-2 px-4 py-3 rounded-full nav-pill text-white/80 hover:text-white transition-colors"
        aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
      >
        {isMusicPlaying ? (
          <VolumeX className="w-5 h-5 text-neon-cyan" />
        ) : (
          <Volume2 className="w-5 h-5 text-neon-cyan" />
        )}
        <span className="font-mono-custom text-xs uppercase tracking-wider">
          {isMusicPlaying ? 'Pause' : 'Music'}
        </span>
      </button>
    </section>
  );
};

export default Hero;
