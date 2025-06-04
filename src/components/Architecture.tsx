
import { 
  Database, 
  Server, 
  Monitor, 
  Brain, 
  Cloud, 
  Shield,
  Zap,
  Globe,
  Code,
  Users
} from 'lucide-react';

const Architecture = () => {
  const architectureComponents = [
    {
      category: 'Frontend',
      icon: Monitor,
      color: 'blue',
      items: [
        'React.js + Tailwind CSS',
        'Monaco Editor Integration',
        'Real-time Collaboration',
        'WebRTC Video Calls',
        'Progressive Web App'
      ]
    },
    {
      category: 'Backend API',
      icon: Server,
      color: 'green',
      items: [
        'FastAPI / Node.js',
        'JWT Authentication',
        'RESTful API Design',
        'WebSocket Support',
        'Microservices Architecture'
      ]
    },
    {
      category: 'AI Engine',
      icon: Brain,
      color: 'purple',
      items: [
        'OpenAI GPT Integration',
        'Code Analysis & Feedback',
        'Smart Recommendations',
        'Performance Optimization',
        'Custom ML Models'
      ]
    },
    {
      category: 'Database',
      icon: Database,
      color: 'orange',
      items: [
        'PostgreSQL (Structured)',
        'MongoDB (Unstructured)',
        'Redis (Caching)',
        'Real-time Sync',
        'Data Analytics'
      ]
    },
    {
      category: 'Execution Engine',
      icon: Code,
      color: 'red',
      items: [
        'Dockerized Sandboxes',
        'Multi-language Support',
        'Kubernetes Orchestration',
        'Auto-scaling',
        'Security Isolation'
      ]
    },
    {
      category: 'Infrastructure',
      icon: Cloud,
      color: 'teal',
      items: [
        'AWS / Google Cloud',
        'CDN Distribution',
        'Load Balancing',
        'Auto-backup Systems',
        'Monitoring & Alerts'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-500 border-blue-200 bg-blue-50',
      green: 'from-green-500 to-emerald-500 border-green-200 bg-green-50',
      purple: 'from-purple-500 to-pink-500 border-purple-200 bg-purple-50',
      orange: 'from-orange-500 to-red-500 border-orange-200 bg-orange-50',
      red: 'from-red-500 to-rose-500 border-red-200 bg-red-50',
      teal: 'from-teal-500 to-blue-500 border-teal-200 bg-teal-50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="architecture" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Architecture</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Built with modern technologies and best practices for scalability, security, and performance
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">&lt;100ms</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">10M+</div>
              <div className="text-gray-600 text-sm">Code Executions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600 text-sm">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {architectureComponents.map((component, index) => (
            <div 
              key={index} 
              className={`relative p-6 rounded-2xl border-2 ${getColorClasses(component.color).split('border-')[1]} ${getColorClasses(component.color).split('bg-')[1]} hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getColorClasses(component.color).split(' ')[0]} ${getColorClasses(component.color).split(' ')[1]} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <component.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{component.category}</h3>
              </div>

              {/* Features List */}
              <ul className="space-y-3">
                {component.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Connection Lines (visual enhancement) */}
              {index < architectureComponents.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Security & Compliance */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Security & Compliance</h3>
            <p className="text-gray-600">Enterprise-grade security measures protecting your data and code</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">End-to-End Encryption</h4>
              <p className="text-gray-600 text-sm">All data transmission encrypted with TLS 1.3</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h4>
              <p className="text-gray-600 text-sm">Full compliance with data protection regulations</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Role-Based Access</h4>
              <p className="text-gray-600 text-sm">Fine-grained permissions and access control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
