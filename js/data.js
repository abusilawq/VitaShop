/* ============================================
   VitaShop - Sample Product Database
   ============================================ */

const SAMPLE_PRODUCTS = [
  {
    id: 'p001',
    name: 'Whole-Food Multivitamin Complex',
    category: 'vitamins',
    categoryLabel: 'Vitamins',
    price: 129.00,
    oldPrice: 159.00,
    rating: 4.8,
    reviews: 247,
    stock: 84,
    tag: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626516640027-0adf2935ca08?w=800&auto=format&fit=crop'
    ],
    short: 'Daily essential vitamins and minerals from real, whole foods. Lab-tested and third-party verified.',
    description: 'Our Whole-Food Multivitamin Complex delivers 22 essential vitamins and minerals derived from organic fruits, vegetables, and superfoods. Unlike synthetic alternatives, our formula uses bioavailable nutrients your body actually absorbs. Each capsule is third-party tested for purity, potency, and safety. Vegan, gluten-free, and free from artificial fillers.',
    benefits: ['Boosts daily energy levels', 'Supports immune health', 'Improves nutrient absorption', 'Sourced from real whole foods'],
    ingredients: 'Organic spirulina, chlorella, beetroot, broccoli, kale, carrot, blueberry, vitamin B complex, vitamin C, vitamin D3, vitamin E, zinc, magnesium, iron, calcium.',
    servingSize: '2 capsules daily with food',
    sizes: ['60 capsules', '120 capsules', '180 capsules']
  },
  {
    id: 'p002',
    name: 'Pure Whey Protein Isolate — Vanilla',
    category: 'fitness',
    categoryLabel: 'Fitness',
    price: 189.00,
    oldPrice: null,
    rating: 4.9,
    reviews: 412,
    stock: 56,
    tag: 'NEW',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579722821273-0f6c1b5d8a3a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&auto=format&fit=crop'
    ],
    short: '25g protein per serving. Grass-fed, hormone-free whey isolate with no added sugar.',
    description: 'Premium grass-fed whey protein isolate sourced from happy cows in New Zealand. Cold-processed to preserve naturally occurring amino acids. Each scoop delivers 25g of complete protein with only 1g of carbs and zero added sugar. Smooth, creamy vanilla flavour that mixes effortlessly.',
    benefits: ['25g complete protein per serving', 'Supports muscle recovery & growth', 'Grass-fed & hormone-free', 'Low carb, no added sugar'],
    ingredients: 'Whey protein isolate (from grass-fed milk), natural vanilla flavour, stevia leaf extract, sunflower lecithin.',
    servingSize: '1 scoop (30g) post-workout',
    sizes: ['1 kg', '2 kg', '5 kg']
  },
  {
    id: 'p003',
    name: 'Triple-Strength Omega-3 Fish Oil',
    category: 'vitamins',
    categoryLabel: 'Vitamins',
    price: 95.00,
    oldPrice: 119.00,
    rating: 4.7,
    reviews: 189,
    stock: 124,
    tag: 'SALE',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626202378238-e85c5d8e9d68?w=800&auto=format&fit=crop'
    ],
    short: '2,000mg per serving. Mercury-tested, sustainably sourced, and lemon-flavoured to prevent fishy aftertaste.',
    description: 'Sustainably sourced wild-caught fish oil with 1,000mg EPA + 800mg DHA per serving — triple the strength of standard fish oil. Molecularly distilled to remove heavy metals and toxins. Natural lemon oil eliminates fishy burps. IFOS 5-star certified for purity.',
    benefits: ['Supports heart & brain health', 'Reduces inflammation', 'Improves mood & focus', 'Mercury-free, IFOS certified'],
    ingredients: 'Wild fish oil (anchovy, sardine, mackerel), natural lemon oil, mixed tocopherols, gelatin capsule.',
    servingSize: '2 softgels daily with meals',
    sizes: ['90 softgels', '180 softgels']
  },
  {
    id: 'p004',
    name: 'Ashwagandha Calm Complex',
    category: 'herbal',
    categoryLabel: 'Herbal',
    price: 75.00,
    oldPrice: null,
    rating: 4.6,
    reviews: 156,
    stock: 92,
    tag: null,
    image: 'https://images.unsplash.com/photo-1638281862239-5e6b2a5b6726?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1638281862239-5e6b2a5b6726?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611573267317-19d70d24aebb?w=800&auto=format&fit=crop'
    ],
    short: 'Adaptogenic herb blend to help your body manage stress and improve sleep quality.',
    description: 'KSM-66 Ashwagandha — the most clinically studied form — combined with Rhodiola Rosea and L-Theanine. This adaptogenic complex helps your body resist the damaging effects of stress, supports healthy cortisol levels, and promotes restful sleep without drowsiness.',
    benefits: ['Reduces stress & anxiety', 'Supports better sleep', 'Boosts mental clarity', 'Balances cortisol levels'],
    ingredients: 'KSM-66 Ashwagandha root extract, Rhodiola Rosea, L-Theanine, organic black pepper extract.',
    servingSize: '1-2 capsules daily',
    sizes: ['60 capsules', '120 capsules']
  },
  {
    id: 'p005',
    name: 'Plant-Based Protein — Chocolate',
    category: 'fitness',
    categoryLabel: 'Fitness',
    price: 169.00,
    oldPrice: 199.00,
    rating: 4.5,
    reviews: 203,
    stock: 38,
    tag: 'VEGAN',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607619662634-3ee52a8c1f10?w=800&auto=format&fit=crop'
    ],
    short: '22g of complete plant protein from pea, brown rice, and pumpkin seed.',
    description: 'A premium vegan protein blend combining pea, brown rice, and pumpkin seed proteins for a complete amino acid profile. 22g of protein per scoop with rich, indulgent chocolate flavour from real cacao. No artificial sweeteners, no gums, no fillers.',
    benefits: ['22g complete plant protein', 'Easy on digestion', 'No bloating or gas', 'Real cacao chocolate flavour'],
    ingredients: 'Organic pea protein, organic brown rice protein, pumpkin seed protein, organic cacao, natural chocolate flavour, organic stevia, sea salt.',
    servingSize: '1 scoop (32g) anytime',
    sizes: ['900g', '2 kg']
  },
  {
    id: 'p006',
    name: 'Immunity Boost Vitamin C 1000mg',
    category: 'immunity',
    categoryLabel: 'Immunity',
    price: 49.00,
    oldPrice: null,
    rating: 4.8,
    reviews: 521,
    stock: 187,
    tag: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&auto=format&fit=crop'
    ],
    short: 'High-potency Vitamin C with bioflavonoids and rose hips for maximum absorption.',
    description: 'Pharmaceutical-grade Vitamin C 1000mg paired with citrus bioflavonoids and rose hips to enhance absorption and antioxidant activity. Time-released formula provides sustained immune support throughout the day. Non-acidic and gentle on the stomach.',
    benefits: ['Supports immune system', 'Powerful antioxidant', 'Time-released formula', 'Non-acidic, stomach-friendly'],
    ingredients: 'Vitamin C (ascorbic acid), citrus bioflavonoids, rose hips, acerola cherry, rutin.',
    servingSize: '1 tablet daily',
    sizes: ['60 tablets', '120 tablets', '240 tablets']
  },
  {
    id: 'p007',
    name: 'Premium Collagen Peptides',
    category: 'beauty',
    categoryLabel: 'Beauty',
    price: 155.00,
    oldPrice: 179.00,
    rating: 4.9,
    reviews: 334,
    stock: 71,
    tag: 'POPULAR',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547398026-da27d8d2bf7c?w=800&auto=format&fit=crop'
    ],
    short: 'Type I & III hydrolyzed collagen for radiant skin, healthy hair, and strong joints.',
    description: 'Grass-fed bovine collagen peptides hydrolyzed for optimal absorption. Type I and III collagen support skin elasticity, hair strength, nail health, and joint mobility. Unflavoured and mixes instantly into hot or cold drinks. 20g of collagen per serving.',
    benefits: ['Radiant, youthful skin', 'Stronger hair & nails', 'Supports joint health', 'Tasteless, mixes instantly'],
    ingredients: 'Hydrolyzed bovine collagen peptides (grass-fed, pasture-raised, Type I & III).',
    servingSize: '1 scoop (20g) daily',
    sizes: ['300g', '500g', '1 kg']
  },
  {
    id: 'p008',
    name: 'Probiotic 50 Billion CFU',
    category: 'digestive',
    categoryLabel: 'Digestive',
    price: 119.00,
    oldPrice: null,
    rating: 4.7,
    reviews: 267,
    stock: 63,
    tag: 'NEW',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop'
    ],
    short: '15 clinically-studied strains, 50 billion CFU, delayed-release capsule technology.',
    description: 'Advanced probiotic formula featuring 15 clinically studied probiotic strains delivering 50 billion CFU per capsule. Our delayed-release acid-resistant capsules ensure live bacteria reach your gut intact. Shelf-stable — no refrigeration required.',
    benefits: ['Improves digestive health', 'Strengthens immunity', 'Reduces bloating', 'Shelf-stable, travel-friendly'],
    ingredients: 'Probiotic blend (L. acidophilus, B. lactis, L. plantarum, L. rhamnosus, B. longum, and 10 more strains), prebiotic FOS, vegetable cellulose capsule.',
    servingSize: '1 capsule daily',
    sizes: ['30 capsules', '60 capsules']
  },
  {
    id: 'p009',
    name: 'Magnesium Glycinate Sleep Support',
    category: 'vitamins',
    categoryLabel: 'Vitamins',
    price: 65.00,
    oldPrice: null,
    rating: 4.8,
    reviews: 198,
    stock: 145,
    tag: null,
    image: 'https://images.unsplash.com/photo-1626202378238-e85c5d8e9d68?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1626202378238-e85c5d8e9d68?w=800&auto=format&fit=crop'
    ],
    short: 'Highly absorbable magnesium glycinate. Promotes relaxation, sleep, and muscle recovery.',
    description: 'Chelated magnesium glycinate — the most bioavailable form — for optimal absorption without digestive upset. Supports over 300 enzymatic reactions in the body, including muscle function, nerve transmission, and sleep regulation.',
    benefits: ['Better sleep quality', 'Muscle relaxation', 'Reduces stress', 'No digestive upset'],
    ingredients: 'Magnesium glycinate, vegetable cellulose capsule.',
    servingSize: '2 capsules before bed',
    sizes: ['60 capsules', '120 capsules']
  },
  {
    id: 'p010',
    name: 'Turmeric Curcumin with BioPerine',
    category: 'herbal',
    categoryLabel: 'Herbal',
    price: 85.00,
    oldPrice: 109.00,
    rating: 4.7,
    reviews: 412,
    stock: 96,
    tag: 'SALE',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop'
    ],
    short: '1500mg turmeric with black pepper extract for 2000% better absorption.',
    description: 'Premium turmeric curcumin extract standardized to 95% curcuminoids and paired with BioPerine (black pepper extract) for dramatically enhanced absorption. Natural anti-inflammatory support for joint health, mobility, and overall wellness.',
    benefits: ['Powerful anti-inflammatory', 'Supports joint health', 'Antioxidant protection', 'Enhanced absorption'],
    ingredients: 'Turmeric root extract (95% curcuminoids), BioPerine (black pepper extract), vegetable cellulose capsule.',
    servingSize: '1-2 capsules daily',
    sizes: ['60 capsules', '120 capsules']
  },
  {
    id: 'p011',
    name: 'BCAA 2:1:1 Recovery — Tropical',
    category: 'fitness',
    categoryLabel: 'Fitness',
    price: 109.00,
    oldPrice: null,
    rating: 4.6,
    reviews: 178,
    stock: 47,
    tag: null,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&auto=format&fit=crop'
    ],
    short: '7g of branched-chain amino acids per serving. Fuel your workout and speed up recovery.',
    description: 'Premium BCAA formula with the optimal 2:1:1 ratio of leucine, isoleucine, and valine. 7g of BCAAs per serving plus added electrolytes for hydration. Refreshing tropical flavour with no artificial colours or sweeteners.',
    benefits: ['Reduces muscle soreness', 'Improves recovery time', 'Sustains workout energy', 'Added electrolytes'],
    ingredients: 'L-Leucine, L-Isoleucine, L-Valine, electrolyte blend (sodium, potassium, magnesium), natural tropical flavour, stevia.',
    servingSize: '1 scoop during/after workout',
    sizes: ['300g', '600g']
  },
  {
    id: 'p012',
    name: 'Elderberry Immunity Syrup',
    category: 'immunity',
    categoryLabel: 'Immunity',
    price: 55.00,
    oldPrice: null,
    rating: 4.9,
    reviews: 289,
    stock: 112,
    tag: 'POPULAR',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&auto=format&fit=crop'
    ],
    short: 'Organic black elderberry syrup with raw honey. Family favorite for cold & flu season.',
    description: 'Made from 100% organic European black elderberries — known for their immune-supporting properties. Combined with raw honey, ginger, and cinnamon for a delicious natural remedy the whole family will love. Great for daily wellness or during cold and flu season.',
    benefits: ['Immune system support', 'Antioxidant-rich', 'Family-friendly', 'Organic & non-GMO'],
    ingredients: 'Organic black elderberry, raw wildflower honey, organic ginger, organic cinnamon, organic clove, filtered water.',
    servingSize: '1 tsp daily, 1 tbsp when needed',
    sizes: ['240ml', '480ml']
  }
];

