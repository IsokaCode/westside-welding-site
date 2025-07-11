import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'arc-welding-mma',
    title: 'Arc Welding (MMA)',
    description: 'Manual Metal Arc (MMA) welding for robust and versatile metal joining, suitable for heavy-duty repairs and construction.',
    features: [
      'Strong welds for thick materials',
      'Works outdoors and in all positions',
      'Ideal for structural steel and repairs',
      'Portable and reliable process'
    ],
    icon: 'Flame'
  },
  {
    id: 'mig-welding',
    title: 'MIG Welding',
    description: 'Metal Inert Gas (MIG) welding for clean, efficient, and high-quality welds on a variety of metals.',
    features: [
      'Fast and efficient process',
      'Minimal spatter and clean finish',
      'Suitable for thin and thick materials',
      'Great for fabrication and repairs'
    ],
    icon: 'Sparkle'
  },
  {
    id: 'aluminium-welding',
    title: 'Aluminium Welding',
    description: 'Specialized welding for aluminium components, ensuring strength and precision for industrial and custom projects.',
    features: [
      'Expert handling of aluminium alloys',
      'TIG and MIG processes available',
      'Corrosion-resistant welds',
      'Precision for fabrication and repair'
    ],
    icon: 'Feather'
  },
  {
    id: 'oxy-acetylene-cutting',
    title: 'Oxy Acetylene Cutting',
    description: 'Flame cutting for rapid and precise separation of steel and other metals, ideal for demolition and modification.',
    features: [
      'Cuts thick steel with ease',
      'Portable for on-site jobs',
      'Clean edges for fabrication',
      'Versatile for various metals'
    ],
    icon: 'Scissors'
  },
  {
    id: 'rotabroach-drilling',
    title: 'Rotabroach Drilling',
    description: 'Magnetic drilling for accurate holes in steel structures, perfect for site installations and modifications.',
    features: [
      'Precise hole cutting',
      'Efficient for large steel sections',
      'Portable magnetic base',
      'Reduces manual effort'
    ],
    icon: 'Drill'
  },
  {
    id: 'onsite-welding-fabrication',
    title: 'On Site Welding & Fabrication',
    description: 'Comprehensive mobile welding and fabrication services delivered directly to your location for maximum convenience.',
    features: [
      'Fully equipped mobile workshop',
      'Custom fabrication on-site',
      'Emergency and scheduled work',
      'Serving construction, industrial, and domestic needs'
    ],
    icon: 'Wrench'
  }
];