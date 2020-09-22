const locations = [
  'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas',
  'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
  'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau',
  'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virgin Island', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
];

const industries = [
  'software', 'electronics', 'food', 'banking', 'construction',
];

const degrees = [
  'G.E.D.',
  'High School',
  'Associates',
  'Bachelors',
  'Masters',
  'Ph. D.',
];

const causes = [
  'Educational Equity (K-12)',
  'Immigrant Rights',
  'Voting Rights',
  'Youth Extracurriculars (sports, band, etc.)',
  'Environmental Rights',
  'Animal Rights',
  'US Military Veterans',
  'LGBTQ rights ',
  'Health and Medical Care',
  'Women’s Rights ',
  'Community Development ',
  'Criminal Justice Reform',
  'Food Insecurity',
  'Water and Sanitation',
  'Arts and Culture ',
  'Religion',
];

const timeZones = [
  { value: '-12:00', zone: '(GMT -12:00) Eniwetok, Kwajalein' },
  { value: '-11:00', zone: '(GMT -11:00) Midway Island, Samoa' },
  { value: '-10:00', zone: '(GMT -10:00) Hawaii' },
  { value: '-09:50', zone: '(GMT -9:30) Taiohae' },
  { value: '-09:00', zone: '(GMT -9:00) Alaska' },
  { value: '-08:00', zone: '(GMT -8:00) Pacific Time (US &amp; Canada)' },
  { value: '-07:00', zone: '(GMT -7:00) Mountain Time (US &amp; Canada)' },
  { value: '-06:00', zone: '(GMT -6:00) Central Time (US &amp; Canada), Mexico City' },
  { value: '-05:00', zone: '(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima' },
  { value: '-04:50', zone: '(GMT -4:30) Caracas' },
  { value: '-04:00', zone: '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz' },
  { value: '-03:50', zone: '(GMT -3:30) Newfoundland' },
  { value: '-03:00', zone: '(GMT -3:00) Brazil, Buenos Aires, Georgetown' },
  { value: '-02:00', zone: '(GMT -2:00) Mid-Atlantic' },
  { value: '-01:00', zone: '(GMT -1:00) Azores, Cape Verde Islands' },
  { value: '+00:00', zone: '(GMT) Western Europe Time, London, Lisbon, Casablanca' },
  { value: '+01:00', zone: '(GMT +1:00) Brussels, Copenhagen, Madrid, Paris' },
  { value: '+02:00', zone: '(GMT +2:00) Kaliningrad, South Africa' },
  { value: '+03:00', zone: '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg' },
  { value: '+03:50', zone: '(GMT +3:30) Tehran' },
  { value: '+04:00', zone: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi' },
  { value: '+04:50', zone: '(GMT +4:30) Kabul' },
  { value: '+05:00', zone: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent' },
  { value: '+05:50', zone: '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi' },
  { value: '+05:75', zone: '(GMT +5:45) Kathmandu, Pokhara' },
  { value: '+06:00', zone: '(GMT +6:00) Almaty, Dhaka, Colombo' },
  { value: '+06:50', zone: '(GMT +6:30) Yangon, Mandalay' },
  { value: '+07:00', zone: '(GMT +7:00) Bangkok, Hanoi, Jakarta' },
  { value: '+08:00', zone: '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong' },
  { value: '+08:75', zone: '(GMT +8:45) Eucla' },
  { value: '+09:00', zone: '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk' },
  { value: '+09:50', zone: '(GMT +9:30) Adelaide, Darwin' },
  { value: '+10:00', zone: '(GMT +10:00) Eastern Australia, Guam, Vladivostok' },
  { value: '+10:50', zone: '(GMT +10:30) Lord Howe Island' },
  { value: '+11:00', zone: '(GMT +11:00) Magadan, Solomon Islands, New Caledonia' },
  { value: '+11:50', zone: '(GMT +11:30) Norfolk Island' },
  { value: '+12:00', zone: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka' },
  { value: '+12:75', zone: '(GMT +12:45) Chatham Islands' },
  { value: '+13:00', zone: '(GMT +13:00) Apia, Nukualofa' },
  { value: '+14:00', zone: '(GMT +14:00) Line Islands, Tokelau' },
];

const salaries = [
  { value: 10000, option: '10,000' },
  { value: 20000, option: '20,000' },
  { value: 30000, option: '30,000' },
  { value: 40000, option: '40,000' },
  { value: 50000, option: '50,000' },
  { value: 60000, option: '60,000' },
  { value: 70000, option: '70,000' },
  { value: 80000, option: '80,000' },
  { value: 90000, option: '90,000' },
  { value: 100000, option: '100,000' },
  { value: 110000, option: '110,000' },
  { value: 120000, option: '120,000' },
  { value: 130000, option: '130,000' },
  { value: 140000, option: '140,000' },
];

const keySkills = [
  'A++',
  'A/B Testing',
  'Account Management',
  'Accounting ',
  'Accounts Payable',
  'Accounts Receivable',
  'Administrative support',
  'Adobe Creative Suite',
  'Adobe InDesign',
  'Adobe Photoshop',
  'Advertising',
  'Agile',
  'Agile Development',
  'Agribusiness',
  'Analytical Reasoning',
  'Animation',
  'Answering Phones',
  'Artificial Intelligence',
  'Attention to Detail',
  'Audio Production',
  'Back-End Development',
  'Billing',
  'Blockchain',
  'Budget Management',
  'Budgeting',
  'Business Analysis',
  'CAD',
  'Calendar Management',
  'Cashier Skills',
  'Cloud and Distributed Computing',
  'Cloud Computing',
  'Cloud Management',
  'CMS Tools',
  'CodingJava Script',
  'Collaboration ',
  'Communication',
  'Competitive Strategies',
  'Computer Graphics',
  'Computer Skills',
  'Computer Technology',
  'Conflict Management',
  'Contract Negotiation',
  'Copywriting',
  'Corporate Communications',
  'CPC',
  'Creativity ',
  'CRM Software (Salesforce, Hubspot, Zoho, Freshsales)',
  'CRO',
  'Customer Needs Analysis',
  'Customer Service',
  'Customer Service Systems',
  'Data Analysis',
  'Data Entry',
  'Data Presentation',
  'Data Science',
  'Data Structures',
  'Data Visualization',
  'Database Management and Software',
  'Debugging',
  'Delegation',
  'Design',
  'Digital Marketing',
  'Economics',
  'Electronic and Electrical Engineering',
  'Email Automation',
  'Email Marketing',
  'Engineering',
  'Feature Definition',
  'Financial Modelling',
  'Forecasting',
  'French',
  'Front-End Development',
  'Game Development',
  'German',
  'Google Analytics',
  'Graphic Design',
  'Graphic Design Skills',
  'HTML',
  'Human Resources (HR)',
  'Ideation Leadership',
  'Increasing Customer Lifetime Value (CLV)',
  'Independence',
  'Industrial Design',
  'Information Technology',
  'Interpersonal Skills',
  'Journalism',
  'Lead Prospecting ',
  'Lead Qualification',
  'Lean Manufacturing',
  'Lesson Planning',
  'Machine Learning',
  'Management experience',
  'Managing Cross-Functional Teams',
  'Manufacturing',
  'Marketing ',
  'Mediation',
  'Meeting Facilitation',
  'Microsoft Excel',
  'Microsoft Word',
  'Mobile & Web Development',
  'Mobile Application Development',
  'MS Office Suite',
  'Natural Language Processing',
  'Network structure & Development',
  'Nursing',
  'Office Equipment',
  'Open Source Experience',
  'People Management',
  'Performance Tracking',
  'Photography and Branding',
  'POS Skills',
  'PPC',
  'Print Design',
  'Product Knowledge',
  'Profit and Loss',
  'Programming Languages',
  'Project Launch',
  'Project Lifecycle Management',
  'Project Management',
  'Prototyping',
  'Public Speaking',
  'Quickbooks',
  'Reducing Customer Acquisition Cost (CAC)',
  'Referral Marketing',
  'Sales',
  'Sales Funnel Management',
  'Sales Leadership',
  'Salesforce',
  'Scheduling',
  'Scientific Computing',
  'Scope Management',
  'Scrum',
  'Security',
  'Self Motivation',
  'SEM Marketing',
  'SEO Marketing',
  'Shipping',
  'Social Media Management',
  'Social Media Marketing',
  'Software Testing',
  'SolidWorks',
  'Spanish ',
  'Statistical Analysis and Data Mining',
  'STEM Skills',
  'Strategic Planning',
  'Stress Management',
  'Teaching',
  'Technical Report Writing',
  'Technical Writing',
  'Testing',
  'Time Management',
  'Translation',
  'Troubleshooting',
  'Typography',
  'User Experience (UX) Design',
  'User Interface (UI) Design',
  'Video Production',
  'Web Development',
  'Workflow Development',
  'Written Communication',
];

module.exports = {
  locations,
  industries,
  degrees,
  causes,
  timeZones,
  salaries,
  keySkills,
};