const CATEGORIES = [
  { id: 'vitamins', label: 'Vitamins', icon: '🍊', desc: 'Daily essentials' },
  { id: 'fitness', label: 'Fitness', icon: '💪', desc: 'Performance & recovery' },
  { id: 'herbal', label: 'Herbal', icon: '🌿', desc: 'Traditional remedies' },
  { id: 'immunity', label: 'Immunity', icon: '🛡️', desc: 'Stay protected' },
  { id: 'beauty', label: 'Beauty', icon: '✨', desc: 'Glow from within' },
  { id: 'digestive', label: 'Digestive', icon: '🌱', desc: 'Gut health' }
];

const SAMPLE_TESTIMONIALS = [
  {
    name: 'Aishah Mohd',
    role: 'Kuala Lumpur',
    avatar: 'AM',
    rating: 5,
    text: "I've tried so many supplement brands but VitaShop is hands-down the most transparent. My energy levels have completely transformed in 3 months."
  },
  {
    name: 'Daniel Tan',
    role: 'Petaling Jaya',
    avatar: 'DT',
    rating: 5,
    text: "The protein powder is incredible — clean ingredients, no bloating, and the chocolate flavor is on point. Plus, delivery is always fast across KL."
  },
  {
    name: 'Priya Suresh',
    role: 'Subang Jaya',
    avatar: 'PS',
    rating: 5,
    text: "Love the monthly wellness box. It's like a curated gift to myself every month, and the savings are amazing. Customer service is genuinely caring."
  }
];

