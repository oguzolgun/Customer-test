export interface PageImage {
  src: string;
  alt: {
    de: string;
    en: string;
  };
  caption?: {
    de: string;
    en: string;
  };
}

export interface CourseImageConfig {
  landscapeCareer: PageImage;
  landscapeWhy: PageImage;
  squareAudience1: PageImage;
  squareAudience2?: PageImage;
  squareOverview?: PageImage;
  squareFunding?: PageImage;
}

export const COURSE_IMAGES: Record<string, CourseImageConfig> = {
  "ai-engineering": {
    landscapeCareer: {
      src: "/images/ai-engineering/ai-engineer-llms-rag-ai-agents-evening-office.webp",
      alt: {
        de: "AI Engineer arbeitet an RAG, LLM Agents und Data Pipelines in modernem Büro",
        en: "AI Engineer developing LLM agents and RAG pipelines in a modern workspace",
      },
    },
    landscapeWhy: {
      src: "/images/ai-engineering/ai-engineering-bootcamp-become-an-ai-engineer-hero.webp",
      alt: {
        de: "Werde zertifizierter AI Engineer in Deutschland – 100% gefördert mit Bildungsgutschein",
        en: "Become a certified AI Engineer in Germany – 100% funded with Bildungsgutschein",
      },
    },
    squareAudience1: {
      src: "/images/ai-engineering/ai-engineering-pair-programming-ai-chatbot.webp",
      alt: {
        de: "Praktisches Pair-Programming mit AI-Mentoring und interaktiven Coding-Workshops",
        en: "Hands-on pair programming and coding mentorship with modern AI tools",
      },
    },
    squareAudience2: {
      src: "/images/ai-engineering/ai-engineering-data-scientist-pipeline-diagram.webp",
      alt: {
        de: "Machine Learning Pipeline, Datenanalyse und Deep Learning Modell-Architektur",
        en: "Machine learning pipeline, data architecture, and deep learning models",
      },
    },
    squareOverview: {
      src: "/images/ai-engineering/ai-engineering-keyboard-data-visualization-closeup.webp",
      alt: {
        de: "Datenvisualisierung, Python-Code und Modell-Training am Arbeitsplatz",
        en: "Data visualization dashboard, Python code, and model training workflow",
      },
    },
  },

  "data-analytics": {
    landscapeCareer: {
      src: "/images/ai-engineering/ai-engineer-llms-rag-ai-agents-evening-office.webp",
      alt: {
        de: "Data Analyst analysiert Business Intelligence Dashboards und Datenbanken",
        en: "Data Analyst analyzing business intelligence dashboards and data pipelines",
      },
    },
    landscapeWhy: {
      src: "/images/ai-engineering/ai-engineering-bootcamp-become-an-ai-engineer-hero.webp",
      alt: {
        de: "Data Analytics Weiterbildung in Deutschland – 100% gefördert mit Bildungsgutschein",
        en: "Data Analytics training in Germany – 100% funded with Bildungsgutschein",
      },
    },
    squareAudience1: {
      src: "/images/ai-engineering/ai-engineering-keyboard-data-visualization-closeup.webp",
      alt: {
        de: "Hands-on Datenanalyse mit SQL, Tableau und Python Dashboards",
        en: "Hands-on data analysis with SQL, Tableau, and Python dashboards",
      },
    },
    squareAudience2: {
      src: "/images/ai-engineering/ai-engineering-data-scientist-pipeline-diagram.webp",
      alt: {
        de: "ETL-Pipelines, Datenmodellierung und explorative Datenanalyse",
        en: "ETL pipelines, data modeling, and exploratory data analysis",
      },
    },
    squareOverview: {
      src: "/images/ai-engineering/ai-engineering-pair-programming-ai-chatbot.webp",
      alt: {
        de: "Interaktives Lernen und Mentor-Feedback für angehende Data Analysts",
        en: "Interactive learning and mentor guidance for aspiring data analysts",
      },
    },
  },

  "aws-devops": {
    landscapeCareer: {
      src: "/images/aws-devops/aws-devops-engineer-course-data-center-hero.webp",
      alt: {
        de: "AWS DevOps Engineer und Cloud-Architektur in modernem Rechenzentrum",
        en: "AWS DevOps Engineer and cloud architecture in modern data center",
      },
    },
    landscapeWhy: {
      src: "/images/aws-devops/devops-engineer-remote-work-deploy-automate-scale.webp",
      alt: {
        de: "DevOps Engineer automatisiert CI/CD-Pipelines und skalierbare Cloud-Systeme",
        en: "DevOps Engineer automating CI/CD pipelines and scalable cloud infrastructure",
      },
    },
    squareAudience1: {
      src: "/images/aws-devops/aws-devops-cloud-engineer-laptop-server-room.webp",
      alt: {
        de: "Cloud Engineer verwaltet AWS-Infrastruktur und Cloud-Ressourcen",
        en: "Cloud engineer configuring AWS infrastructure and enterprise server environments",
      },
    },
    squareAudience2: {
      src: "/images/aws-devops/aws-devops-team-cloud-architecture-whiteboard.webp",
      alt: {
        de: "DevOps Team plant Cloud-Architektur und Microservices am Whiteboard",
        en: "DevOps engineering team designing cloud architecture on a whiteboard",
      },
    },
    squareOverview: {
      src: "/images/aws-devops/aws-devops-engineer-monitoring-deployment-pipeline.webp",
      alt: {
        de: "Monitoring von Deployment-Pipelines, Prometheus und Grafana Dashboards",
        en: "Monitoring automated deployment pipelines and cloud infrastructure metrics",
      },
    },
    squareFunding: {
      src: "/images/aws-devops/aws-devops-server-rack-cables-closeup.webp",
      alt: {
        de: "Enterprise Server Racks und moderne Cloud-Netzwerkinfrastruktur",
        en: "Enterprise server racks and high-performance cloud networking hardware",
      },
    },
  },

  "aws-solutions-architect": {
    landscapeCareer: {
      src: "/images/aws-devops/aws-devops-engineer-course-data-center-hero.webp",
      alt: {
        de: "AWS Solutions Architect entwirft hochverfügbare Cloud-Lösungen",
        en: "AWS Solutions Architect designing high-availability cloud infrastructure",
      },
    },
    landscapeWhy: {
      src: "/images/aws-devops/devops-engineer-remote-work-deploy-automate-scale.webp",
      alt: {
        de: "Zertifizierte AWS Cloud Weiterbildung – Select Tier Partner von Amazon Web Services",
        en: "Official AWS Training – Clarusway is an official AWS Training Partner",
      },
    },
    squareAudience1: {
      src: "/images/aws-devops/aws-devops-team-cloud-architecture-whiteboard.webp",
      alt: {
        de: "AWS Cloud-Architektur und Multi-Region Deployment Planung",
        en: "Designing AWS multi-region cloud architecture and well-architected systems",
      },
    },
    squareAudience2: {
      src: "/images/aws-devops/aws-devops-cloud-engineer-laptop-server-room.webp",
      alt: {
        de: "Cloud Architect konfiguriert IAM, VPC, S3 und EC2 Instanzen",
        en: "Cloud architect configuring IAM, VPC networks, S3 storage, and EC2 instances",
      },
    },
    squareOverview: {
      src: "/images/aws-devops/aws-devops-engineer-monitoring-deployment-pipeline.webp",
      alt: {
        de: "CloudWatch Monitoring und Cloud-Sicherheitsanalysen",
        en: "CloudWatch monitoring, security audits, and resilience dashboards",
      },
    },
    squareFunding: {
      src: "/images/aws-devops/aws-devops-server-rack-cables-closeup.webp",
      alt: {
        de: "Hochverfügbare Rechenzentren und Cloud-Netzwerke",
        en: "High-availability data centers and enterprise cloud networks",
      },
    },
  },

  "cyber-security": {
    landscapeCareer: {
      src: "/images/cyber-security/cyber-security-analyst-soc-course-hero.webp",
      alt: {
        de: "Cyber Security Analyst im Security Operations Center (SOC) bei der Bedrohungsanalyse",
        en: "Cyber Security SOC Analyst investigating real-time threats in a security ops center",
      },
    },
    landscapeWhy: {
      src: "/images/cyber-security/ai-enhanced-cloud-security-engineer.webp",
      alt: {
        de: "Cloud Security Engineer schützt Netzwerke und Systeme vor Cyberangriffen",
        en: "AI-enhanced cloud security engineer monitoring cyber threats and firewalls",
      },
    },
    squareAudience1: {
      src: "/images/cyber-security/cyber-security-analysts-incident-response-discussion.webp",
      alt: {
        de: "Cyber Security Team analysiert Incident Response und Sicherheitsforensik",
        en: "Cyber security analysts collaborating on incident response and digital forensics",
      },
    },
    // cyber-security has 1 square image; will use elegant fallback/repeat where needed
    squareAudience2: {
      src: "/images/cyber-security/cyber-security-analysts-incident-response-discussion.webp",
      alt: {
        de: "Praxisnahe Security Audits, Penetration Testing und SIEM Analyse",
        en: "Hands-on security audits, penetration testing, and SIEM tool training",
      },
    },
  },

  "full-stack": {
    landscapeCareer: {
      src: "/images/full-stack/full-stack-developer-build-real-web-apps-home-office.webp",
      alt: {
        de: "Full Stack Developer entwickelt moderne Web-Applikationen mit React und Node.js",
        en: "Full Stack Developer building responsive modern web applications",
      },
    },
    landscapeWhy: {
      src: "/images/full-stack/ai-assisted-full-stack-development-team-hero.webp",
      alt: {
        de: "Agiles Full Stack Entwickler-Team arbeitet mit AI-gestützten Coding-Tools",
        en: "Agile full-stack development team using AI-assisted coding tools",
      },
    },
    squareAudience1: {
      src: "/images/full-stack/full-stack-developers-pair-programming.webp",
      alt: {
        de: "Full Stack Entwickler programmieren interaktive Web-Projekte im Live-Code-Review",
        en: "Full stack developers pair-programming and reviewing frontend code",
      },
    },
    squareAudience2: {
      src: "/images/full-stack/full-stack-developer-designer-ui-wireframes.webp",
      alt: {
        de: "Web-Entwickler plant UI/UX-Wireframes und reaktive Komponenten",
        en: "Web developer designing user interfaces, wireframes, and responsive layouts",
      },
    },
    squareOverview: {
      src: "/images/full-stack/full-stack-coding-keyboard-closeup.webp",
      alt: {
        de: "Hands-on Coding mit TypeScript, Next.js, REST APIs und Datenbanken",
        en: "Hands-on coding with TypeScript, modern frameworks, and database APIs",
      },
    },
  },

  sdet: {
    landscapeCareer: {
      src: "/images/sdet/sdet-course-qa-device-lab-hero.webp",
      alt: {
        de: "SDET Automation Lab mit automatisierten Tests auf mobilen Geräten und Browsern",
        en: "SDET QA device test lab with automated end-to-end testing rigs",
      },
    },
    landscapeWhy: {
      src: "/images/sdet/test-automation-engineer-ci-pipeline.webp",
      alt: {
        de: "Test Automation Engineer integriert automatisierte Tests in CI/CD-Pipelines",
        en: "Test automation engineer integrating Selenium and Cypress in CI/CD pipelines",
      },
    },
    squareAudience1: {
      src: "/images/sdet/sdet-qa-engineer-cross-device-app-testing.webp",
      alt: {
        de: "QA Engineer testet Web- und Mobile-Apps mit Selenium und Appium",
        en: "QA engineer running cross-device automated tests on web applications",
      },
    },
    squareAudience2: {
      src: "/images/sdet/sdet-software-testers-discussing-bug.webp",
      alt: {
        de: "Software Tester diskutieren Bug-Reports und Teststrategien im Team",
        en: "Software test engineers discussing test coverage and bug resolution",
      },
    },
    squareOverview: {
      src: "/images/sdet/sdet-test-engineer-automated-test-results-dashboard.webp",
      alt: {
        de: "Testautomatisierungs-Dashboard mit detaillierten Testläufen und Metriken",
        en: "Automated test execution results and coverage analytics dashboard",
      },
    },
    squareFunding: {
      src: "/images/sdet/sdet-smartphone-automated-testing-closeup.webp",
      alt: {
        de: "Mobiles Testen und automatisierte Qualitätsprüfung auf echten Testgeräten",
        en: "Automated mobile test suite executing on real testing devices",
      },
    },
  },

  "kubernetes-ckad": {
    landscapeCareer: {
      src: "/images/kubernetes-ckad/kubernetes-ckad-prep-engineers-deploying-app-hero.webp",
      alt: {
        de: "Cloud Native Engineers deployen Microservices auf Kubernetes-Clustern",
        en: "Cloud native engineers deploying containerized microservices on Kubernetes",
      },
    },
    landscapeWhy: {
      src: "/images/kubernetes-ckad/certified-in-4-weeks-kubernetes-study.webp",
      alt: {
        de: "In 4 Wochen zum Certified Kubernetes Application Developer (CKAD)",
        en: "Get certified as a Kubernetes Application Developer (CKAD) in 4 weeks",
      },
    },
    squareAudience1: {
      src: "/images/kubernetes-ckad/developer-preparing-kubernetes-ckad-exam.webp",
      alt: {
        de: "Entwickler bereitet sich mit praxisnahen CKAD-Prüfungsszenarien vor",
        en: "Developer preparing for hands-on CKAD exam scenarios and kubectl exercises",
      },
    },
    squareAudience2: {
      src: "/images/kubernetes-ckad/devops-engineer-managing-kubernetes-cluster.webp",
      alt: {
        de: "DevOps Engineer verwaltet Kubernetes-Cluster, Ingress und ConfigMaps",
        en: "DevOps engineer troubleshooting Pods, Deployments, and Helm charts",
      },
    },
    squareOverview: {
      src: "/images/kubernetes-ckad/kubernetes-study-notes-diagram-closeup.webp",
      alt: {
        de: "Kubernetes Architekturdiagramm mit Master Nodes, Kubelet und Workloads",
        en: "Kubernetes architecture diagram detailing control plane, pods, and services",
      },
    },
    squareFunding: {
      src: "/images/kubernetes-ckad/developer-celebrating-passed-certification-exam.webp",
      alt: {
        de: "Erfolgreich bestandene CKAD Linux Foundation Zertifizierung",
        en: "Engineer celebrating passing the official Linux Foundation CKAD certification",
      },
    },
  },

  "it-orientation": {
    landscapeCareer: {
      src: "/images/it-orientation-course/find-your-it-career-workshop-hero.webp",
      alt: {
        de: "IT-Orientierungskurs: Finde den passenden IT-Beruf für deinen Quereinstieg",
        en: "Find your IT career path workshop for beginners and career switchers",
      },
    },
    landscapeWhy: {
      src: "/images/it-orientation-course/start-your-it-journey-career-changer.webp",
      alt: {
        de: "Starte deine IT-Karriere in Deutschland – ohne Vorkenntnisse, 100% gefördert",
        en: "Start your tech career journey in Germany with full government funding",
      },
    },
    squareAudience1: {
      src: "/images/it-orientation-course/beginners-intro-it-workshop-group.webp",
      alt: {
        de: "IT-Einsteiger und Quereinsteiger im interaktiven Einstiegsworkshop",
        en: "Beginners participating in interactive tech introduction workshops",
      },
    },
    squareAudience2: {
      src: "/images/it-orientation-course/career-changer-exploring-it-careers-laptop.webp",
      alt: {
        de: "Quereinsteiger lernt Grundlagen von Programmierung, Cloud und Cyber Security",
        en: "Career changer exploring different tech disciplines on laptop",
      },
    },
    squareOverview: {
      src: "/images/it-orientation-course/brainstorming-it-career-paths-sticky-notes.webp",
      alt: {
        de: "IT-Karrierepfade, Stärkenanalyse und Orientierung am Whiteboard",
        en: "Brainstorming and mapping career tracks with structured orientation",
      },
    },
    squareFunding: {
      src: "/images/it-orientation-course/career-coach-talking-with-adult-learner.webp",
      alt: {
        de: "Persönliches Karriere-Coaching und Beratung zum Bildungsgutschein",
        en: "Career coach providing one-on-one guidance to adult learner",
      },
    },
  },
};

