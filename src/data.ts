import { Product, Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "agro-chemicals",
    name: "Agro Chemicals",
    description: "Premium yield enhancers and crop protection solutions formulated to global agricultural standards.",
    icon: "Sprout",
    bannerImage: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1200&h=400"
  },
  {
    id: "food-additives",
    name: "Food Additive Products",
    description: "Certified food-grade ingredients and preservatives for visual, texturizing, and stabilization applications.",
    icon: "ChefHat",
    bannerImage: "https://images.unsplash.com/photo-1610970881699-44a5587caa9a?auto=format&fit=crop&q=80&w=1200&h=400"
  },
  {
    id: "industrial-grade",
    name: "Industrial Grade",
    description: "High-purity chemical compounds for polymer processing, engineering, coating, and industrial manufacture.",
    icon: "Factory",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200&h=400"
  },
  {
    id: "home-utensils",
    name: "Home Utensils",
    description: "Smart, ergonomic kitchen tools, organizers, and premium cleaning aids built for durability and modern style.",
    icon: "Home",
    bannerImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200&h=400"
  },
  {
    id: "vitamin-pharma",
    name: "Vitamin & Pharma Products",
    description: "Highly pure nutritional active ingredients and pharmaceutical raw materials adhering strictly to pharmaceutical standards.",
    icon: "Pill",
    bannerImage: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=1200&h=400"
  },
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    description: "Farm-fresh premium grade bulk organic produce, harvested post-order and shipped via expedited cold supply routes.",
    icon: "Grape",
    bannerImage: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=1200&h=400"
  }
];

