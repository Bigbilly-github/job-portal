const Jobs = [
    {
        company:"Global Retail Solutions",
        role:"Sales Manager",
        category:"commerce",
        type:"on-site",
        id:"10000",
        employment:"full-time",
        salary:"70000",
        location:"New York, USA",
        experience:"3",
        description:"The Sales Manager is responsible for leading the sales team, developing strategies to boost revenue, and identifying new market opportunities. This role involves setting sales targets, analyzing market trends, and mentoring team members to improve performance. The Sales Manager also ensures customer satisfaction and collaborates with other departments to streamline sales operations.",
        requirements:[ "Sales management", "Customer relationship management","Data analysis" ],
        responsibilities:["Develop and execute sales strategies.", "Monitor sales performance and KPIs.", "Train and manage sales team members", "Identify and develop business opportunities.", "Collaborate with marketing and product teams."]



    },
    {
        company:"Online Market Hub",
        role:"E-commerce Specialist",
        category:"commerce",
        type: "remote",
        id:"10001",
        employment:"full-time",
        salary:"55000",
        location:"California, USA",
        experience:"5",
        description:"The E-commerce Specialist is responsible for managing online sales platforms, optimizing product listings, and implementing digital marketing strategies to drive sales. The role involves working with designers and content creators to improve the online shopping experience, analyzing sales performance, and identifying opportunities for growth.",
        requirements:[ "SEO and digital marketing", "Web analytics", "E-commerce management" ],
        responsibilities:["Develop digital marketing strategies.", "Track and analyze key performance metrics.", "Optimize product listings for SEO and conversion.", "Coordinate with logistics and customer service teams.", "Manage e-commerce website and marketplace accounts."]



    },

    {
        company:"MegaMart Superstores",
        role:"Retail Store Supervisor",
        category:"commerce",
        type: "on-site",
        id:"10002",
        employment:"part-time",
        salary:"50000",
        location:"Texas, USA",
        experience:"2",
        description:"The Retail Store Supervisor oversees daily operations, ensuring high standards of customer service, inventory management, and staff productivity. The role involves training staff, implementing promotional campaigns, and maintaining a visually appealing store layout to enhance the shopping experience.",
        requirements:[ "Leadership and team management", "Customer service", "Inventory control" ],
        responsibilities:["Supervise store employees and schedule shifts.", "Maintain stock levels and inventory accuracy.", "Implement sales and marketing strategies.", "Ensure compliance with company policies.", "Handle customer complaints and feedback."]



    },

    {
        company:"TechCommerce Solutions",
        role:"Product Manager",
        category:"commerce",
        id:"10003",
        type: "remote",
        employment:"full-time",
        salary:"85000",
        location:"Florida, USA",
        experience:"6",
        description:"The Product Manager is responsible for overseeing product development, from ideation to market launch. This role involves collaborating with designers, engineers, and marketers to ensure products meet consumer needs and business objectives. The Product Manager also analyzes user feedback and market trends to enhance product performance.",
        requirements:[ "Product lifecycle management", "Data-driven decision-making", "Agile methodology" ],
        responsibilities:["Define product vision and roadmap.", "Conduct market research and competitor analysis.", "Work with cross-functional teams to develop products.", "Monitor product performance and customer feedback.", "Develop pricing and marketing strategies."]



    },

    {
        company:"Fashion Trend Retailers",
        role:"Merchandising Specialist",
        category:"commerce",
        id:"10004",
        type: "on-site",
        employment:"full-time",
        salary:"60000",
        location:"Illinois, USA",
        experience:"3",
        description:"The Merchandising Specialist is responsible for curating product selections, managing inventory levels, and optimizing store displays to maximize sales. This role involves analyzing customer preferences, tracking market trends, and working closely with suppliers to maintain stock availability.",
        requirements:[ "Inventory management", "Trend analysis", "Retail analytics" ],
        responsibilities:["Develop merchandising strategies based on market trends.", "Maintain inventory accuracy and demand forecasting.", "Coordinate with suppliers and vendors.", "Optimize store layouts and product placements.", "Analyze sales data to improve merchandising effectiveness."]



    },
    {
        category: "hotels",
        role:"Front Desk Manager",
        type: "on-site",
        id:"10005",
        employment: "full-time",
        salary: "55000",
        location: "California, USA",
        company: "Luxe Hotels",
        experience:"2",
        description:"Front Desk Manager responsible for overseeing front desk operations, assisting with guest check-ins, handling guest inquiries, and managing complaints.",
        requirements:[ "Customer service experience.", "Leadership and management skills.", "Problem-solving and conflict resolution" ],
        responsibilities:["Supervise front desk staff and operations.", "Assist with guest check-ins, check-outs, and inquiries.", "Handle customer complaints and resolve issues.", "Ensure smooth daily operations and guest satisfaction."]


    },
    {
        category: "hotels",
        role:"Travel Blogger",
        type: "remote",
        employment: "part-time",
        id:"10006",
        salary: "38000",
        location: "New York, USA",
        company: "Travel Vista",
        experience:"1",
        description:"Travel Blogger responsible for writing engaging content about travel destinations, accommodations, and experiences. You will promote tourism and help readers plan their trips by providing valuable insights.",
        requirements:[ "Excellent writing and editing skill.", "Knowledge of travel destinations.", "Social media and content creation." ],
        responsibilities:["Write and publish travel blog posts.", "Promote destinations and experiences.", "Engage with followers and answer queries.", "Collaborate with brands for sponsored content."]


    },
    {
        category: "hotels",
        role:"Housekeeping Manager",
        type: "on-site",
        employment: "full-time",
        id:"10007",
        salary: "30000",
        location: "Texas, USA",
        company: "Grandstay Resorts",
        experience:"1",
        description:"Housekeeping Manager responsible for maintaining cleanliness standards at a hotel. You will oversee housekeeping staff, ensure rooms are properly cleaned, and manage inventory for cleaning supplies.",
        requirements:[ "Leadership and team managemen.", "Attention to detail.", "Knowledge of cleaning standards" ],
        responsibilities:["Supervise housekeeping staff.", "Ensure rooms meet cleanliness and safety standards.", "Order and manage cleaning supplies.", "Handle guest requests and complaints regarding cleanliness."]


    },

    {
        category: "hotels",
        role:"Sales Manager",
        type: "remote",
        employment: "full-time",
        id:"10008",
        salary: "58000",
        location: "California, USA",
        company: "Globus Travel Agency",
        experience:"3",
        description:"Sales Manager for a travel agency. You will manage sales strategies, engage with clients, and help drive bookings and partnerships with hotels and tourism companies.",
        requirements:[ "Sales experience in tourism.", "Strong negotiation and communication skills.", "Ability to develop partnerships." ],
        responsibilities:["Develop sales strategies for travel packages.", "Manage relationships with clients and partners.", "Track sales and set targets.", "Attend conferences and meetings to promote the agency."]


    },
    {
        category: "hotels",
        role:"Concierge Services Manager",
        type: "on-site",
        employment: "part-time",
        id:"10009",
        salary: "45000",
        location: "Illinois, USA",
        company: "Globus Travel Agency",
        experience:"3",
        description:"Sales Manager for a travel agency. You will manage sales strategies, engage with clients, and help drive bookings and partnerships with hotels and tourism companies.",
        requirements:[ "Sales experience in tourism.", "Strong negotiation and communication skills.", "Ability to develop partnerships." ],
        responsibilities:["Develop sales strategies for travel packages.", "Manage relationships with clients and partners.", "Track sales and set targets.", "Attend conferences and meetings to promote the agency."]


    },

    {
        category: "education",
        role:"High School Teacher",
        id:"10010",
        type: "on-site",
        employment: "full-time",
        salary: "50000",
        location: "Texas, USA",
        company: "Brookstone High School",
        experience:"2",
        description:"High School Teacher responsible for teaching core subjects and fostering a positive learning environment. You will create lesson plans, grade assignments, and provide guidance and support to students.",
        requirements:[ "Strong communication and organizational skills.", "Classroom management.", "Knowledge of teaching methodologies." ],
        responsibilities:["Develop and implement lesson plans.", "Assess and grade student work.", "Create a positive and inclusive classroom environment.", "Communicate with parents and guardians about student progress."]


    },

    {
        category: "education",
        role:"Online Tutor",
        type: "remote",
        employment: "part-time",
        id:"10011",
        salary: "45000",
        location: "Illinois, USA",
        company: "Learnify Tutoring Services",
        experience:"2",
        description:"Online Tutor for various subjects, providing personalized lessons to students. You will create individualized learning plans and help students improve academic performance through virtual tutoring sessions.",
        requirements:[ "Strong communication and organizational skills.", "Knowledge of subject matter.", "Patience and adaptability." ],
        responsibilities:["Conduct online tutoring sessions.", "Develop tailored learning plans.", "Monitor student progress and adjust teaching methods.", "Provide constructive feedback."]


    },

    {
        category: "education",
        role:"High School Teacher",
        id:"10012",
        type: "on-site",
        employment: "full-time",
        salary: "55000",
        location: "California, USA",
        company: "Pathway Academy",
        experience:"3",
        description:"Education Coordinator for a non-profit, responsible for developing and implementing educational programs. You will collaborate with community organizations to deliver programs to enhance learning and development for underprivileged children.",
        requirements:[ "Program management.", "Strong communication skills.", "Knowledge of educational frameworks." ],
        responsibilities:["Develop educational programs.", "Collaborate with community partners.", "Oversee program implementation and evaluation.", "Manage program budgets."]


    },
    {
        category: "education",
        role:"Curriculum Developer",
        type: "remote",
        id:"10013",
        employment: "part-time",
        salary: "40000",
        location: "Texas, USA",
        company: "EduCrafters",
        experience:"2",
        description:"Curriculum Developer responsible for creating and updating online course materials. You will work with subject matter experts to design effective learning modules, assignments, and assessments for students.",
        requirements:[ "Instructional design.", "Strong writing and editing skills.", "Knowledge of learning management systems." ],
        responsibilities:["Design and update online course content.", "Work with instructors to ensure curriculum effectiveness.", "Develop assessment method.", "Review and analyze student feedbac."]


    },

    {
        category: "education",
        role:"Special Education Teacher",
        type: "on-site",
        id:"10014",
        employment: "full-time",
        salary: "48000",
        location: "Florida, USA",
        company: "Sunshine Academy",
        experience:"5",
        description:"Special Education Teacher responsible for supporting students with disabilities in an inclusive classroom environment. You will develop individualized learning plans and provide tailored instruction to support student needs.",
        requirements:[ "Knowledge of special education practices.", "Strong interpersonal skills.", "Ability to differentiate instruction." ],
        responsibilities:["Create individualized education plans (IEPs).", "Provide specialized instruction.", "Collaborate with parents and specialists.", "Monitor student progress."]


    },
    {


    category: "telecommunications",
    role:"Network Engineer",
    id:"10015",
    type: "on-site",
    employment: "full-time",
    salary: "80000",
    location: "Texas, USA",
    company: "ACT Global",
    experience:"7",
    description:"Network Engineer responsible for the installation, configuration, and maintenance of telecommunications networks. You will work with cross-functional teams to ensure efficient and secure connectivity.",
    requirements:[ "Knowledge of network protocols.", "Strong troubleshooting skills.", "Experience with Cisco and Juniper technologies." ],
    responsibilities:["Install and configure network equipment.", "Monitor network performance and troubleshoot issues.", "Work with vendors and contractors for network expansion.", "Ensure network security and compliance with regulations."]


},

{


    category: "telecommunications",
    role:"Customer Support Specialist",
    id:"10016",
    type: "remote",
    employment: "full-time",
    salary: "50000",
    location: "Illinois, USA",
    company: "Sagem Mobile",
    experience:"4",
    description:"Customer Support Specialist for a telecommunications company, assisting customers with technical issues related to internet, phone, and cable services. You will provide troubleshooting, guide users, and ensure customer satisfaction.",
    requirements:[ "Strong communication skills.", "Problem-solving ability.", "Knowledge of telecommunications services." ],
    responsibilities:["Answer customer inquiries via phone and email.", "Troubleshoot technical issues with equipment and services.", "Document customer interactions and follow up on issues.", "Assist in billing inquiries and account management."]


},

{


    category: "telecommunications",
    role:"Field Technician",
    id:"10017",
    type: "on-site",
    employment: "full-time",
    salary: "70000",
    location: "New York, USA",
    company: "MTN Global",
    experience:"6",
    description:"Field Technician responsible for setting up and maintaining telecommunications systems at client locations. You will ensure that installations are done correctly and that customers’ service needs are met efficiently.",
    requirements:[ "Hands-on technical skills.", "Customer service orientation.", "Knowledge of telecom equipment." ],
    responsibilities:["Install telecommunications hardware at client locations.", "Perform routine maintenance and upgrades.", "Provide on-site technical support for customers.", "Troubleshoot network connectivity issues."]


},

{


    category: "telecommunications",
    role:"Telecom Sales Manager",
    id:"10018",
    type: "remote",
    employment: "part-time",
    salary: "60000",
    location: "California, USA",
    company: "AIRTEL Mobile",
    experience:"9",
    description:"Telecom Sales Manager responsible for selling telecommunications products and services to businesses. You will develop strategies to increase market share, manage a sales team, and maintain customer relationships.",
    requirements:[ "Sales and negotiation skills.", "Leadership ability.", "Knowledge of telecom services." ],
    responsibilities:["Develop and execute sales strategies.", "Manage and lead a sales team.", "Build and maintain customer relationships.", "Meet sales targets and KPIs."]


},

{


    category: "telecommunications",
    id:"10019",
    role:"Project Manager",
    type: "on-site",
    employment: "full-time",
    salary: "75000",
    location: "Texas, USA",
    company: "Etisalat Global",
    experience:"5",
    description:"Project Manager responsible for overseeing the execution of large-scale telecommunications projects. You will coordinate teams, manage budgets, and ensure the timely delivery of projects according to client specifications.",
    requirements:[ "Project management experience.", "Strong organizational skills.", "Knowledge of telecommunications infrastructure." ],
    responsibilities:["Manage project scope, timelines, and budgets.", "Coordinate with vendors, contractors, and internal teams.", "Ensure compliance with industry standards and regulations.", "Prepare project reports for stakeholders."]


},

{


    category: "finance",
    role:"Financial Analyst",
    id:"10020",
    type: "on-site",
    employment: "full-time",
    salary: "70000",
    location: "New York, USA",
    company: "Financial Solutions Corp",
    experience:"3",
    description:"A Financial Analyst is responsible for analyzing financial data, identifying trends, and creating reports to guide investment decisions. The role involves reviewing market data, managing budgeting processes, and advising on risk assessments. The analyst will support management in making data-driven decisions, ensuring profitability, and understanding potential financial risks. A keen eye for financial trends and a deep understanding of the financial market landscape are critical for this role.",
    responsibilities:[ "Analyze financial data and prepare reports.", "Conduct market research and assess investment opportunities.", "Provide financial forecasting and budgeting support.", "Assist in risk management and mitigation strategies."],
    requirements:[ "Financial modeling and analysis.", "Strong knowledge of Excel and financial software.", "Market research expertise." ]



},

{


    category: "finance",
    role:"Financial Planner",
    id:"10021",
    type: "remote",
    employment: "part-time",
    salary: "85000",
    location: "California, USA",
    company: "Wealth Management Advisors Ltd",
    experience:"4",
    description:"As a Financial Planner, you will work directly with clients to assess their financial goals and create tailored plans to help them achieve financial stability and growth. Responsibilities include retirement planning, tax planning, and estate planning. The ideal candidate will have strong interpersonal skills, as you will be interacting with clients to gather information and provide expert advice.",
    responsibilities:[ "Meet with clients to discuss financial goals and assess their needs.", "Create customized financial plans and investment strategies.", "Advise clients on tax, retirement, and estate planning.", "Monitor clients' financial progress and adjust plans as necessary."],
    requirements:[ "Strong communication and interpersonal skills.", "Knowledge of financial regulations and strategies.", "Proficient in financial planning tools and software." ]



},

{


    category: "finance",
    role:"Credit Analyst",
    id:"10022",
    type: "on-site",
    employment: "full-time",
    salary: "60000",
    location: "Texas, USA",
    company: "Clear Credit Solutions",
    experience:"2",
    description:"Credit Analysts evaluate the creditworthiness of individuals and organizations by analyzing their financial histories, credit scores, and other relevant data. You will work with lending officers to make decisions on loan applications and credit terms. A successful candidate will have a strong background in financial analysis and risk assessment.",
    responsibilities:[ "Analyze financial statements and credit histories of individuals and businesses.", "repare credit reports for loan officers and management.", "Assess financial risks and recommend credit terms.", "Communicate with clients to clarify financial information."],
    requirements:[ "Strong analytical skills.", "Excellent knowledge of credit risk models.", "Proficient in Excel and other financial software.", "Ability to work under pressure and meet deadlines" ]



},

{


    category: "finance",
    role:"Investment Banker",
    id:"10023",
    type: "on-site",
    employment: "full-time",
    salary: "60000",
    location: "Texas, USA",
    company: "Global Investment Bank",
    experience:"5",
    description:"Investment Bankers work with corporations, governments, and other organizations to raise capital, conduct mergers, and acquire assets. You will be responsible for conducting financial modeling, structuring deals, and advising clients on financial strategies. The role requires a deep understanding of global financial markets and the ability to work under tight deadlines.",
    responsibilities:[ "Develop financial models for mergers and acquisitions.", "Advise clients on corporate financial strategies.", "Manage the process of raising capital through debt or equity offerings.", "Negotiate deal terms and assist in closing transactions." , "Maintain relationships with clients and potential investors"],
    requirements:[ "Advanced financial modeling and valuation skills.", "Strong communication and negotiation abilities.", "High attention to detail and analytical thinking.", "Ability to work in a fast-paced environment." ]



},

{


    category: "finance",
    role:"Tax Consultant",
    id:"10024",
    type: "remote",
    employment: "part-time",
    salary: "76000",
    location: "Illinois, USA",
    company: "Tax Solutions Ltd",
    experience:"2",
    description:"Tax Consultants provide advice to individuals and businesses on tax-related matters, helping them minimize liabilities while complying with tax laws. Responsibilities include reviewing tax returns, offering advice on tax-saving strategies, and assisting in audits. Strong knowledge of tax regulations and accounting is essential for this role.",
    responsibilities:[ "Review tax returns for individuals and businessess.", "Advise clients on tax-saving opportunities and strategies..", "Assist clients in preparing for audits.", "Stay updated on changes in tax laws and regulations." , "Develop and maintain client relationships."],
    requirements:[ "In-depth knowledge of tax laws and regulations.", "trong analytical and problem-solving skills.", "Proficiency in accounting software.", "Excellent communication skills." ]



},
{
    category: "transport",
    role: "Logistics Coordinator",
    id:"10025",
    type: "on-site",
    employment: "full-time",
    salary: "52000",
    location: "Georgia, USA",
    company: "RapidFreight Logistics",
    experience: "2",
    description:
      "As a Logistics Coordinator, you will manage shipment schedules, communicate with carriers, and ensure on-time delivery across domestic and international routes. You'll be responsible for updating shipment tracking and handling documentation for inbound/outbound cargo. Strong organizational and communication skills are key to success in this role.",
    responsibilities: [
      "Schedule and track shipments.",
      "Coordinate with vendors and clients.",
      "Maintain transportation records.",
      "Ensure compliance with shipping regulations."
    ],
    requirements: [
      "Knowledge of logistics systems.",
      "Time management.",
      "Excellent communication skills.",
      "Attention to detail."
    ]
  },
  {
    category: "transport",
    role: "Transport Customer Support Agent",
    id:"10026",
    type: "remote",
    employment: "part-time",
    salary: "28000",
    location: "Colorado, USA",
    company: "FleetConnect",
    experience: "1",
    description:
      "Provide virtual support to drivers, fleet managers, and customers by handling delivery inquiries, routing issues, and ticket resolutions. Work with dispatchers and logistics teams to resolve problems in real time.",
    responsibilities: [
      "Respond to support queries.",
      "Monitor fleet updates.",
      "Escalate critical delivery issues.",
      "Maintain customer satisfaction metrics."
    ],
    requirements: [
      "Strong problem-solving abilities.",
      "Customer service experience.",
      "Familiarity with CRM tools.",
      "Ability to multitask remotely."
    ]
  },
  {
    category: "transport",
    role: "Fleet Manager",
    id:"10027",
    type: "on-site",
    employment: "full-time",
    salary: "60000",
    location: "Texas, USA",
    company: "TransRoute Inc.",
    experience: "3",
    description:
      "Oversee the company’s fleet operations including maintenance schedules, driver management, fuel consumption, and cost tracking. You’ll also lead compliance and safety initiatives to improve efficiency and reduce costs.",
    responsibilities: [
      "Supervise fleet performance and maintenance.",
      "Manage driver schedules and compliance.",
      "Track operational costs.",
      "Lead safety initiatives and inspections."
    ],
    requirements: [
      "Experience with fleet management systems.",
      "Strong organizational skills.",
      "Leadership and supervisory skills.",
      "Knowledge of transport regulations."
    ]
  },
  {
    category: "transport",
    role: "Delivery Driver",
    type: "on-site",
    id:"10028",
    employment: "part-time",
    salary: "19000",
    location: "Oregon, USA",
    company: "GoGreen Couriers",
    experience: "1",
    description:
      "Deliver parcels within city routes using eco-friendly vehicles. Ensure packages are handled with care and delivered on time while maintaining professional communication with clients.",
    responsibilities: [
      "Load and unload delivery vehicles.",
      "Follow route plans and traffic laws.",
      "Deliver packages to customers on time.",
      "Ensure proper vehicle care and reporting."
    ],
    requirements: [
      "Valid driver’s license.",
      "Good knowledge of city routes.",
      "Strong punctuality and reliability.",
      "Basic communication skills."
    ]
  },
  {
    category: "transport",
    role: "Freight Planner",
    type: "remote",
    employment: "full-time",
    id:"10029",
    salary: "48000",
    location: "Toronto, Canada",
    company: "NorthFlow Freight",
    experience: "2",
    description:
      "Develop efficient transport routes across Canada and the US. Analyze freight costs and optimize multi-stop deliveries using planning software and real-time data.",
    responsibilities: [
      "Plan shipping routes for cost-efficiency.",
      "Coordinate with carriers and suppliers.",
      "Use logistics software to monitor routes.",
      "Prepare freight efficiency reports."
    ],
    requirements: [
      "Experience with route optimization tools.",
      "Strong data analysis skills.",
      "Knowledge of freight logistics.",
      "Proficiency in Excel and scheduling tools."
    ]
  },
  {
    category: "transport",
    role: "Transportation Safety Officer",
    type: "on-site",
    id:"10030",
    employment: "full-time",
    salary: "67000",
    location: "Illinois, USA",
    company: "MetroFleet Safety",
    experience: "3",
    description:
      "Monitor and enforce safety protocols for all fleet drivers and transportation personnel. Conduct inspections and provide training on accident prevention and regulatory compliance.",
    responsibilities: [
      "Conduct safety audits and investigations.",
      "Develop and implement safety procedures.",
      "Train transport staff on safety compliance.",
      "Manage accident reporting and analysis."
    ],
    requirements: [
      "Familiarity with DOT regulations.",
      "Excellent observation and reporting skills.",
      "Training or safety certification.",
      "Attention to detail and regulatory knowledge."
    ]
  },
  {
    category: "transport",
    role: "Transport Dispatcher",
    type: "on-site",
    id:"10031",
    employment: "full-time",
    salary: "45000",
    location: "Arizona, USA",
    company: "SunHaul Logistics",
    experience: "2",
    description:
      "Coordinate daily pick-ups and deliveries for a fleet of over 50 vehicles. Maintain driver schedules, update route changes, and respond to on-road emergencies.",
    responsibilities: [
      "Assign routes and delivery tasks.",
      "Monitor live location of drivers.",
      "Communicate delays and route changes.",
      "Maintain accurate driver logs."
    ],
    requirements: [
      "Excellent communication skills.",
      "Experience in dispatch operations.",
      "Familiarity with GPS tracking tools.",
      "Ability to work under pressure."
    ]
  },
  {
    category: "transport",
    role: "Transportation Analyst",
    type: "remote",
    id:"10032",
    employment: "full-time",
    salary: "55000",
    location: "Texas, USA",
    company: "RouteSmart AI",
    experience: "2",
    description:
      "Use analytics tools to optimize transport strategies for clients. Review shipment trends, forecast costs, and create reports that improve overall efficiency.",
    responsibilities: [
      "Analyze transportation data and KPIs.",
      "Identify cost-saving opportunities.",
      "Build dashboards and reports.",
      "Recommend transport optimizations."
    ],
    requirements: [
      "Strong Excel or Tableau skills.",
      "Data-driven mindset.",
      "Knowledge of supply chain operations.",
      "Analytical and critical thinking."
    ]
  },
  {
    category: "transport",
    role: "Warehouse Loader",
    type: "on-site",
    id:"10033",
    employment: "part-time",
    salary: "22000",
    location: "Manchester, UK",
    company: "SwiftShip UK",
    experience: "1",
    description:
      "Handle physical loading and unloading of packages for short-haul and cross-country deliveries. Operate forklifts and maintain safety standards in a fast-paced warehouse.",
    responsibilities: [
      "Organize and load packages efficiently.",
      "Operate forklifts and handling gear.",
      "Label and track inventory.",
      "Follow safety protocols."
    ],
    requirements: [
      "Physical strength and endurance.",
      "Warehouse experience.",
      "Forklift certification (preferred).",
      "Ability to follow directions carefully."
    ]
  },
  {
    category: "transport",
    role: "Ride-hailing Operations Assistant",
    type: "remote",
    employment: "part-time",
    id:"10034",
    salary: "25000",
    location: "Lagos, Nigeria",
    company: "MoveFast Africa",
    experience: "1",
    description:
      "Provide backend support for a ride-hailing platform. Review trip logs, communicate with drivers, handle onboarding processes, and resolve passenger issues virtually.",
    responsibilities: [
      "Support driver onboarding and documents.",
      "Resolve rider or trip issues.",
      "Monitor app data for fraud detection.",
      "Collaborate with the ops and tech team."
    ],
    requirements: [
      "Basic CRM tool knowledge.",
      "Good communication skills.",
      "Tech-savvy and detail-oriented.",
      "Customer service experience preferred."
    ]
  },
  {
    category: "commerce",
    role: "Retail Store Manager",
    type: "on-site",
    id:"10035",
    employment: "full-time",
    salary: "54000",
    location: "New York, USA",
    company: "UrbanTrends",
    experience: "2",
    description: "The Retail Store Manager oversees daily operations, manages a team, handles inventory, and drives sales targets. You’ll be responsible for maintaining customer satisfaction and ensuring store profitability. You must possess excellent leadership and organizational skills.",
    responsibilities: [
      "Supervise staff and delegate tasks.",
      "Monitor inventory and restock.",
      "Handle customer issues professionally.",
      "Meet monthly sales targets."
    ],
    requirements: [
      "Leadership experience.",
      "Knowledge of POS systems.",
      "Strong interpersonal skills.",
      "Retail experience."
    ]
  },
  {
    category: "commerce",
    role: "E-commerce Support Specialist",
    type: "remote",
    employment: "part-time",
    id:"10036",
    salary: "32000",
    location: "Lagos, Nigeria",
    company: "SwiftCart",
    experience: "1",
    description: "Provide customer and technical support for an e-commerce platform. Resolve order issues, assist with product queries, and update customer records. A fast-paced virtual environment requiring good communication skills.",
    responsibilities: [
      "Respond to email/chat inquiries.",
      "Process returns and exchanges.",
      "Update order status.",
      "Collaborate with fulfillment teams."
    ],
    requirements: [
      "Customer service background.",
      "Basic data entry skills.",
      "Familiarity with e-commerce systems.",
      "Attention to detail."
    ]
  },
  {
    category: "commerce",
    role: "Inventory Analyst",
    id:"10037",
    type: "on-site",
    employment: "full-time",
    salary: "49000",
    location: "California, USA",
    company: "RetailEdge",
    experience: "2",
    description: "Analyze inventory trends and optimize stock levels to minimize losses and overstocking. Work closely with procurement and warehouse teams to forecast product demand.",
    responsibilities: [
      "Track and report on inventory metrics.",
      "Forecast demand using data.",
      "Recommend stock adjustments.",
      "Coordinate with vendors and buyers."
    ],
    requirements: [
      "Excel proficiency.",
      "Data analysis experience.",
      "Retail knowledge.",
      "Attention to detail."
    ]
  },
  {
    category: "commerce",
    role: "Procurement Officer",
    id:"10038",
    type: "on-site",
    employment: "full-time",
    salary: "53000",
    location: "Texas, USA",
    company: "Commodex",
    experience: "2",
    description: "Oversee purchasing processes, supplier relationships, and ensure procurement meets organizational quality and budgetary standards. The role includes contract negotiations and order follow-ups.",
    responsibilities: [
      "Negotiate with vendors.",
      "Track procurement KPIs.",
      "Ensure timely order fulfillment.",
      "Maintain purchase records."
    ],
    requirements: [
      "Strong negotiation skills.",
      "Knowledge of supply chain.",
      "Budgeting skills.",
      "Organizational skills."
    ]
  },
  {
    category: "commerce",
    role: "Sales Representative",
    id:"10039",
    type: "remote",
    employment: "part-time",
    salary: "29000",
    location: "Manchester, UK",
    company: "GlobalMart",
    experience: "1",
    description: "Connect with potential customers to pitch products, follow up leads, and drive sales. This is a virtual role ideal for individuals with great communication skills and target-driven mindset.",
    responsibilities: [
      "Call prospective clients.",
      "Handle objections and close sales.",
      "Update CRM records.",
      "Meet sales goals."
    ],
    requirements: [
      "Good phone etiquette.",
      "CRM knowledge.",
      "Sales experience preferred.",
      "Goal-oriented mindset."
    ]
  },
  {
    category: "education",
    role: "Online Math Tutor",
    id:"10040",
    type: "remote",
    employment: "part-time",
    salary: "25000",
    location: "Lagos, Nigeria",
    company: "EduBridge Tutors",
    experience: "1",
    description: "Deliver virtual math lessons to high school students. Create lesson plans, administer quizzes, and provide performance feedback. Strong communication and time management skills required.",
    responsibilities: [
      "Prepare and deliver virtual lessons.",
      "Track student progress.",
      "Provide academic support.",
      "Communicate with parents."
    ],
    requirements: [
      "Degree in Mathematics/Education.",
      "Good internet connection.",
      "Strong communication skills.",
      "Teaching experience preferred."
    ]
  },
  {
    category: "education",
    role: "School Administrator",
    id:"10041",
    type: "on-site",
    employment: "full-time",
    salary: "50000",
    location: "Illinois, USA",
    company: "Bright Future High",
    experience: "3",
    description: "Manage school operations, including staff supervision, budgeting, and compliance. A leadership role for professionals with administrative experience in the education sector.",
    responsibilities: [
      "Oversee staff and operations.",
      "Manage school records.",
      "Ensure regulatory compliance.",
      "Budget planning."
    ],
    requirements: [
      "Education admin experience.",
      "Leadership skills.",
      "Strong organizational abilities.",
      "Knowledge of school systems."
    ]
  },
  {
    category: "education",
    role: "English Language Instructor",
    id:"10042",
    type: "on-site",
    employment: "full-time",
    salary: "46000",
    location: "Manchester, UK",
    company: "Lexicon Language School",
    experience: "2",
    description: "Teach English to non-native speakers in structured classes. Focus on grammar, conversation, reading, and writing skills in immersive environments.",
    responsibilities: [
      "Deliver English lessons.",
      "Create lesson materials.",
      "Assess student performance.",
      "Maintain records."
    ],
    requirements: [
      "Degree in English or related field.",
      "TESOL/TEFL certification.",
      "Excellent communication.",
      "Experience in language teaching."
    ]
  },
  {
    category: "education",
    role: "Curriculum Developer",
    id:"10044",
    type: "remote",
    employment: "full-time",
    salary: "52000",
    location: "New York, USA",
    company: "SkillEd Labs",
    experience: "2",
    description: "Design and review digital learning content for K-12 and college-level courses. Collaborate with instructors and designers to develop interactive material.",
    responsibilities: [
      "Create course outlines.",
      "Review educational content.",
      "Ensure content meets standards.",
      "Collaborate with SMEs."
    ],
    requirements: [
      "Background in education.",
      "Experience in curriculum design.",
      "Detail-oriented.",
      "Content writing skills."
    ]
  },
  {
    category: "education",
    role: "ICT Instructor",
    id:"10045",
    type: "on-site",
    employment: "full-time",
    salary: "45000",
    location: "Texas, USA",
    company: "NextGen Schools",
    experience: "2",
    description: "Teach ICT fundamentals including coding, Microsoft Office, and internet safety to high school students. Hands-on sessions and lab supervision are key parts of this role.",
    responsibilities: [
      "Teach ICT curriculum.",
      "Assess student assignments.",
      "Maintain ICT lab equipment.",
      "Provide tech support during class."
    ],
    requirements: [
      "Degree in Computer Science or Education.",
      "Passion for teaching tech.",
      "Strong classroom management.",
      "ICT teaching experience preferred."
    ]
  },
  {
    category: "telecommunication",
    role: "Network Technician",
    type: "on-site",
    employment: "full-time",
    salary: "55000",
    location: "California, USA",
    id:"10047",
    company: "FiberLink Networks",
    experience: "2",
    description: "Install, maintain, and troubleshoot network hardware and connections for residential and business customers. Ideal for hands-on professionals with solid knowledge of cabling and network topology.",
    responsibilities: [
      "Install and repair network systems.",
      "Diagnose connection issues.",
      "Maintain accurate service records.",
      "Ensure high uptime rates."
    ],
    requirements: [
      "Technical diploma in networking.",
      "Field service experience.",
      "Strong problem-solving.",
      "Valid driver’s license."
    ]
  },
  {
    category: "telecommunication",
    role: "Customer Support Officer",
    type: "remote",
    id:"10048",
    employment: "part-time",
    salary: "30000",
    location: "Lagos, Nigeria",
    company: "TalkNet NG",
    experience: "1",
    description: "Assist customers with SIM activation, network complaints, and service upgrades. Use ticketing systems to log and resolve queries quickly and effectively.",
    responsibilities: [
      "Handle customer queries.",
      "Log complaints into CRM.",
      "Follow up on technical issues.",
      "Promote new services."
    ],
    requirements: [
      "Customer service experience.",
      "Basic tech understanding.",
      "Fluent in English.",
      "CRM knowledge preferred."
    ]
  },
  {
    category: "telecommunication",
    role: "RF Engineer",
    id:"10049",
    type: "on-site",
    employment: "full-time",
    salary: "67000",
    location: "Texas, USA",
    company: "SignalWave",
    experience: "3",
    description: "Design and optimize radio frequency (RF) networks for voice and data coverage. Work with infrastructure teams to enhance signal strength and troubleshoot network interference.",
    responsibilities: [
      "Conduct site surveys.",
      "Optimize RF network design.",
      "Resolve frequency conflicts.",
      "Maintain signal integrity."
    ],
    requirements: [
      "Degree in Telecommunications or EE.",
      "RF planning tools knowledge.",
      "3+ years experience.",
      "Analytical mindset."
    ]
  },
  {
    category: "telecommunication",
    role: "Telecom Project Coordinator",
    id:"10050",
    type: "remote",
    employment: "full-time",
    salary: "58000",
    location: "Illinois, USA",
    company: "TeleCore Solutions",
    experience: "2",
    description: "Manage timelines, budgets, and documentation for telecom infrastructure rollouts. Coordinate with vendors, engineers, and clients to ensure timely project completion.",
    responsibilities: [
      "Track project milestones.",
      "Coordinate team tasks.",
      "Prepare reports for stakeholders.",
      "Monitor budgets and timelines."
    ],
    requirements: [
      "Project coordination experience.",
      "Knowledge of telecom systems.",
      "Proficiency with Excel and Gantt charts.",
      "Strong communication."
    ]
  },
  {
    category: "telecommunication",
    role: "Field Installation Engineer",
    id:"10051",
    type: "on-site",
    employment: "full-time",
    salary: "49000",
    location: "Manchester, UK",
    company: "NetServ UK",
    experience: "2",
    description: "Deploy and configure customer-side telecom equipment including routers, VOIP phones, and wireless APs. Maintain post-installation support and training.",
    responsibilities: [
      "Install and configure hardware.",
      "Provide on-site support.",
      "Document installation logs.",
      "Test system performance."
    ],
    requirements: [
      "Networking certifications (CompTIA, CCNA).",
      "Field installation experience.",
      "Customer interaction skills.",
      "Willingness to travel locally."
    ]
  }






];

export default Jobs