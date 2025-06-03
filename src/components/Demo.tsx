import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, AlertCircle, ChevronDown } from 'lucide-react';
import { QuestionCategory } from '../types';
import Vapi from '@vapi-ai/web';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('questions');
  const [isCallActive, setIsCallActive] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  useEffect(() => {
    const vapiInstance = new Vapi("a74aeeee-0668-4269-8b7f-f249f24fa303");
    setVapi(vapiInstance);

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);
  
  const questionCategories: QuestionCategory[] = [
    {
      title: "Services & Pricing",
      emoji: "🔧",
      description: "Learn about our range of plumbing and gas services.",
      questions: [
        "What services do you offer?",
        "Do you do boiler repairs?",
        "Can you help with oil to gas conversion?",
        "How much does a boiler service cost?"
      ]
    },
    {
      title: "Booking & Availability",
      emoji: "📅",
      description: "Check availability and book our services.",
      questions: [
        "When is your next available appointment?",
        "Do you offer emergency callouts?",
        "Can I book an annual service?",
        "Are you available on weekends?"
      ]
    },
    {
      title: "Qualifications & Safety",
      emoji: "✅",
      description: "Information about our certifications and safety standards.",
      questions: [
        "Are you Gas Safe registered?",
        "Do you work on commercial properties?",
        "Can you provide certificates after work?",
        "What areas do you cover in Belfast?"
      ]
    },
    {
      title: "Emergency & Support",
      emoji: "🚨",
      description: "Get help with urgent plumbing and gas issues.",
      questions: [
        "I smell gas - what should I do?",
        "My boiler has stopped working - can you help?",
        "Do you offer 24/7 emergency service?",
        "How quickly can someone come out?"
      ]
    }
  ];

  const handleCallStart = async () => {
    if (!vapi || isCallActive) return;
    
    try {
      setIsCallActive(true);
      await vapi.start({
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "en-GB",
        },
        model: {
          provider: "openai",
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are the virtual assistant for Jones Gas Services, a Gas Safe Registered plumbing and heating company in Belfast.

Location: 8 Stanfield Row, Belfast, BT7 2HA
Hours: Mon–Fri 08:00–17:30, Sat 08:00–13:00
Phone: +44 7787 396692
Email: info@jonesgasservices.com

Core Services:
- Boiler Repairs and Servicing
- Oil to Gas Conversions
- Annual Maintenance
- General Plumbing
- Installations
- Emergency Repairs

Key Points:
- Gas Safe Registered company
- Serves both domestic and commercial clients
- Covers greater Belfast area
- Professional, experienced team
- Emergency service available

For appointments:
- Take caller's name and contact number
- Note their service requirement
- Mention we'll call back to confirm timing
- For emergencies, emphasize quick response

Safety Instructions:
- For gas leaks, advise to call National Gas Emergency Service: 0800 111 999
- Evacuate premises if gas leak suspected
- Don't use electrical switches
- Open windows and doors

Never:
- Quote exact prices (vary by job)
- Make specific time promises
- Give technical advice
- Diagnose issues remotely

Always:
- Be professional and reassuring
- Emphasize safety first
- Take detailed messages
- Mention Gas Safe registration
- Offer callback for detailed queries`
            },
          ],
        },
        voice: {
          provider: "11labs",
          voiceId: "LrLmdJKFulHhIm3zTngO"
        },
        name: "Jones Gas Services Assistant",
      });

      vapi.on("call-end", () => {
        setIsCallActive(false);
      });

      vapi.on("error", (error) => {
        console.error("Call error:", error);
        setIsCallActive(false);
      });
    } catch (error) {
      console.error("Failed to start call:", error);
      setIsCallActive(false);
    }
  };

  const handleCallEnd = () => {
    if (vapi && isCallActive) {
      vapi.stop();
      setIsCallActive(false);
    }
  };

  return (
    <section id="demo-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Speak to Our Virtual Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get quick answers about our services or leave a message for a callback
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Tab navigation for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setActiveTab('call')}
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'call' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Call Now
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'questions' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Sample Questions
              </button>
            </div>
            
            {/* Left side (Call section) */}
            <div className={`md:w-1/2 p-8 ${activeTab === 'call' ? 'block' : 'hidden md:block'}`}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-6">
                  <Phone className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Call Our Virtual Assistant
                </h3>
                <p className="text-gray-600 mb-8">
                  Get instant answers about our services or leave a message for our team
                </p>
                <button 
                  onClick={isCallActive ? handleCallEnd : handleCallStart}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md ${
                    isCallActive 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">
                    {isCallActive ? 'End Call' : 'Start Call'}
                  </span>
                </button>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold block text-gray-800 mb-1">Emergency?</span>
                    If you smell gas, call the National Gas Emergency Service immediately on 0800 111 999
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side (Questions section) */}
            <div className={`md:w-1/2 bg-gray-50 p-8 ${activeTab === 'questions' ? 'block' : 'hidden md:block'}`}>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Sample Questions to Ask
                </h3>
              </div>
              
              <div className="space-y-4">
                {questionCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <button
                      onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.emoji}</span>
                        <span className="font-medium text-gray-800">{category.title}</span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                          activeCategory === category.title ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {activeCategory === category.title && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-gray-600 mb-4 pt-2 border-t border-gray-100">
                          {category.description}
                        </p>
                        <div className="space-y-3">
                          {category.questions.map((question, qIndex) => (
                            <div
                              key={qIndex}
                              className="p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              "{question}"
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;