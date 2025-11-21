import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Grid3x3,
  Layers,
  Boxes,
  TreeDeciduous
} from 'lucide-react';
import { galleryAssetPath, heroAssetPath, servicesScrollData, whyChooseUsFeatures, faqData } from './assets/assetPaths';
import { Modal } from './components/ui/modal';
import { Feature } from './components/ui/feature-with-image-comparison';
import { FullScreenScrollFX } from './components/ui/full-screen-scroll-fx.jsx';
import { FeatureSteps } from './components/ui/feature-section';
import { FaqSection } from './components/ui/faq-section';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (projectData) => {
    setSelectedProject(projectData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SigTile Flooring Installation",
      "image": "https://sigtile.com/logo.jpg",
      "description": "Professional flooring installation services specializing in tile, laminate, vinyl plank, and hardwood floors in New Jersey. Licensed, insured, and trusted by homeowners.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Street",
        "addressLocality": "New Jersey",
        "addressRegion": "NJ",
        "postalCode": "07001",
        "addressCountry": "US"
      },
      "telephone": "+17325586559",
      "email": "info@sigtile.com",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "15:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      },
      "areaServed": "New Jersey"
    });
    document.head.appendChild(script);

    // Update page meta tags
    document.title = "Professional Flooring Installation NJ | Tile, Laminate, Vinyl & Hardwood - SigTile";
    
    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = heroAssetPath.logoFavicon;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Expert flooring contractor in New Jersey specializing in tile installation, laminate flooring, vinyl plank (LVP), and hardwood floors. Licensed, insured, free estimates. Call (732) 558-6559";

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Sticky Header with Glass Effect */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/50 shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 pointer-events-none" />
        <nav className="relative container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src={heroAssetPath.logoMain} 
              alt="SigTile Logo" 
              className="h-10 w-auto drop-shadow-sm"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-800 hover:text-blue-600 transition font-medium">Services</a>
            <a href="#projects" className="text-gray-800 hover:text-blue-600 transition font-medium">Projects</a>
            <a href="#reviews" className="text-gray-800 hover:text-blue-600 transition font-medium">Reviews</a>
            <a href="#faq" className="text-gray-800 hover:text-blue-600 transition font-medium">FAQ</a>
          </div>
          <a
            href="tel:7325586559"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(732) 558-6559</span>
          </a>
        </nav>
      </motion.header>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full bg-gray-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={heroAssetPath.heroBackground}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error('Video failed to load:', e);
              // Fallback to background image
              e.currentTarget.style.display = 'none';
            }}
          >
            <source src={heroAssetPath.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <img 
                src={heroAssetPath.logoMain} 
                alt="SigTile Logo" 
                className="h-20 md:h-28 w-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              {...fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center drop-shadow-lg"
            >
              Transform Your Home with
              <span className="text-blue-400"> Premium Flooring</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto text-center drop-shadow-md"
            >
              Expert tile, laminate, vinyl plank, and hardwood floor installation across New Jersey
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold text-sm md:text-base">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold text-sm md:text-base">10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold text-sm md:text-base">4.9/5 Rating</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/quiz"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-lg font-bold transition transform hover:scale-105 flex items-center space-x-2 shadow-2xl w-full sm:w-auto justify-center"
              >
                <span>Get My Personalized Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:7325586559"
                className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-lg text-lg font-bold transition transform hover:scale-105 flex items-center space-x-2 shadow-2xl w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>Call (732) 558-6559</span>
              </a>
            </motion.div>

            {/* Free Estimate Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-full shadow-2xl">
                <p className="text-white text-lg md:text-xl font-bold">
                  🎉 FREE Estimates • Same-Day Response • No Obligation
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center space-y-2 text-white/80">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-6 h-6 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

        {/* Why Choose Us Section - Feature Steps */}
        <section className="py-20 md:py-32 bg-gray-50">
            <FeatureSteps
            features={whyChooseUsFeatures}
            title="Why Choose SigTile?"
            autoPlayInterval={4000}
            imageHeight="h-[400px]"
            />
        </section>

      {/* Services Section - Full Screen Scroll (Hidden on Mobile) */}
      <section id="services" className="hidden md:block">
        <FullScreenScrollFX
          sections={servicesScrollData}
          header={
            <>
              <div>Professional</div>
              <div>Flooring Services</div>
            </>
          }
          footer={
            <div>
              <img 
                src={heroAssetPath.logoMain} 
                alt="SigTile Logo" 
                className="h-16 md:h-20 w-auto mx-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          }
          showProgress={true}
          durations={{ change: 0.7, snap: 800 }}
          colors={{
            text: "rgba(245,245,245,0.95)",
            overlay: "rgba(0,0,0,0.4)",
            pageBg: "#ffffff",
            stageBg: "#1a1a1a",
          }}
          bgTransition="fade"
          parallaxAmount={3}
        />
      </section>

      {/* Recent Projects Gallery */}
      <section id="projects" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Recent Flooring Projects
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              See our expert craftsmanship in action across New Jersey homes
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(galleryAssetPath).map(([key, projectData], index) => {
              return (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
                  onClick={() => openProjectModal(projectData)}
                >
                  <img 
                    src={projectData.thumbnail} 
                    alt={projectData.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-lg font-bold mb-1">{projectData.title}</h4>
                      <p className="text-sm">Click to see Before & After</p>
                    </div>
                  </div>
                  {/* Fallback icon if image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 -z-10">
                    <Grid3x3 className="w-20 h-20" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Proudly Serving New Jersey
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            As a premier flooring contractor in New Jersey, we provide expert tile installation, 
            laminate flooring, vinyl plank, and hardwood floor services throughout the state. 
            From Bergen County to Monmouth County, our experienced team delivers exceptional 
            results for residential and commercial properties. Call us today for a free estimate 
            on your flooring project.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="w-full flex justify-center px-4"
          >
            <Link
              to="/quiz"
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 w-full sm:w-auto max-w-md"
            >
              <span className="whitespace-nowrap">Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Preview */}
      <section id="reviews" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xl font-semibold text-gray-700 ml-2">4.9 / 5.0</span>
            </motion.div>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Based on 127+ Google Reviews
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Review 1 */}
            <motion.article variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "SigTile did an amazing job on our kitchen tile installation. The team was professional, 
                punctual, and the quality is outstanding. Highly recommend for anyone looking for a 
                flooring contractor near me!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <p className="font-bold text-gray-900">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </motion.article>

            {/* Review 2 */}
            <motion.article variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "We got luxury vinyl plank installed throughout our first floor. The transformation is 
                incredible! Fast installation, fair pricing, and beautiful results. Best flooring 
                company in NJ!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  SR
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Rodriguez</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </motion.article>

            {/* Review 3 */}
            <motion.article variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Our hardwood floors look stunning! The team refinished our old floors and they look 
                brand new. Excellent craftsmanship and attention to detail. Would definitely hire 
                again."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                  DP
                </div>
                <div>
                  <p className="font-bold text-gray-900">David Park</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection
        id="faq"
        title="Frequently Asked Questions"
        description="Everything you need to know about our flooring installation services"
        items={faqData}
        contactInfo={{
          title: "Still have questions?",
          description: "We're here to help you with your flooring project",
          buttonText: "Call (732) 558-6559",
          onContact: () => window.location.href = 'tel:7325586559'
        }}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src={heroAssetPath.logoMain} 
                  alt="SigTile Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional flooring installation services in New Jersey. Specializing in tile, 
                laminate, vinyl plank, and hardwood floors.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a href="tel:7325586559" className="flex items-center space-x-3 text-gray-400 hover:text-white transition">
                  <Phone className="w-5 h-5" />
                  <span>(732) 558-6559</span>
                </a>
                <a href="mailto:info@sigtile.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition">
                  <Mail className="w-5 h-5" />
                  <span>info@sigtile.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>Main Street<br />New Jersey, NJ 07001</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tile Installation</li>
                <li>Laminate Flooring</li>
                <li>Vinyl Plank (LVP)</li>
                <li>Hardwood Floors</li>
                <li>Floor Refinishing</li>
                <li>Free Estimates</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SigTile Flooring Installation. All rights reserved. 
            Licensed & Insured Flooring Contractor in New Jersey.</p>
          </div>
        </div>
      </footer>

      {/* Before & After Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <Feature
            beforeImage={selectedProject.before}
            afterImage={selectedProject.after}
            title={selectedProject.title}
            description={selectedProject.description}
            badgeText="Before & After"
          />
        )}
      </Modal>
    </div>
  );
};

export default LandingPage;