export const COURSES_HUB_IMAGES = {
  landscapeHero: {
    src: "/images/it-courses/it-bootcamps-in-english-live-online-hero.webp",
    alt: {
      de: "Live-Online IT-Weiterbildungen in Deutschland – AZAV zertifiziert und 100% gefördert",
      en: "Live online IT bootcamps in Germany – AZAV certified and 100% funded",
    },
  },
  landscapeAlumni: {
    src: "/images/it-courses/bootcamp-graduate-new-tech-career-germany.webp",
    alt: {
      de: "Erfolgreiche Absolventen starten neue Karriere in der deutschen Tech-Branche",
      en: "Successful bootcamp graduate starting a tech career in Germany",
    },
  },
  squareOrientation: {
    src: "/images/it-courses/it-courses-career-changer-joining-live-online-class.webp",
    alt: {
      de: "Quereinsteiger nimmt an interaktivem Live-Online-Unterricht teil",
      en: "Career changer joining live online class from home office",
    },
  },
  squareCollaboration: {
    src: "/images/it-courses/it-courses-adult-learners-collaborating-it-bootcamp.webp",
    alt: {
      de: "Erwachsene Teilnehmer lernen kollaborativ in praxisnahen Projektteams",
      en: "Adult learners collaborating on real-world projects in IT bootcamp",
    },
  },
  squareMentoring: {
    src: "/images/it-courses/it-courses-mentor-helping-learner-with-code.webp",
    alt: {
      de: "Erfahrener Mentor unterstützt Teilnehmer persönlich bei Coding-Aufgaben",
      en: "Experienced mentor providing 1-on-1 code review and guidance",
    },
  },
  squareHomeOffice: {
    src: "/images/it-courses/it-courses-home-office-online-it-course-laptop.webp",
    alt: {
      de: "Flexibles Lernen von zu Hause mit bereitgestellter IT-Ausstattung",
      en: "Flexible remote learning setup with course materials and provided laptop",
    },
  },
};

