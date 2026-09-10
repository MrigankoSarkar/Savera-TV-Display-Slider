export interface CalloutItem {
  id: string;
  labelEn: string;
  labelMr: string;
  topPercent: number; // Y position on illustration (0 - 100)
  leftPercent: number; // X position on illustration (0 - 100)
  side: 'left' | 'right';
  highlightColor?: string;
}

export interface HazardItem {
  en: string;
  mr: string;
}

export interface DoItem {
  en: string;
  mr: string;
}

export interface DontItem {
  en: string;
  mr: string;
}

export interface PpeItem {
  en: string;
  mr: string;
}

export interface SlideData {
  id: number;
  type: 'birthday' | 'safety';
  titleEn: string;
  titleMr: string;
  subtitle?: string;
  unit: string;
  companyName: string;
  hazards?: HazardItem[];
  ppeList?: PpeItem[];
  dos?: DoItem[];
  donts?: DontItem[];
  safetyFirstText?: {
    en: string;
    mr: string;
  };
  safetyRoleTitle?: {
    en: string;
    mr: string;
    dept?: string;
  };
  figHeading?: {
    en: string;
    mr: string;
  };
  roleType?: 'welder' | 'machine' | 'forklift' | 'powder_coating' | 'crane' | 'electric' | 'chemical' | 'hazardous_waste' | 'hazardous_waste_3r';
  callouts?: CalloutItem[];
  secondaryOperator?: {
    roleTitle: {
      en: string;
      mr: string;
    };
    callouts: CalloutItem[];
  };
  has3RGraphic?: boolean;
}

export interface BirthdayPerson {
  id: string;
  nameEn: string;
  nameMr: string;
  deptEn: string;
  deptMr: string;
  imageUrl: string;
  unitEn?: string;
  unitMr?: string;
  date?: string;
}
