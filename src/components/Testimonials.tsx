import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCard from "@/components/3d/AnimatedCard";
import Button3D from "@/components/3d/Button3D";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive • Career Transformation",
    rating: 5,
    text: "Working with this life coach completely transformed my career trajectory. I went from feeling stuck in a dead-end job to landing my dream role as Marketing Director. The goal-setting framework and confidence-building sessions were game-changers.",
    image: "👩💼",
    gradient: "gradient-primary",
    specialty: "Career Advancement"
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur • Mindset Coaching",
    rating: 5,
    text: "The mindset transformation coaching helped me overcome years of limiting beliefs. I finally launched my own business and it's thriving! The mental resilience techniques I learned continue to serve me every day.",
    image: "👨💼",
    gradient: "gradient-secondary",
    specialty: "Mindset Transformation"
  },
  {
    name: "Emily Rodriguez",
    role: "Working Mom • Life Balance",
    rating: 5,
    text: "I was drowning in work-life chaos until I started coaching. Now I have systems that help me excel at work while being present for my family. The time management strategies are incredibly practical and effective.",
    image: "👩🎓",
    gradient: "gradient-accent",
    specialty: "Life Balance Optimization"
  },
  {
    name: "David Thompson",
    role: "Sales Manager • Relationship Mastery",
    rating: 5,
    text: "The relationship coaching didn't just improve my marriage - it transformed how I communicate with my team at work. My leadership skills have grown tremendously, and I've been promoted twice since we started working together.",
    image: "👨🔬",
    gradient: "gradient-primary",
    specialty: "Relationship Mastery"
  },
  {
    name: "Lisa Park",
    role: "Creative Director • Personal Development",
    rating: 5,
    text: "This coaching experience was exactly what I needed to break through creative blocks and rediscover my passion. The personal development program helped me align my career with my values, and I've never been happier.",
    image: "👩⚕️",
    gradient: "gradient-secondary",
    specialty: "Personal Development"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setDirection(1);
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection(-1);
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float opacity-30">
        <Heart className="text-primary" size={60} />
      </div>
      <div className="absolute bottom-20 right-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <Sparkles className="text-secondary" size={50} />
      </div>
      <div className="absolute top-1/2 left-10 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Quote className="text-accent" size={80} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-16 h-0.5 gradient-secondary rounded-full"></div>
            <p className="text-secondary font-semibold tracking-wider uppercase text-sm">
              Client Success Stories
            </p>
            <div className="w-16 h-0.5 gradient-secondary rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Real Transformations from <br className="hidden md:block" />
            <span className="text-gradient">Life-Changing Coaching</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Discover how our personalized coaching approach has helped hundreds of clients 
            achieve breakthrough results in their personal and professional lives.
          </motion.p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 100, rotateY: direction * 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: direction * -100, rotateY: direction * -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <AnimatedCard className="relative overflow-hidden p-8 md:p-12" hoverEffect="tilt">
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${currentTestimonial.gradient} opacity-5`}></div>
                
                {/* Floating Quote */}
                <motion.div
                  className="absolute top-6 right-6 opacity-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote size={120} className="text-primary" />
                </motion.div>
                
                <div className="relative z-10">
                  {/* Specialty Badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Sparkles className="text-primary" size={16} />
                    <span className="text-sm font-semibold text-primary">
                      {currentTestimonial.specialty}
                    </span>
                  </motion.div>

                  {/* Stars */}
                  <motion.div 
                    className="flex gap-1 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      >
                        <Star className="fill-accent text-accent" size={32} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Text */}
                  <motion.p 
                    className="text-xl md:text-2xl text-foreground mb-10 leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    "{currentTestimonial.text}"
                  </motion.p>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.div 
                      className={`w-20 h-20 rounded-2xl ${currentTestimonial.gradient} flex items-center justify-center text-4xl shadow-3d`}
                      whileHover={{ scale: 1.1, rotateY: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentTestimonial.image}
                    </motion.div>
                    <div>
                      <div className="font-bold text-2xl mb-1">{currentTestimonial.name}</div>
                      <div className="text-muted-foreground font-medium text-lg">{currentTestimonial.role}</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${currentTestimonial.gradient.includes('primary') ? 'rgba(59, 130, 246, 0.1)' : currentTestimonial.gradient.includes('secondary') ? 'rgba(6, 182, 212, 0.1)' : 'rgba(34, 197, 94, 0.1)'} 0%, transparent 70%)`
                  }}
                />
              </AnimatedCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.div 
            className="flex items-center justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button3D
              onClick={handlePrev}
              variant="glass"
              size="md"
              className="rounded-full w-14 h-14 p-0"
            >
              <ChevronLeft size={24} />
            </Button3D>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      setDirection(index > currentIndex ? 1 : -1);
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 600);
                    }
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-16 shadow-glow-primary' 
                      : 'bg-border w-3 hover:bg-muted-foreground hover:w-8'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button3D
              onClick={handleNext}
              variant="glass"
              size="md"
              className="rounded-full w-14 h-14 p-0"
            >
              <ChevronRight size={24} />
            </Button3D>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatedCard delay={0} hoverEffect="glow" className="text-center p-6">
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-muted-foreground font-medium">Client Satisfaction</div>
          </AnimatedCard>
          <AnimatedCard delay={0.1} hoverEffect="lift" className="text-center p-6">
            <div className="text-4xl font-bold text-gradient-secondary mb-2">500+</div>
            <div className="text-muted-foreground font-medium">Lives Transformed</div>
          </AnimatedCard>
          <AnimatedCard delay={0.2} hoverEffect="scale" className="text-center p-6">
            <div className="text-4xl font-bold text-gradient mb-2">10+</div>
            <div className="text-muted-foreground font-medium">Years Experience</div>
          </AnimatedCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;