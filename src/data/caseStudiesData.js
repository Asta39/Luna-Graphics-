import politicalCampaignImage from '../assets/political.jpg';
import corporateRebrandImage from '../assets/corporate.jpg';
import tradeExhibitionImage from '../assets/exhibition.jpg';

// 2. Define and export your case studies data
export const caseStudies = [
  {
    title: 'Major Political Campaign 2022',
    category: 'Political Campaign',
    client: 'Confidential Political Party',
    duration: '12 months',
    budget: 'KES 15M+',
    image: politicalCampaignImage, // <-- Using the imported variable
    challenge: `A major political party needed comprehensive campaign materials for the 2022 general elections, including posters, banners, t-shirts, and promotional items across all 47 counties in Kenya.`,
    solution: `We deployed a coordinated production strategy using our full equipment fleet:\n• 500,000 A1 campaign posters printed on weather-resistant material\n• 50,000 large format banners for rallies and events\n• 200,000 branded t-shirts with party colors and slogans\n• 1 million flyers and leaflets for door-to-door campaigns\n• Custom merchandise including caps, bags, and pens`,
    results: [ 'Delivered 100% of materials on schedule', 'Zero quality complaints across all items', 'Established distribution network in 47 counties', 'Achieved 30% cost savings through bulk production', 'Maintained brand consistency across all materials' ],
    testimonial: `Luna Graphics delivered exceptional quality and service during our campaign. Their ability to handle massive volumes while maintaining consistency was crucial to our success.`,
    author: 'Campaign Manager',
    metrics: [ { label: 'Items Produced', value: '750K+' }, { label: 'Counties Covered', value: '47' }, { label: 'Delivery Accuracy', value: '100%' }, { label: 'Cost Savings', value: '30%' } ]
  },
  {
    title: 'Corporate Rebranding Project',
    category: 'Corporate Branding',
    client: 'Leading Kenyan Bank',
    duration: '12 months',
    budget: 'KES 8M+',
    image: corporateRebrandImage, // <-- Using the imported variable
    challenge: `A major Kenyan bank underwent complete rebranding and needed to update all physical materials across 150+ branches nationwide while maintaining operations.`,
    solution: `We executed a phased rollout strategy to minimize business disruption:\n• New signage for 150+ branches with LED illumination\n• 500,000 business cards for all staff members\n• Updated marketing materials including brochures and flyers\n• Branded merchandise for customer gifts and staff uniforms\n• Vehicle wrapping for the entire fleet of 200+ vehicles`,
    results: [ 'Completed rollout in 4 months as scheduled', 'Zero operational disruption during installation', 'Consistent brand implementation across all touchpoints', 'Improved brand recognition by 45%', 'Enhanced customer experience scores' ],
    testimonial: `The professionalism and attention to detail shown by Luna Graphics during our rebranding was outstanding. They understood the importance of maintaining our operations while executing the transformation.`,
    author: 'Head of Marketing',
    metrics: [ { label: 'Branches Updated', value: '150+' }, { label: 'Business Cards', value: '500K' }, { label: 'Vehicles Wrapped', value: '200+' }, { label: 'Brand Recognition', value: '+45%' } ]
  },
  {
    title: 'International Trade Exhibition',
    category: 'Event & Exhibition',
    client: 'Kenya Association of Manufacturers',
    duration: '6 months',
    budget: 'KES 5M+',
    image: tradeExhibitionImage, // <-- Using the imported variable
    challenge: `Kenya Association of Manufacturers needed comprehensive exhibition materials for a major international trade show featuring 200+ local companies showcasing to global buyers.`,
    solution: `We provided end-to-end exhibition solutions:\n• Custom exhibition stands for 200+ companies\n• Large format backdrops and banners\n• Product catalogs and marketing brochures\n• Branded merchandise and giveaways\n• Digital displays and interactive materials\n• On-site support and last-minute adjustments`,
    results: [ 'Successfully showcased 200+ Kenyan companies', 'Generated $50M+ in export inquiries', 'Received international recognition for quality', 'Established long-term partnerships with exhibitors', 'Set new standard for trade show presentations' ],
    testimonial: `Luna Graphics helped us present Kenya's manufacturing sector in the best possible light. The quality of materials and attention to detail impressed international buyers and elevated our country's image.`,
    author: 'Exhibition Director',
    metrics: [ { label: 'Companies Featured', value: '200+' }, { label: 'Export Inquiries', value: '$50M+' }, { label: 'Materials Produced', value: '10K+' }, { label: 'Countries Reached', value: '45' } ]
  }
];