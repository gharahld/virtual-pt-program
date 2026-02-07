import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create demo user (parent)
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@virtualpt.com' },
    update: {},
    create: {
      email: 'demo@virtualpt.com',
      password: await hashPassword('Demo123!'),
      name: 'Demo Parent',
      role: 'PARENT',
    },
  });

  console.log('✓ Created demo user');

  // Create exercises for 0-3 months
  const exercises_0_3 = [
    {
      name: 'Tummy Time Play',
      description: 'Strengthen neck, shoulder, and core muscles through supervised tummy time.',
      category: 'Head Control',
      instructions: [
        'Place your baby on their belly on a firm surface',
        'Get face-to-face or hold a toy in front of them',
        'Encourage them to lift their head',
        'Start with 3-5 minutes, increase gradually',
      ],
      precautions: [
        'Always supervise during tummy time',
        'Never place baby on soft surfaces',
        'Stop if baby shows distress',
        'Avoid tummy time immediately after feeding',
      ],
    },
    {
      name: 'Side-Lying Play',
      description: 'Encourage midline orientation and rolling readiness.',
      category: 'Early Movement',
      instructions: [
        'Lay your baby on their side',
        'Place a rolled towel behind their back for support',
        'Show toys in front of their chest',
        'Practice on both sides',
      ],
      precautions: [
        'Ensure stable support',
        'Keep sessions short (5 minutes)',
        'Monitor baby closely',
      ],
    },
    {
      name: 'Supported Sitting with Head Control',
      description: 'Promote neck stability and visual tracking.',
      category: 'Head Control',
      instructions: [
        'Hold your baby at the chest or shoulders in a semi-upright position',
        'Slowly move a toy side to side',
        'Encourage baby to follow the toy with their eyes',
      ],
      precautions: [
        'Provide full trunk support',
        'Keep movements slow and gentle',
        'Watch for signs of fatigue',
      ],
    },
  ];

  // Create exercises for 3-6 months
  const exercises_3_6 = [
    {
      name: 'Rolling Practice',
      description: 'Build trunk strength and transitional movement skills.',
      category: 'Mobility',
      instructions: [
        'Start baby on their back',
        'Gently guide their hips or shoulders toward rolling',
        'Use a toy to motivate the movement',
        'Practice rolling to both sides',
      ],
      precautions: [
        'Use gentle guidance, not force',
        'Clear the area of hazards',
        'Stop if baby resists',
      ],
    },
    {
      name: 'Tummy Time on Arms',
      description: 'Prepare for crawling and strengthen shoulders.',
      category: 'Strength',
      instructions: [
        'During tummy time, place toys slightly above eye level',
        'Encourage baby to push up on forearms or hands',
        'Gradually increase duration',
      ],
      precautions: [
        'Monitor for proper arm positioning',
        'Avoid overfatigue',
        'Provide breaks as needed',
      ],
    },
    {
      name: 'Supported Sitting Play',
      description: 'Improve balance and trunk control.',
      category: 'Balance',
      instructions: [
        'Sit baby on the floor with your hands at their hips or trunk',
        'Let them reach for toys while you guard closely',
        'Gradually reduce support as they improve',
      ],
      precautions: [
        'Keep hands close for safety',
        'Use soft surface',
        'Watch for signs of loss of balance',
      ],
    },
  ];

  // Create exercises for 6-12 months
  const exercises_6_12 = [
    {
      name: 'Sitting to Hands-and-Knees Transitions',
      description: 'Encourage crawling and movement control.',
      category: 'Mobility',
      instructions: [
        'From sitting, guide one leg behind baby',
        'Place a toy forward to encourage leaning and movement',
        'Assist with weight shifting',
      ],
      precautions: [
        'Provide gentle guidance only',
        'Clear floor of obstacles',
        'Let baby set the pace',
      ],
    },
    {
      name: 'Supported Standing at Furniture',
      description: 'Build leg strength and balance for walking.',
      category: 'Standing',
      instructions: [
        'Stand baby at a couch or low table',
        'Encourage reaching for toys side to side',
        'Allow baby to practice weight shifting',
      ],
      precautions: [
        'Stay close for support',
        'Ensure furniture is stable',
        'Watch for signs of fatigue',
      ],
    },
    {
      name: 'Crawling or Cruising Games',
      description: 'Develop coordination and independence.',
      category: 'Walking Preparation',
      instructions: [
        'Place toys just out of reach to encourage crawling',
        'If standing, encourage side-stepping along furniture',
        'Make it fun with games and encouragement',
      ],
      precautions: [
        'Ensure safe play area',
        'Remove hazards',
        'Supervise constantly',
      ],
    },
  ];

  // Insert all exercises
  const allExercises = [...exercises_0_3, ...exercises_3_6, ...exercises_6_12];
  
  for (const exercise of allExercises) {
    await prisma.exercise.upsert({
      where: { 
        id: `exercise-${exercise.name.toLowerCase().replace(/\s+/g, '-')}` 
      },
      update: {},
      create: {
        id: `exercise-${exercise.name.toLowerCase().replace(/\s+/g, '-')}`,
        ...exercise,
      },
    });
  }

  console.log('✓ Created exercises');

  // Create demo child
  const demoChild = await prisma.child.upsert({
    where: { id: 'demo-child' },
    update: {},
    create: {
      id: 'demo-child',
      name: 'Baby Emma',
      age: 4,
      diagnosis: 'Typical development',
      notes: 'Working on sitting balance',
      userId: demoUser.id,
    },
  });

  console.log('✓ Created demo child');

  // Create demo exercise program
  const demoProgram = await prisma.exerciseProgram.upsert({
    where: { id: 'demo-program' },
    update: {},
    create: {
      id: 'demo-program',
      name: '4-Month Development Program',
      description: 'Exercises to support sitting and rolling development',
      frequency: '2-3 times daily',
      duration: '4 weeks',
      isActive: true,
      childId: demoChild.id,
    },
  });

  console.log('✓ Created demo program');

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