export const FUNDING_OVERVIEW_IMAGES = {
  landscapeHero: {
    src: "/images/funding-overview/funding-for-your-it-course-advisor-hero.webp",
    alt: {
      de: "Kostenlose Förderberatung für deine IT-Weiterbildung in Deutschland",
      en: "Free funding consultation for your IT training in Germany",
    },
  },
  landscapeSuccess: {
    src: "/images/funding-overview/it-course-fully-funded-happy-learner.webp",
    alt: {
      de: "Teilnehmer erhält 100% Zusage für Bildungsgutschein von der Arbeitsagentur",
      en: "Participant celebrating 100% funded education voucher approval",
    },
  },
  squareAdvisor: {
    src: "/images/funding-overview/education-advisor-explaining-funding-options.webp",
    alt: {
      de: "Bildungsberater erklärt Finanzierungsoptionen und Fördermöglichkeiten",
      en: "Education advisor explaining funding options and voucher criteria",
    },
  },
  squareDocuments: {
    src: "/images/funding-overview/adult-reviewing-it-course-funding-documents.webp",
    alt: {
      de: "Unterlagen für den Bildungsgutschein prüfen und vorbereiten",
      en: "Reviewing funding documents and application requirements",
    },
  },
  squareCareerChange: {
    src: "/images/funding-overview/couple-planning-career-change-funding.webp",
    alt: {
      de: "Karrierewechsel und berufliche Weiterbildung gemeinsam planen",
      en: "Planning career transition and funded professional development",
    },
  },
  squareApplication: {
    src: "/images/funding-overview/signing-it-training-funding-application.webp",
    alt: {
      de: "Förderantrag einreichen und Weiterbildung starten",
      en: "Signing funded IT training application and confirming start date",
    },
  },
};

