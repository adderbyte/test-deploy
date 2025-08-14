import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <header className="border-b border-gray-200 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
        <p className="text-gray-600 mt-1">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using the Polymarq platform and services ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). 
            If you do not agree to all terms, you may not use our Services. Polymarq Limited operates as an intelligence platform for real-world systems, 
            providing coordination services across infrastructure, IoT systems, and technology solutions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>Polymarq provides the following services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Intelligent infrastructure management and coordination systems</li>
              <li>IoT and AI-driven solutions for real-world applications</li>
              <li>Digital twin technology and smart system integration</li>
              <li>Platform ecosystems for multi-stakeholder coordination</li>
              <li>Telecom and edge computing network solutions</li>
              <li>Connected mobility and autonomous system services</li>
              <li>Technical marketplace and professional services</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>To access certain features, you may need to create an account. You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Use the Services for any unlawful or prohibited purpose</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Engage in any activity that could damage, disable, or impair the Services</li>
              <li>Use automated systems to access the Services without permission</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>
              All content, features, and functionality of the Services, including but not limited to text, graphics, logos, 
              software, and technology solutions, are owned by Polymarq Limited or its licensors and are protected by 
              intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to use the Services for your intended business purposes. 
              This license does not permit you to resell, distribute, or create derivative works.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Privacy and Protection</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
              which is incorporated into these Terms by reference.
            </p>
            <p>
              For services involving IoT, infrastructure data, and system integration, you acknowledge that data processing 
              may be necessary for service delivery and system optimization.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Availability and Modifications</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>
              We strive to maintain high availability of our Services but cannot guarantee uninterrupted access. 
              Services may be temporarily unavailable due to maintenance, updates, or technical issues.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time with reasonable notice.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payment Terms and Billing</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>
              For paid services, you agree to pay all applicable fees as described in our pricing documentation. 
              Payment terms will be specified in your service agreement or order form.
            </p>
            <p>
              All fees are non-refundable unless otherwise specified in writing. Late payments may result in service suspension.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLYMARQ LIMITED SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
              DATA, OR USE, ARISING OUT OF YOUR USE OF THE SERVICES.
            </p>
            <p>
              Our total liability for any claims relating to the Services shall not exceed the amount paid by you 
              for the Services in the twelve months preceding the claim.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to indemnify and hold Polymarq Limited harmless from any claims, damages, losses, or expenses 
            arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law and Jurisdiction</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of Nigeria. 
            Any disputes arising from these Terms or the Services shall be subject to the exclusive jurisdiction 
            of the courts in Lagos, Nigeria.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>
              We may terminate or suspend your access to the Services immediately, without prior notice, 
              for any reason including breach of these Terms.
            </p>
            <p>
              You may terminate your account at any time by contacting us. Upon termination, 
              your right to use the Services will cease immediately.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Force Majeure</h2>
          <p className="text-gray-700 leading-relaxed">
            We shall not be liable for any failure or delay in performance under these Terms due to circumstances 
            beyond our reasonable control, including but not limited to acts of God, natural disasters, 
            government actions, or network failures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
          <p className="text-gray-700 leading-relaxed">
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
            shall continue to be valid and enforceable to the fullest extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Material changes will be communicated through 
            our website or by email. Continued use of the Services after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
          <div className="text-gray-700 leading-relaxed space-y-2">
            <p>If you have questions about these Terms, please contact us:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Polymarq Limited</strong></p>
              <p>Address: Otasunsmi Street, Ejigbo, Lagos, Nigeria</p>
              <p>Website: <a href="https://www.polymarq.com" className="text-blue-600 hover:underline">www.polymarq.com</a></p>
              <p>Company Registration: RC-7204929</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Polymarq Limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;