import Link from "next/link";
import Image from "next/image";
import { Activity, Users, Calendar, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-logo-purple/20 via-white to-logo-peach/20">
      {/* Header */}
      <header className="border-b border-primary-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-horizontal.svg"
                alt="Virtual PT Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/exercises" className="text-primary-700 hover:text-logo-purple font-medium transition-colors duration-300 hover:scale-105 transform">
                Exercises
              </Link>
              <Link href="/resources" className="text-primary-700 hover:text-logo-peach font-medium transition-colors duration-300 hover:scale-105 transform">
                Resources
              </Link>
              <Link href="#about" className="text-primary-700 hover:text-logo-blue font-medium transition-colors duration-300 hover:scale-105 transform">
                About
              </Link>
              <Link href="/sign-in" className="text-primary-700 hover:text-logo-green font-medium transition-colors duration-300 hover:scale-105 transform">
                Sign In
              </Link>
            </nav>
            <Link
              href="/sign-up"
              className="bg-logo-peach text-white px-6 py-2 rounded-lg hover:bg-logo-peach/90 transition font-medium shadow-md hover:shadow-lg hover:scale-105 transform duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Instructor Photo Background */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-logo-purple">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/instructor_photo.jpg"
            alt="Instructor"
            fill
            className="object-cover object-center object-top"
            priority
            quality={90}
            style={{ objectPosition: 'center top' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Empower Your Child's{" "}
              <span className="text-logo-peach">Physical Therapy</span> Journey
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              A comprehensive platform designed for parents to manage, track, and succeed with
              home exercise programs prescribed by physical therapists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-logo-peach text-white px-8 py-4 rounded-xl hover:bg-logo-peach/90 transition font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              href="#features"
              className="bg-white text-primary-700 border-2 border-logo-blue px-8 py-4 rounded-xl hover:bg-logo-blue/10 transition font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transform duration-300"
            >
              Learn More
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-white via-logo-blue/10 to-logo-green/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Everything You Need for Success
            </h2>
            <p className="text-xl text-primary-600">
              Built specifically for parents managing their child's therapy at home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Activity className="h-10 w-10" />}
              title="Exercise Library"
              description="Access detailed instructions, videos, and images for each prescribed exercise."
              color="purple"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Multiple Children"
              description="Manage exercise programs for multiple children in one convenient location."
              color="peach"
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10" />}
              title="Progress Tracking"
              description="Log completed exercises, track pain levels, and monitor improvements over time."
              color="blue"
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10" />}
              title="Visual Analytics"
              description="See your child's progress with intuitive charts and completion statistics."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* About Section with Instructor Photo Background */}
      <section id="about" className="relative py-20 min-h-[500px] flex items-center overflow-hidden bg-logo-purple">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/instructor_photo.jpg"
            alt="Instructor"
            fill
            className="object-cover object-center object-top"
            quality={90}
            style={{ objectPosition: 'center top' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Designed with Parents in Mind
            </h2>
            <p className="text-lg text-white mb-6 drop-shadow-md">
              We understand that managing your child's physical therapy at home can be overwhelming.
              Virtual PT simplifies the process with easy-to-follow exercise programs, progress tracking,
              and the ability to communicate effectively with your child's therapist.
            </p>
            <p className="text-lg text-white drop-shadow-md">
              Our platform ensures you never miss a session and provides the confidence that you're
              performing exercises correctly for optimal results.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo-icon.svg"
                  alt="Virtual PT Icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">Virtual PT</span>
              </div>
              <p className="text-primary-200">
                Empowering parents to support their children's physical therapy journey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/exercises" className="text-primary-200 hover:text-white transition">
                    Exercises
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-primary-200 hover:text-white transition">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-primary-200 hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" className="text-primary-200 hover:text-white transition">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-primary-200">
                Built by TechAction Studio
                <br />
                Florida, USA
              </p>
            </div>
          </div>
          <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-300">
            <p>&copy; 2026 Virtual PT Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color = "purple",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "purple" | "peach" | "blue" | "green";
}) {
  const colorClasses = {
    purple: "bg-gradient-to-br from-logo-purple/30 to-logo-purple/10 border-logo-purple/50 hover:border-logo-purple text-logo-purple",
    peach: "bg-gradient-to-br from-logo-peach/30 to-logo-peach/10 border-logo-peach/50 hover:border-logo-peach text-orange-600",
    blue: "bg-gradient-to-br from-logo-blue/30 to-logo-blue/10 border-logo-blue/50 hover:border-logo-blue text-blue-600",
    green: "bg-gradient-to-br from-logo-green/30 to-logo-green/10 border-logo-green/50 hover:border-logo-green text-green-600",
  };

  return (
    <div className={`bg-white p-6 rounded-2xl border-3 ${colorClasses[color]} transition-all shadow-md hover:shadow-xl hover:scale-105 transform duration-300`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary-900 mb-2">{title}</h3>
      <p className="text-primary-700">{description}</p>
    </div>
  );
}