export const BILDUNGSGUTSCHEIN_IMAGES = {
  landscapeHero: {
    src: "/images/bildungsgutschein/100-percent-funded-bildungsgutschein-counselling-hero.webp",
    alt: {
      de: "100% Kostenübernahme mit dem Bildungsgutschein der Bundesagentur für Arbeit",
      en: "100% tuition coverage with the German Bildungsgutschein voucher",
    },
  },
  landscapeFreshStart: {
    src: "/images/bildungsgutschein/your-education-voucher-fresh-start.webp",
    alt: {
      de: "Neuer beruflicher Neustart mit staatlich finanzierter IT-Weiterbildung",
      en: "A fresh career start with fully funded IT education in Germany",
    },
  },
  squareStep1: {
    src: "/images/bildungsgutschein/job-seeker-counselling-appointment-education-voucher.webp",
    alt: {
      de: "Beratungsgespräch bei der Agentur für Arbeit oder im Jobcenter",
      en: "Counselling appointment at the Agentur für Arbeit or Jobcenter",
    },
  },
  squareStep2: {
    src: "/images/bildungsgutschein/education-voucher-document-stamp-closeup.webp",
    alt: {
      de: "Offizieller Bildungsgutschein mit Stempel und Zertifizierungsnummer",
      en: "Official Bildungsgutschein document with stamp and AZAV approval",
    },
  },
  squareStep3: {
    src: "/images/bildungsgutschein/approval-letter-education-voucher-relief.webp",
    alt: {
      de: "Erleichterung über die Bewilligung des Bildungsgutscheins",
      en: "Applicant relieved after receiving funding approval notification",
    },
  },
  squareStep4: {
    src: "/images/bildungsgutschein/first-day-live-online-it-course-home.webp",
    alt: {
      de: "Erster Unterrichtstag in der Live-Online-Weiterbildung bei Clarusway",
      en: "First day of live online classes in the Clarusway bootcamp",
    },
  },
};

