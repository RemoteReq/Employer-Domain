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

keySkills = [
  ... list of skills
]

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

salaries = [
  "-----",
  "10,000",
  "20,000",
  "30,000",
  "40,000",
  "50,000"
]

module.exports = {
  locations,
  industries,
  causes,
  timeZones,
};