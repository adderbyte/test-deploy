"use client"
import React, { useState } from 'react';
import { ChevronDown, Zap, Shield, Users, BarChart3, MapPin, Smartphone, Recycle, Camera, Brain, Calendar, Route, CheckCircle, Clock, AlertTriangle, ArrowRight, Play } from 'lucide-react';
import ConnectingLink from "@/public/images/blogs/blog-slide/connectingLink.png"
import CurrentCrisis from "@/public/images/blogs/blog-slide/currentCrisis.png"
import Oppurtunities from "@/public/images/blogs/blog-slide/oppurtunities.png"
import Map1 from "@/public/images/blogs/blog-slide/map1.png"
import Map2 from "@/public/images/blogs/blog-slide/map2.png"
import Solution from "@/public/images/blogs/blog-slide/solution.png"
import Features from "@/public/images/blogs/blog-slide/features.png"
import GenHome from "@/public/images/blogs/blog-slide/waste-gen/home.png"
import GenSchedule from "@/public/images/blogs/blog-slide/waste-gen/schedule.png"
import GenSpecial from "@/public/images/blogs/blog-slide/waste-gen/special.png"
import Management from "@/public/images/blogs/blog-slide/waste-org/management.png"
import Registration from "@/public/images/blogs/blog-slide/waste-org/registration.png"
import Optimized from "@/public/images/blogs/blog-slide/waste-org/optimized.png"

import Image from 'next/image';