export const AVGS_IMAGES = {
  landscapeHero: {
    src: "/images/avgs/free-career-coaching-avgs-session-hero.webp",
    alt: {
      de: "Kostenloses 1-zu-1 Karriere-Coaching mit dem AVGS-Gutschein",
      en: "Free 1-on-1 career coaching funded with the AVGS activation voucher",
    },
  },
  landscapeLandJob: {
    src: "/images/avgs/land-your-it-job-confident-job-seeker.webp",
    alt: {
      de: "Selbstbewusst den neuen Job in der IT-Branche antreten",
      en: "Confident job seeker ready to land a high-paying IT role",
    },
  },
  squareVideoCall: {
    src: "/images/avgs/career-coaching-video-call-avgs-voucher.webp",
    alt: {
      de: "Persönliche Coaching-Session per Video-Call mit erfahrenem Karriereberater",
      en: "Personal video coaching session with certified career advisor",
    },
  },
  squareCvReview: {
    src: "/images/avgs/coach-reviewing-german-cv-with-client.webp",
    alt: {
      de: "Deutschen Lebenslauf und Anschreiben professionell optimieren",
      en: "Optimizing German CV and portfolio for tech company standards",
    },
  },
  squareMockInterview: {
    src: "/images/avgs/mock-job-interview-practice-coaching.webp",
    alt: {
      de: "Bewerbungsgespräche und technische Interviews gezielt trainieren",
      en: "Practicing mock technical and HR job interviews",
    },
  },
  squareHandshake: {
    src: "/images/avgs/coach-job-seeker-handshake.webp",
    alt: {
      de: "Erfolgreicher Arbeitsvertrag und Abschluss des Coaching-Programms",
      en: "Coach and candidate celebrating successful placement and job offer",
    },
  },
};

