'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useState, useRef } from 'react'
import { Heart, Lightbulb, Users, TrendingUp } from 'lucide-react'

export default function MutualAidLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [quizStep, setQuizStep] = useState(1)
  const [quizData, setQuizData] = useState({
    name: '',
    age: '',
    gender: '',
    involvementLevel: '',
    timeCommitment: '',
    interactionStyle: '',
    skills: '',
    location: '',
    interests: '',
    availability: '',
    email: ''
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      quote: 'Mutual aid changed my community. We now support each other in ways I never imagined possible.',
      photo: '👤'
    },
    {
      name: 'James Chen',
      quote: 'Being part of this network gave me purpose and meaningful connections in my neighborhood.',
      photo: '👤'
    },
    {
      name: 'Aisha Patel',
      quote: 'Through mutual aid, I discovered my skills could make a real difference in people\'s lives.',
      photo: '👤'
    },
    {
      name: 'Carlos Martinez',
      quote: 'This is how communities should work - helping each other without judgment or conditions.',
      photo: '👤'
    },
    {
      name: 'Sarah Johnson',
      quote: 'I found my community and my purpose. Mutual aid is transformative solidarity in action.',
      photo: '👤'
    }
  ]

  const timelineData = [
    {
      year: '1800',
      title: 'NEIGHBORHOOD BARN RAISING',
      description: 'Communities gathered to build barns and homes together, sharing labor and resources.'
    },
    {
      year: '1900',
      title: 'COMMUNITY VICTORY GARDENS',
      description: 'Neighbors cultivated shared gardens to ensure everyone had access to fresh food.'
    },
    {
      year: '2000',
      title: 'ONLINE ORGANIZING NETWORKS',
      description: 'Digital platforms connected local communities for resource sharing and support.'
    },
    {
      year: 'TODAY',
      title: 'YOUR COMMUNITY NEEDS YOU',
      description: 'Modern mutual aid combines tradition with innovation for powerful community care.'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'DIRECT COMMUNITY IMPACT',
      description: 'See immediate, tangible results from your contributions to neighbor wellbeing.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'MEANINGFUL CONNECTIONS',
      description: 'Build authentic relationships with people who share your values and commitment.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'PERSONAL FULFILLMENT',
      description: 'Experience the deep satisfaction of making a real difference in your community.'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'SYSTEMIC CHANGE',
      description: 'Be part of a movement that addresses root causes, not just symptoms.'
    }
  ]

  const handleQuizNext = () => {
    if (quizStep < 9) {
      setQuizStep(quizStep + 1)
    } else {
      // Submit quiz and redirect to results
      window.location.href = '/quiz-results'
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Floating Decorative Circles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-20 h-20 rounded-full bg-[hsl(var(--color-yellow))] opacity-60 top-20 left-10 float" />
        <div className="absolute w-12 h-12 rounded-full bg-[hsl(var(--color-yellow))] opacity-40 top-40 right-20 float-slow" style={{animationDelay: '1s'}} />
        <div className="absolute w-16 h-16 rounded-full bg-[hsl(var(--color-yellow))] opacity-50 bottom-40 left-1/4 float" style={{animationDelay: '2s'}} />
        <div className="absolute w-24 h-24 rounded-full bg-[hsl(var(--color-yellow))] opacity-30 top-1/2 right-10 float-slow" style={{animationDelay: '3s'}} />
        <div className="absolute w-14 h-14 rounded-full bg-[hsl(var(--color-yellow))] opacity-50 bottom-20 right-1/3 float" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 ? 'hsl(var(--color-navy))' : 'transparent',
          backdropFilter: scrollY > 50 ? 'none' : 'blur(10px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/generated/logo.png" alt="Community Aid Collective" className="h-12 w-auto" />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#hero" className="text-white hover:text-[hsl(var(--color-yellow))] transition-colors font-medium">HOME</a>
              <a href="#timeline" className="text-white hover:text-[hsl(var(--color-yellow))] transition-colors font-medium">ABOUT US</a>
              <a href="#how-it-works" className="text-white hover:text-[hsl(var(--color-yellow))] transition-colors font-medium">HOW IT WORKS</a>
              <a href="#benefits" className="text-white hover:text-[hsl(var(--color-yellow))] transition-colors font-medium">BENEFITS</a>
              <a href="#testimonials" className="text-white hover:text-[hsl(var(--color-yellow))] transition-colors font-medium">TESTIMONIALS</a>
              <a href="#contact" className="text-white hover:text-[hsl(var(--color-yellow))] transition-colors font-medium">CONTACT</a>
            </nav>

            <button
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient pulse-glow"
            >
              TAKE THE QUIZ
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[hsl(var(--color-navy))] overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--color-yellow)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--color-light-blue)) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-white mb-6">
                EMPOWERING<br />
                COMMUNITY, TOGETHER.
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Join our mutual aid network and make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gradient text-lg"
                >
                  DISCOVER YOUR ROLE
                </button>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-white text-white rounded-[24px] font-bold hover:bg-white hover:text-[hsl(var(--color-navy))] transition-all"
                >
                  LEARN ABOUT MUTUAL AID
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/generated/hero-community-new.png"
                alt="Community working together"
                className="w-full h-auto float"
              />
            </div>
          </div>
        </div>

        {/* Timeline Preview Icons */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-4 gap-8">
              {timelineData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center text-[hsl(var(--color-navy))] font-bold text-lg shadow-lg">
                    {item.year === 'TODAY' ? '★' : item.year.slice(0, 2)}
                  </div>
                  <p className="text-white/70 text-xs font-semibold">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-32 bg-[hsl(var(--color-light-blue))]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-20">THE HISTORY OF MUTUAL AID</h2>

          {/* Timeline Connecting Line */}
          <div className="absolute left-1/2 top-48 bottom-32 w-1 bg-[hsl(var(--color-yellow))]/30 hidden md:block" />

          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative timeline-item group"
                style={{
                  transform: scrollY > (800 + index * 300) ? 'translateY(0)' : 'translateY(50px)',
                  opacity: scrollY > (800 + index * 300) ? 1 : 0,
                  transition: 'all 0.6s ease'
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[hsl(var(--color-yellow))] border-4 border-[hsl(var(--color-light-blue))] hidden md:block z-10 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''} group-hover:translate-x-2 transition-all duration-300`}>
                    <div className="inline-block px-6 py-2 bg-[hsl(var(--color-yellow))] rounded-full mb-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                      <span className="font-bold text-[hsl(var(--color-navy))] text-2xl">{item.year}</span>
                    </div>
                    <h3 className="mb-4 group-hover:text-[hsl(var(--color-yellow))] transition-colors duration-300">{item.title}</h3>
                    <p className="text-lg text-[hsl(var(--color-navy))]/80">{item.description}</p>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''} group-hover:-translate-x-2 transition-all duration-300`}>
                    <div className="w-full h-64 rounded-[16px] bg-[hsl(var(--color-dark-navy))] shadow-card flex items-center justify-center text-white text-6xl group-hover:shadow-hover group-hover:scale-105 group-hover:bg-[hsl(var(--color-navy))] transition-all duration-300 cursor-pointer">
                      {index === 0 ? '🏠' : index === 1 ? '🌱' : index === 2 ? '💻' : '⭐'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mutual Aid Section */}
      <section id="how-it-works" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-20">OUR MUTUAL AID</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[hsl(var(--color-yellow))] rounded-[24px] p-12 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--color-navy))] flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[hsl(var(--color-yellow))]" />
                </div>
                <h3 className="text-[hsl(var(--color-navy))]">CONNECT.<br />SHARE. THRIVE.</h3>
              </div>
              <p className="text-[hsl(var(--color-navy))] text-lg mb-6">
                Mutual aid is community care in action. We believe in solidarity, not charity.
                Our network helps neighbors support each other through shared resources, skills, and time.
              </p>
              <button className="px-8 py-4 bg-[hsl(var(--color-navy))] text-white rounded-[24px] font-bold hover:scale-105 transition-transform">
                LEARN MORE
              </button>
            </div>

            <div className="bg-[hsl(var(--color-dark-navy))] rounded-[24px] p-12 shadow-card text-white">
              <h3 className="mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[hsl(var(--color-navy))] font-bold">1</span>
                  </div>
                  <p className="text-white/90">
                    <strong className="text-white">Solidarity not charity</strong> - We support each other as equals
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[hsl(var(--color-navy))] font-bold">2</span>
                  </div>
                  <p className="text-white/90">
                    <strong className="text-white">Community-led solutions</strong> - Local control and decision making
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[hsl(var(--color-navy))] font-bold">3</span>
                  </div>
                  <p className="text-white/90">
                    <strong className="text-white">Addressing root causes</strong> - Building systemic change together
                  </p>
                </div>
              </div>
              <button
                onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 btn-gradient"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-32 bg-[hsl(var(--color-light-blue))]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-20">WHY JOIN OUR NETWORK</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--color-yellow))] rounded-[16px] p-8 shadow-card hover:shadow-hover hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{
                  transform: scrollY > 2000 ? 'translateY(0)' : 'translateY(30px)',
                  opacity: scrollY > 2000 ? 1 : 0,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-[hsl(var(--color-navy))] mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-[hsl(var(--color-navy))] mb-3 font-bold">{benefit.title}</h4>
                <p className="text-[hsl(var(--color-navy))]/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-20">TESTIMONIALS</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[Heart, Lightbulb, Users, TrendingUp].map((Icon, index) => (
              <div key={index} className="bg-[hsl(var(--color-yellow))] rounded-[16px] p-8 shadow-card flex items-center justify-center">
                <Icon className="w-16 h-16 text-[hsl(var(--color-navy))]" />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[hsl(var(--color-light-blue))] rounded-[24px] p-12 shadow-card min-h-[300px] flex flex-col justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-[hsl(var(--color-navy))] flex items-center justify-center text-4xl">
                      {testimonial.photo}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[hsl(var(--color-navy))]">{testimonial.name}</p>
                    </div>
                  </div>
                  <p className="text-2xl text-[hsl(var(--color-navy))] italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-[hsl(var(--color-navy))] w-8'
                        : 'bg-[hsl(var(--color-navy))]/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gradient text-lg"
              >
                SHARE YOUR STORY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="relative py-32 bg-[hsl(var(--color-navy))]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center mb-8 text-white">DISCOVER YOUR IMPACT</h2>
          <p className="text-center text-xl text-white/80 mb-12">
            Take our quiz to find your unique role in building stronger communities
          </p>

          <div className="bg-white rounded-[24px] p-12 shadow-card">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-[hsl(var(--color-navy))]">Step {quizStep} of 9</span>
                <span className="text-sm font-semibold text-[hsl(var(--color-navy))]/60">{Math.round((quizStep / 9) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-[hsl(var(--color-light-blue))] rounded-full h-3">
                <div
                  className="bg-[hsl(var(--color-yellow))] h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(quizStep / 9) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-6">
              {quizStep === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--color-navy))] mb-6">Let's get to know you!</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-base font-semibold text-[hsl(var(--color-navy))] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                        value={quizData.name}
                        onChange={(e) => setQuizData({...quizData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-[hsl(var(--color-navy))] mb-2">
                        Your Age
                      </label>
                      <select
                        className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                        value={quizData.age}
                        onChange={(e) => setQuizData({...quizData, age: e.target.value})}
                      >
                        <option value="">Select your age range</option>
                        <option value="18-24">18-24 years old</option>
                        <option value="25-34">25-34 years old</option>
                        <option value="35-44">35-44 years old</option>
                        <option value="45-54">45-54 years old</option>
                        <option value="55-64">55-64 years old</option>
                        <option value="65+">65+ years old</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-[hsl(var(--color-navy))] mb-2">
                        Gender
                      </label>
                      <select
                        className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                        value={quizData.gender}
                        onChange={(e) => setQuizData({...quizData, gender: e.target.value})}
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    What's your current level of community involvement?
                  </label>
                  <select
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                    value={quizData.involvementLevel}
                    onChange={(e) => setQuizData({...quizData, involvementLevel: e.target.value})}
                  >
                    <option value="">Select an option</option>
                    <option value="new">Just getting started - I'm new to community organizing</option>
                    <option value="some">Some experience - I've volunteered a few times</option>
                    <option value="active">Very active - I regularly participate in community events</option>
                    <option value="organizer">Community organizer - I lead initiatives and coordinate efforts</option>
                    <option value="leader">Experienced leader - I've founded or run community organizations</option>
                  </select>
                </div>
              )}

              {quizStep === 3 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    How much time can you commit each month?
                  </label>
                  <select
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                    value={quizData.timeCommitment}
                    onChange={(e) => setQuizData({...quizData, timeCommitment: e.target.value})}
                  >
                    <option value="">Select an option</option>
                    <option value="1-3">1-3 hours per month - I have limited availability</option>
                    <option value="4-8">4-8 hours per month - A few hours each week</option>
                    <option value="9-15">9-15 hours per month - Substantial weekly commitment</option>
                    <option value="16-25">16-25 hours per month - Several hours per week</option>
                    <option value="25+">25+ hours per month - Significant ongoing involvement</option>
                  </select>
                </div>
              )}

              {quizStep === 4 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    What's your preferred interaction style?
                  </label>
                  <select
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                    value={quizData.interactionStyle}
                    onChange={(e) => setQuizData({...quizData, interactionStyle: e.target.value})}
                  >
                    <option value="">Select an option</option>
                    <option value="in-person">In-person activities - I prefer face-to-face interaction</option>
                    <option value="online">Online/remote - Virtual meetings and digital collaboration</option>
                    <option value="hybrid">Flexible mix - Both in-person and online works for me</option>
                    <option value="behind-scenes">Behind-the-scenes support - Administrative and planning work</option>
                    <option value="event-based">Event-based - I prefer participating in organized events</option>
                  </select>
                </div>
              )}

              {quizStep === 5 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    What skills would you like to contribute?
                  </label>
                  <p className="text-sm text-[hsl(var(--color-navy))]/70 mb-3">Select all areas where you have experience or interest</p>
                  <textarea
                    rows={4}
                    placeholder="e.g., cooking for community meals, teaching ESL, organizing events, tech support, childcare, transportation, medical skills, counseling, gardening, carpentry, translation..."
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors resize-none"
                    value={quizData.skills}
                    onChange={(e) => setQuizData({...quizData, skills: e.target.value})}
                  />
                </div>
              )}

              {quizStep === 6 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    What areas of mutual aid interest you most?
                  </label>
                  <select
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                    value={quizData.interests}
                    onChange={(e) => setQuizData({...quizData, interests: e.target.value})}
                  >
                    <option value="">Select your primary interest</option>
                    <option value="food-security">Food security & community meals</option>
                    <option value="housing">Housing support & tenant organizing</option>
                    <option value="childcare">Childcare & family support</option>
                    <option value="education">Education & tutoring</option>
                    <option value="healthcare">Healthcare access & support</option>
                    <option value="transportation">Transportation assistance</option>
                    <option value="technology">Technology & digital literacy</option>
                    <option value="legal">Legal aid & advocacy</option>
                    <option value="mental-health">Mental health & emotional support</option>
                    <option value="environmental">Environmental justice & sustainability</option>
                    <option value="emergency">Emergency response & disaster relief</option>
                    <option value="all">Open to all areas</option>
                  </select>
                </div>
              )}

              {quizStep === 7 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    When are you typically available?
                  </label>
                  <select
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                    value={quizData.availability}
                    onChange={(e) => setQuizData({...quizData, availability: e.target.value})}
                  >
                    <option value="">Select your availability</option>
                    <option value="weekday-mornings">Weekday mornings (9am-12pm)</option>
                    <option value="weekday-afternoons">Weekday afternoons (12pm-5pm)</option>
                    <option value="weekday-evenings">Weekday evenings (5pm-9pm)</option>
                    <option value="weekends-all">Weekends (any time)</option>
                    <option value="weekends-mornings">Weekend mornings</option>
                    <option value="weekends-afternoons">Weekend afternoons</option>
                    <option value="flexible">Flexible schedule - varies week to week</option>
                    <option value="varies">Varies - based on specific needs and events</option>
                  </select>
                </div>
              )}

              {quizStep === 8 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    What's your location?
                  </label>
                  <p className="text-sm text-[hsl(var(--color-navy))]/70 mb-3">This helps us connect you with local mutual aid networks</p>
                  <input
                    type="text"
                    placeholder="City, State or Zip Code"
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                    value={quizData.location}
                    onChange={(e) => setQuizData({...quizData, location: e.target.value})}
                  />
                </div>
              )}

              {quizStep === 9 && (
                <div>
                  <label className="block text-lg font-bold text-[hsl(var(--color-navy))] mb-4">
                    Enter your email to receive your personalized results
                  </label>
                  <p className="text-sm text-[hsl(var(--color-navy))]/70 mb-3">We'll send you customized recommendations and connect you with local opportunities</p>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full p-4 border-2 border-[hsl(var(--color-light-blue))] rounded-[12px] text-[hsl(var(--color-navy))] focus:border-[hsl(var(--color-yellow))] focus:outline-none transition-colors"
                    value={quizData.email}
                    onChange={(e) => setQuizData({...quizData, email: e.target.value})}
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4 mt-8">
              {quizStep > 1 && (
                <button
                  onClick={() => setQuizStep(quizStep - 1)}
                  className="px-8 py-4 border-2 border-[hsl(var(--color-navy))] text-[hsl(var(--color-navy))] rounded-[24px] font-bold hover:bg-[hsl(var(--color-navy))] hover:text-white transition-all"
                >
                  BACK
                </button>
              )}
              <button
                onClick={handleQuizNext}
                className="flex-1 btn-gradient text-lg"
              >
                {quizStep === 9 ? 'DISCOVER YOUR IMPACT' : 'NEXT'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-20 bg-[hsl(var(--color-dark-navy))] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/generated/logo.png" alt="Community Aid Collective" className="h-16 w-auto mb-4" />
              <p className="text-white/70">
                Building stronger communities through mutual aid and solidarity.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-white/70 hover:text-[hsl(var(--color-yellow))] transition-colors">Home</a></li>
                <li><a href="#timeline" className="text-white/70 hover:text-[hsl(var(--color-yellow))] transition-colors">About</a></li>
                <li><a href="#how-it-works" className="text-white/70 hover:text-[hsl(var(--color-yellow))] transition-colors">How It Works</a></li>
                <li><a href="#benefits" className="text-white/70 hover:text-[hsl(var(--color-yellow))] transition-colors">Benefits</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">CONTACT</h4>
              <ul className="space-y-2 text-white/70">
                <li>📧 hello@communityaid.org</li>
                <li>📞 (555) 123-4567</li>
                <li>📍 123 Community St, Your City</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">FOLLOW US</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center text-[hsl(var(--color-navy))] hover:scale-110 transition-transform text-xl">
                  f
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center text-[hsl(var(--color-navy))] hover:scale-110 transition-transform text-xl">
                  𝕏
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[hsl(var(--color-yellow))] flex items-center justify-center text-[hsl(var(--color-navy))] hover:scale-110 transition-transform text-xl">
                  in
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Community Aid Collective. All rights reserved. Built with ❤️ for community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
