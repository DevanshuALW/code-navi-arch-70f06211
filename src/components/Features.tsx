
import { 
  Brain, 
  Video, 
  Code2, 
  FileText, 
  Users, 
  Zap, 
  Target, 
  Award,
  Monitor,
  MessageSquare,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Feedback',
      description: 'Get instant, personalized feedback on your code with detailed explanations and optimization suggestions.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Mock Interviews',
      description: 'Practice with real-time video interviews, collaborative coding, and professional feedback.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code2,
      title: 'Advanced Code Editor',
      description: 'Monaco-powered editor with syntax highlighting, autocomplete, and real-time collaboration.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'Smart Resume Builder',
      description: 'Auto-generate tech resumes based on your coding achievements and skill progression.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Learning Paths',
      description: 'Personalized learning journeys tailored to your goals - FAANG, startups, or specific roles.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Community Challenges',
      description: 'Compete with peers, join coding contests, and climb the global leaderboards.',
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  const techFeatures = [
    {
      icon: Monitor,
      title: 'Multi-Language Support',
      description: 'Python, Java, C++, JavaScript, and more with real-time execution'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Collaboration',
      description: 'Live code sharing, chat, and pair programming capabilities'
    },
    {
      icon: TrendingUp,
      title: 'Progress Analytics',
      description: 'Detailed insights into your coding patterns and improvement areas'
    },
    {
      icon: Shield,
      title: 'Secure Execution',
      description: 'Dockerized sandbox environment for safe code execution'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Excel</span>
          </h2>
          <p className="text-xl text-gray-600">
            From beginner-friendly tutorials to advanced interview prep, we've got you covered
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Features */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Built for Performance & Scale
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enterprise-grade infrastructure powering your coding journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-white shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Coding Career?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who've landed their dream jobs with CodeNavi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