export const QCG_IMAGES = {
  landscapeHero: {
    src: "/images/qualifizierungschancengesetz/employer-funded-it-training-team-hero.webp",
    alt: {
      de: "Arbeitgeberfinanzierte IT-Weiterbildung nach dem Qualifizierungschancengesetz",
      en: "Employer-sponsored IT upskilling funded by Qualifizierungschancengesetz",
    },
  },
  landscapeHandshake: {
    src: "/images/qualifizierungschancengesetz/upskill-your-employees-manager-handshake.webp",
    alt: {
      de: "Erfolgreiche Partnerschaft zwischen Unternehmen und Clarusway für Weiterbildung",
      en: "Management partnership for enterprise employee training",
    },
  },
  squareHrPlan: {
    src: "/images/qualifizierungschancengesetz/hr-manager-employee-training-plan.webp",
    alt: {
      de: "HR-Manager plant Weiterbildungsprogramm und Zuschussanträge",
      en: "HR manager planning employee upskilling roadmap and government subsidies",
    },
  },
  squareColleagues: {
    src: "/images/qualifizierungschancengesetz/colleagues-meeting-table-training-closeup.webp",
    alt: {
      de: "Mitarbeiter stimmen sich zu Weiterbildungszielen und Projekten ab",
      en: "Colleagues collaborating on training milestones and sprint goals",
    },
  },
  squareOnlineClass: {
    src: "/images/qualifizierungschancengesetz/employee-upskilling-live-online-it-class.webp",
    alt: {
      de: "Berufsbegleitende Weiterbildung im Live-Online-Format während der Arbeitszeit",
      en: "Employees attending live online classes during work hours",
    },
  },
  squareTeamLead: {
    src: "/images/qualifizierungschancengesetz/team-lead-presenting-employee-training-program.webp",
    alt: {
      de: "Teamleiter stellt das Qualifizierungsprogramm dem Kollegium vor",
      en: "Team lead presenting upskilling outcomes and new tech capabilities",
    },
  },
};