const SAMPLE_ARTICLES = [
  {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',
    category: 'Nutrition',
    date: 'May 18, 2026',
    title: '5 Signs Your Body Needs More Magnesium',
    excerpt: 'Magnesium is involved in over 300 reactions in your body. Here are the most common signs of deficiency...'
  },
  {
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    category: 'Fitness',
    date: 'May 12, 2026',
    title: 'The Truth About Plant-Based Protein',
    excerpt: 'Can vegan protein really match whey for muscle building? The science says yes — if you know what to look for.'
  },
  {
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop',
    category: 'Wellness',
    date: 'May 5, 2026',
    title: 'How Adaptogens Help You Beat Stress',
    excerpt: 'Ashwagandha, rhodiola, and other adaptogens have been used for thousands of years. Here\'s the modern science.'
  }
];

// Sample initial orders for admin demo
const SAMPLE_ORDERS = [
  {
    id: 'VS-20260518-001',
    date: '2026-05-18',
    customer: 'Aishah Mohd',
    email: 'aishah@example.my',
    items: [{ name: 'Whole-Food Multivitamin', qty: 1, price: 129.00 }, { name: 'Omega-3 Fish Oil', qty: 2, price: 95.00 }],
    total: 319.00,
    status: 'delivered',
    payment: 'FPX (Maybank)',
    address: 'Mont Kiara, Kuala Lumpur 50480'
  },
  {
    id: 'VS-20260517-002',
    date: '2026-05-17',
    customer: 'Daniel Tan',
    email: 'daniel.t@example.my',
    items: [{ name: 'Whey Protein Isolate', qty: 1, price: 189.00 }],
    total: 189.00,
    status: 'shipped',
    payment: 'GrabPay',
    address: 'Bandar Utama, Petaling Jaya 47800'
  },
  {
    id: 'VS-20260516-003',
    date: '2026-05-16',
    customer: 'Priya Suresh',
    email: 'priya.s@example.my',
    items: [{ name: 'Collagen Peptides', qty: 1, price: 155.00 }, { name: 'Vitamin C 1000mg', qty: 2, price: 49.00 }],
    total: 253.00,
    status: 'processing',
    payment: 'Touch n Go eWallet',
    address: 'USJ Subang Jaya 47600'
  },
  {
    id: 'VS-20260515-004',
    date: '2026-05-15',
    customer: 'Faiz Rahman',
    email: 'faizr@example.my',
    items: [{ name: 'Ashwagandha Complex', qty: 1, price: 75.00 }],
    total: 75.00,
    status: 'delivered',
    payment: 'FPX (CIMB)',
    address: 'Cyberjaya, Selangor 63000'
  },
  {
    id: 'VS-20260514-005',
    date: '2026-05-14',
    customer: 'Sara Lim',
    email: 'sara.lim@example.my',
    items: [{ name: 'Plant Protein Chocolate', qty: 1, price: 169.00 }, { name: 'BCAA Recovery', qty: 1, price: 109.00 }],
    total: 278.00,
    status: 'delivered',
    payment: 'Credit Card (Visa)',
    address: 'Bangsar, Kuala Lumpur 59100'
  },
  {
    id: 'VS-20260513-006',
    date: '2026-05-13',
    customer: 'Hakim Yusof',
    email: 'h.yusof@example.my',
    items: [{ name: 'Probiotic 50B CFU', qty: 1, price: 119.00 }, { name: 'Elderberry Syrup', qty: 1, price: 55.00 }],
    total: 174.00,
    status: 'shipped',
    payment: 'Boost eWallet',
    address: 'Shah Alam, Selangor 40000'
  },
  {
    id: 'VS-20260512-007',
    date: '2026-05-12',
    customer: 'Lim Mei Ling',
    email: 'meiling@example.my',
    items: [{ name: 'Magnesium Glycinate', qty: 2, price: 65.00 }],
    total: 130.00,
    status: 'delivered',
    payment: 'FPX (Public Bank)',
    address: 'Damansara Heights, KL 50490'
  },
  {
    id: 'VS-20260511-008',
    date: '2026-05-11',
    customer: 'Ravi Krishnan',
    email: 'ravi.k@example.my',
    items: [{ name: 'Turmeric Curcumin', qty: 3, price: 85.00 }],
    total: 255.00,
    status: 'processing',
    payment: 'GrabPay',
    address: 'Puchong, Selangor 47100'
  }
];

