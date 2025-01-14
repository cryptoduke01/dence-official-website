import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const About = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8
      }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-24">
      {/* Top Navigation */}
      <motion.div 
        className="fixed top-8 left-8 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        [ 01 ]
      </motion.div>

      <motion.div 
        className="fixed top-8 right-8 flex space-x-8 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span>About</span>
        <span>Approach Angle</span>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Left Column */}
        <motion.div 
          className="space-y-6"
          variants={textVariants}
          initial="initial"
          animate="animate"
          custom={0}
        >
          <h2 className="text-xl font-light mb-8">About</h2>
          <p className="text-gray-300 leading-relaxed">
            At Media Diam, We Specialize In Building Brands That Captivate And Command Attention In The Ever-Evolving Digital Landscape, Partnering With Businesses And Creative Talent To Create Digital Experiences That Amplify Your Brand's Identity And Intent.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="space-y-6"
          variants={textVariants}
          initial="initial"
          animate="animate"
          custom={1}
        >
          <h2 className="text-xl font-light mb-8">Approach Angle</h2>
          <p className="text-gray-300 leading-relaxed">
            We Take Your Ideas And Transform Them Into Strong, Creative Strategies That Seamlessly Blend Form, Function, And Branding. We Bridge The Gap, Connecting Your Stories With A Keen Eye For Branding And Design. We Bring Your Vision To Life.
          </p>
          <p className="text-gray-300 leading-relaxed mt-8">
            In Today's Fast-Paced Social Media World, Standing Out Requires More Than Just Great Design—It Demands Strategy, Creativity, And Precision. Too Often, Brands Intersect To Get Diluted Digital Expression. From Crafting Visually Stunning Campaigns To Ensuring Consistency Across Platforms, We Help Your Brand Engage, Inspire, And Grow In A Competitive Digital Space.
          </p>
        </motion.div>

        {/* Expand Button */}
        <motion.button
          className="fixed bottom-8 right-8"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <Plus size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default About;