"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Baby, Heart, TrendingUp, Play } from "lucide-react";
import { ExerciseVideoModal } from "@/components/ExerciseVideoModal";
import { FallingLeaves } from "@/components/FallingLeaves";

// Exercise data with video placeholders
const exercises = {
  "0-3": [
    {
      id: "tummy-time-play",
      number: "1",
      title: "Tummy Time Play",
      why: "Builds neck, shoulder, and core strength",
      howTo: [
        "Place your baby on their belly on a firm surface",
        "Get face-to-face or hold a toy in front of them",
        "Encourage them to lift their head"
      ],
      targets: "Head lifting, arm support, early posture",
      ageGroup: "Ages 0–3 Months",
      videoUrl: "/videos/optimized/tummy1.mp4",
    },
    {
      id: "side-lying-play",
      number: "2",
      title: "Side-Lying Play",
      why: "Encourages rolling readiness and bringing hands together",
      howTo: [
        "Lay your baby on their side",
        "Place a rolled towel behind their back for support",
        "Show toys in front of their chest"
      ],
      targets: "Midline play, trunk muscles",
      ageGroup: "Ages 0–3 Months",
      videoUrl: "/videos/optimized/side_lying2.mp4",
    },
    {
      id: "supported-sitting-head-control",
      number: "3",
      title: "Supported Sitting with Head Control",
      why: "Strengthens neck muscles and visual tracking",
      howTo: [
        "Hold your baby at the chest or shoulders in a semi-upright position",
        "Slowly move a toy side to side"
      ],
      targets: "Neck control, eye-hand coordination",
      ageGroup: "Ages 0–3 Months",
      videoUrl: "/videos/optimized/supporting_sitting_with_heard_control3.mp4",
    },
  ],
  "3-6": [
    {
      id: "rolling-practice",
      number: "1",
      title: "Rolling Practice",
      why: "Builds trunk strength and movement transitions",
      howTo: [
        "Start baby on their back",
        "Gently guide their hips or shoulders toward rolling",
        "Use a toy to motivate the movement"
      ],
      targets: "Trunk rotation, mobility",
      ageGroup: "Ages 3–6 Months",
      videoUrl: "/videos/optimized/rolling_practice4.mp4",
    },
    {
      id: "tummy-time-on-arms",
      number: "2",
      title: "Tummy Time on Arms",
      why: "Prepares for crawling and strengthens shoulders",
      howTo: [
        "During tummy time, place toys slightly above eye level",
        "Encourage baby to push up on forearms or hands"
      ],
      targets: "Arm strength, posture",
      ageGroup: "Ages 3–6 Months",
      videoUrl: "/videos/optimized/tummy_time_on_arms5.mp4",
    },
    {
      id: "supported-sitting-play",
      number: "3",
      title: "Supported Sitting Play",
      why: "Improves balance and trunk control",
      howTo: [
        "Sit baby on the floor with your hands at their hips or trunk",
        "Let them reach for toys while you guard closely"
      ],
      targets: "Core stability, balance reactions",
      ageGroup: "Ages 3–6 Months",
      videoUrl: "/videos/optimized/supporting_sitting6.mp4",
    },
  ],
  "6-12": [
    {
      id: "sitting-to-hands-knees",
      number: "1",
      title: "Sitting to Hands-and-Knees Transitions",
      why: "Encourages crawling and movement control",
      howTo: [
        "From sitting, guide one leg behind baby",
        "Place a toy forward to encourage leaning and movement"
      ],
      targets: "Weight shifting, coordination",
      ageGroup: "Ages 6–12 Months",
      videoUrl: "/videos/optimized/sitting%20to%20hands_and_knees7.mp4",
    },
    {
      id: "supported-standing-furniture",
      number: "2",
      title: "Supported Standing at Furniture",
      why: "Builds leg strength and balance for walking",
      howTo: [
        "Stand baby at a couch or low table",
        "Encourage reaching for toys side to side"
      ],
      targets: "Leg strength, upright balance",
      ageGroup: "Ages 6–12 Months",
      videoUrl: "/videos/optimized/supporting_standing8.mp4",
    },
    {
      id: "crawling-cruising-games",
      number: "3",
      title: "Crawling or Cruising Games",
      why: "Develops coordination and independence",
      howTo: [
        "Place toys just out of reach to encourage crawling",
        "If standing, encourage side-stepping along furniture"
      ],
      targets: "Mobility, dynamic balance",
      ageGroup: "Ages 6–12 Months",
      videoUrl: "/videos/optimized/crawling_or_cruising9.mov",
    },
  ],
};

