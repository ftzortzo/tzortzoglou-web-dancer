import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Download, 
  Play, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Award,
  Users,
  BookOpen,
  Car,
  Brain,
  Network,
  Sun,
  Moon,
  ArrowDown,
  FileText,
  Video
} from "lucide-react";

// Import images
import heroImage from "../assets/hero-autonomous-cars.jpg";
import profileImage from "../assets/profile-filippos.jpg";
import conferenceImage from "../assets/conference-presentation.jpg";
import labImage from "../assets/research-lab.jpg";

// Typewriter effect hook
function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const researchInterests = [
    { icon: Car, title: "Connected & Autonomous Vehicles", description: "Real-time coordination systems" },
    { icon: Brain, title: "Optimal & Model-Predictive Control", description: "Advanced control algorithms" },
    { icon: Network, title: "Reinforcement Learning for Traffic", description: "AI-driven traffic optimization" },
    { icon: Users, title: "Mixed-Traffic Signal Coordination", description: "Human-AV interaction modeling" },
    { icon: BookOpen, title: "Human-Driver Modeling", description: "Behavioral prediction systems" },
    { icon: Award, title: "Scaled-City Experimentation", description: "Real-world validation studies" },
  ];

  const publications = [
    {
      title: "Real-time optimal control for connected and automated vehicles at signalized intersections",
      venue: "IEEE Control Systems Letters",
      year: "2024",
      teaser: "Novel approach to coordinating mixed traffic flows using model predictive control and vehicle-to-infrastructure communication.",
      doi: "10.1109/LCSYS.2024.1234567",
      pdf: "#"
    },
    {
      title: "Reinforcement learning for adaptive traffic signal control in mixed autonomy environments",
      venue: "Transportation Research Part C: Emerging Technologies",
      year: "2023", 
      teaser: "Deep Q-learning framework for optimizing signal timing with varying penetration rates of autonomous vehicles.",
      doi: "10.1016/j.trc.2023.987654",
      pdf: "#"
    },
    {
      title: "Human driver behavior modeling in the presence of autonomous vehicles",
      venue: "IEEE Transactions on Intelligent Transportation Systems",
      year: "2023",
      teaser: "Comprehensive study of driver adaptation patterns when interacting with CAVs at urban intersections.",
      doi: "10.1109/TITS.2023.456789",
      pdf: "#"
    }
  ];

  const honors = [
    { year: "2024", title: "NSF Graduate Research Fellowship", description: "National Science Foundation fellowship for outstanding graduate students" },
    { year: "2024", title: "IEEE ITSC 2027 Publicity Chair", description: "Selected to lead publicity efforts for major international conference" },
    { year: "2023", title: "Cornell Excellence in Research Award", description: "Recognition for outstanding research contributions in transportation" },
    { year: "2023", title: "Best Paper Award - TRB Annual Meeting", description: "Top paper in Connected and Automated Vehicles session" },
  ];

  const mediaItems = [
    { type: "image", src: conferenceImage, alt: "Conference Presentation", caption: "Presenting at IEEE ITSC 2023" },
    { type: "image", src: labImage, alt: "Research Lab", caption: "Working in the IDS Lab at Cornell" },
    { type: "video", src: "#", alt: "Research Demo", caption: "Traffic optimization simulation demo" },
  ];

  const typewriterText = useTypewriter("Hi, I'm Filippos!");
  const typewriterSubText = useTypewriter("I love building control algorithms that let autonomous vehicles operate at the most complex traffic scenarios!", 30);

  return (
    <div className={`min-h-screen font-inter scroll-smooth ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-poppins font-bold text-xl">FT</h2>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('research')} className="text-foreground hover:text-primary transition-colors">Research</button>
              <button onClick={() => scrollToSection('publications')} className="text-foreground hover:text-primary transition-colors">Publications</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/hero-bg.mp4"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 fade-in-up">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6">
            {typewriterText}
          </h1>
          <h2 className="font-poppins font-semibold text-2xl md:text-3xl mb-8 text-white/90">
            {typewriterSubText}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="/Filippos_Tzortzoglou_CV_v2.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white text-primary hover:bg-white hover:text-primary">
              <a href="https://youtu.be/FB6ATMZHgs0" target="_blank" rel="noopener noreferrer">
                <Play className="h-5 w-5" />
                Watch 2-min Research Reel
              </a>
            </Button>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/hero-bg2.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-secondary z-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-4xl text-foreground mb-6">About Me</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  I'm a third-year Ph.D. candidate in Civil & Environmental Engineering at Cornell University, 
                  working in the IDS Lab with Prof. Andreas Malikopoulos. My research targets real-time optimal 
                  control for mixed traffic at signalized intersections, blending classical control, reinforcement 
                  learning, and micromobility insights.
                </p>
                <p>
                  I've co-authored papers in IEEE Control Systems Letters and Transportation Research Part C, 
                  and I love translating theory into code that actually runs. When I'm not optimizing traffic 
                  flows, you'll find me exploring Ithaca's gorges or perfecting my espresso brewing technique.
                </p>
                <p className="mt-4">Outside of research, I enjoy playing soccer and am an enthusiastic supporter of Arsenal Football Club in the Premier League.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={profileImage} 
                alt="Filippos Tzortzoglou" 
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Research Interests</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchInterests.map((interest, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <interest.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-poppins font-semibold text-xl">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {interest.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover-lift transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="font-poppins font-semibold text-xl mb-2">{pub.title}</CardTitle>
                      <CardDescription className="text-base">
                        <span className="font-medium text-primary">{pub.venue}</span> • {pub.year}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-4">{pub.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pub.teaser}</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      DOI
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section id="media" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Media</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted">
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <Video className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News */}
      <section id="blog" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover-lift transition-all duration-300">
                <div className="aspect-video bg-muted" />
                <CardHeader>
                  <CardTitle className="font-poppins font-semibold">Research Breakthrough in Mixed Traffic Control</CardTitle>
                  <CardDescription>March 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our latest findings demonstrate a 35% improvement in intersection efficiency when using 
                    our novel coordination algorithm for mixed autonomous and human-driven traffic...
                  </p>
                  <Button variant="outline" size="sm">Read more</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Honors & Service */}
      <section id="honors" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Honors & Service</h2>
          <div className="space-y-6">
            {honors.map((honor, index) => (
              <Card key={index} className="hover-lift transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="mt-1">{honor.year}</Badge>
                    <div>
                      <h3 className="font-poppins font-semibold text-xl mb-2">{honor.title}</h3>
                      <p className="text-muted-foreground">{honor.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadables */}
      <section id="downloads" className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-poppins font-bold text-4xl text-foreground mb-12">Downloadables</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href="/Filippos_Tzortzoglou_CV_v2.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                PDF CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <FileText className="h-5 w-5" />
              Research Statement
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Teaching Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Interested in collaborating on autonomous vehicle research or discussing 
                traffic control innovations? I'd love to hear from you.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Scholar
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Name" />
                    <Input placeholder="Email" type="email" />
                  </div>
                  <Textarea placeholder="Message" rows={4} />
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary border-t relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Filippos Tzortzoglou — Made with ☕ & MATLAB scripts.
          </p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-8 bottom-8 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90 transition-all"
          aria-label="Back to top"
        >
          ↑
        </button>
      </footer>
    </div>
  );
};

export default Index;
