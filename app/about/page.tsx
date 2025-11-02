"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

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

interface CounterEffectProps {
  target: number;
  suffix?: string;
}

interface GlowingCardProps {
  children: React.ReactNode;
  delay?: number;
}

interface SkillBadgeProps {
  skill: string;
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
            background: '#D4AF37',
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

const CounterEffect: React.FC<CounterEffectProps> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

const GlowingCard: React.FC<GlowingCardProps> = ({ children, delay = 0 }) => {
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

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: 'var(--muted)',
        borderColor: 'var(--border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 32, 91, 0.1)';
        e.currentTarget.style.borderColor = '#00205B';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--muted)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      <motion.span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: '#00205B' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      />
      <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{skill}</span>
    </motion.div>
  );
};

export default function AboutPage() {
  const tools = ['Git & GitHub', 'VS Code', 'Figma', 'Vercel'];

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
            <TextGenerateEffect 
              words="About Me"
            />
          </h1>
          <motion.div
            className="h-1 mx-auto rounded-full bg-gradient-to-r w-24 mt-2 bg-accent"
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
        </motion.div>

        <div className="gap-8 mb-12">
          <GlowingCard delay={0.2}>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-primary">
                Hi, I&apos;m <span className='text-accent'>Prathin Sajith</span>
              </h2>
              <p className="text-lg leading-relaxed text-base">
                <TextGenerateEffect words="I am a passionate web developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems." />
              </p>
              <p className="text-lg leading-relaxed text-base">
                <TextGenerateEffect words="My journey in web development started with curiosity about how websites work, 
                and it has evolved into a passion for creating exceptional digital experiences." />
              </p>
              <motion.div
                className="flex gap-4 pt-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 bg-primary text-background"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 32, 91, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 bg-accent text-foreground"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 175, 55, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </motion.div>
          </GlowingCard>

          <GlowingCard delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className='text-primary'>Frontend Development</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.map((skill, index) => (
                    <SkillBadge key={typeof skill === 'string' ? skill : skill.name} skill={typeof skill === 'string' ? skill : skill.name} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className='text-accent'>Tools & Platforms</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <SkillBadge key={tool} skill={tool} index={index + SKILLS.length} />
                  ))}
                </div>
              </div>
            </div>
          </GlowingCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: 3, suffix: '+', label: 'Years Experience' },
            { number: 50, suffix: '+', label: 'Projects Completed' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="rounded-xl p-8 text-center"
                   style={{
                     backgroundColor: 'var(--card)'
                   }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-4xl font-bold mb-2 text-primary"
                >
                  <CounterEffect target={stat.number} suffix={stat.suffix} />
                </motion.div>
                <div className="font-medium text-base">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}