export const CORPORATE_TRAINING_IMAGES = {
  landscapeHero: {
    src: "/images/corporate-it-training/corporate-it-training-in-english-hero.webp",
    alt: {
      de: "Maßgeschneiderte Corporate IT Trainings für Unternehmen und Teams",
      en: "Customized corporate IT bootcamps and team upskilling in English",
    },
  },
  landscapeTeamLeader: {
    src: "/images/corporate-it-training/upskill-your-whole-team-leader.webp",
    alt: {
      de: "Entwicklungsteams mit modernsten Cloud-, DevOps- und AI-Skills stärken",
      en: "Empower your entire engineering team with cloud, DevOps, and AI skills",
    },
  },
  squareWorkshop: {
    src: "/images/corporate-it-training/corporate-team-workshop-trainer.webp",
    alt: {
      de: "Praxisorientierter Firmen-Workshop mit zertifizierten Lead-Trainern",
      en: "Interactive corporate team workshop led by industry instructors",
    },
  },
  squareOnline: {
    src: "/images/corporate-it-training/professional-joining-english-it-training-online.webp",
    alt: {
      de: "Internationale Mitarbeiter nehmen an englischsprachigem Live-Training teil",
      en: "International professionals joining interactive English tech training",
    },
  },
  squareCoaching: {
    src: "/images/corporate-it-training/senior-engineer-coaching-colleagues.webp",
    alt: {
      de: "Senior Engineer coacht Teammitglieder bei praktischen Hands-on-Labs",
      en: "Senior engineer coaching team members on hands-on cloud labs",
    },
  },
  squareRoadmap: {
    src: "/images/corporate-it-training/team-planning-training-roadmap-sticky-notes.webp",
    alt: {
      de: "Agile Trainings-Roadmap und Weiterbildungsplan für Tech-Organisationen",
      en: "Cross-functional team planning enterprise training roadmap",
    },
  },
};
