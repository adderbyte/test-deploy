import React from 'react';
import { Cpu, Smartphone, Zap, Users, Shield, BarChart3, Clock, Target } from 'lucide-react';

export default function AIHardwareSummary() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          {/* Tag changed to Edge AI */}
          <div className="inline-flex items-center bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <Cpu className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-800">Edge AI</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Needs Custom Hardware</h1>
          <p className="text-lg text-gray-600">
            Making machine learning models fast and efficient isn't just a software problem. It's a hardware one too.
          </p>

          {/* Updated header signature moved below the title */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-6">
            <span>Published by Polymatq Team</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Edge AI</span>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Software Alone Isn’t Enough</h2>
          <p className="text-gray-700 mb-4">
            General-purpose CPUs and GPUs are flexible but inefficient for AI tasks. They burn power and waste cycles.
          </p>
          <p className="text-gray-700">
            Specialized chips—FPGAs, ASICs—can be 10–1000x faster for specific tasks. But designing them is hard, expensive, and slow.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What’s Changing Now</h2>
          <p className="text-gray-700">
            Tools now exist that automatically translate AI models into optimized hardware—without deep hardware expertise. Think ONNX → silicon, in a few steps.
          </p>
          <p className="text-gray-700">
            Unlike IREE (which focuses on model execution across backends), this approach generates physical hardware optimized for specific models.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Input a trained AI model (e.g., ONNX)</li>
            <li>Analyze the model’s compute/memory patterns</li>
            <li>Generate optimized RTL or bitstream</li>
            <li>Deploy to FPGA/ASIC platforms</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Speed:</strong> Hardware tailored to model workloads is significantly faster</li>
            <li><strong>Efficiency:</strong> Orders of magnitude less energy consumption</li>
            <li><strong>Determinism:</strong> Predictable latency for real-time use cases</li>
            <li><strong>Privacy:</strong> Keep data local—ideal for edge AI</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who It's For</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Startups building edge devices</li>
            <li>Companies in automotive, robotics, and telecom</li>
            <li>Anyone needing fast, private, offline AI inference</li>
          </ul>
        </section>

        <footer className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Conclusion</h2>
          <p className="text-gray-700">
            Making AI faster, cheaper, and more secure starts with better hardware. This new wave of AI-focused silicon automation makes it possible.
          </p>
        </footer>
        {/* Polymatq footer signature */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500 border-gray-200">
          © 2024 Polymatq. All rights reserved.
        </div>
      </article>
    </div>
  );
}
