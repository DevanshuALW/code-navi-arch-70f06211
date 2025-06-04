
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Code, Trophy } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Active Coders' },
    { icon: Code, value: '1000+', label: 'Challenges' },
    { icon: Trophy, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9', label: 'User Rating' },
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            🚀 Now with AI-Powered Mock Interviews
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Master Coding with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              AI-Powered Learning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The ultimate platform for coding interviews, skill development, and career growth. 
            Practice with real-world challenges, get AI feedback, and ace your next interview.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            >
              Start Coding Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 border-2 hover:bg-gray-50"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">CodeNavi Editor</span>
              </div>
              <div className="p-6 bg-gray-900 text-green-400 font-mono text-sm">
                <div className="flex items-center mb-2">
                  <span className="text-blue-400">function</span>
                  <span className="text-yellow-400 ml-2">twoSum</span>
                  <span className="text-gray-300">(nums, target) {`{`}</span>
                </div>
                <div className="ml-4">
                  <div className="text-gray-400">// AI Suggestion: Use HashMap for O(n) solution</div>
                  <div className="text-purple-400">const map = new Map();</div>
                  <div className="text-purple-400">for (let i = 0; i &lt; nums.length; i++) {`{`}</div>
                  <div className="ml-4 text-orange-400">const complement = target - nums[i];</div>
                  <div className="ml-4 text-green-400">// ✓ Optimized approach detected</div>
                  <div className="ml-4 text-gray-300">...</div>
                  <div className="text-purple-400">{`}`}</div>
                </div>
                <div className="text-gray-300">{`}`}</div>
                <div className="mt-4 text-green-400">✓ All test cases passed • Runtime: 64ms (beats 95%)</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
