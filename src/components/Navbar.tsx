import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ShoppingCart, User, Settings, LogOut, Calendar, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { user, logout, isLoading } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-glass border-b border-glass-border' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/"
              className="flex items-center gap-3 group"
            >
              <motion.div
                className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-3d"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="text-white" size={20} />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient group-hover:text-gradient-secondary transition-all duration-300">
                  Life Coach Pro
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  Transform Your Life
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/blog', label: 'Blog' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/medicine-tests', label: 'Shop' }
            ].map((item) => (
              <motion.div key={item.path} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link 
                  to={item.path}
                  className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Cart Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/cart" className="relative">
                <Button variant="outline" size="icon" className="glass hover-glow relative overflow-hidden group">
                  <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  {totalItems > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 h-5 w-5 gradient-primary rounded-full flex items-center justify-center text-xs text-white font-bold shadow-glow-primary"
                    >
                      {totalItems}
                    </motion.div>
                  )}
                </Button>
              </Link>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/appointment">
                <Button className="button-3d group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    Book Consultation
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </Button>
              </Link>
            </motion.div>
            {!isLoading && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="icon" className="glass hover-glow relative overflow-hidden group">
                      <User size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={user?.role === 'patient' ? '/patient-dashboard' : '/doctor-dashboard'} className="cursor-pointer flex items-center">
                      <User size={16} className="mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer flex items-center">
                      <User size={16} className="mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/appointment" className="cursor-pointer flex items-center">
                      <Calendar size={16} className="mr-2" />
                      Book Appointment
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/medicine-tests" className="cursor-pointer flex items-center">
                      <ShoppingCart size={16} className="mr-2" />
                      Shop
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer flex items-center">
                      <Settings size={16} className="mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="cursor-pointer flex items-center">
                      <Phone size={16} className="mr-2" />
                      Contact Support
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : !isLoading ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login">
                  <Button variant="outline" className="glass hover-glow group relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <User size={18} />
                      Login
                    </span>
                    <motion.div
                      className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 glass rounded-xl hover-glow transition-all duration-300"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden py-4 glass-card mt-4 mx-4 rounded-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2 p-4">
              {[
                { path: '/', label: 'Home', icon: Sparkles },
                { path: '/services', label: 'Services', icon: Zap },
                { path: '/about', label: 'About', icon: User },
                { path: '/blog', label: 'Blog', icon: Mail },
                { path: '/gallery', label: 'Gallery', icon: Calendar },
                { path: '/medicine-tests', label: 'Shop', icon: ShoppingCart }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'text-primary bg-primary/10 font-semibold shadow-glow-primary' 
                          : 'text-foreground hover:text-primary hover:bg-muted/50'
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div className="border-t border-border/50 pt-4 mt-4">
                <Link 
                  to="/cart" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 text-foreground hover:text-primary hover:bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingCart size={18} />
                    <span>Cart</span>
                  </div>
                  {totalItems > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="gradient-primary text-white text-xs px-2 py-1 rounded-full font-bold"
                    >
                      {totalItems}
                    </motion.div>
                  )}
                </Link>
              </motion.div>
              <motion.div className="pt-4">
                <Link to="/appointment" onClick={() => setIsOpen(false)}>
                  <Button className="button-3d w-full group">
                    <Calendar size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>
              {!isLoading && user ? (
                <>
                  <Link 
                    to={user?.role === 'patient' ? '/patient-dashboard' : '/doctor-dashboard'}
                    onClick={() => setIsOpen(false)}
                    className="text-left px-4 py-2 rounded-lg transition-smooth text-foreground hover:text-primary hover:bg-muted flex items-center gap-2"
                  >
                    <User size={16} />
                    Dashboard
                  </Link>
                  <Link 
                    to="/profile" 
                    onClick={() => setIsOpen(false)}
                    className="text-left px-4 py-2 rounded-lg transition-smooth text-foreground hover:text-primary hover:bg-muted flex items-center gap-2"
                  >
                    <User size={16} />
                    Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    onClick={() => setIsOpen(false)}
                    className="text-left px-4 py-2 rounded-lg transition-smooth text-foreground hover:text-primary hover:bg-muted flex items-center gap-2"
                  >
                    <Settings size={16} />
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="text-left px-4 py-2 rounded-lg transition-smooth text-destructive hover:bg-muted flex items-center gap-2 w-full"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : !isLoading ? (
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="secondary" className="mx-4 w-[calc(100%-2rem)]">
                    Login
                  </Button>
                </Link>
              ) : null}
              <div className="px-4 py-2 space-y-2 border-t border-border mt-2">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                  <Phone size={16} />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:contact@drsarahmitchell.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                  <Mail size={16} />
                  <span>contact@drsarahmitchell.com</span>
                </a>
              </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