const SAMPLE_CUSTOMERS = [
  { id: 'u001', name: 'Aishah Mohd', email: 'aishah@example.my', joined: '2025-09-12', orders: 12, spent: 1840.00, status: 'VIP' },
  { id: 'u002', name: 'Daniel Tan', email: 'daniel.t@example.my', joined: '2025-11-04', orders: 7, spent: 1245.00, status: 'Active' },
  { id: 'u003', name: 'Priya Suresh', email: 'priya.s@example.my', joined: '2026-01-22', orders: 5, spent: 678.00, status: 'Active' },
  { id: 'u004', name: 'Faiz Rahman', email: 'faizr@example.my', joined: '2026-02-08', orders: 4, spent: 412.00, status: 'Active' },
  { id: 'u005', name: 'Sara Lim', email: 'sara.lim@example.my', joined: '2026-03-15', orders: 3, spent: 587.00, status: 'Active' },
  { id: 'u006', name: 'Hakim Yusof', email: 'h.yusof@example.my', joined: '2026-04-02', orders: 2, spent: 298.00, status: 'New' },
  { id: 'u007', name: 'Lim Mei Ling', email: 'meiling@example.my', joined: '2026-04-18', orders: 2, spent: 245.00, status: 'New' },
  { id: 'u008', name: 'Ravi Krishnan', email: 'ravi.k@example.my', joined: '2026-05-01', orders: 1, spent: 255.00, status: 'New' }
];
