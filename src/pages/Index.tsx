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
  Video,
  Menu,
  X
} from "lucide-react";

// Import images
import heroImage from "../assets/hero-autonomous-cars.jpg";
import profileImage from "../assets/profile-filippos.jpg";
import conferenceImage from "../assets/conference-presentation.jpg";
import labImage from "../assets/research-lab.jpg";

// Multi-step typewriter effect hook
function useMultiTypewriter(messages, speed = 60, pause = 1200, vanishDuration = 2500) {
  const [displayed, setDisplayed] = useState("");
  const [step, setStep] = useState(0);
  const [isVanishing, setIsVanishing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let i = 0;
    let current = messages[step];
    setDisplayed("");
    setIsVanishing(false);
    setIsDone(false);
    setShowCursor(true);
    let cursorInterval = setInterval(() => setShowCursor(c => !c), 500);
    const type = () => {
      setDisplayed(current.slice(0, i + 1));
      i++;
      if (i === current.length) {
        setTimeout(() => {
          setIsVanishing(true);
          setShowCursor(false);
          setTimeout(() => {
            if (step < messages.length - 1) {
              setStep(s => s + 1);
            } else {
              setIsDone(true);
            }
          }, vanishDuration);
        }, pause);
      } else {
        setTimeout(type, speed);
      }
    };
    type();
    return () => clearInterval(cursorInterval);
    // eslint-disable-next-line
  }, [step]);
  return { displayed, isVanishing, step, isDone, showCursor };
}

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Publications with user-provided publisher links (July 2024)
  const publications = [
    { title: "On mobility equity and the promise of emerging transportation systems", venue: "IEEE Transactions on Intelligent Transportation Systems", year: "2025", link: "https://ieeexplore.ieee.org/abstract/document/10932667" },
    { title: "A mobility equity metric for multi-modal intelligent transportation systems", venue: "IFAC-PapersOnLine", year: "2024", link: "https://www.sciencedirect.com/science/article/pii/S2405896324004117" },
    { title: "Stochastic time-optimal trajectory planning for connected and automated vehicles in mixed-traffic merging scenarios", venue: "IEEE Transactions on Control Systems Technology", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10621701" },
    { title: "Potential-Based Controller for Efficient Flow of Connected and Automated Vehicles", venue: "2024 American Control Conference (ACC)", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10644722" },
    { title: "A feasibility analysis at signal-free intersections", venue: "IEEE Control Systems Letters", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10551377" },
    { title: "Sampled-data controllers for autonomous vehicles on lane-free roads", venue: "2022 30th Mediterranean Conference on Control and Automation (MED)", year: "2022", link: "https://ieeexplore.ieee.org/abstract/document/9837160" }
  ];

  // Venue links
  const venueLinks = {
    "IEEE Transactions on Control Systems Technology": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=87",
    "2022 30th Mediterranean Conference on Control and Automation (MED)": "https://ieeexplore.ieee.org/xpl/conhome/1001510/all-proceedings",
    "IFAC-PapersOnLine": "https://www.sciencedirect.com/journal/ifac-papersonline",
    "IEEE Transactions on Intelligent Transportation Systems": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6979",
    "2024 American Control Conference (ACC)": "https://ieeexplore.ieee.org/xpl/conhome/1000030/all-proceedings",
    "IEEE Control Systems Letters": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7782633"
  };

  const honors = [
    {
      year: "2025",
      title: "IEEE Outstanding Student Paper Prize on Smart Cities",
      description: <>For the paper: <a href="https://ieeexplore.ieee.org/abstract/document/10551377" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">F.N. Tzortzoglou, L.E. Beaver, A. Malikopoulos, 'A Feasibility Analysis at Signal-Free Intersections'</a>, IEEE Letters on Control Systems Society (LCSS).</>
    },
    {
      year: "2024",
      title: "Finalist for Best Paper Award at the 17th IFAC Symposium on Control of Transportation Systems (CTS2024)",
      description: <>For the paper: <a href="https://www.sciencedirect.com/science/article/pii/S2405896324004117" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">H. Bang, A. Dave, F.N. Tzortzoglou, A.A. Malikopoulos, 'A Mobility Equity Metric for Multi-Modal Intelligent Transportation Systems'</a>.</>
    },
    {
      year: "2024",
      title: "NSF Grant for Non-Academic Research Internships for Graduate Students (INTERN) Program",
      description: "Awarded by the National Science Foundation."
    },
    {
      year: "2024",
      title: "Fellowship from the Gerondelis Foundation",
      description: "Awarded by the Gerondelis Foundation."
    }
  ];

  const mediaItems = [
    { type: "image", src: conferenceImage, alt: "Conference Presentation", caption: "Presenting at IEEE ITSC 2023" },
    { type: "image", src: labImage, alt: "Research Lab", caption: "Working in the IDS Lab at Cornell" },
    { type: "video", src: "#", alt: "Research Demo", caption: "Traffic optimization simulation demo" },
  ];

  const multiTypewriterMessages = [
    "Hi, I am Filippos!",
    "Have you ever imagined how much time a person spends driving throughout their life?",
    "Let's say 1 hour per day, for 365 days a year, over 63 years: that's 22,995 hours. About 2.6 years of your life!",
    "With autonomous vehicles, we can take those 2.6 years back and spend them on what truly matters!",
    "Not to mention the improvements in safety, energy consumption, travel time, accessibility, and comfort. Autonomous vehicles will change our lives!"
  ];
  const vanishEffects = [
    'split-fade-vanish',
    'fade-vanish',
    'slide-vanish',
    'rotate-vanish',
    'scale-vanish'
  ];
  const { displayed: typewriterText, isVanishing, step, showCursor } = useMultiTypewriter(multiTypewriterMessages, 60, 2500, 2500);
  const vanishClass = isVanishing ? vanishEffects[step % vanishEffects.length] : '';

  // Update the photos array and all video references to use safe filenames
  const photos = [
    { filename: "transportation_research_board_2024_photo.jpg", caption: "Transportation Research Board 2024" },
    { filename: "cdc_2024_milano.jpeg", caption: "CDC 2024 (Milano)" },
    { filename: "american_control_conference_2024.jpg", caption: "American Control Conference 2024 (Toronto)" },
    { filename: "ids_lab_party_2024.jpeg", caption: "IDS Lab Party 2024" },
    { filename: "fan_in_the_lab_2.jpg", caption: "Fan in the Lab" },
    { filename: "fan_in_the_lab.jpg", caption: "Fan in the Lab" }
  ];

  // Randomly select a hero background video on mount
  const heroVideos = [
    `${import.meta.env.BASE_URL}hero-bg.mp4`,
    `${import.meta.env.BASE_URL}hero-bg2.mp4`
  ];
  const [selectedHeroVideo, setSelectedHeroVideo] = useState(heroVideos[0]);
  useEffect(() => {
    setSelectedHeroVideo(heroVideos[Math.floor(Math.random() * heroVideos.length)]);
    // eslint-disable-next-line
  }, []);

  // Determine the other hero video for the Photos section
  const otherHeroVideo = heroVideos.find(v => v !== selectedHeroVideo) || heroVideos[0];

  return (
    <div className={`min-h-screen font-inter scroll-smooth ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="font-poppins font-bold text-xl">FT</h2>
          <div className="flex items-center gap-6">
            {/* Hamburger icon for mobile */}
            <button className="md:hidden p-2" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-7 w-7" />
            </button>
            {/* Desktop nav */}
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('publications')} className="text-foreground hover:text-primary transition-colors">Publications</button>
              <button onClick={() => scrollToSection('honors')} className="text-foreground hover:text-primary transition-colors">Honors</button>
              <button onClick={() => scrollToSection('news')} className="text-foreground hover:text-primary transition-colors">News</button>
              <button onClick={() => scrollToSection('photos')} className="text-foreground hover:text-primary transition-colors">Photos</button>
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
        {/* Simple mobile sidebar drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex">
            <div className="w-64 h-full shadow-xl p-0 flex flex-col justify-start items-stretch">
              <div className="bg-white/80 backdrop-blur-md rounded-r-2xl shadow-xl m-2 p-6 flex flex-col h-[calc(100vh-1rem)]">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-lg">Menu</span>
                  <button onClick={() => setSidebarOpen(false)}><X className="h-7 w-7" /></button>
                </div>
                <nav className="flex flex-col gap-2 flex-1">
                  <button onClick={() => { setSidebarOpen(false); scrollToSection('about'); }} className="text-left text-foreground rounded-lg px-3 py-2 hover:bg-primary/10 transition">About</button>
                  <button onClick={() => { setSidebarOpen(false); scrollToSection('publications'); }} className="text-left text-foreground rounded-lg px-3 py-2 hover:bg-primary/10 transition">Publications</button>
                  <button onClick={() => { setSidebarOpen(false); scrollToSection('honors'); }} className="text-left text-foreground rounded-lg px-3 py-2 hover:bg-primary/10 transition">Honors</button>
                  <button onClick={() => { setSidebarOpen(false); scrollToSection('news'); }} className="text-left text-foreground rounded-lg px-3 py-2 hover:bg-primary/10 transition">News</button>
                  <button onClick={() => { setSidebarOpen(false); scrollToSection('photos'); }} className="text-left text-foreground rounded-lg px-3 py-2 hover:bg-primary/10 transition">Photos</button>
                  <button onClick={() => { setSidebarOpen(false); scrollToSection('contact'); }} className="text-left text-foreground rounded-lg px-3 py-2 hover:bg-primary/10 transition">Contact</button>
                </nav>
              </div>
            </div>
            <div className="flex-1" onClick={() => setSidebarOpen(false)} />
          </div>
        )}
      </nav>

      {/* Shared video background for hero + about */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={selectedHeroVideo}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden pt-16 sm:pt-20">
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 fade-in-up">
          <div className="flex flex-col items-center">
            <div
              className={`font-semibold text-primary text-base sm:text-lg md:text-2xl mb-8 bg-white/70 rounded px-4 sm:px-6 py-4 drop-shadow-lg inline-block max-w-full break-words text-center ${vanishClass}`}
              style={{textShadow: '0 2px 8px rgba(0,0,0,0.15)', position: 'relative'}}>
              {typewriterText}
              <span className="typewriter-cursor">|</span>
              {isVanishing && vanishClass === 'split-fade-vanish' && (
                <>
                  <div className="split-slice slice-1" />
                  <div className="split-slice slice-2" />
                  <div className="split-slice slice-3" />
                  <div className="split-slice slice-4" />
                  <div className="split-slice slice-5" />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-72 mx-auto">
            <Button asChild size="lg" variant="secondary" className="gap-2 w-72 mx-auto">
              <a href={`${import.meta.env.BASE_URL}Filippos_Tzortzoglou_CV_v2.pdf`} target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white text-primary hover:bg-white hover:text-primary w-72 mx-auto">
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
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/70 to-white/90 z-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-4xl text-foreground mb-6">About Me</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4 bg-white/70 rounded px-6 py-4 drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.15)'}}>
                <p>
                  My name is Filippos N. Tzortzoglou and I'm a third-year Ph.D. candidate in <a href="https://www.engineering.cornell.edu/cee/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Civil & Environmental Engineering</a> at Cornell University, 
                  working in the <a href="https://ids-lab.net/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">IDS Lab</a> with <a href="https://scholar.google.com/citations?user=ScKI3psAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Prof. Andreas Malikopoulos</a>. My research targets real-time optimal 
                  control for mixed traffic at signalized intersections, blending classical control, reinforcement 
                  learning, and micromobility insights.
                </p>
                <p>
                  I've co-authored papers in IEEE Transactions on Control Systems Technology, IEEE Transactions on Intelligent Transportation Systems, IEEE Control Systems Letters, 
                  and I love translating theory into code that actually runs.                </p>
                <p className="mt-4"> When I'm not optimizing traffic 
                flows, I enjoy playing soccer and am an enthusiastic supporter of Arsenal Football Club in the Premier League.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={profileImage} 
                alt="Filippos Tzortzoglou" 
                className="w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-white ring-offset-2 ring-offset-blue-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 bg-secondary relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`${import.meta.env.BASE_URL}output_video_1.mp4`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-secondary z-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-20">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Selected Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover-lift transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-poppins font-semibold text-xl mb-2">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                      {pub.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-base">
                    <a href={venueLinks[pub.venue]} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">{pub.venue}</a> • {pub.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://scholar.google.com/citations?user=A1Nx-PQAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">See all publications on Google Scholar</a>
          </div>
        </div>
      </section>

      {/* Honors & Service */}
      <section id="honors" className="py-20 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`${import.meta.env.BASE_URL}bird_view_highway.mp4`}
        />
        <div className="absolute inset-0 about-gradient z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-20">
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

      {/* News */}
      <section id="news" className="py-20 bg-secondary relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`${import.meta.env.BASE_URL}autonomous_robot.mp4`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-secondary z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-20">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">News</h2>
          <div className="space-y-8 text-lg">
            <div>
              <b><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=A1Nx-PQAAAAJ&citation_for_view=A1Nx-PQAAAAJ:YsMSGLbcyi4C" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Safe and Efficient Coexistence of Autonomous Vehicles with Human-Driven Traffic at Signalized Intersections</a></b> — Accepted at CDC 2025
              <p className="mt-2 text-muted-foreground">We’re thrilled to announce that our paper "Safe and Efficient Coexistence of Autonomous Vehicles with Human-Driven Traffic at Signalized Intersections" has been accepted for presentation at the 2025 IEEE Conference on Decision and Control (CDC). In this work, we develop a control architecture that enables autonomous vehicles to safely and efficiently interact with human-driven traffic at signalized intersections, offering a scalable approach to managing mixed traffic environments.</p>
            </div>
            <div>
              <b><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=A1Nx-PQAAAAJ&citation_for_view=A1Nx-PQAAAAJ:eQOLeE2rZwMC" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Handling Pedestrian Uncertainty in Coordinating Autonomous Vehicles at Signal-Free Intersections</a></b> — Submitted to Automatica
              <p className="mt-2 text-muted-foreground">We’re excited to share that we submitted our latest work to Automatica, focusing on the challenges of coordinating autonomous vehicles in the presence of unpredictable pedestrians. Our paper presents a real-time framework that enables vehicles to broadcast emergency events, providing a critical layer of safety in signal-free intersections and showcasing the importance of reactive coordination strategies.</p>
            </div>
            <div>
              <b><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=A1Nx-PQAAAAJ&citation_for_view=A1Nx-PQAAAAJ:_FxGoFyzp5QC" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Mixed Traffic: A Perspective from Long Duration Autonomy</a></b> — Submitted to IEEE Transactions on Intelligent Transportation Systems (T-ITS)
              <p className="mt-2 text-muted-foreground">We recently submitted our paper "Mixed Traffic: A Perspective from Long Duration Autonomy" to IEEE T-ITS. In this work, we explore how autonomous vehicles can operate reliably over extended time horizons in environments shared with human drivers. By introducing a long-duration autonomy perspective, we aim to shift the conversation from short-term decision-making to sustained performance in mixed traffic scenarios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="py-20 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={otherHeroVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-secondary z-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-20">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map(({ filename, caption }, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                <img src={`${import.meta.env.BASE_URL}${filename}`} alt={caption} className="w-full h-64 object-cover" />
                <div className="p-4 text-center text-muted-foreground text-sm">{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`${import.meta.env.BASE_URL}drone.mp4`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-secondary z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-20">
          <h2 className="font-poppins font-bold text-4xl text-center text-foreground mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Interested in collaborating on autonomous vehicle research or discussing 
                traffic control innovations? I'd love to hear from you.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://www.linkedin.com/in/filippostzortzoglou/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://github.com/ftzortzo" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://scholar.google.com/citations?user=A1Nx-PQAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-4 w-4" />
                    Scholar
                  </a>
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form 
                  action="https://formspree.io/f/xanbewjp" 
                  method="POST" 
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="name" placeholder="Name" required />
                    <Input name="email" type="email" placeholder="Email" required />
                  </div>
                  <Textarea name="message" placeholder="Message" rows={4} required />
                  <Button type="submit" className="w-full">Send Message</Button>
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