export default function ExercisesPage() {
  const [selectedExercise, setSelectedExercise] = useState<typeof exercises["0-3"][0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExerciseClick = (exercise: typeof exercises["0-3"][0]) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-logo-purple/20 via-white to-logo-peach/20 relative overflow-hidden">
      {/* Falling Leaves Animation */}
      <FallingLeaves />
      
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
              <Link href="/exercises" className="text-logo-purple font-semibold">Exercises</Link>
              <Link href="/resources" className="text-primary-700 hover:text-logo-peach font-medium transition-colors duration-300 hover:scale-105 transform">Resources</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Exercise Background Image */}
      <section className="relative py-16 overflow-hidden min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/exercise_bg.jpg"
            alt="Exercise Background"
            className="w-full h-full object-cover"
            style={{ position: 'absolute', inset: 0 }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]" style={{ color: '#cc6600' }}>
              Infant Virtual Home Exercise Program
            </h1>
            <p className="text-xl mb-4 font-semibold drop-shadow-[0_2px_6px_rgba(255,255,255,0.7)]" style={{ color: '#5b3b88' }}>
              Ages 0–12 Months | Designed by Pediatric Physical Therapy
            </p>
            <p className="text-lg max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)] font-medium" style={{ color: '#1e3a8a' }}>
              These play-based activities support your baby's natural movement development. 
              Each age group includes three simple exercises you can practice at home every day.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Guidelines */}
      <section className="bg-gradient-to-r from-logo-purple/30 via-logo-peach/20 to-logo-blue/30 py-8 border-b-2 border-logo-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 bg-white/80 p-4 rounded-xl border-2 border-logo-purple/30">
              <div className="bg-logo-purple p-3 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-1">Practice Time</h3>
                <p className="text-primary-700 text-sm">5–15 minutes total per session</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/80 p-4 rounded-xl border-2 border-logo-peach/30">
              <div className="bg-logo-peach p-3 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-1">Frequency</h3>
                <p className="text-primary-700 text-sm">1–3 times daily during play</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/80 p-4 rounded-xl border-2 border-logo-blue/30">
              <div className="bg-logo-blue p-3 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-1">Safety First</h3>
                <p className="text-primary-700 text-sm">Always supervise and stop if baby shows fatigue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Group 0-3 Months */}
      <section className="py-16 bg-gradient-to-b from-logo-purple/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-logo-purple p-3 rounded-full">
              <Baby className="h-10 w-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900">Ages 0–3 Months</h2>
              <p className="text-primary-600">Head Control & Early Strength</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exercises["0-3"].map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onClick={() => handleExerciseClick(exercise)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Age Group 3-6 Months */}
      <section className="py-16 bg-gradient-to-b from-logo-peach/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-logo-peach p-3 rounded-full">
              <Baby className="h-10 w-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900">Ages 3–6 Months</h2>
              <p className="text-primary-600">Rolling & Sitting Balance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exercises["3-6"].map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onClick={() => handleExerciseClick(exercise)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Age Group 6-12 Months */}
      <section className="py-16 bg-gradient-to-b from-logo-blue/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-logo-blue p-3 rounded-full">
              <Baby className="h-10 w-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900">Ages 6–12 Months</h2>
              <p className="text-primary-600">Crawling, Standing & Walking Skills</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exercises["6-12"].map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onClick={() => handleExerciseClick(exercise)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Caregivers */}
      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Tips for Parents & Caregivers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TipCard text="Keep activities playful and short" index={0} />
            <TipCard text="Follow your baby's lead" index={1} />
            <TipCard text="Practice during daily routines" index={2} />
            <TipCard text="Clear the floor for safety" index={3} />
            <TipCard text="Celebrate every small success!" index={0} />
            <TipCard text="Contact your therapist with questions" index={1} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Questions or Concerns?</h2>
          <p className="text-lg text-primary-700 mb-6">
            If you notice your baby struggling with movement, talk with your pediatric physical therapist. 
            We're here to support your child's growth every step of the way.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Contact Your Therapist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/exercise_bg.jpg"
            alt="Footer Background"
            fill
            className="object-cover"
            quality={90}
            priority={false}
          />
          {/* Light overlay for better text contrast */}
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="text-xl font-bold text-orange-600">Virtual PT</span>
              </div>
              <p className="text-blue-700 font-medium">
                Empowering parents to support their children's physical therapy journey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-orange-600">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/exercises" className="text-blue-700 hover:text-orange-600 transition font-medium">
                    Exercises
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-700 hover:text-orange-600 transition font-medium">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-blue-700 hover:text-orange-600 transition font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" className="text-blue-700 hover:text-orange-600 transition font-medium">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-orange-600">Contact</h3>
              <p className="text-blue-700 font-medium">
                Built by TechAction Studio
                <br />
                Florida, USA
              </p>
            </div>
          </div>
          <div className="border-t border-orange-500/30 mt-8 pt-8 text-center">
            <p className="text-blue-700 font-semibold">&copy; 2026 Virtual PT Program. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {selectedExercise && (
        <ExerciseVideoModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          exercise={{
            title: selectedExercise.title,
            description: selectedExercise.why,
            videoUrl: selectedExercise.videoUrl,
            ageGroup: selectedExercise.ageGroup,
          }}
        />
      )}
    </div>
  );
}

