'use client';
'use client';

import React, { useState } from 'react';
import {
  ChevronDown, Truck, Shield, Users, BarChart3, MapPin, Smartphone,
  Route, CheckCircle, Clock, AlertTriangle, ArrowRight, Play, Camera,
  Zap, Calendar, Brain, Settings, DollarSign, TrendingUp, Award, Globe,
  AlertCircle, Leaf, HandCoins, HardHat, FileText
} from 'lucide-react';

const TaaSBlog = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
            <Truck className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Fleet Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Truck-as-a-Service (TaaS): Smart, Scalable Waste Management
          </h1>
          
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing Waste Collection Through Intelligent Fleet Management and Data-Driven Operations
          </p>
          
          <p className="text-lg text-gray-500 mb-12">
            The future of municipal and commercial waste collection is here
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Published by Polymatq Team</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Fleet & Innovation</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
            The waste management industry stands at a critical inflection point. Traditional fleet ownership models are becoming increasingly unsustainable as operational costs soar, maintenance complexities multiply, and environmental regulations tighten. Organizations worldwide are seeking agile, cost-effective solutions that can scale with their needs while maintaining operational excellence.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Enter Truck-as-a-Service (TaaS)—a revolutionary approach that transforms waste collection from a capital-intensive operation into a flexible, technology-driven service. Our platform combines advanced fleet management, AI-powered optimization, and comprehensive data analytics to deliver unprecedented efficiency and cost savings.
          </p>
        </section>

        {/* The Service Revolution */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Service Revolution</h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            TaaS represents a fundamental shift from asset ownership to service consumption. Instead of investing millions in fleet acquisition, maintenance infrastructure, and specialized personnel, organizations can access a complete waste collection solution through a flexible service model that adapts to their specific operational requirements.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            This paradigm shift enables organizations to focus on their core competencies while leveraging our expertise in fleet management, route optimization, and waste collection logistics. The result is improved service quality, reduced operational risk, and significant cost savings.
          </p>
        </section>

        {/* Current Industry Challenges - Icons added, space reduced, full-width text */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Challenges Driving Change</h2>
          
          {/* Text now occupies full width */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The waste management industry faces unprecedented challenges that traditional fleet ownership models cannot adequately address. Rising operational costs, environmental pressures, and evolving customer expectations demand innovative solutions.
          </p>
          
          {/* Bullet points are now in a grid to be side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 items-start mb-8">
            <div className="flex items-start space-x-3">
              <DollarSign className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Fleet acquisition costs consuming 40-60% of operational budgets</p>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Maintenance complexity increasing with advanced vehicle technologies</p>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Regulatory compliance requirements becoming more stringent</p>
            </div>
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Difficulty scaling operations during peak demand periods</p>
            </div>
            <div className="flex items-start space-x-3">
              <BarChart3 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Limited visibility into fleet performance and operational metrics</p>
            </div>
            <div className="flex items-start space-x-3">
              <Leaf className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Environmental sustainability mandates requiring fleet modernization</p>
            </div>
          </div>
        </section>

        {/* Our Comprehensive TaaS Solution - Points in a row of boxes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Comprehensive TaaS Solution</h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Our Truck-as-a-Service platform combines cutting-edge technology with operational expertise to deliver a complete waste collection solution. From fleet deployment to performance optimization, we handle every aspect of your waste collection operations while you focus on growing your business.
          </p>
          
          {/* New layout with a grid of colored boxes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Box 1: Multi-Waste Compatibility */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Waste Compatibility</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Versatile fleet capable of handling MSW, recyclables, organic waste, C&D materials, and hazardous waste with specialized compliance packages and safety protocols.</p>
            </div>
            
            {/* Box 2: Flexible Deployment */}
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Deployment</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Scalable service options including short-term leasing, on-demand scheduling, shared fleet usage, and emergency response capabilities tailored to your operational needs.</p>
            </div>
            
            {/* Box 3: Data-Driven Insights */}
            <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Advanced analytics dashboard providing real-time tracking, route optimization, performance metrics, and predictive maintenance scheduling for maximum efficiency.</p>
            </div>
            
            {/* Box 4: Integrated Platform */}
            <div className="bg-orange-50 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Platform</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Seamless integration with mobile and web platforms enabling real-time service requests, customer communication, billing management, and performance analytics.</p>
            </div>
          </div>
        </section>
        
        {/* Article Footer */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span>Share this article:</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">LinkedIn</button>
                <button className="px-3 py-1 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">WhatsApp</button>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">Email</button>
              </div>
            </div>
            <div className="text-gray-400">
              © 2024 Polymatq. All rights reserved.
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="text-slate-600">
                <span className="text-sm">Next article:</span>
                <p className="font-medium">Smart City Integration: IoT and AI in Urban Management</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors">
                  Print
                </button>
                <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default TaaSBlog;
