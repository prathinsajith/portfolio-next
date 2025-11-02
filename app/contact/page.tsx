"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface SparklesCoreProps {
  particleCount?: number;
}

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

interface ContactCardProps {
  children: React.ReactNode;
  delay?: number;
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  index: number;
}

const SparklesCore: React.FC<SparklesCoreProps> = ({ particleCount = 50 }) => {
  const particles = useMemo<Particle[]>(() => {
    let seed = 123456;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: seededRandom() * 100,
      y: seededRandom() * 100,
      size: seededRandom() * 2 + 1,
      duration: seededRandom() * 3 + 2,
      delay: seededRandom() * 2,
    }));
  }, [particleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: 'var(--accent)',
            opacity: 0.3,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({ words, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words]);

  return (
    <span className={className}>
      {displayedText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const ContactCard: React.FC<ContactCardProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-xl p-6" 
      style={{ 
        backgroundColor: 'var(--card)'
      }}>
      {children}
    </motion.div>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex items-start gap-4 p-4 rounded-lg transition-all duration-300 overflow-hidden"
      style={{ backgroundColor: 'var(--muted)' }}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{ 
          background: 'linear-gradient(135deg, rgba(0, 32, 91, 0.1), rgba(212, 175, 55, 0.1))'
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative p-3 rounded-full"
        style={{ backgroundColor: '#00205B' }}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          style={{ color: '#FFFFFF' }}
          animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      </motion.div>
      <div className="relative">
        <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--foreground)' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          {content}
        </p>
      </div>
    </motion.div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      platform: "github",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/prathinsajith",
    },
    {
      platform: "linkedin",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/prathinsajith",
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/prathinsajith",
    },
    {
      platform: "facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://facebook.com/prathinsajith",
    },
    {
      platform: "twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/prathinsajith",
    },
  ];


  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <SparklesCore particleCount={40} />
      
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary">
            <TextGenerateEffect words="Get In Touch" />
          </h1>
          <motion.div
            className="h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
            initial={{ width: 0 }}
            animate={{ 
              width: [0, 96, 80, 96],
              scaleX: [1, 1.2, 0.8, 1]
            }}
            transition={{ 
              duration: 2,
              times: [0, 0.4, 0.7, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ContactCard delay={0.2}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Contact <span className="text-accent">Information</span>
              </h2>
              
              <div className="space-y-4">
                <ContactInfo
                  icon={<Mail size={24} />}
                  title="Email"
                  content="prathinsajith@example.com"
                  index={0}
                />
                
                <ContactInfo
                  icon={<Phone size={24} />}
                  title="Phone"
                  content="+971 XX XXX XXXX"
                  index={1}
                />
                
                <ContactInfo
                  icon={<MapPin size={24} />}
                  title="Location"
                  content="Dubai, United Arab Emirates"
                  index={2}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--foreground)' }}>
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </ContactCard>

          <ContactCard delay={0.4}>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6 relative"
            >
              <motion.div
                className="absolute -inset-2 rounded-xl opacity-0"
                style={{ 
                  background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)',
                  filter: 'blur(20px)'
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Send <span className="text-accent">Message</span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <label className="block text-sm font-medium mb-2 text-base">
                  Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--input)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                  whileFocus={{ scale: 1.01 }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px #d4af371a';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                <label className="block text-sm font-medium mb-2 text-base">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--input)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                  whileFocus={{ scale: 1.01 }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="relative"
              >
                <label className="block text-sm font-medium mb-2 text-base">
                  Subject
                </label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--input)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                  whileFocus={{ scale: 1.01 }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="relative"
              >
                <label className="block text-sm font-medium mb-2 text-base">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all duration-300 resize-none"
                  style={{
                    backgroundColor: 'var(--input)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                  whileFocus={{ scale: 1.01 }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full px-6 py-4 rounded-lg font-medium shadow-lg transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                style={{
                  backgroundColor: isSubmitting ? 'var(--muted)' : 'var(--accent)',
                  color: 'var(--foreground)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 175, 55, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)' }}
                  animate={{
                    x: isSubmitting ? [-100, 100] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isSubmitting ? Infinity : 0,
                    ease: "linear"
                  }}
                />
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-t-transparent rounded-full relative"
                      style={{ borderColor: 'var(--foreground)' }}
                    />
                    <span className="relative">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="relative" />
                    <span className="relative">Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </ContactCard>
        </div>
      </div>
    </div>
  );
}