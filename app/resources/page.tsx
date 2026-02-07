import Image from "next/image";
import Link from "next/link";
import { BookOpen, Video, Calendar, Users, CheckCircle, Smartphone } from "lucide-react";

export default function ResourcesPage() {
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
            <nav className="flex space-x-6">
              <Link href="/" className="text-primary-700 hover:text-logo-purple font-medium transition-colors duration-300 hover:scale-105 transform">Home</Link>
              <Link href="/exercises" className="text-primary-700 hover:text-logo-peach font-medium transition-colors duration-300 hover:scale-105 transform">Exercises</Link>
              <Link href="/resources" className="text-logo-peach font-semibold">Resources</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Parent Resources & Education
          </h1>
          <p className="text-xl text-primary-100">
            Everything you need to know about supporting your infant's motor development
          </p>
        </div>
      </section>

      {/* Why HEPs Matter */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">
            Why Home Exercise Programs (HEPs) Matter for Infants
          </h2>
          <p className="text-lg text-primary-700 mb-6">
            Home Exercise Programs are personalized activity plans created by pediatric physical therapists 
            to help babies practice new movement skills in their everyday environments. Because infants learn 
            through repetition and play, short daily practice sessions at home are one of the most powerful 
            ways to support development.
          </p>

          <h3 className="text-2xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="text-primary-600 mr-2">⭐</span>
            Benefits of Infant Home Exercise Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <BenefitCard text="Promote healthy motor development such as head control, rolling, sitting, crawling, and standing" />
            <BenefitCard text="Encourage strength and coordination through age-appropriate play" />
            <BenefitCard text="Support brain development by pairing movement with exploration" />
            <BenefitCard text="Empower caregivers to actively participate in their baby's progress" />
            <BenefitCard text="Improve carryover between therapy visits, making each session more effective" />
            <BenefitCard text="Provide early support for babies who are at risk for developmental delays" />
          </div>
        </div>
      </section>

      {/* Why Virtual Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">
            Why Virtual Home Exercise Programs Work
          </h2>
          <p className="text-lg text-primary-700 mb-6">
            Virtual HEPs deliver exercises through videos, step-by-step instructions, and therapist guidance online. 
            This allows families to learn directly from demonstrations and practice whenever it fits into their daily routine.
          </p>

          <h3 className="text-2xl font-bold text-primary-900 mb-4 flex items-center">
            <Video className="h-7 w-7 text-primary-600 mr-2" />
            Benefits of a Virtual Home Exercise Program
          </h3>
          <div className="space-y-3 mb-8">
            <VirtualBenefit text="Video demonstrations make exercises easier to understand and perform correctly" />
            <VirtualBenefit text="Accessible anytime, anywhere—perfect for busy families" />
            <VirtualBenefit text="Progress tracking tools help caregivers see improvements over time" />
            <VirtualBenefit text="Easy updates as your child grows or masters new skills" />
            <VirtualBenefit text="Improved caregiver confidence through repeated viewing" />
            <VirtualBenefit text="Telehealth support allows therapists to adjust programs remotely" />
            <VirtualBenefit text="Engaging formats (animations, checklists, reminders) increase follow-through" />
          </div>
        </div>
      </section>

      {/* Virtual vs Paper Comparison */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Virtual Programs vs. Paper Handouts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Virtual */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Smartphone className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Virtual HEP</h3>
              </div>
              <div className="space-y-3 mb-6">
                <ComparisonItem text="Includes real-time video examples" positive />
                <ComparisonItem text="Can be customized quickly" positive />
                <ComparisonItem text="Accessible on phones, tablets, and computers" positive />
                <ComparisonItem text="Allows messaging or telehealth check-ins" positive />
                <ComparisonItem text="Less likely to be misplaced" positive />
                <ComparisonItem text="Environmentally friendly" positive />
              </div>
              <p className="text-primary-100 font-semibold">
                Best for: Families who prefer visual learning and flexible access
              </p>
            </div>

            {/* Paper */}
            <div className="bg-white border-2 border-primary-300 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="h-8 w-8 text-primary-600" />
                <h3 className="text-2xl font-bold text-primary-900">Traditional Handout</h3>
              </div>
              <div className="space-y-3 mb-4">
                <ComparisonItem text="Easy to print" />
                <ComparisonItem text="No internet required" />
                <ComparisonItem text="Simple reference sheet" />
                <ComparisonItem text="Good backup option" />
              </div>
              <div className="border-t border-primary-200 pt-4 mb-6">
                <p className="text-sm font-semibold text-primary-800 mb-2">Limitations:</p>
                <div className="space-y-2">
                  <p className="text-sm text-primary-600">• Static images only</p>
                  <p className="text-sm text-primary-600">• Harder to update</p>
                  <p className="text-sm text-primary-600">• Can be lost or damaged</p>
                  <p className="text-sm text-primary-600">• Less interactive</p>
                </div>
              </div>
              <p className="text-primary-700 font-semibold">
                Best for: Families who want printed reminders or have limited technology access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developmental Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-4 text-center">
            Developmental Milestones: The First Year
          </h2>
          <p className="text-center text-primary-700 mb-12 max-w-3xl mx-auto">
            Every baby develops at their own pace, but most follow a similar movement sequence during the first year.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <MilestoneCard
              age="0–3 Months"
              icon="🍼"
              milestones={[
                "Lifts head during tummy time",
                "Turns head side to side",
                "Brings hands to mouth",
                "Tracks toys with eyes"
              ]}
            />
            <MilestoneCard
              age="3–6 Months"
              icon="🧸"
              milestones={[
                "Rolls tummy-to-back and back-to-tummy",
                "Pushes up on arms",
                "Sits with support",
                "Reaches for toys"
              ]}
            />
            <MilestoneCard
              age="6–9 Months"
              icon="🚼"
              milestones={[
                "Sits without support",
                "Moves into hands-and-knees",
                "Crawls or scoots",
                "Pulls to stand"
              ]}
            />
            <MilestoneCard
              age="9–12 Months"
              icon="👣"
              milestones={[
                "Cruises along furniture",
                "Stands briefly without help",
                "Takes first steps",
                "Squats to pick up toys"
              ]}
            />
          </div>
        </div>
      </section>

      {/* When to Contact PT */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-300">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              When Should I Contact a Physical Therapist?
            </h2>
            <p className="text-lg text-primary-700 mb-6">
              Talk to your pediatrician or physical therapist if your baby:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 mt-1">•</span>
                <span className="text-primary-800">Dislikes tummy time consistently</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 mt-1">•</span>
                <span className="text-primary-800">Shows very stiff or very floppy movement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 mt-1">•</span>
                <span className="text-primary-800">Favors one side</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 mt-1">•</span>
                <span className="text-primary-800">Is not meeting major movement milestones</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 mt-1">•</span>
                <span className="text-primary-800">Has difficulty sitting, crawling, or standing</span>
              </li>
            </ul>
            <div className="bg-primary-100 rounded-lg p-4 border-l-4 border-primary-600">
              <p className="text-primary-900 font-semibold">
                Early support makes a big difference!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Evidence */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-4 text-center">
            Research & Evidence
          </h2>
          <p className="text-center text-primary-700 mb-12 max-w-3xl mx-auto">
            Our program is supported by peer-reviewed research on early physical therapy intervention
          </p>

          <div className="space-y-6">
            <ResearchCard
              title="Early Physiotherapy Intervention Program for Preterm Infants and Parents"
              authors="Ochandorena-Acha M et al. (2022)"
              journal="Children, 9(6), 895"
              description="Randomized controlled trial showing positive impacts of early physiotherapy on motor and global development in at-risk infants, including home-based activity programs."
              link="https://www.mdpi.com/2227-9067/9/6/895"
            />
            <ResearchCard
              title="Efficacy of Early Physiotherapy Intervention in Preterm Infant Motor Development"
              authors="Fernández Rego FJ et al. (2012)"
              journal="Journal of Physical Therapy Science"
              description="Systematic review evaluating early PT interventions and motor outcomes in preterm infants."
              link="https://www.jstage.jst.go.jp/article/jpts/24/9/24_933/_article"
            />
            <ResearchCard
              title="Early Motor Interventions for Infants with Congenital Heart Disease"
              authors="Kaeslin R et al. (2023)"
              journal="Systematic Reviews"
              description="Reviews physiotherapy and motor interventions in medically-complex infants under 12 months."
              link="https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-023-02320-3"
            />
            <ResearchCard
              title="Early Parent-Administered Physical Therapy for Preterm Infants"
              authors="Multicenter RCT"
              journal="PubMed Central"
              description="Demonstrates the effect of parent-administered PT on motor performance of preterm infants."
              link="https://pubmed.ncbi.nlm.nih.gov/27440658/"
            />
            <ResearchCard
              title="Effect of Neonatal Therapy on Motor Development in Preterm Infants"
              authors="Systematic Review (2022)"
              journal="PubMed"
              description="Synthesizes evidence for early neonatal therapy and motor outcomes in preterm infants."
              link="https://pubmed.ncbi.nlm.nih.gov/32077096/"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join families using Virtual PT to support their baby's development
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-white text-primary-900 px-8 py-4 rounded-lg hover:bg-primary-50 transition font-semibold text-lg shadow-lg"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3 bg-primary-50 rounded-lg p-4 border border-primary-200">
      <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
      <p className="text-primary-800">{text}</p>
    </div>
  );
}

function VirtualBenefit({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
      <p className="text-primary-800">{text}</p>
    </div>
  );
}

function ComparisonItem({ text, positive }: { text: string; positive?: boolean }) {
  return (
    <div className="flex items-start space-x-2">
      <span className={positive ? "text-white" : "text-primary-900"}>✓</span>
      <p className={positive ? "text-white" : "text-primary-800"}>{text}</p>
    </div>
  );
}

function MilestoneCard({ age, icon, milestones }: { age: string; icon: string; milestones: string[] }) {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-2 border-primary-200 shadow-md">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-bold text-primary-900">{age}</h3>
      </div>
      <ul className="space-y-2">
        {milestones.map((milestone, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-600 mr-2">•</span>
            <span className="text-primary-800">{milestone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResearchCard({
  title,
  authors,
  journal,
  description,
  link,
}: {
  title: string;
  authors: string;
  journal: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-gradient-to-br from-white to-primary-50 rounded-lg p-6 border-2 border-primary-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-sm text-primary-600 mb-1">{authors}</p>
      <p className="text-sm text-primary-700 italic mb-3">{journal}</p>
      <p className="text-primary-800 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 hover:text-primary-800 font-semibold text-sm inline-flex items-center"
      >
        Read Full Article →
      </a>
    </div>
  );
}