function ExerciseCard({
  exercise,
  onClick,
}: {
  exercise: typeof exercises["0-3"][0];
  onClick: () => void;
}) {
  // Cycle through colors based on exercise number
  const colorMap: Record<string, { bg: string; border: string; number: string; play: string }> = {
    "1": { bg: "bg-logo-purple/10", border: "border-logo-purple/40", number: "bg-logo-purple", play: "bg-logo-purple/20" },
    "2": { bg: "bg-logo-peach/10", border: "border-logo-peach/40", number: "bg-logo-peach", play: "bg-logo-peach/20" },
    "3": { bg: "bg-logo-blue/10", border: "border-logo-blue/40", number: "bg-logo-blue", play: "bg-logo-blue/20" },
  };
  
  const colors = colorMap[exercise.number] || colorMap["1"];

  return (
    <button
      onClick={onClick}
      className={`bg-white ${colors.bg} rounded-2xl border-2 ${colors.border} p-6 shadow-md hover:shadow-xl transition-all text-left w-full group cursor-pointer hover:scale-105 transform duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`${colors.number} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}>
            {exercise.number}
          </div>
          <h3 className="text-xl font-bold text-primary-900 group-hover:text-primary-600 transition">
            {exercise.title}
          </h3>
        </div>
        <div className={`${colors.play} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
          <Play className="h-5 w-5 text-primary-600" fill="currentColor" />
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-primary-800 mb-2 flex items-center">
          <span className="w-2 h-2 rounded-full bg-logo-green mr-2"></span>
          Why it helps:
        </h4>
        <p className="text-primary-700 text-sm">{exercise.why}</p>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-primary-800 mb-2 flex items-center">
          <span className="w-2 h-2 rounded-full bg-logo-green mr-2"></span>
          How to do it:
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-primary-700 text-sm">
          {exercise.howTo.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      
      <div className="pt-4 border-t-2 border-logo-green/30">
        <p className="text-sm text-primary-600">
          <span className="font-semibold">Targets:</span> {exercise.targets}
        </p>
        <p className="text-xs text-primary-500 mt-2 flex items-center">
          <Play className="h-3 w-3 mr-1" />
          Click to watch video demonstration
        </p>
      </div>
    </button>
  );
}

function TipCard({ text, index = 0 }: { text: string; index?: number }) {
  const colors = [
    "bg-logo-purple/80 border-logo-purple",
    "bg-logo-peach/80 border-logo-peach",
    "bg-logo-blue/80 border-logo-blue",
    "bg-logo-green/80 border-logo-green",
  ];
  const colorIndex = (index ?? 0) % colors.length;
  const selectedColor = colors[colorIndex];
  
  return (
    <div className={`${selectedColor} rounded-xl p-4 border-2 shadow-md hover:scale-105 transition-transform duration-300`}>
      <p className="text-white flex items-center font-medium">
        <span className="text-white mr-2 text-lg">✓</span>
        {text}
      </p>
    </div>
  );
}