export const PRODUCTS: Product[] = [
  // Agro Chemicals
  {
    id: "agro-1",
    name: "Chlorpyrifos",
    originalName: "Chloropiryphos",
    category: "agro-chemicals",
    description: "A premium organophosphate insecticide, acaricide, and miticide widely deployed in broad-spectrum agronomy defense.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "98% TC, 48% EC, 40% EC, 20% EC",
    packing: "200L Drum, 1L Bottle"
  },
  {
    id: "agro-2",
    name: "Emamectin Benzoate",
    category: "agro-chemicals",
    description: "Highly efficient macrocyclic insecticide targeting damaging lepidocron pests on fruits, vegetables, and field crops.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "95% TC, 5% WDG, 1.9% EC",
    packing: "25kg Paper Bag, 1kg Foil Bag"
  },
  {
    id: "agro-3",
    name: "Profenofos",
    originalName: "profenophos",
    category: "agro-chemicals",
    description: "Organophosphorus compound boasting non-systemic acaricidal efficacy against spider mites and aphid species.",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "94% TC, 50% EC",
    packing: "200L Drum, 1L Bottle"
  },
  {
    id: "agro-4",
    name: "Thiamethoxam 30%",
    originalName: "Thiomithoxam 30 %",
    category: "agro-chemicals",
    description: "Systemic seed-treatment and soil insecticide delivering comprehensive early resistance from sap-feeding pests.",
    image: "https://images.unsplash.com/photo-1655130944329-b3a63166f6b5?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "30% FS, 25% WDG, 50% WDG",
    packing: "200L Drum, 1L Plastic Bottle"
  },
  {
    id: "agro-5",
    name: "Lambda-Cyhalothrin",
    originalName: "lamda cyhaltrin",
    category: "agro-chemicals",
    description: "Synthetic pyrethroid insecticide designed for rapid knock-down activity with potent residual protective characteristics.",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "95% TC, 5% EC, 10% WP",
    packing: "25kg Fibre Drum, 1L Co-extruded bottle"
  },
  {
    id: "agro-6",
    name: "Chlorantraniliprole",
    originalName: "Cloantrinoprol",
    category: "agro-chemicals",
    description: "A ryanodine receptor modulator compound delivering world-class insect management with exceptional environmental safety profile.",
    image: "https://images.unsplash.com/photo-1593999094742-4f5280054b23?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "98% TC, 200g/L SC, 5% GR",
    packing: "25kg Drum, 500ml Bottle"
  },
  {
    id: "agro-7",
    name: "Gibberellic Acid",
    category: "agro-chemicals",
    description: "Natural cell-division promoter hormone geared towards stimulating root system vitality and accelerated agricultural budding.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "90% TC, 20% Soluble Tablet",
    packing: "1kg Aluminum Foil Bag, 10g Tablet"
  },
  {
    id: "agro-8",
    name: "Abamectin",
    category: "agro-chemicals",
    description: "Naturally occurring broad-spectrum pest control agent targeting mites, miners, and crop parasites in high-value horticulture.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "95% TC, 1.8% EC, 3.6% EC",
    packing: "200L Iron Drum, 1L PET Bottle"
  },
  {
    id: "agro-9",
    name: "Potassium Humate",
    category: "agro-chemicals",
    description: "High-grade organic potassium-rich humic substance for active plant nutrient absorption support and structural soil rejuvenation.",
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Humic Acid >= 60%, K2O >= 8%",
    packing: "25kg Kraft Paper Bag"
  },
  {
    id: "agro-10",
    name: "Humic Acid Flakes",
    category: "agro-chemicals",
    description: "Advanced humic bio-stimulant flakes providing vital natural carbon and nitrogen nourishment mechanisms to dry farming soils.",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Humic Acid >= 70%, Fulvic Acid >= 15%",
    packing: "25kg Woven Bag"
  },

  // Food Additive Products
  {
    id: "food-1",
    name: "Citric Acid",
    category: "food-additives",
    description: "Pure chemical natural flavor-preservative agent imparting a premium acidic structural tartness to beverages and sweet foods.",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Anhydrous, Monohydrate (BP/USP)",
    packing: "25kg Multi-layer Paper Sacks"
  },
  {
    id: "food-2",
    name: "Maltose",
    category: "food-additives",
    description: "High-purity malt-derived compound enhancing food chewability, texture stability, and providing premium structural sweetness.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Crystalline Melt Food Grade, 95% Min",
    packing: "25kg Compound Bag, Liquid Drums"
  },
  {
    id: "food-3",
    name: "Methionine",
    originalName: "methionine",
    category: "food-additives",
    description: "An essential amino acid component engineered to enrich animal nutritive health, feeds, and human nutritional formulations.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "DL-Methionine 99% Feed/Food Grade",
    packing: "25kg bags with PE inner liner"
  },
  {
    id: "food-4",
    name: "Threonine",
    originalName: "threonine",
    category: "food-additives",
    description: "Finely crystallized essential building blocks amino acid utilized for biological cellular tissue reconstruction and diet optimization.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "L-Threonine 98.5% USP/FCC USP",
    packing: "25kg woven sacks"
  },
  {
    id: "food-5",
    name: "Creatine Monohydrate",
    category: "food-additives",
    description: "Highly pure nutritional active ingredient widely integrated in sports supplements for muscular cellular energy regeneration.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "200 Mesh, 80 Mesh Premium Crystals",
    packing: "25kg Fiber Drums, Custom Bulk Bags"
  },
  {
    id: "food-6",
    name: "Lactic Acid",
    category: "food-additives",
    description: "High-grade physiological acidity regulator widely used in bakery, brewing, and confectionery preservation processes.",
    image: "https://images.unsplash.com/photo-1693996045463-6ea86d10a2e7?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "80% Flavouring Liquid, 88% Pure Grade",
    packing: "25kg drum, 250kg IBC Tank"
  },
  {
    id: "food-7",
    name: "Tartaric Acid",
    category: "food-additives",
    description: "Natural organic antioxidant acid sourced from grapes. Imparts delightful sharp tart notes to fine beverages.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "L(+)-Tartaric Acid BP/USP",
    packing: "25kg Kraft Outer Paper Bags"
  },
  {
    id: "food-8",
    name: "Folic Acid",
    category: "food-additives",
    description: "High-potency B-complex active crystalline compound critical for baby food nourishment products and clinical medicine.",
    image: "https://images.unsplash.com/photo-1565071783280-719b01b29912?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "97.0% - 102.0% USP Medicine standards",
    packing: "10kg Drum, 25kg Fibre Tub"
  },

  // Industrial Grade
  {
    id: "ind-1",
    name: "Sodium Polyacrylate",
    category: "industrial-grade",
    description: "Extremely high water absorbency active polymer compound used in industrial water filtration, diapers, and thickeners.",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Industrial Thickening Agent and Absorbent",
    packing: "25kg Triple Layer bags"
  },
  {
    id: "ind-2",
    name: "Potassium Polyacrylate",
    category: "industrial-grade",
    description: "Agriculture-optimized water polymer crystals acting as reliable, non-toxic underground irrigation reservoirs.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Superabsorbent Hydrogel Polymer Crystals",
    packing: "25kg Craft Sacks, 1000kg Bulk Tote"
  },
  {
    id: "ind-3",
    name: "HPMC",
    category: "industrial-grade",
    description: "Hydroxypropyl Methylcellulose compound serving as critical rheology modifier and moisture retention agent in mortar compounds.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Industrial Thickener / Construction Grade",
    packing: "25kg Polywoven Outer bags"
  },
  {
    id: "ind-4",
    name: "Melamine",
    category: "industrial-grade",
    description: "Premium global grade thermosetting resin compound ideal for high-pressure laminates, plastics, and safety coatings.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "99.8% High Solid Grade Powder",
    packing: "25kg Polypropylene bag, 500kg Jumbo"
  },

  // Home Utensils
  {
    id: "home-1",
    name: "Cleaning Duster",
    category: "home-utensils",
    description: "Static-attracting deep dusting wand featuring flexible high-reach structural microfibers for pristine domestic hygiene.",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Extendable Microfiber Static Head",
    packing: "Individual Poly sleeve, 50pcs Ctn"
  },
  {
    id: "home-2",
    name: "Kitchen Wall Decorative Sheet",
    category: "home-utensils",
    description: "Self-adhesive, oil-proof, and fire-resistant textured film sheet made to shield and beautify your backsplash area.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Heat-Resistant PVC Aluminum Foil Surface",
    packing: "Pre-cut rolls in individual cylindrical boxes"
  },
  {
    id: "home-3",
    name: "Hardware Tool Set",
    category: "home-utensils",
    description: "Comprehensive home repair steel components set, housed in an ultra-tough ergonomic carry storage container.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Chrome Vanadium Coated 32-Piece Set",
    packing: "Premium Blow-mold Plastic Toolbox Case"
  },
  {
    id: "home-4",
    name: "Dish Washing Scrubber",
    category: "home-utensils",
    description: "Anti-grease modern dual-layered foam and physical scouring fibers that rinse spotless and avoid stale kitchen odors.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Odor-Free Heavy-Duty Scrub Pack",
    packing: "6-Piece Retail Blister Pack"
  },
  {
    id: "home-5",
    name: "Kitchen Knife Set",
    category: "home-utensils",
    description: "Precision-ground high-carbon Japanese steel cutlery featuring custom contoured chef handles for ultimate slicing control.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "5-Piece Food-Grade Laser-Sharp Set",
    packing: "Gift Box Packaging with protective sleeves"
  },
  {
    id: "home-6",
    name: "Kitchen Mat",
    category: "home-utensils",
    description: "Anti-fatigue high-density memory cushion mat providing superb posture support while handling food chores.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Waterproof Oil-Resistant Non-Slip Back",
    packing: "Rolled flat protective packing"
  },
  {
    id: "home-7",
    name: "Decorative Glitter Sheet",
    category: "home-utensils",
    description: "Premium shimmering vinyl foil designed for art, crafts, home wall panels, panel styling, and customized decors.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Low-shed Glitter, Adhesive-backed Vinyl",
    packing: "10-sheet bundle packs"
  },
  {
    id: "home-8",
    name: "Vacuum Storage Bag",
    category: "home-utensils",
    description: "Airtight vacuum compression bags reducing winter clothes and bed linens space consumption by more than 80%.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "PA+PE High-Strength Leakproof valve",
    packing: "10 Bags multipack with manual pump"
  },
  {
    id: "home-9",
    name: "Silicon Fruit Basket",
    category: "home-utensils",
    description: "Collapsible modern food-grade silicon fruit and vegetable storage basket with immediate drainage capabilities.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "BPA-Free Flexible Silicon 2L Capacity",
    packing: "Opp pouch and outer box packing"
  },
  {
    id: "home-10",
    name: "Empty Storage Bag",
    category: "home-utensils",
    description: "Heavy-duty woven clothes and toys storage container, ideal for shipping bulk household items or long-term storage.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "High Capacity 120L Waterproof Oxford Cloth",
    packing: "Standard bundle poly wrap"
  },
  {
    id: "home-11",
    name: "Plastic Sticking Hooks",
    category: "home-utensils",
    description: "Zero-damage wall sticking hooks with high load limits, engineered to attach cleanly to tile, glass, and wood.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Heavy-Duty Acrylic Sticky Adhesive",
    packing: "12 Hooks retail hanging card"
  },

  // Vitamin and Pharma Products
  {
    id: "vit-1",
    name: "Vitamin A",
    category: "vitamin-pharma",
    description: "Pure retinol/retinyl acetate chemical preparation critical for optic health and dietary nourishment fortification.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Acetate/Palmitate 1.0M IU/g EP/USP",
    packing: "25kg nitrogen-filled aluminum tin"
  },
  {
    id: "vit-2",
    name: "Vitamin D3",
    category: "vitamin-pharma",
    description: "High potency Cholecalciferol compound synthesized for calcium assimilation support in human/animal healthcare pharmaceuticals.",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Crystalline 40M IU/g, Food Beadlets 100k",
    packing: "25kg metal drum container"
  },
  {
    id: "vit-3",
    name: "Vitamin D2",
    category: "vitamin-pharma",
    description: "Plant-derived Ergocalciferol active crystalline ingredients for medical vegetarian health supplements.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "98% Min Active Crystals EP Grade",
    packing: "10kg Foil pouch with dry ice shipping"
  },
  {
    id: "vit-4",
    name: "Vitamin E",
    category: "vitamin-pharma",
    description: "Pure multi-isomer Tocopheryl acetate active compounds providing unrivaled free-radical protection in pharmaceutical cosmetics.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "98% DL-alpha-Tocopheryl Oil USP",
    packing: "200kg steel blue drums"
  },
  {
    id: "vit-5",
    name: "Vitamin B12",
    category: "vitamin-pharma",
    description: "Pharma-grade cyanocobalamin ingredient support essential for red blood cell synthesis and central nervous systems.",
    image: "https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Pure Cyanocobalamin 99% USP EP",
    packing: "1kg Aluminum Vacuum Bottle"
  },
  {
    id: "vit-6",
    name: "Ascorbic Acid",
    category: "vitamin-pharma",
    description: "Pure high-solubility Vitamin C crystalline powder used as structural antioxidant and dietary health supplement.",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Crystalline Fine Powder 100 Mesh USP",
    packing: "25kg cardboard cartons"
  },
  {
    id: "vit-7",
    name: "Vitamin K",
    category: "vitamin-pharma",
    description: "Essential coagulation active pharmaceutical preparation formulated for cardiovascular support and bone calcification.",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Phytomenadione (K1) 98% Min Active USP",
    packing: "5kg Nitrogen Tin canister"
  },

  // Fruits and Vegetables (New custom section added according to our choice)
  {
    id: "fav-1",
    name: "Fresh Alfonso Mangoes",
    category: "fruits-vegetables",
    description: "World-famous 'King of Mangoes' harvested from organic Konkan soils. Boasts deep saffron pulp with intense natural aroma.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Export Grade Size / Hand-Picked (Weight 250-300g per fruit)",
    packing: "Ventilated 12-Piece Corrugated Cargo Carton"
  },
  {
    id: "fav-2",
    name: "Organic Red Onions",
    category: "fruits-vegetables",
    description: "High-solidity dry red onions harvested from Nasik's finest farms. High shelf-life and excellent sweet-pungent taste.",
    image: "https://images.unsplash.com/photo-1593629718894-e9a8f9f65d01?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Medium-Large Grade 45mm to 60mm diameter",
    packing: "25kg / 50kg Red Mesh Bags"
  },
  {
    id: "fav-3",
    name: "Premium Cavendish Bananas",
    category: "fruits-vegetables",
    description: "Export quality green bananas ripening naturally, displaying perfect texture and zero visual blemishes.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Calibration Range: 36mm to 48mm, Min Length 20cm",
    packing: "13.5kg Net Weight Vacuum-Packed boxes"
  },
  {
    id: "fav-4",
    name: "Green Bird's Eye Chilis",
    category: "fruits-vegetables",
    description: "Pungent select fresh raw green chilis packed with vitamin C and intense, authentic spiciness.",
    image: "https://images.unsplash.com/photo-1599987141071-f5810d32e21a?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Pungency 50k-80k SHU, fresh green stems on",
    packing: "5kg Breathable Poly Bags in cartons"
  },
  {
    id: "fav-5",
    name: "Farm Fresh Tomatoes",
    category: "fruits-vegetables",
    description: "Thick-skinned organic hybrid tomatoes built to withstand shipping with ultimate nutrient retention.",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Firm maturity, deep red color, size 55-65mm",
    packing: "10kg Nesting Plastic crates"
  },
  {
    id: "fav-6",
    name: "Golden Potatoes",
    category: "fruits-vegetables",
    description: "Superior quality dry soil potatoes with thin golden skin, low sugar, and beautiful cooking consistency.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "A-Grade sorting 50g-150g uniform clean tubers",
    packing: "50kg Jute Hessian Sacks"
  },
  {
    id: "fav-7",
    name: "Premium Ginger Root",
    category: "fruits-vegetables",
    description: "High-essential-oil aromatic ginger rhizomes, thoroughly washed, dry-cured, and prepared for overseas sea shipping.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "Big fat fingers, clean skin, length >= 10cm",
    packing: "10kg / 20kg Mesh Bags or Plastic boxes"
  },
  {
    id: "fav-8",
    name: "Crunchy Red Gala Apples",
    category: "fruits-vegetables",
    description: "Fabulously crisp, sweet, and juicy red blushed apples with gorgeous marbling sourced directly from mountain orchards.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600&h=600",
    specification: "TSS 12% Min, solid shape, flawless thin skin",
    packing: "18kg Foam Sleeved Tray cartoning"
  }
];
