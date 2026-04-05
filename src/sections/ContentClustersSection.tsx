import { Link } from 'react-router-dom';
import { ArrowRight, NuclearWeapon, Flag, MilitaryTank, OilBarrel, DollarSign, Users } from 'lucide-react';
import { contentClusters } from '../lib/seo-keywords';

const clusterIcons: Record<string, React.ReactNode> = {
  'nuclear-program': <NuclearWeapon className="w-6 h-6" />,
  'israel-iran-conflict': <Flag className="w-6 h-6" />,
  'us-military-involvement': <MilitaryTank className="w-6 h-6" />,
  'oil-energy-markets': <OilBarrel className="w-6 h-6" />,
  'sanctions-economy': <DollarSign className="w-6 h-6" />,
  'proxy-networks': <Users className="w-6 h-6" />,
};

const clusterColors: Record<string, { bg: string; border: string; text: string }> = {
  'nuclear-program': { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' },
  'israel-iran-conflict': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
  'us-military-involvement': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
  'oil-energy-markets': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  'sanctions-economy': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
  'proxy-networks': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700' },
};

const ContentClustersSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Explore Topics & Analysis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deep dive into specific aspects of the US-Iran conflict with our comprehensive topic clusters. 
            Each cluster provides in-depth coverage, analysis, and related articles.
          </p>
        </div>

        {/* Clusters Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contentClusters.map((cluster) => {
            const colors = clusterColors[cluster.slug] || { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700' };
            const icon = clusterIcons[cluster.slug] || <Flag className="w-6 h-6" />;

            return (
              <Link
                key={cluster.slug}
                to={`/topic/${cluster.slug}`}
                className={`group p-6 rounded-xl border-2 ${colors.border} ${colors.bg} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${colors.text} bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    {icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {cluster.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {cluster.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cluster.keywords.slice(0, 3).map((keyword, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-0.5 bg-white rounded-full text-gray-600 border border-gray-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600 group-hover:gap-3 transition-all">
                  <span>Explore Topic</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* SEO Content for Search Engines */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Explore comprehensive coverage of <strong>Iran nuclear program</strong>, 
            <strong> Israel Iran conflict</strong>, <strong>US military involvement</strong>, 
            <strong> global oil markets</strong>, <strong>economic sanctions</strong>, and 
            <strong> regional proxy networks</strong>. Our topic clusters provide in-depth analysis 
            for researchers, journalists, and anyone seeking to understand the Middle East crisis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentClustersSection;
