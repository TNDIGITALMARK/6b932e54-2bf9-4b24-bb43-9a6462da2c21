'use client'

import { Heart, Lightbulb, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

export default function QuizResults() {
  const impactProfile = {
    role: 'Community Connector',
    description: 'You have a natural ability to bring people together and build meaningful relationships. Your strengths lie in creating welcoming spaces and fostering collaboration.',
    strengths: [
      'Building authentic connections',
      'Creating inclusive environments',
      'Facilitating group activities',
      'Identifying community needs'
    ],
    recommendations: [
      {
        title: 'Host Community Gatherings',
        description: 'Organize regular meetups in your neighborhood to help neighbors connect and share resources.',
        icon: <Users className="w-8 h-8" />
      },
      {
        title: 'Start a Mutual Aid Network',
        description: 'Create a local network where neighbors can support each other with everyday needs.',
        icon: <Heart className="w-8 h-8" />
      },
      {
        title: 'Lead Skill-Sharing Workshops',
        description: 'Facilitate sessions where community members teach each other valuable skills.',
        icon: <Lightbulb className="w-8 h-8" />
      }
    ],
    nextSteps: [
      'Join our community Slack channel',
      'Attend our next orientation session',
      'Connect with your local mutual aid chapter',
      'Download our Community Organizer toolkit'
    ]
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--color-light-blue))]">
      {/* Header */}
      <header className="bg-[hsl(var(--color-navy))] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <img src="/generated/logo.png" alt="Community Aid Collective" className="h-12 w-auto" />
            <a href="/" className="text-white hover:text-[hsl(var(--color-yellow))] transition-colors font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[hsl(var(--color-yellow))] mb-6">
              <TrendingUp className="w-12 h-12 text-[hsl(var(--color-navy))]" />
            </div>
            <h1 className="mb-4">YOUR IMPACT PROFILE</h1>
            <div className="inline-block px-8 py-3 bg-[hsl(var(--color-yellow))] rounded-full">
              <span className="text-2xl font-bold text-[hsl(var(--color-navy))]">{impactProfile.role}</span>
            </div>
          </div>

          {/* Profile Description */}
          <div className="bg-white rounded-[24px] p-12 shadow-card mb-12">
            <p className="text-xl text-[hsl(var(--color-navy))] leading-relaxed mb-8">
              {impactProfile.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-4 text-[hsl(var(--color-navy))]">Your Strengths</h3>
                <ul className="space-y-3">
                  {impactProfile.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[hsl(var(--color-yellow))] flex-shrink-0 mt-1" />
                      <span className="text-[hsl(var(--color-navy))]">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[hsl(var(--color-yellow))]/20 rounded-[16px] p-6">
                <h4 className="font-bold text-[hsl(var(--color-navy))] mb-3">Did You Know?</h4>
                <p className="text-[hsl(var(--color-navy))]/80">
                  Community Connectors make up 25% of successful mutual aid networks and are essential
                  for building trust and participation in local initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-12">
            <h2 className="text-center mb-8">RECOMMENDED ACTIONS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {impactProfile.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[16px] p-8 shadow-card hover:shadow-hover transition-all"
                >
                  <div className="text-[hsl(var(--color-yellow))] mb-4">
                    {rec.icon}
                  </div>
                  <h4 className="text-[hsl(var(--color-navy))] mb-3 font-bold">{rec.title}</h4>
                  <p className="text-[hsl(var(--color-navy))]/80 mb-4">{rec.description}</p>
                  <button className="text-[hsl(var(--color-navy))] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[hsl(var(--color-navy))] rounded-[24px] p-12 shadow-card text-white">
            <h2 className="text-center mb-8 text-white">YOUR NEXT STEPS</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {impactProfile.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center flex-shrink-0">
                    <span className="text-[hsl(var(--color-navy))] font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white/90 pt-1">{step}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/" className="btn-gradient inline-block text-lg">
                GET STARTED TODAY
              </a>
            </div>
          </div>

          {/* Share Results */}
          <div className="mt-12 text-center">
            <h3 className="mb-6">SHARE YOUR RESULTS</h3>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-white rounded-[16px] shadow-card hover:shadow-hover transition-all font-semibold text-[hsl(var(--color-navy))]">
                📱 Share on Social
              </button>
              <button className="px-6 py-3 bg-white rounded-[16px] shadow-card hover:shadow-hover transition-all font-semibold text-[hsl(var(--color-navy))]">
                📧 Email Results
              </button>
              <button className="px-6 py-3 bg-white rounded-[16px] shadow-card hover:shadow-hover transition-all font-semibold text-[hsl(var(--color-navy))]">
                🖨️ Print PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">READY TO MAKE AN IMPACT?</h2>
          <p className="text-xl text-[hsl(var(--color-navy))]/80 mb-8">
            Join thousands of community members already making a difference through mutual aid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-gradient text-lg">
              JOIN OUR NETWORK
            </a>
            <a
              href="/"
              className="px-8 py-4 border-2 border-[hsl(var(--color-navy))] text-[hsl(var(--color-navy))] rounded-[24px] font-bold hover:bg-[hsl(var(--color-navy))] hover:text-white transition-all"
            >
              EXPLORE RESOURCES
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
