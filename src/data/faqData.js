export const faqCategories = [
  {
    id: 'pricing',
    title: 'Pricing & Orders',
    icon: 'DollarSign',
    questions: [
      {
        id: 'how-to-get-quote',
        question: 'How do I get a quote for my printing project?',
        answer: 'You can get a quote in three ways: (1) Use our WhatsApp chat for instant estimates, (2) Fill out the contact form with your project details, or (3) Visit our Nairobi location for in-person consultation. For accurate pricing, please include: project type, quantity, dimensions, material preferences, and your deadline. Most quotes are delivered within 2-4 hours during business hours.'
      },
      {
        id: 'minimum-order',
        question: 'What is your minimum order quantity?',
        answer: 'Minimum orders vary by service: Digital printing (1 piece), Large format banners (1 piece), T-shirt printing (10 pieces), CNC/Laser cutting (1 piece), UV printing (1 piece), Corporate merchandise (50 pieces for custom items). For political campaigns and bulk corporate orders, we offer special pricing tiers starting at 500+ units.'
      },
      {
        id: 'bulk-discounts',
        question: 'Do you offer bulk discounts?',
        answer: 'Yes! Our corporate pricing tiers offer significant savings: Bronze (5% off for KES 50K-150K monthly), Silver (10% off for KES 150K-500K), Gold (15% off for KES 500K-2M), Platinum (custom pricing for KES 2M+). Political campaigns and election materials have specialized bulk pricing—contact our corporate team for campaign package rates.'
      },
      {
        id: 'payment-terms',
        question: 'What are your payment terms?',
        answer: 'Standard orders: 50% deposit to start, 50% before delivery. Small orders (under KES 10K): Full payment upfront. Corporate accounts: Net 30/45/60 days based on credit approval. Accepted methods: M-Pesa, bank transfer, corporate cheque (5-day clearance), cash (in-person). Political campaigns require 100% upfront payment for orders under KES 500K.'
      },
      {
        id: 'quote-validity',
        question: 'How long is my quote valid?',
        answer: 'Quotes are valid for 30 days from issue date. For large projects exceeding KES 500,000, we offer 60-day quote locks with a commitment deposit. Material prices may fluctuate, so we recommend confirming your order within the quote validity period to secure pricing.'
      }
    ]
  },
  {
    id: 'turnaround',
    title: 'Turnaround & Delivery',
    icon: 'Clock',
    questions: [
      {
        id: 'standard-turnaround',
        question: 'How long does printing take?',
        answer: 'Standard turnaround times: Small format digital (Same day-2 days), Large format printing (2-3 days), UV flatbed printing (3-5 days), CNC cutting (3-7 days), Laser cutting (3-5 days), T-shirt printing/embroidery (2-5 days), Political campaign materials (7-14 days for large volumes). Rush service available with 25-100% surcharge depending on timeline.'
      },
      {
        id: 'same-day-service',
        question: 'Do you offer same-day printing?',
        answer: 'Yes, for select services: Digital printing (business cards, flyers, small posters), Banner printing (standard sizes), T-shirt printing (heat press, limited quantities). Same-day orders must be confirmed by 10 AM and carry a 50% rush fee. Availability depends on current production queue—always call first to confirm.'
      },
      {
        id: 'delivery-options',
        question: 'Can you deliver outside Nairobi?',
        answer: 'Absolutely! We deliver nationwide via trusted courier partners. Nairobi area: Same-day or next-day available. Major towns (Mombasa, Kisumu, Nakuru, Eldoret): 1-2 days. Other counties: 2-4 days. For political campaigns, we offer staged distribution to multiple constituencies with dedicated logistics coordination.'
      },
      {
        id: 'business-hours',
        question: 'What are your business hours?',
        answer: 'Standard hours: Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 2:00 PM. Closed Sundays and public holidays. Corporate clients and campaign accounts have access to extended hours and emergency production support. During election periods, we operate extended hours—contact your account manager for availability.'
      },
      {
        id: 'pickup-location',
        question: 'Where are you located for pickup?',
        answer: 'Our production facility is at Kweria Road, Nairobi. Free parking available for client pickups. For large orders, we recommend scheduling pickup to ensure your materials are ready and properly packaged. We also offer curbside pickup—call when you arrive and we bring your order to your vehicle.'
      }
    ]
  },
  {
    id: 'files',
    title: 'File Preparation',
    icon: 'FileText',
    questions: [
      {
        id: 'accepted-formats',
        question: 'What file formats do you accept?',
        answer: 'Preferred formats: PDF (print-ready), AI/EPS (Adobe Illustrator), PSD (Photoshop), high-resolution PNG/JPEG (300 DPI minimum). For large format: PDF, TIFF, or vector files. For CNC/Laser: DXF, SVG, or AI vector files. We can convert basic files for a design fee, but print-ready files ensure best quality and faster turnaround.'
      },
      {
        id: 'image-resolution',
        question: 'What resolution should my images be?',
        answer: 'Minimum 300 DPI (dots per inch) at actual print size for sharp results. For large format banners viewed from distance: 150 DPI minimum acceptable. Web images (72 DPI) will appear pixelated when printed—please provide high-resolution source files. When in doubt, send the largest file you have; we can assess print quality before production.'
      },
      {
        id: 'design-services',
        question: 'Do you offer design services?',
        answer: 'Yes! Our in-house design team can create or refine your artwork. Services include: Logo design and refinement, layout and typesetting, photo retouching and enhancement, vector conversion, print-ready file preparation. Design fees: KES 2,000-15,000 depending on complexity. Free basic file checking and minor adjustments for orders over KES 20,000.'
      },
      {
        id: 'fix-files',
        question: 'Can you fix my file if it\'s not print-ready?',
        answer: 'We offer three levels of file support: (1) Free: Basic checks and minor adjustments for qualifying orders, (2) Standard fix (KES 500-2,000): Format conversion, resolution adjustment, color correction, (3) Full redesign (KES 2,000+): Complete recreation or design from scratch. We always notify you of any file issues before production and provide recommendations.'
      },
      {
        id: 'color-matching',
        question: 'Will my prints match my screen colors?',
        answer: 'Screens (RGB) and prints (CMYK) use different color systems, so exact matching is challenging. For critical color accuracy: Provide Pantone color codes, request a physical color proof (additional cost), or visit our location to view printed samples. We use calibrated monitors and color management systems to achieve the closest possible match.'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Capabilities',
    icon: 'Settings',
    questions: [
      {
        id: 'uv-vs-screen',
        question: 'What\'s the difference between UV and screen printing?',
        answer: 'UV printing: Direct-to-substrate digital printing, full color, photo-quality, great for rigid materials (acrylic, metal, wood), no setup costs, ideal for short runs. Screen printing: Traditional method, best for textiles (t-shirts), very durable, cost-effective for large quantities (100+), limited colors per design. We offer both—tell us your project and we\'ll recommend the best method.'
      },
      {
        id: 'materials-list',
        question: 'What materials can you print on?',
        answer: 'Large format: Vinyl, canvas, mesh, backlit film, paper, fabric. UV printing: Acrylic, aluminum, wood, glass, ceramic, PVC foam board, corrugated plastic. CNC cutting: Acrylic, wood, MDF, aluminum, PVC. Laser: Acrylic, wood, leather, fabric, paper, some metals. T-shirts: Cotton, polyester, blends, performance fabrics. Ask about specialty materials—we source custom substrates for unique projects.'
      },
      {
        id: 'political-materials',
        question: 'Do you handle political campaign materials?',
        answer: 'Yes, election printing is a specialty! We produce: Posters (all sizes), banners and billboards, branded merchandise (t-shirts, caps, umbrellas), vehicle wraps, rally signage, ballot materials, campaign stationery. We understand IEBC regulations and tight campaign timelines. Dedicated account managers for major campaigns. Confidentiality guaranteed—we never share campaign strategies between clients.'
      },
      {
        id: 'max-print-size',
        question: 'What\'s your largest print size?',
        answer: 'Large format printing: Up to 5 meters wide, virtually unlimited length (seamless for banners). UV flatbed: 2.5m × 1.3m single piece, larger via tiling. CNC cutting: 3m × 2m sheet size. For oversized projects, we use paneling techniques with invisible seams. We\'ve produced building wraps and massive event backdrops—no project too large!'
      },
      {
        id: 'outdoor-durability',
        question: 'How long do outdoor banners last?',
        answer: 'Standard vinyl banners: 1-2 years with proper installation. Premium vinyl with UV coating: 3-5 years. Mesh banners (wind-permeable): 2-3 years. Factors affecting lifespan: Sun exposure, wind conditions, installation quality, cleaning frequency. We offer material recommendations based on your specific outdoor conditions and duration needs.'
      }
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Accounts',
    icon: 'Building2',
    questions: [
      {
        id: 'credit-terms',
        question: 'Do you offer credit terms for businesses?',
        answer: 'Yes! Approved corporate accounts enjoy: Net 30 payment terms (Bronze/Silver tier), Net 45 (Gold tier), Net 60 (Platinum tier). Credit limits based on monthly volume and payment history. To apply: Submit corporate account application, provide 2 trade references, 6 months bank statements, and sign credit agreement. Processing takes 3-5 business days.'
      },
      {
        id: 'brand-assets',
        question: 'Can you store our brand assets for future orders?',
        answer: 'Absolutely! Our Brand Asset Management system securely stores: Logo files (all formats), brand guidelines, approved color profiles, pantone references, template designs, historical print files. Benefits: Faster reordering, guaranteed brand consistency, version control, team access for authorized employees. Free for all corporate account holders.'
      },
      {
        id: 'nda-policy',
        question: 'Will you sign an NDA for sensitive projects?',
        answer: 'Yes, we regularly sign Non-Disclosure Agreements for: Political campaigns (strategy confidentiality), corporate rebrands (embargoed until launch), product launches (pre-announcement materials), proprietary designs. Our standard NDA covers: No disclosure to third parties, secure file handling, limited staff access, return/destruction of files post-project. Custom NDAs welcome for specific requirements.'
      },
      {
        id: 'account-setup',
        question: 'How do I set up a corporate account?',
        answer: 'Simple 4-step process: (1) Complete online application or visit our office, (2) Submit required documents (business registration, KRA PIN, tax compliance cert), (3) Credit review and reference checks, (4) Account activation and welcome kit. Benefits kick in immediately: preferred pricing, dedicated support, priority scheduling. Apply at [EDIT: add application link] or call our corporate team.'
      },
      {
        id: 'dedicated-manager',
        question: 'Will I have a dedicated account manager?',
        answer: 'All Gold and Platinum tier accounts receive a dedicated account manager. Silver accounts have priority support team access. Your account manager handles: Quote coordination, production scheduling, quality oversight, delivery logistics, issue resolution, quarterly business reviews. They become an extension of your team, understanding your brand and preferences for seamless service.'
      }
    ]
  },
  // NEW CATEGORIES START HERE
  {
    id: 'political',
    title: 'Political Campaigns',
    icon: 'Vote',
    questions: [
      {
        id: 'political-experience',
        question: 'What political campaign materials do you specialize in?',
        answer: 'We are Kenya\'s leading political campaign printing specialists. Our expertise includes: Election posters (A0, A1, A2 sizes), campaign banners and billboards (vinyl and mesh), branded merchandise (t-shirts, caps, hoodies, umbrellas, wristbands), vehicle wraps and car branding, rally and convention signage, ballot papers and voting materials, campaign stationery (letterheads, stickers, flyers), door-to-door campaign materials, and social media graphics. We\'ve serviced presidential, gubernatorial, parliamentary, and MCA campaigns across all 47 counties.'
      },
      {
        id: 'political-timeline',
        question: 'How early should political campaigns start printing?',
        answer: 'We recommend starting 3-6 months before election date for optimal planning. Early bird advantages include: Better pricing (avoid election season rush rates), priority production slots, time for design refinements, staged delivery to constituencies, and buffer time for IEBC compliance reviews. For by-elections or snap elections, we offer emergency 48-72 hour turnaround for essential materials. Contact us immediately when election dates are announced—we book up fast during campaign season.'
      },
      {
        id: 'political-iebc',
        question: 'Do you understand IEBC regulations for campaign materials?',
        answer: 'Absolutely. We stay updated on Independent Electoral and Boundaries Commission (IEBC) guidelines including: Specified poster sizes for different zones, required candidate information placement, color coding for political parties, prohibited content restrictions, and campaign period deadlines. Our design team reviews all political materials for compliance before printing. We also advise on county-specific by-laws regarding outdoor advertising to avoid penalties or removal of materials.'
      },
      {
        id: 'political-distribution',
        question: 'Can you handle distribution to multiple constituencies?',
        answer: 'Yes! We offer comprehensive campaign logistics: Staged production and delivery to all 47 counties, constituency-specific packaging and labeling, warehouse storage for phased distribution, on-ground coordination with campaign teams, and real-time inventory tracking. Our fleet and courier network ensures materials arrive where needed, when needed. We\'ve managed distribution for nationwide campaigns with 500+ pickup points. Dedicated campaign logistics managers assigned to major campaigns.'
      },
      {
        id: 'political-confidentiality',
        question: 'How do you ensure campaign strategy confidentiality?',
        answer: 'Political campaign confidentiality is our top priority. Our protocols include: Segregated production teams (no cross-campaign knowledge), secure file storage with access logs, non-disclosure agreements for all staff, isolated production schedules for competing campaigns, secure disposal of misprints and prototypes, and discrete delivery vehicles. We never share client information between campaigns, even within the same election cycle. Our reputation is built on absolute discretion—ask about our campaign security protocols.'
      },
      {
        id: 'political-volume',
        question: 'What volume can you handle for major campaigns?',
        answer: 'We scale to any campaign size: Small campaigns (MCA/ward level): 1,000-10,000 units, Medium campaigns (MP/ Women Rep): 50,000-200,000 units, Large campaigns (Governor/Senator): 200,000-1,000,000+ units, Presidential campaigns: Multi-million unit capacity. Our facility runs 24/7 during peak season with backup generators and multiple production lines. We\'ve handled single orders of 100,000+ t-shirts and 500,000+ posters. No campaign too big or too small.'
      },
      {
        id: 'political-design',
        question: 'Do you offer campaign branding and design services?',
        answer: 'Yes! Our political design team creates: Candidate logos and visual identity, campaign manifesto design, social media campaign graphics, vehicle wrap designs, rally stage backdrops, and multimedia campaign kits. We understand the psychology of political messaging—color choices, typography for readability at distance, and impactful imagery. Fast turnaround on design revisions (24-48 hours). We can work with your existing campaign consultants or provide full-service creative direction.'
      },
      {
        id: 'political-payment',
        question: 'What are payment terms for political campaigns?',
        answer: 'Political campaign payment structure: Orders under KES 500,000: 100% upfront via bank transfer or M-Pesa. Orders KES 500K-2M: 60% deposit, 40% before final delivery. Orders over KES 2M: Negotiable terms with campaign finance committee authorization. We accept campaign financing through registered political party accounts. All political clients undergo standard KYC (Know Your Customer) verification per CBK regulations. We provide detailed invoicing for campaign finance reporting requirements.'
      }
    ]
  },
  {
    id: 'exhibition',
    title: 'Exhibition & Event Branding',
    icon: 'Presentation',
    questions: [
      {
        id: 'exhibition-services',
        question: 'What exhibition and trade show services do you offer?',
        answer: 'We provide end-to-end exhibition branding solutions: Custom booth design and fabrication, pop-up displays and banner stands, backlit fabric graphics, flooring and carpet branding, hanging signs and ceiling banners, counter and display units, literature racks and brochure holders, outdoor exhibition tents and marquees, stage backdrops and conference branding, wayfinding and directional signage, and reusable modular systems. From 3×3 meter shell schemes to custom island booths, we handle design, production, installation, and dismantling.'
      },
      {
        id: 'exhibition-timeline',
        question: 'How long does exhibition stand production take?',
        answer: 'Standard timelines: Pop-up displays and banners: 3-5 days, Modular exhibition stands: 7-10 days, Custom fabricated booths: 2-4 weeks, Large-scale custom builds: 4-8 weeks. Rush service available for 50% surcharge. We recommend booking 4-6 weeks before your event for custom work. For recurring exhibitions, we store your stand components for faster turnaround on subsequent events. Always factor in 1-2 days for venue installation.'
      },
      {
        id: 'exhibition-portable',
        question: 'Do you offer portable/reusable exhibition solutions?',
        answer: 'Yes! Our portable exhibition range includes: Magnetic pop-up displays (setup in 10 minutes), Roll-up banner stands (lightweight, carry case), Fabric tension displays (wrinkle-free, washable), Modular panel systems (reconfigure for different spaces), Portable counters and podiums, and Folding literature racks. These are ideal for companies attending multiple events. We offer storage and refurbishment services—between events, we store, clean, and repair your exhibition kit, ready for the next show.'
      },
      {
        id: 'exhibition-installation',
        question: 'Do you provide installation and dismantling services?',
        answer: 'Absolutely. Our exhibition services include: Pre-event site surveys and measurements, venue liaison and compliance checks, professional installation teams, electrical and lighting setup, AV integration coordination, on-site graphics application, real-time troubleshooting, and post-event dismantling and removal. We handle everything from shell scheme dressing to complex custom builds. Installation typically happens 1-2 days before the event. We\'re familiar with major Nairobi venues (KICC, Sarit Centre, Visa Oshwal) and upcountry exhibition centers.'
      },
      {
        id: 'exhibition-materials',
        question: 'What materials do you use for exhibition stands?',
        answer: 'We select materials based on durability, weight, and aesthetics: Structure: Aluminum extrusion systems, timber framing, steel trussing. Graphics: PVC-free fabric, recycled polyester, durable vinyl. Surfaces: Laminated MDF, acrylic, aluminum composite. Flooring: Carpet, vinyl, raised platforms. Sustainable options: Bamboo structures, recyclable fabrics, LED lighting. All materials are fire-rated where venue regulations require. We advise on the best material combination for your budget, reuse requirements, and visual impact goals.'
      },
      {
        id: 'exhibition-lighting',
        question: 'Can you integrate lighting and AV into exhibition stands?',
        answer: 'Yes, we offer integrated exhibition solutions: LED spotlights and strip lighting, backlit fabric graphics, interactive touchscreens and kiosks, monitor mounts and TV integration, audio systems and speakers, and power distribution and cable management. We work with AV partners for complex requirements like LED video walls or projection mapping. All electrical work meets Kenya Power and venue safety standards. We handle the technical coordination so you have a single point of contact.'
      },
      {
        id: 'exhibition-storage',
        question: 'What happens to my exhibition stand after the event?',
        answer: 'Post-event options: Storage and maintenance (monthly fee): We clean, repair, and store your stand for future use, disposal and recycling: Responsible breakdown of non-reusable materials, refurbishment and updates: Refresh graphics and repair wear for next event, and reconfiguration: Adapt existing stand for different booth sizes. For portable systems, we provide wheeled cases for easy transport. We recommend storage for stands used 2+ times per year—it\'s more economical than rebuilding.'
      },
      {
        id: 'exhibition-kenya',
        question: 'Which exhibition venues in Kenya do you work with?',
        answer: 'We regularly install at: Nairobi venues: KICC (Kenyatta International Convention Centre), Sarit Centre Expo Hall, Visa Oshwal Centre, Carnivore Grounds, and Nairobi National Park (for outdoor events). Other towns: Mombasa International Showground, Kisumu ASK Showground, Eldoret Sports Club, Nakuru ASK Showground. We also handle regional events in Tanzania, Uganda, and Rwanda. Our teams know venue regulations, loading dock procedures, and security requirements—ensuring smooth setup at every location.'
      }
    ]
  },
  {
    id: 'corporate-branding',
    title: 'Corporate Branding',
    icon: 'Briefcase',
    questions: [
      {
        id: 'corporate-identity',
        question: 'What corporate branding services do you provide?',
        answer: 'We offer comprehensive corporate identity solutions: Logo design and refinement, brand guideline development, business stationery (cards, letterheads, envelopes, notepads), corporate reports and annual reports, presentation folders and proposal covers, branded merchandise and corporate gifts, office signage and wayfinding, fleet branding (cars, vans, trucks), uniform and workwear branding, and trade show and event branding. From startups needing full identity packages to established companies requiring brand refreshes, we ensure consistency across all touchpoints.'
      },
      {
        id: 'corporate-guidelines',
        question: 'Can you help develop brand guidelines?',
        answer: 'Yes! Our brand guideline services include: Logo usage rules (minimum sizes, clear space, incorrect uses), color specifications (Pantone, CMYK, RGB, HEX codes), typography standards (primary and secondary fonts), imagery style guides (photography, illustration preferences), application examples (stationery, signage, digital), and brand voice and messaging guidelines. We create both print and digital guideline documents. For large organizations, we conduct brand training sessions for marketing teams to ensure proper implementation.'
      },
      {
        id: 'corporate-merchandise',
        question: 'What corporate merchandise do you supply?',
        answer: 'Our corporate merchandise range: Apparel: Polo shirts, t-shirts, hoodies, jackets, caps, and uniforms. Office items: Notebooks, pens, desk organizers, mouse pads, and USB drives. Drinkware: Mugs, water bottles, travel tumblers, and flasks. Tech accessories: Power banks, phone stands, and Bluetooth speakers. Bags: Tote bags, laptop bags, backpacks, and duffels. Premium gifts: Leather portfolios, executive pens, and branded hampers. All items can be branded via screen printing, embroidery, UV printing, or laser engraving depending on material.'
      },
      {
        id: 'corporate-rebrand',
        question: 'How do you handle company rebranding projects?',
        answer: 'Our rebranding process: Phase 1: Audit existing branded materials and touchpoints. Phase 2: Develop transition plan and priority list. Phase 3: Design new applications following updated guidelines. Phase 4: Phased production to manage cash flow. Phase 5: Installation and implementation support. We help manage the logistics of rolling out new branding across multiple locations, vehicle fleets, and uniform stocks. We can also coordinate the disposal or donation of old branded materials. Typical rebranding timelines: 3-6 months for medium-sized companies.'
      },
      {
        id: 'corporate-consistency',
        question: 'How do you ensure brand consistency across all materials?',
        answer: 'Consistency controls include: Digital asset management system storing approved logos and templates, color calibration across all printing methods (digital, offset, screen, UV), sample approval process for all new applications, dedicated account teams familiar with your brand, pre-flight checks comparing against brand guidelines, and regular quality audits. For multi-location companies, we establish approval workflows ensuring headquarters signs off on local adaptations. We become guardians of your brand integrity.'
      },
      {
        id: 'corporate-gifts',
        question: 'Do you offer corporate gift and hamper services?',
        answer: 'Yes! Our corporate gifting solutions: Curated gift hampers for clients and staff, branded premium gifts (leather goods, tech, drinkware), event giveaways and conference swag, holiday season gift programs, new employee welcome packs, and client onboarding kits. We handle sourcing, branding, packaging, and delivery. Volume discounts available for 50+ units. Gift consultation service helps select items matching your brand values and recipient preferences. We also offer storage and fulfillment—send us recipient lists and we handle individual shipping.'
      },
      {
        id: 'corporate-fleet',
        question: 'What fleet branding options do you offer?',
        answer: 'Vehicle branding services: Full wraps (complete color change or design coverage), partial wraps (doors, rear, or side panels), cut vinyl lettering and logos, window perforation (see-through graphics), reflective safety markings, and fleet numbering and identification. Materials: Premium cast vinyl (7-year durability), calendared vinyl (short-term promotions), and specialty finishes (matte, satin, chrome). We handle design, print, and professional installation at your location or our facility. Fleet discounts for 5+ vehicles. All work guaranteed against peeling, fading, or bubbling.'
      },
      {
        id: 'corporate-signage',
        question: 'What office and retail signage do you produce?',
        answer: 'Interior signage: Reception logos, wall graphics, wayfinding signs, meeting room identifiers, and motivational wall art. Exterior signage: Building signs, illuminated channel letters, monument signs, and parking signs. Wayfinding systems: Floor directories, suspended signs, and ADA-compliant tactile signage. Materials: Acrylic, aluminum, PVC foam, wood, and glass. Illumination options: LED backlighting, front-lighting, and neon-style LED. We conduct site surveys, handle structural calculations, and manage installation including council permits for exterior signage.'
      }
    ]
  },
  {
    id: 'large-format',
    title: 'Large Format Branding',
    icon: 'Maximize',
    questions: [
      {
        id: 'large-format-capabilities',
        question: 'What large format printing capabilities do you have?',
        answer: 'Our large format department handles: Solvent and eco-solvent printing (banners, billboards), UV flatbed printing (rigid materials up to 50mm thick), dye-sublimation (fabric graphics and flags), latex printing (indoor eco-friendly graphics), and grand format printing (up to 5m width). Applications: Building wraps, hoarding graphics, window graphics, floor graphics, vehicle wraps, exhibition graphics, and point-of-sale displays. We print on vinyl, mesh, canvas, fabric, paper, and specialty media. Resolution up to 1200 DPI for photorealistic quality.'
      },
      {
        id: 'large-format-sizes',
        question: 'What are the maximum sizes you can print?',
        answer: 'Our maximum single-piece sizes: Roll-to-roll solvent printing: 5m width × unlimited length, UV flatbed: 2.5m × 1.3m, Dye-sublimation fabric: 3.2m width seamless, Grand format tiling: Unlimited via seamless joining. For oversized projects like building wraps: We print in sections with precise overlap alignment, install using specialized access equipment, and ensure weatherproof seams. We\'ve wrapped 20-story buildings and produced football-field-sized banners. If you can imagine the size, we can likely produce it.'
      },
      {
        id: 'large-format-outdoor',
        question: 'How durable are your outdoor large format prints?',
        answer: 'Durability by material: Standard vinyl banners: 1-2 years, Premium cast vinyl: 3-5 years, Mesh banners: 2-3 years (wind-resistant), Backlit vinyl: 2-3 years, Canvas: 2+ years (fade-resistant). Protective options: UV lamination (extends life 1-2 years), anti-graffiti coating, reinforced hems and grommets, and wind slits for large banners. Nairobi\'s high UV exposure is factored into our material recommendations. We warranty outdoor durability based on proper installation and maintenance guidelines we provide.'
      },
      {
        id: 'large-format-installation',
        question: 'Do you install large format graphics?',
        answer: 'Yes, professional installation is crucial for large format. Our services include: Site surveys and measurements, surface preparation and cleaning, professional application (wet or dry methods), building access coordination (scaffolding, cherry pickers), structural engineering for large installations, permit assistance for outdoor signage, and removal and disposal services. Our installation teams are trained in working at height and follow strict safety protocols. We carry insurance for installation work. Installation guarantees ensure graphics adhere properly without bubbles or wrinkles.'
      },
      {
        id: 'large-format-building',
        question: 'Can you wrap entire buildings?',
        answer: 'Absolutely! Building wrap services include: Scaffolding banner systems, direct-to-building mesh installation, window graphics integration, and construction site hoarding graphics. We handle: Structural wind-load calculations, council advertising permits, night-time installation to minimize disruption, and coordinated removal post-campaign. Materials: Perforated mesh (allows light/air flow), PVC banners (budget option), and tension fabric systems (premium look). We\'ve wrapped buildings for Safaricom, political campaigns, and movie premieres. Full project management from design to installation.'
      },
      {
        id: 'large-format-vehicle',
        question: 'What vehicle branding options do you offer?',
        answer: 'Vehicle graphics services: Full wraps (complete color change), partial wraps (specific panels), spot graphics (logos and contact info), window perforation (see-through advertising), and reflective safety markings. Fleet services: Design templates ensuring consistency across vehicle types, phased installation to keep fleet operational, and removal and updating services. We wrap cars, vans, trucks, buses, and matatus. Our wraps are removable without paint damage—ideal for leased vehicles. 3-7 year durability depending on film grade. Design service includes mockups on your specific vehicle models.'
      },
      {
        id: 'large-format-retail',
        question: 'What retail and POS large format solutions do you provide?',
        answer: 'Retail graphics: Window graphics (clear, frosted, or opaque), floor graphics (slip-resistant), wall murals and wallpaper, hanging ceiling banners, lightbox graphics, and counter and display graphics. POS materials: Standees and totems, shelf talkers and wobblers, counter mats, and seasonal campaign graphics. Seasonal services: Christmas and holiday campaigns, sale and promotion graphics, and new product launch materials. We understand retail timelines—fast turnaround for campaign launches, and installation during off-hours to avoid disrupting trade.'
      },
      {
        id: 'large-format-fabric',
        question: 'Do you print on fabric for large format applications?',
        answer: 'Yes, fabric printing is increasingly popular: Dye-sublimation on polyester (vibrant, washable), direct-to-textile printing (cotton, canvas), and backlit fabric for lightboxes. Applications: Tension fabric displays (wrinkle-free), flags and banners (feather, teardrop, rectangle), soft signage (retail and exhibition), and theatrical backdrops. Advantages over vinyl: Lighter weight (lower shipping costs), washable and reusable, no glare or reflections, and premium look and feel. Fabric graphics fold small for easy transport—ideal for roadshows and exhibitions. We also offer fabric framing systems (SEG - Silicone Edge Graphics).'
      }
    ]
  }
];

// Schema.org structured data for FAQPage
export const generateFAQSchema = () => {
  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions
  };
};