export default function PolymarqSolutionPage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const ImagePlaceholder = ({ title, subtitle, className = "", aspectRatio = "16/9" }) => (
    <div className={`bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-200 ${className}`} style={{ aspectRatio }}>
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-gray-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
          <Camera className="w-8 h-8 text-gray-500" />
        </div>
        <h4 className="text-lg font-semibold text-gray-600 mb-2">{title}</h4>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Impact & Results - COMMENTED OUT */}
        {/* 
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Measurable Impact</h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            The true measure of any solution lies in its real-world impact. Early deployments of Polymarq have shown remarkable results across multiple metrics, validating our approach and demonstrating the potential for continent-wide transformation.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
                <p className="text-gray-700 font-medium">Reduction in fuel costs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                <p className="text-gray-700 font-medium">Improvement in collection efficiency</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                <p className="text-gray-700 font-medium">User satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>
        */}

        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-IoT Solutions for Smart Waste Management
          </h1>
          
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Transforming Waste Collection Challenges in Africa Through Intelligent Technology
          </p>
          
          <p className="text-lg text-gray-500 mb-12">
            A comprehensive solution for sustainable urban sanitation
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Published by Polymarq Team</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Tech & Innovation</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
            In the rapidly urbanizing landscape of Africa, waste management presents one of the most pressing challenges of our time. Traditional systems are failing to keep pace with growing populations and increasing waste generation, creating urgent need for innovative solutions.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Enter Polymarq—a revolutionary AI-IoT platform that's reimagining how cities approach waste collection, processing, and management. Our solution bridges the gap between waste generators and collectors through intelligent technology, creating a more efficient, transparent, and sustainable ecosystem.
          </p>
        </section>

        {/* The Connecting Link */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Connecting Link</h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At its core, Polymarq serves as a digital bridge between waste generators and collectors, enabling seamless communication, scheduling, and service confirmation. Think of it as the nervous system of modern waste management—connecting every component to work in perfect harmony.
          </p>
          
          {/* <ImagePlaceholder 
            title="Polymarq Ecosystem Diagram" 
            subtitle="How our platform connects all stakeholders in the waste management chain"
            className="mb-8"
            aspectRatio="3/2"
          /> */}

          <Image src={ConnectingLink} alt="Polymarq Ecosystem Diagram" className="mb-8" />

          <p className="text-gray-600 leading-relaxed">
            This interconnected approach eliminates the communication gaps that plague traditional waste management systems, ensuring that every stakeholder—from individual households to large corporations—has visibility into the entire process.
          </p>
        </section>

        {/* The Problems */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Current Crisis</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Africa's waste management infrastructure is under tremendous strain. The continent generates over 32 million tons of waste annually, yet collection efficiency remains at a mere 30%. This leaves 70% of waste uncollected, creating serious environmental and health hazards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Activities of informal waste pickers create safety and efficiency concerns</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Infrastructure deficiencies limit systematic collection efforts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">High initial costs for smart technology deployment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Lack of actionable real-time data and insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Limited scalable IT integration capabilities</p>
                </div>
              </div>
            </div>
            
            <div>
              {/* <ImagePlaceholder 
                title="Waste Management Crisis" 
                subtitle="Visual representation of current challenges"
                aspectRatio="4/3"
              /> */}
              <Image src={CurrentCrisis} alt="Waste Management Crisis" className="w-full h-auto rounded-2xl mb-6" />
                          </div>
          </div>
        </section>

        {/* The Opportunities */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Opportunity Ahead</h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            While the challenges are significant, they also represent unprecedented opportunities for innovation and impact. The waste management sector in Africa is poised for transformation, driven by increasing urbanization and growing environmental awareness.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">32M</div>
              <p className="text-sm text-gray-600 font-medium">Tons of waste generated annually</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-sm text-gray-600 font-medium">Current collection efficiency</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">107M</div>
              <p className="text-sm text-gray-600 font-medium">Projected waste by 2050</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">70%</div>
              <p className="text-sm text-gray-600 font-medium">Waste left uncollected</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Growth Projections</h3>
            {/* <ImagePlaceholder 
              title="MSW Generation Trends" 
              subtitle="Municipal solid waste generation by region over time"
              aspectRatio="16/9"
            /> */}
            <Image src={Oppurtunities} alt="MSW Generation Trends" className="w-full h-auto rounded-2xl mb-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* <ImagePlaceholder 
              title="Africa MSW 2012" 
              subtitle="Baseline waste generation map"
              aspectRatio="4/5"
            />
            <ImagePlaceholder 
              title="Africa MSW 2025" 
              subtitle="Projected waste generation"
              aspectRatio="4/5"
            /> */}
            <Image src={Map1} alt="Africa MSW 2012" className="w-full h-auto rounded-2xl mb-6" />
            <Image src={Map2} alt="Africa MSW 2025" className="w-full h-auto rounded-2xl mb-6" />
          </div>
          
          <p className="text-sm text-gray-500 mb-8">
            <em>Data sources: MDPI Research Study, UN-Habitat, and various environmental research institutions</em>
          </p>
        </section>

        {/* Our Solution */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Solution: A Smart, Data-Driven Platform</h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Polymarq represents a paradigm shift in waste management—from reactive to proactive, from isolated to connected, from inefficient to optimized. Our platform combines artificial intelligence, Internet of Things technology, and intuitive user experience design to create a comprehensive solution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Two-Sided Marketplace</h3>
                    <p className="text-gray-600 leading-relaxed">Connecting waste generators with certified collectors through an intelligent matching system that optimizes service delivery and cost efficiency.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Route className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Algorithms</h3>
                    <p className="text-gray-600 leading-relaxed">AI-powered route optimization reduces fuel consumption by up to 35% while improving collection efficiency and reducing operational costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Wallet</h3>
                    <p className="text-gray-600 leading-relaxed">Transparent, blockchain-secured billing system with real-time financial tracking and automated payment processing for all stakeholders.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
                    <p className="text-gray-600 leading-relaxed">Our Situational Awareness Map (SAM) provides live data insights, predictive analytics, and comprehensive reporting dashboards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {/* <ImagePlaceholder 
                title="Polymarq Mobile App" 
                subtitle="User interface showcasing key features"
                aspectRatio="3/5"
              /> */}
              <Image src={Solution} alt="Polymarq Mobile App" className="w-full h-auto rounded-2xl mb-6" />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Features That Make the Difference</h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Every feature in Polymarq has been designed with real-world challenges in mind. Our development team has worked closely with waste management professionals across Africa to ensure our solution addresses actual pain points.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              {/* <ImagePlaceholder 
                title="Route Optimization Interface" 
                subtitle="AI-powered route planning dashboard"
                aspectRatio="4/3"
              /> */}
              <Image src={Features} alt="Route Optimization Interface" className="w-full h-auto rounded-2xl mb-6" />
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Route className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Route Optimization</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Our custom algorithms analyze traffic patterns, waste generation data, and vehicle capacity to create optimal collection routes, reducing fuel costs by up to 35%.</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Recycle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Recyclable Incentives</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Integrated reward system that encourages recycling through direct cash payments, contributing to circular economy principles and environmental sustainability.</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Camera className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Smart Incident Reporting</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Citizens can report overflows, illegal dumping, and full bins with photos and GPS coordinates, enabling rapid response and proactive maintenance.</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Brain className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-900">LLM Knowledge Base</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Natural language processing enables stakeholders to query data using simple questions like "Compare waste volumes in different regions this month."</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Read More Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works in Practice</h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Understanding how Polymarq functions in real-world scenarios is crucial to appreciating its impact. Our platform serves different user groups with tailored experiences while maintaining seamless integration across the entire ecosystem.
          </p>

          {/* Read More Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => toggleSection('generators')}
              className={`flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                expandedSection === 'generators'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              For Waste Generators
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedSection === 'generators' ? 'rotate-180' : ''}`} />
            </button>
            
            <button
              onClick={() => toggleSection('collectors')}
              className={`flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                expandedSection === 'collectors'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-green-50 text-green-600 hover:bg-green-100 border border-green-200'
              }`}
            >
              <Recycle className="w-5 h-5 mr-2" />
              For Waste Collectors
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedSection === 'collectors' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Waste Generators Section */}
          <div className={`transition-all duration-500 overflow-hidden ${expandedSection === 'generators' ? 'max-h-full opacity-100 mb-12' : 'max-h-0 opacity-0'}`}>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">For Waste Generators</h3>
              
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Home Screen Overview</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Everything you need to manage your waste right from your home screen. Track upcoming pickups, view collection schedules, manage payments, and access your service history—all in one intuitive interface.
                    </p>
                  </div>
                  {/* <ImagePlaceholder 
                    title="Generator Home Screen" 
                    subtitle="Dashboard overview"
                    aspectRatio="3/5"
                  /> */}
                  <Image src={GenHome} alt="Generator Home Screen" className="w-full h-auto rounded-2xl mb-6" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* <ImagePlaceholder 
                    title="Pickup Schedule" 
                    subtitle="Calendar and notifications"
                    aspectRatio="3/5"
                    className="md:order-first"
                  /> */}
                  <Image src={GenSchedule} alt="Pickup Schedule" className="w-full h-auto rounded-2xl mb-6 md:order-first" />
                  <div className="md:order-last">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Scheduled Pickups</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Easily track your scheduled waste pickups directly from your assigned PSP. Receive push notifications, real-time updates, and automatic reminders to ensure you never miss a collection.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Special Pickup Requests</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Request special pickups for large items, hazardous materials, or emergency collections. Our 24/7 system ensures rapid response times and proper handling of all waste types.
                    </p>
                  </div>
                  {/* <ImagePlaceholder 
                    title="Special Request Form" 
                    subtitle="Emergency pickup interface"
                    aspectRatio="3/5"
                  /> */}
                  <Image src={GenSpecial} alt="Special Request Form" className="w-full h-auto rounded-2xl mb-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Waste Collectors Section */}
          <div className={`transition-all duration-500 overflow-hidden ${expandedSection === 'collectors' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">For Waste Collectors</h3>
              
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Users className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Organization Registration</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Get started with a streamlined onboarding process. Register your organization, verify credentials, and complete compliance checks in minutes rather than weeks.
                    </p>
                  </div>
                  {/* <ImagePlaceholder 
                    title="Registration Portal" 
                    subtitle="Organization setup"
                    aspectRatio="3/5"
                  /> */}
                  <Image src={Registration} alt="Registration Portal" className="w-full h-auto rounded-2xl mb-6" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* <ImagePlaceholder 
                    title="Region Management" 
                    subtitle="Territory optimization"
                    aspectRatio="3/5"
                    className="md:order-first"
                  /> */}
                  <Image src={Management} alt="Region Management" className="w-full h-auto rounded-2xl mb-6" />
                  <div className="md:order-last">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Region Management</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Divide your coverage area into optimized regions for better management and staff allocation. Our AI suggests optimal boundaries based on waste density and accessibility.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Route className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-semibold text-gray-900">Optimized Routes</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Access AI-generated optimal routes with real-time traffic integration. Our algorithms consider vehicle capacity, fuel efficiency, and time constraints to maximize productivity.
                    </p>
                  </div>
                  {/* <ImagePlaceholder 
                    title="Route Optimizer" 
                    subtitle="Live route planning"
                    aspectRatio="3/5"
                  /> */}
                  <Image src={Optimized} alt="Route Optimizer" className="w-full h-auto rounded-2xl mb-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your City's Waste Management?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the revolution in smart waste management. Start building a cleaner, more sustainable future today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
              Get In Touch  Now ...
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>Share this article:</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">LinkedIn</button>
                <button className="px-3 py-1 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">WhatsApp</button>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">Email</button>
              </div>
            </div>
            <div className="text-gray-400">
              © 2024 Polymarq. All rights reserved.
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}