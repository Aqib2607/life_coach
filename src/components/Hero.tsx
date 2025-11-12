import { ArrowRight, Calendar, Award, Sparkles, Heart, Shield, Zap, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/3d/AnimatedCard";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <Target className="text-primary" size={60} />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <TrendingUp className="text-secondary" size={50} />
      </div>
      <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <Users className="text-accent" size={45} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Small headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-0.5 gradient-primary rounded-full"></div>
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">
                Unlock Your True Potential
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform Your Life{" "}
              <span className="text-gradient block mt-2">With Expert Guidance</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Break through barriers and achieve your dreams with 
              <strong className="text-foreground"> personalized coaching</strong>, 
              <strong className="text-foreground"> proven strategies</strong>, and unwavering support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="button-3d text-lg px-8 py-6 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="glass border-2 border-primary/30 hover:border-primary/60 text-lg px-8 py-6 hover-glow"
              >
                Watch Success Stories
                <Zap className="ml-2" size={20} />
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <Target className="text-primary" size={16} />
                <span className="text-sm font-medium">Goal Achievement</span>
              </div>
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <TrendingUp className="text-secondary" size={16} />
                <span className="text-sm font-medium">Career Growth</span>
              </div>
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <Heart className="text-accent" size={16} />
                <span className="text-sm font-medium">Life Balance</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative transform-3d">
              {/* Main Video */}
              <motion.div 
                className="glass rounded-3xl overflow-hidden shadow-3d hover-lift"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Life Coach Transformation Journey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <AnimatedCard 
                className="absolute -bottom-8 -left-8 p-6 min-w-[140px]"
                delay={0.3}
                hoverEffect="glow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Lives Transformed</div>
                </div>
              </AnimatedCard>

              <AnimatedCard 
                className="absolute -top-8 -right-8 p-6 min-w-[140px]"
                delay={0.5}
                hoverEffect="tilt"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-secondary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </AnimatedCard>

              <AnimatedCard 
                className="absolute top-1/2 -right-12 p-4 min-w-[120px]"
                delay={0.7}
                hoverEffect="scale"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </AnimatedCard>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats with 3D Cards */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <AnimatedCard delay={0} hoverEffect="lift" className="text-center p-8">
            <div className="text-5xl font-bold text-gradient mb-4">1000+</div>
            <div className="text-muted-foreground font-medium">Coaching Sessions</div>
          </AnimatedCard>
          <AnimatedCard delay={0.1} hoverEffect="glow" className="text-center p-8">
            <div className="text-5xl font-bold text-gradient-secondary mb-4">50+</div>
            <div className="text-muted-foreground font-medium">Success Programs</div>
          </AnimatedCard>
          <AnimatedCard delay={0.2} hoverEffect="tilt" className="text-center p-8">
            <div className="text-5xl font-bold text-gradient mb-4">24/7</div>
            <div className="text-muted-foreground font-medium">Support Available</div>
          </AnimatedCard>
        </motion.div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;