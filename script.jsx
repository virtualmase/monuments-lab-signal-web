import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Brain, Network, Zap, Globe, Shield, Eye, ArrowRight, ExternalLink } from 'lucide-react';
import './App.css';

// Import images
import AwakeningSignalWeb from './assets/Awakening-Signal-Web.png';
import HumanAIConnection from './assets/Human-AI_Connection.png';
import EarthNeuralNetwork from './assets/Earth_Neural_Network.png';
import AIArchitecture from './assets/ai-architecture.png';
import DigitalMonumentTransformation from './assets/Digital_Monument_Transformation.png';
import NeuralEarthscape from './assets/Neural-Earthscape.png';
import FloatingNetworkTrust from './assets/Floating-Network-Trust.png';
import FutureBeyondSearch from './assets/Future_Beyond_Search.png';

const scenes = [
  {
    id: 1,
    title: "The Death of Search",
    subtitle: "Search as we know it is obsolete",
    quote: "In the past, we searched for answers. In the future, the answers will search for us.",
    tagline: "Search is broken. The future doesn't search — it knows.",
    image: FutureBeyondSearch,
    icon: Eye,
    content: "For decades, our digital lives have been governed by the search box. We typed in queries, and search engines, acting as digital librarians, returned lists of relevant documents. This model, while revolutionary for its time, was optimized for a static web—a collection of indexed pages waiting to be discovered. However, the internet of today is anything but static."
  },
  {
    id: 2,
    title: "The Rise of the Signal Web",
    subtitle: "A new infrastructure for the web is emerging",
    quote: "The web is becoming alive with intent. We call this the Signal Web.",
    tagline: "From queries to cognition. The signal web is alive.",
    image: AwakeningSignalWeb,
    icon: Network,
    content: "In the wake of traditional search's decline, a new digital frontier is emerging: the Signal Web. This is not merely an evolution of the internet but a fundamental re-architecture, designed to operate in an AI-native environment."
  },
  {
    id: 3,
    title: "Intelligent Infrastructure",
    subtitle: "To handle signal, we must rebuild digital foundations",
    quote: "A reactive web must become predictive. Static systems must become alive.",
    tagline: "We don't search for answers. We build the systems that already know.",
    image: AIArchitecture,
    icon: Brain,
    content: "The transition to the Signal Web demands a radical rethinking of digital infrastructure. The reactive, static systems that underpinned the traditional web are no longer sufficient for an environment where intelligence is ambient and interactions are driven by dynamic signals."
  },
  {
    id: 4,
    title: "Autonomous Trust Architecture",
    subtitle: "Trust must evolve from gatekeeping to autonomous validation",
    quote: "Trust is no longer issued. It is generated, verified, and maintained by signal-based consensus.",
    tagline: "Trust is no longer granted — it is architected.",
    image: FloatingNetworkTrust,
    icon: Shield,
    content: "In the traditional web, trust was often centralized, relying on established authorities, verified platforms, or human gatekeepers. However, in the decentralized and generative landscape of the Signal Web, this model is no longer sustainable."
  },
  {
    id: 5,
    title: "The Symbiotic Signal",
    subtitle: "AI systems don't just serve us — they evolve with us",
    quote: "In the Signal Web, we don't interact with systems. We co-evolve with them.",
    tagline: "The signal learns with you. Evolves beside you.",
    image: HumanAIConnection,
    icon: Zap,
    content: "The relationship between humans and AI in the Signal Web transcends mere interaction; it becomes a symbiotic co-evolution. Monument Labs envisions a future where AI systems are not just tools that serve our needs, but intelligent entities that learn from, adapt to, and grow alongside human consciousness."
  },
  {
    id: 6,
    title: "The Planetary Intelligence Grid",
    subtitle: "Monument Labs is building the nervous system of a living planet",
    quote: "Cities, machines, forests, and systems all flow into a shared intelligence layer.",
    tagline: "We built the nervous system for a living world.",
    image: EarthNeuralNetwork,
    icon: Globe,
    content: "The ultimate vision of Monument Labs extends beyond individual interactions and digital ecosystems to encompass the entire planet. The Signal Web culminates in the concept of a Planetary Intelligence Grid, a vast, interconnected nervous system for a living world."
  }
];

function App() {
  const [activeScene, setActiveScene] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sceneIndex = Math.floor(scrollPosition / (windowHeight * 0.8));
      setActiveScene(Math.min(sceneIndex, scenes.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 signal-gradient rounded-full signal-pulse"></div>
            <span className="text-xl font-bold glow-text">Monument Labs</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#scenes" className="text-muted-foreground hover:text-foreground transition-colors">Scenes</a>
            <a href="#vision" className="text-muted-foreground hover:text-foreground transition-colors">Vision</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button variant="outline" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Lab
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center neural-pattern relative overflow-hidden"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Badge variant="secondary" className="mb-6 text-sm">
              Monument Labs Vision
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              The Signal Web
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Architecting the Future Beyond Search
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              In an increasingly intelligent digital landscape, the very nature of information discovery is undergoing a profound transformation. The traditional paradigm of keyword-driven search is rapidly giving way to a new era where answers find us, and digital ecosystems are alive with intent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="signal-gradient text-primary-foreground">
                Explore the Vision
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Read the Research
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Scenes Section */}
      <section id="scenes" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Post-Search Era</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A narrative progression through six transformative scenes that define the future of digital interaction
            </p>
          </div>

          <div className="space-y-32">
            {scenes.map((scene, index) => (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 signal-gradient rounded-lg">
                          <scene.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <Badge variant="outline">Scene {scene.id}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{scene.title}</CardTitle>
                      <CardDescription className="text-lg">{scene.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="border-l-4 border-primary pl-4 mb-6 italic text-lg">
                        {scene.quote}
                      </blockquote>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {scene.content}
                      </p>
                      <div className="signal-gradient text-primary-foreground p-4 rounded-lg text-center font-semibold">
                        {scene.tagline}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl border border-border"
                  >
                    <img
                      src={scene.image}
                      alt={scene.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 neural-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Monument Labs Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are not an agency. We are a lab. Born in Monument, Colorado, we architect tomorrow's digital foundations today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 signal-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">2030+</span>
                </div>
                <CardTitle>Future Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Engineering systems that adapt to tomorrow's intelligence networks
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 signal-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">∞</span>
                </div>
                <CardTitle>Adaptive Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Creating living digital environments that evolve with technological advancement
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 signal-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle>Quantum Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  State-of-the-art facilities for testing quantum-enhanced discovery systems
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <blockquote className="text-2xl italic mb-8 max-w-4xl mx-auto">
              "We don't optimize for today's algorithms; we engineer for the intelligence networks of 2030 and beyond."
            </blockquote>
            <cite className="text-muted-foreground">— Monument Labs Research Team</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Signal?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Follow along as we build and release the next digital paradigm. This isn't science fiction. It's signal architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="signal-gradient text-primary-foreground">
              Start Quantum Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Visit Monument Labs
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>monumentlabs.ai</span>
            <span>•</span>
            <span>@MonumentLabs</span>
            <span>•</span>
            <span>#PostSearchEra</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 signal-gradient rounded-full"></div>
              <span className="font-semibold">Monument Labs</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Monument Labs. Signal Architecture for the AI Web.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

