import { Target, TrendingUp, Users, Heart, Brain, Lightbulb, Sparkles, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/3d/AnimatedCard";
import Medical3DIcon from "@/components/3d/Medical3DIcon";

const services = [
  {
    icon: Target,
    title: "Goal Achievement Coaching",
    description: "Transform your dreams into actionable plans with proven goal-setting strategies and accountability systems.",
    features: ["SMART Goal Framework", "Progress Tracking", "Milestone Celebrations"],
    color: "primary",
    gradient: "gradient-primary",
    medicalIcon: "heart" as const
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Accelerate your professional growth with strategic career planning and leadership development.",
    features: ["Career Mapping", "Leadership Skills", "Network Building"],
    color: "secondary",
    gradient: "gradient-secondary",
    medicalIcon: "cross" as const
  },
  {
    icon: Heart,
    title: "Relationship Mastery",
    description: "Build deeper connections and improve communication in all your personal and professional relationships.",
    features: ["Communication Skills", "Conflict Resolution", "Emotional Intelligence"],
    color: "accent",
    gradient: "gradient-accent",
    medicalIcon: "pill" as const
  },
  {
    icon: Brain,
    title: "Mindset Transformation",
    description: "Overcome limiting beliefs and develop a growth mindset that propels you toward success.",
    features: ["Belief System Rewiring", "Confidence Building", "Mental Resilience"],
    color: "primary",
    gradient: "gradient-primary",
    medicalIcon: "stethoscope" as const
  },
  {
    icon: Users,
    title: "Life Balance Optimization",
    description: "Create harmony between work, family, and personal time with effective time management strategies.",
    features: ["Time Management", "Priority Setting", "Stress Reduction"],
    color: "secondary",
    gradient: "gradient-secondary",
    medicalIcon: "heart" as const
  },
  {
    icon: Lightbulb,
    title: "Personal Development",
    description: "Unlock your full potential through continuous learning, skill development, and self-awareness.",
    features: ["Self-Discovery", "Skill Enhancement", "Personal Growth Plans"],
    color: "accent",
    gradient: "gradient-accent",
    medicalIcon: "cross" as const
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Target className="text-primary" size={60} />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
        <TrendingUp className="text-secondary" size={70} />
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
              Comprehensive Life Coaching Services
            </p>
            <div className="w-16 h-0.5 gradient-secondary rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Coaching that's <span className="italic text-muted-foreground">not just</span> transformative,{" "}
            <br className="hidden md:block" />
            but <span className="text-gradient">strategically designed</span> for your success!
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Experience personalized coaching with proven methodologies, 
            actionable strategies, and continuous support for lasting transformation.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              >
                <AnimatedCard 
                  className="group h-full p-8 relative overflow-hidden"
                  hoverEffect="tilt"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* 3D Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`w-20 h-20 rounded-2xl ${service.gradient} flex items-center justify-center mb-4 shadow-3d group-hover:shadow-glow-primary transition-all duration-500 group-hover:scale-110 icon-float`}>
                      <Icon className="text-white" size={36} />
                    </div>
                    
                    {/* Floating 3D Medical Icon */}
                    <div className="absolute -top-2 -right-2 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                      <Medical3DIcon icon={service.medicalIcon} size={40} />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center gap-3 text-sm font-medium"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (idx * 0.1), duration: 0.5 }}
                        >
                          <div className={`w-2 h-2 rounded-full ${service.gradient} flex-shrink-0 shadow-glow-primary`} />
                          <span className="group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card inline-flex items-center gap-4 px-8 py-4 hover-glow transition-all duration-300">
            <Sparkles className="text-primary animate-pulse" size={24} />
            <span className="text-lg font-semibold">Ready to transform your life and achieve your dreams?</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-accent" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;