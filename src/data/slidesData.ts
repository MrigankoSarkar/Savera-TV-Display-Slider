import { SlideData } from '../types';

export const SLIDES_DATA: SlideData[] = [
  // Slide 1: Birthday Slide (Exact match with Page 1)
  {
    id: 1,
    type: 'birthday',
    titleEn: 'Happy Birthday',
    titleMr: 'वाढदिवसाच्या हार्दिक शुभेच्छा',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT - I',
    subtitle: 'Celebrating Employee Excellence',
  },

  // Slide 2: Welding Safety (Page 2)
  {
    id: 2,
    type: 'safety',
    titleEn: 'WELDING SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'वेल्डिंग सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Fire & sparks', mr: 'आग व ठिणग्या' },
      { en: 'Electric shock', mr: 'वीज धक्का' },
      { en: 'Fumes & gases', mr: 'धूर व वायू' },
      { en: 'Burns & radiation', mr: 'जळणे व किरणे' },
    ],
    ppeList: [
      { en: 'Helmet & goggles', mr: 'हेल्मेट व चष्मा' },
      { en: 'Leather Gloves & clothing', mr: 'लेदर हातमोजे व कपडे' },
      { en: 'Safety shoes', mr: 'सुरक्षा बूट' },
      { en: 'Respirator', mr: 'श्वसन संरक्षण' },
    ],
    dos: [
      { en: 'Wear PPE', mr: 'पीपीई वापरा' },
      { en: 'Check equipment', mr: 'साधने तपासा' },
      { en: 'Ventilation / fire extinguisher nearby', mr: 'हवा खेळती ठेवा / जवळ अग्निशामक ठेवा' },
    ],
    donts: [
      { en: "Don't weld in wet area", mr: 'ओल्या ठिकाणी वेल्डिंग करू नये' },
      { en: "Don't skip PPE", mr: 'पीपीईशिवाय काम करू नये' },
      { en: "Don't keep flammable items nearby", mr: 'ज्वलनशील वस्तू जवळ ठेवू नये' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'CO2 Welder / Arc Welder',
      mr: 'सी.ओ.२ वेल्डर / आर्क वेल्डर',
    },
    roleType: 'welder',
    callouts: [
      { id: 'w1', labelEn: 'Face Shield', labelMr: 'फेस शील्ड', topPercent: 18, leftPercent: 50, side: 'right' },
      { id: 'w2', labelEn: 'Ear Plug', labelMr: 'इअर प्लग', topPercent: 25, leftPercent: 32, side: 'left' },
      { id: 'w3', labelEn: 'Safety Glasses', labelMr: 'सुरक्षा चष्मा', topPercent: 24, leftPercent: 68, side: 'right' },
      { id: 'w4', labelEn: 'Leather Hand Guard', labelMr: 'लेदर हॅन्ड गार्ड', topPercent: 38, leftPercent: 30, side: 'left' },
      { id: 'w5', labelEn: 'Leather Apron', labelMr: 'लेदर एप्रन', topPercent: 44, leftPercent: 70, side: 'right' },
      { id: 'w6', labelEn: 'Leather Hand Gloves', labelMr: 'लेदर हातमोजे', topPercent: 55, leftPercent: 28, side: 'left' },
      { id: 'w7', labelEn: 'Leather Leg Guard', labelMr: 'लेदर लेग गार्ड', topPercent: 72, leftPercent: 70, side: 'right' },
      { id: 'w8', labelEn: 'Safety Shoes', labelMr: 'सेफ्टी शूज', topPercent: 88, leftPercent: 30, side: 'left' },
    ],
  },

  // Slide 3: Machine Safety (Page 3)
  {
    id: 3,
    type: 'safety',
    titleEn: 'MACHINE SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'मशीन सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Moving parts', mr: 'हलणारे भाग' },
      { en: 'Electrical shock', mr: 'वीज धक्का' },
      { en: 'Noise & vibration', mr: 'आवाज व कंप' },
      { en: 'Dust & heat', mr: 'धूळ व उष्णता' },
    ],
    ppeList: [
      { en: 'Helmet & goggles', mr: 'हेल्मेट व चष्मा' },
      { en: 'Gloves', mr: 'हातमोजे' },
      { en: 'Safety shoes', mr: 'सुरक्षा बूट' },
      { en: 'Ear protection', mr: 'कान संरक्षण' },
    ],
    dos: [
      { en: 'Wear PPE', mr: 'पीपीई वापरा' },
      { en: 'Follow SOPs', mr: 'मानक पद्धती पाळा' },
      { en: 'Check machine guards', mr: 'मशीन गार्ड तपासा' },
    ],
    donts: [
      { en: "Don't bypass safety guards", mr: 'सुरक्षा गार्ड वगळू नका' },
      { en: "Don't operate without training", mr: 'प्रशिक्षणाशिवाय काम करू नये' },
      { en: "Don't wear loose clothing", mr: 'सैल कपडे वापरू नका' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'Machine Operator',
      mr: 'मशीन ऑपरेटर',
      dept: 'Fabrication (फॅब्रिकेशन)',
    },
    roleType: 'machine',
    callouts: [
      { id: 'm1', labelEn: 'Safety Cap / Helmet', labelMr: 'हेल्मेट व चष्मा', topPercent: 16, leftPercent: 50, side: 'right' },
      { id: 'm2', labelEn: 'Ear Plug', labelMr: 'इअर प्लग', topPercent: 28, leftPercent: 28, side: 'left' },
      { id: 'm3', labelEn: 'Hand Gloves', labelMr: 'हातमोजे', topPercent: 40, leftPercent: 72, side: 'right' },
      { id: 'm4', labelEn: 'Safety Shoes', labelMr: 'सेफ्टी शूज', topPercent: 75, leftPercent: 28, side: 'left' },
    ],
    secondaryOperator: {
      roleTitle: {
        en: 'Grinding Operator',
        mr: 'ग्राइंडिंग ऑपरेटर',
      },
      callouts: [
        { id: 'g1', labelEn: 'Face Shield', labelMr: 'फेस शील्ड', topPercent: 20, leftPercent: 28, side: 'left' },
        { id: 'g2', labelEn: 'Safety Glasses', labelMr: 'सुरक्षा चष्मा', topPercent: 22, leftPercent: 72, side: 'right' },
        { id: 'g3', labelEn: 'Leather Apron', labelMr: 'लेदर एप्रन', topPercent: 44, leftPercent: 72, side: 'right' },
        { id: 'g4', labelEn: 'Safety Shoes', labelMr: 'सेफ्टी शूज', topPercent: 78, leftPercent: 72, side: 'right' },
      ],
    },
  },

  // Slide 4: Forklift Safety (Page 4)
  {
    id: 4,
    type: 'safety',
    titleEn: 'FORK LIFT SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'फोर्कलिफ्ट सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Overturning / Tip-over', mr: 'उलटणे' },
      { en: 'Collisions', mr: 'धडक' },
      { en: 'Falling loads', mr: 'सामान पडणे' },
      { en: 'Poor visibility', mr: 'कमी दृष्टीक्षेप' },
    ],
    ppeList: [
      { en: 'Safety helmet', mr: 'हेल्मेट' },
      { en: 'Safety shoes', mr: 'सुरक्षा बूट' },
      { en: 'High visibility jacket', mr: 'प्रतिबिंबित जॅकेट' },
      { en: 'Seat belt', mr: 'सीट बेल्ट' },
    ],
    dos: [
      { en: 'Wear PPE', mr: 'पीपीई वापरा' },
      { en: 'Drive at safe speed', mr: 'सुरक्षित गतीने चालवा' },
      { en: 'Use horn at blind spots', mr: 'ब्लाइंड स्पॉटवर हॉर्न वाजवा' },
      { en: 'Keep load balanced', mr: 'सामान संतुलित ठेवा' },
    ],
    donts: [
      { en: "Don't overload", mr: 'जास्त भार टाकू नका' },
      { en: "Don't carry passengers", mr: 'प्रवासी नेऊ नका' },
      { en: "Don't use mobile while driving", mr: 'मोबाईल वापरू नका' },
      { en: "Don't turn at high speed", mr: 'जोरात वळू नका' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'Forklift Operator',
      mr: 'फोर्क लिफ्ट ऑपरेटर',
    },
    roleType: 'forklift',
    callouts: [
      { id: 'f1', labelEn: 'Safety Helmet', labelMr: 'हेल्मेट', topPercent: 20, leftPercent: 68, side: 'right' },
      { id: 'f2', labelEn: 'Hi-Vis Vest', labelMr: 'प्रतिबिंबित जॅकेट', topPercent: 44, leftPercent: 32, side: 'left' },
      { id: 'f3', labelEn: 'Seat Belt Protocol', labelMr: 'सीट बेल्ट', topPercent: 54, leftPercent: 68, side: 'right' },
      { id: 'f4', labelEn: 'Safety Shoes', labelMr: 'सेफ्टी शूज', topPercent: 82, leftPercent: 68, side: 'right' },
    ],
  },

  // Slide 5: Powder Coating Safety (Page 5)
  {
    id: 5,
    type: 'safety',
    titleEn: 'POWDER COATING SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'पावडर कोटिंग सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Dust inhalation', mr: 'धूळ श्वासात जाणे' },
      { en: 'Fire & explosion', mr: 'आग व स्फोट' },
      { en: 'Skin & eye irritation', mr: 'त्वचा व डोळ्यांची जळजळ' },
      { en: 'Electrical hazards', mr: 'विद्युत धोके' },
    ],
    ppeList: [
      { en: 'Respirator / Mask', mr: 'मास्क' },
      { en: 'Safety goggles', mr: 'सुरक्षा चष्मा' },
      { en: 'Gloves', mr: 'हातमोजे' },
      { en: 'Protective clothing', mr: 'संरक्षणात्मक कपडे' },
      { en: 'Safety shoes', mr: 'सुरक्षा बूट' },
    ],
    dos: [
      { en: 'Ensure proper ventilation', mr: 'हवा खेळती ठेवा' },
      { en: 'Use PPE correctly', mr: 'पीपीई योग्य वापरा' },
      { en: 'Clean work area regularly', mr: 'कामाचे ठिकाण स्वच्छ ठेवा' },
      { en: 'Inspect equipment before use', mr: 'साधने वापरण्यापूर्वी तपासा' },
    ],
    donts: [
      { en: "Don't smoke near coating area", mr: 'कोटिंग जवळ धूम्रपान करू नका' },
      { en: "Don't ignore PPE", mr: 'पीपीई दुर्लक्ष करू नका' },
      { en: "Don't allow powder build-up", mr: 'जास्त पावडर साचू देऊ नका' },
      { en: "Don't bypass safety systems", mr: 'सुरक्षा यंत्रणा वगळू नका' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'Coater',
      mr: 'कोटिंग करणारा व्यक्ती',
    },
    roleType: 'powder_coating',
    callouts: [
      { id: 'pc1', labelEn: 'Safety Glasses', labelMr: 'सुरक्षा चष्मा', topPercent: 24, leftPercent: 30, side: 'left' },
      { id: 'pc2', labelEn: 'Respiratory Mask', labelMr: 'रेस्पिरेटरी मास्क', topPercent: 28, leftPercent: 70, side: 'right' },
      { id: 'pc3', labelEn: 'Full Body Apron', labelMr: 'फूल बॉडी ॲप्रन', topPercent: 45, leftPercent: 30, side: 'left' },
      { id: 'pc4', labelEn: 'Hand Gloves', labelMr: 'हातमोजे', topPercent: 60, leftPercent: 30, side: 'left' },
      { id: 'pc5', labelEn: 'Safety Shoes', labelMr: 'सेफ्टी शूज', topPercent: 82, leftPercent: 70, side: 'right' },
    ],
  },

  // Slide 6: Crane Operator Safety (Page 6)
  {
    id: 6,
    type: 'safety',
    titleEn: 'CRANE OPERATOR SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'क्रेन ऑपरेटर सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Falling load', mr: 'वस्तू खाली पडणे' },
      { en: 'Overloading', mr: 'जास्त वजन घेणे' },
      { en: 'Electrical hazards', mr: 'विद्युत धोके' },
      { en: 'Poor signaling / communication', mr: 'चुकीचे सिग्नल / संवाद' },
    ],
    ppeList: [
      { en: 'Safety helmet', mr: 'सुरक्षा हेल्मेट' },
      { en: 'Safety shoes', mr: 'सुरक्षा बूट' },
    ],
    dos: [
      { en: 'Check crane before operation', mr: 'क्रेन वापरण्यापूर्वी तपासा' },
      { en: 'Follow load chart', mr: 'लोड चार्ट पाळा' },
      { en: 'Use proper signaling', mr: 'योग्य सिग्नल वापरा' },
      { en: 'Keep area clear', mr: 'कामाचे क्षेत्र स्वच्छ ठेवा' },
    ],
    donts: [
      { en: "Don't overload the crane", mr: 'क्रेनवर जास्त वजन घेऊ नका' },
      { en: "Don't use damaged slings", mr: 'तुटके दोर वापरू नका' },
      { en: "Don't allow unauthorized person", mr: 'अनधिकृत व्यक्तीला परवानगी देऊ नका' },
      { en: "Don't stand under lifted load", mr: 'उचललेल्या वजनाखाली उभे राहू नका' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'Crane Operator',
      mr: 'क्रेन ऑपरेटर',
    },
    roleType: 'crane',
    callouts: [
      { id: 'cr1', labelEn: 'Safety Helmet', labelMr: 'हेल्मेट', topPercent: 26, leftPercent: 68, side: 'right' },
      { id: 'cr2', labelEn: 'Rigging Checklist', labelMr: 'लोड चार्ट व सिग्नल', topPercent: 50, leftPercent: 30, side: 'left' },
      { id: 'cr3', labelEn: 'Safety Shoes', labelMr: 'सेफ्टी शूज', topPercent: 80, leftPercent: 68, side: 'right' },
    ],
  },

  // Slide 7: Electric Safety (Page 7)
  {
    id: 7,
    type: 'safety',
    titleEn: 'ELECTRIC SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'विद्युत सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Electric shock', mr: 'विद्युत धक्का' },
      { en: 'Fire due to short circuit', mr: 'शॉर्ट सर्किटमुळे आग' },
      { en: 'Burns', mr: 'जळणे' },
      { en: 'Electrocution', mr: 'विद्युतप्रवाहामुळे मृत्यू' },
    ],
    ppeList: [
      { en: 'Insulated gloves', mr: 'इन्सुलेटेड हातमोजे' },
      { en: 'Safety shoes', mr: 'सुरक्षा बूट' },
      { en: 'Safety helmet', mr: 'सुरक्षा हेल्मेट' },
      { en: 'Insulated tools', mr: 'इन्सुलेटेड साधने' },
    ],
    dos: [
      { en: 'Switch off power before maintenance', mr: 'देखभाल करण्यापूर्वी वीज बंद करा' },
      { en: 'Use proper PPE', mr: 'योग्य पीपीई वापरा' },
      { en: 'Keep wires & panels dry', mr: 'तारा व पॅनल कोरडे ठेवा' },
      { en: 'Follow Lockout–Tag out (LOTO)', mr: 'लॉकआउट–टॅगआउट पद्धत वापरा' },
    ],
    donts: [
      { en: "Don't touch live wires", mr: 'विद्युत तारा हात लावू नका' },
      { en: "Don't overload circuits", mr: 'सर्किटवर जास्त भार टाकू नका' },
      { en: "Don't use damaged tools", mr: 'तुटकी साधने वापरू नका' },
      { en: "Don't work without training", mr: 'प्रशिक्षणाशिवाय काम करू नका' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'Electrician / Maintenance',
      mr: 'विद्युत तंत्रज्ञ / ऑपरेटर',
    },
    roleType: 'electric',
    callouts: [
      { id: 'el1', labelEn: 'Safety Helmet', labelMr: 'सुरक्षा हेल्मेट', topPercent: 12, leftPercent: 68, side: 'right' },
      { id: 'el2', labelEn: 'Eye Protection', labelMr: 'सुरक्षा चष्मा', topPercent: 26, leftPercent: 68, side: 'right' },
      { id: 'el3', labelEn: 'High Visibility Clothing', labelMr: 'हाय व्हिझिबिलिटी कपडे', topPercent: 40, leftPercent: 68, side: 'right' },
      { id: 'el4', labelEn: 'Protective Gloves', labelMr: 'इन्सुलेटेड हातमोजे', topPercent: 54, leftPercent: 68, side: 'right' },
      { id: 'el5', labelEn: 'Protective Footwear', labelMr: 'इन्सुलेटेड सेफ्टी बूट', topPercent: 75, leftPercent: 68, side: 'right' },
    ],
  },

  // Slide 8: Chemical Safety (Page 8)
  {
    id: 8,
    type: 'safety',
    titleEn: 'CHEMICAL SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'रासायनिक सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Skin & eye burns', mr: 'त्वचा व डोळ्यांची जळजळ' },
      { en: 'Toxic inhalation', mr: 'विषारी वायू श्वासात जाणे' },
      { en: 'Fire & explosion', mr: 'आग व स्फोट' },
      { en: 'Environmental harm', mr: 'पर्यावरणाला हानी' },
    ],
    ppeList: [
      { en: 'Safety goggles', mr: 'सुरक्षा चष्मा' },
      { en: 'Gloves', mr: 'हातमोजे' },
      { en: 'Apron / protective suit', mr: 'अॅप्रन / संरक्षणात्मक कपडे' },
      { en: 'Respirator / mask', mr: 'मास्क / श्वसन साधन' },
      { en: 'Safety shoes', mr: 'सुरक्षा बूट' },
    ],
    dos: [
      { en: 'Read MSDS before handling', mr: 'एमएसडीएस वाचा' },
      { en: 'Store chemicals properly', mr: 'रसायने योग्य ठिकाणी ठेवा' },
      { en: 'Use PPE at all times', mr: 'नेहमी पीपीई वापरा' },
      { en: 'Provide ventilation', mr: 'हवेची खेळती व्यवस्था ठेवा' },
    ],
    donts: [
      { en: "Don't mix unknown chemicals", mr: 'अज्ञात रसायने मिसळू नका' },
      { en: "Don't eat/drink near chemicals", mr: 'रसायनाजवळ जेवू नका/पिऊ नका' },
      { en: "Don't ignore spills – clean immediately", mr: 'गळती दुर्लक्ष करू नका – लगेच स्वच्छ करा' },
      { en: "Don't store chemicals in wrong containers", mr: 'चुकीच्या भांड्यात रसायने ठेवू नका' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'Chemical Handling',
      mr: 'रसायने हाताळणी करणारी व्यक्ती',
    },
    roleType: 'chemical',
    callouts: [
      { id: 'ch1', labelEn: 'Safety Glasses', labelMr: 'सुरक्षा चष्मा', topPercent: 24, leftPercent: 30, side: 'left' },
      { id: 'ch2', labelEn: 'Respirator Mask', labelMr: 'मास्क', topPercent: 28, leftPercent: 70, side: 'right' },
      { id: 'ch3', labelEn: 'PVC Hand Gloves', labelMr: 'पी. व्ही. सी. हातमोजे', topPercent: 48, leftPercent: 30, side: 'left' },
      { id: 'ch4', labelEn: 'PVC Apron', labelMr: 'पी. व्ही. सी. ॲप्रन', topPercent: 50, leftPercent: 70, side: 'right' },
      { id: 'ch5', labelEn: 'Safety Shoes', labelMr: 'सेफ्टी शूज', topPercent: 82, leftPercent: 70, side: 'right' },
    ],
  },

  // Slide 9: Hazardous Waste Safety (Page 9)
  {
    id: 9,
    type: 'safety',
    titleEn: 'HAZARDOUS WASTE SAFETY AND IMPOETANCE OF PPES',
    titleMr: 'हानिकारक कचरा सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    hazards: [
      { en: 'Toxic exposure', mr: 'विषारी संपर्क' },
      { en: 'Fire / explosion', mr: 'आग / स्फोट' },
      { en: 'Chemical burns', mr: 'रासायनिक जळजळ' },
      { en: 'Environmental pollution', mr: 'पर्यावरण प्रदूषण' },
    ],
    ppeList: [
      { en: 'Gloves', mr: 'हातमोजे पी व्ही सी' },
      { en: 'Safety goggles', mr: 'सेफ्टी चष्मा' },
      { en: 'Mask / respirator', mr: 'मास्क / श्वसन साधन' },
      { en: 'Apron / protective suit', mr: 'ॲप्रोन / संरक्षणात्मक कपडे' },
      { en: 'Safety shoes / Gum Boots', mr: 'सेफ्टी बूट / गमबूट' },
    ],
    dos: [
      { en: 'Segregate waste properly', mr: 'कचरा योग्य प्रकारे वर्गीकरण करा' },
      { en: 'Label hazardous containers', mr: 'धोकादायक ड्रम/भांडी लेबल करा' },
      { en: 'Store in designated area', mr: 'ठराविक ठिकाणी साठवा' },
      { en: 'Follow disposal guidelines', mr: 'विल्हेवाट नियमांचे पालन करा' },
    ],
    donts: [
      { en: "Don't mix hazardous & non-hazardous waste", mr: 'धोकादायक व सामान्य कचरा मिसळू नका' },
      { en: "Don't burn waste openly", mr: 'कचरा उघड्यावर जाळू नका' },
      { en: "Don't handle without PPE", mr: 'पीपीई शिवाय हाताळू नका' },
      { en: "Don't ignore spills/leakage", mr: 'गळती दुर्लक्ष करू नका' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम सतर्क रहा, सुरक्षित रहा',
    },
    safetyRoleTitle: {
      en: 'Hazardous Waste Handler',
      mr: 'हानिकारक कचरा हाताळणी करणारी व्यक्ती',
    },
    roleType: 'hazardous_waste',
    callouts: [
      { id: 'hw1', labelEn: 'Safety Glasses', labelMr: 'सुरक्षा चष्मा', topPercent: 24, leftPercent: 30, side: 'left' },
      { id: 'hw2', labelEn: 'Mask', labelMr: 'मास्क', topPercent: 28, leftPercent: 70, side: 'right' },
      { id: 'hw3', labelEn: 'PVC Gloves', labelMr: 'पी. व्ही. सी. हातमोजे', topPercent: 50, leftPercent: 30, side: 'left' },
      { id: 'hw4', labelEn: 'PVC Apron', labelMr: 'पी. व्ही. सी. ॲप्रन', topPercent: 52, leftPercent: 70, side: 'right' },
      { id: 'hw5', labelEn: 'Gum Boots', labelMr: 'गमबूट', topPercent: 82, leftPercent: 70, side: 'right' },
    ],
  },

  // Slide 10: Hazardous Waste Safety with 3R (Page 10)
  {
    id: 10,
    type: 'safety',
    titleEn: 'HAZARDOUS WASTE SAFETY AND IMPORTANCE OF PPES',
    titleMr: 'हानिकारक कचरा सुरक्षा आणि पीपीई चे महत्त्व',
    companyName: 'SAVERA AUTO COMPS PVT LTD',
    unit: 'UNIT-I',
    dos: [
      { en: '1. Segregate waste properly', mr: 'कचरा योग्य प्रकारे वर्गीकरण करा' },
      { en: '2. Label hazardous containers', mr: 'धोकादायक ड्रम/भांडी लेबल करा' },
      { en: '3. Store in designated area', mr: 'ठराविक ठिकाणी साठवा' },
      { en: '4. Follow disposal guidelines', mr: 'विल्हेवाट नियमांचे पालन करा' },
    ],
    donts: [
      { en: "1. Don't mix hazardous & non-hazardous waste", mr: 'धोकादायक व सामान्य कचरा मिसळू नका' },
      { en: "2. Don't burn waste openly", mr: 'कचरा उघड्यावर जाळू नका' },
      { en: "3. Don't handle without PPE", mr: 'पीपीई शिवाय हाताळू नका' },
      { en: "4. Don't ignore spills/leakage", mr: 'गळती दुर्लक्ष करू नका' },
    ],
    ppeList: [
      { en: '1. Gloves', mr: 'हातमोजे पी व्ही सी' },
      { en: '2. Safety goggles', mr: 'सेफ्टी चष्मा' },
      { en: '3. Mask / respirator', mr: 'मास्क / श्वसन साधन' },
      { en: '4. Apron / protective suit', mr: 'ॲप्रोन / संरक्षणात्मक कपडे' },
      { en: '5. Safety shoes', mr: 'सेफ्टी बूट' },
    ],
    safetyFirstText: {
      en: 'Safety First',
      mr: 'सुरक्षा प्रथम, सतर्क रहा, सुरक्षित रहा.',
    },
    safetyRoleTitle: {
      en: 'Hazardous Waste Management & 3R',
      mr: 'कचरा व्यवस्थापन आणि ३आर',
    },
    roleType: 'hazardous_waste_3r',
    has3RGraphic: true,
    callouts: [
      { id: '3r1', labelEn: 'Segregation Protocol', labelMr: 'कचरा वर्गीकरण', topPercent: 30, leftPercent: 50, side: 'right' },
      { id: '3r2', labelEn: 'Color Coded Drums', labelMr: 'रंगीत ड्रम लेबल्स', topPercent: 60, leftPercent: 50, side: 'left' },
    ],
  },
];
