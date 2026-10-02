export type Language = 'en' | 'zh';

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  clinicalFocus: string[];
  featured?: boolean;
}

export interface PublicationItem {
  year: string;
  journal: string;
  title: string;
  context: string;
}

export interface HospitalItem {
  name: string;
  area: string;
  accreditationNote: string;
}

export interface PreparationStep {
  phase: string;
  timeframe: string;
  title: string;
  guidance: string;
}

export interface ClinicTranslation {
  nav: {
    services: string;
    doctor: string;
    hospitals: string;
    publications: string;
    booking: string;
    whatsappCta: string;
  };
  hero: {
    kicker: string;
    clinicLegalName: string;
    mottoLatin: string;
    mottoChinese: string;
    mottoMeaning: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    keyFacts: {
      label: string;
      value: string;
    }[];
  };
  servicesSection: {
    kicker: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  doctorSection: {
    kicker: string;
    name: string;
    role: string;
    qualificationsLine: string;
    linkedinLabel: string;
    bioParagraphs: string[];
    credentialsTitle: string;
    credentials: {
      period: string;
      institution: string;
      role: string;
    }[];
    interestsTitle: string;
    interests: string[];
    updatePhotoLabel: string;
    resetPhotoLabel: string;
  };
  hospitalsSection: {
    kicker: string;
    title: string;
    description: string;
    schedulingNote: string;
    hospitals: HospitalItem[];
  };
  publicationsSection: {
    kicker: string;
    title: string;
    description: string;
    items: PublicationItem[];
  };
  prepSection: {
    kicker: string;
    title: string;
    description: string;
    steps: PreparationStep[];
  };
  bookingSection: {
    kicker: string;
    title: string;
    subtitle: string;
    directContactLabel: string;
    whatsappNumberDisplay: string;
    hoursNotice: string;
    form: {
      callerTypeLabel: string;
      callerTypes: {
        patient: string;
        clinic: string;
      };
      nameLabel: string;
      namePlaceholder: string;
      hospitalLabel: string;
      hospitalPlaceholder: string;
      dateLabel: string;
      procedureLabel: string;
      procedurePlaceholder: string;
      notesLabel: string;
      notesPlaceholder: string;
      previewLabel: string;
      sendWhatsappBtn: string;
      copyMessageBtn: string;
      copiedConfirmation: string;
    };
  };
  footer: {
    companyName: string;
    mottoLine: string;
    disclaimer: string;
    copyright: string;
  };
}

export const CLINIC_PHONE_RAW = '6597808422';
export const CLINIC_PHONE_DISPLAY = '+65 9780 8422';
export const DR_TONG_LINKEDIN = 'https://www.linkedin.com/in/qian-jun-tong-3a40b2135';

export const CLINIC_CONTENT: Record<Language, ClinicTranslation> = {
  en: {
    nav: {
      services: 'Anaesthesia Services',
      doctor: 'Dr Tong Qian Jun',
      hospitals: 'Hospitals Served',
      publications: 'Academic Profile',
      booking: 'Book Appointment',
      whatsappCta: 'WhatsApp +65 9780 8422',
    },
    hero: {
      kicker: 'Mount Juniper Medical Pte Ltd · Singapore',
      clinicLegalName: 'Mount Juniper Medical Pte Ltd',
      mottoLatin: 'Mons Jugis Magn',
      mottoChinese: '俊岭医疗, 俊誉可靠, 腾愈安康',
      mottoMeaning: 'Steadfast Mountain · Trusted Clinical Care · Safe Perioperative Recovery',
      headline: 'Specialist Anaesthesia & Perioperative Care for Singapore’s Major Private Hospitals.',
      description:
        'Led by Consultant Anaesthesiologist Dr Tong Qian Jun (MBBS, MMed Anaesthesiology), Mount Juniper Medical Pte Ltd provides dedicated, evidence-based anaesthesia services for scheduled surgeries and diagnostic procedures across major private hospitals in Singapore.',
      primaryCta: 'Book via WhatsApp (+65 9780 8422)',
      secondaryCta: 'View Clinical Scope & Services',
      keyFacts: [
        {
          label: 'Principal Specialist',
          value: 'Dr Tong Qian Jun (锺前俊) · MBBS, MMed',
        },
        {
          label: 'Clinical Focus',
          value: 'General, Regional & Procedural Anaesthesia',
        },
        {
          label: 'Direct Appointment Line',
          value: '+65 9780 8422 (WhatsApp)',
        },
      ],
    },
    servicesSection: {
      kicker: 'Clinical Capabilities',
      title: 'Perioperative & Anaesthesia Services',
      description:
        'Individualized anaesthetic planning designed around surgical precision, physiological stability, and comfortable postoperative recovery.',
      items: [
        {
          number: '01.',
          title: 'General Anaesthesia & Total Intravenous Anaesthesia (TIVA)',
          subtitle: 'Inpatient & Day-Surgery Procedures',
          description:
            'Comprehensive general anaesthesia tailored to patient physiology across orthopaedic, general surgical, ENT, urological, gynaecological, plastic, and ophthalmic surgeries. Includes continuous depth-of-anaesthesia monitoring and multimodal anti-emetic and analgesic protocols.',
          clinicalFocus: [
            'Target-controlled Total Intravenous Anaesthesia (TIVA)',
            'Continuous haemodynamic & neuromuscular monitoring',
            'Enhanced Recovery After Surgery (ERAS) analgesia pathways',
          ],
          featured: true,
        },
        {
          number: '02.',
          title: 'Ultrasound-Guided Regional Anaesthesia',
          subtitle: 'Targeted Nerve Blocks & Multimodal Pain Relief',
          description:
            'Real-time ultrasound-guided peripheral nerve blocks and regional anaesthesia techniques for upper limb, lower limb, and truncal surgeries. Reduces intraoperative opioid requirements and supports smoother, opioid-sparing postoperative pain control.',
          clinicalFocus: [
            'Brachial plexus & upper extremity nerve blocks',
            'Lower limb & fascial plane blocks for orthopaedic procedures',
            'Postoperative acute surgical pain optimization',
          ],
          featured: true,
        },
        {
          number: '03.',
          title: 'Monitored Anaesthesia Care (MAC) & Procedural Sedation',
          subtitle: 'Endoscopy, Day Surgery & Diagnostic Suites',
          description:
            'Carefully titrated intravenous sedation with continuous specialist airway and cardiorespiratory surveillance for gastroscopy, colonoscopy, bronchoscopy, cataract surgery, and minimally invasive interventions.',
          clinicalFocus: [
            'Rapid-recovery sedation for diagnostic & therapeutic endoscopy',
            'Continuous capnography & oxygenation monitoring',
            'Tailored dosing for elderly and medically complex patients',
          ],
        },
        {
          number: '04.',
          title: 'Advanced Airway Management',
          subtitle: 'Complex Airway Planning & Safety Protocols',
          description:
            'Sub-specialty clinical expertise in difficult airway assessment, video laryngoscopy, flexible bronchoscopy-guided intubation, and structured airway management for ENT, maxillofacial, and head-and-neck surgeries.',
          clinicalFocus: [
            'Pre-operative airway risk evaluation',
            'Video laryngoscopic & fibreoptic airway techniques',
            'Simulation-validated airway safety protocols',
          ],
        },
        {
          number: '05.',
          title: 'Pre-Anaesthesia Assessment & Optimization',
          subtitle: 'Pre-Operative Consultation & Risk Stratification',
          description:
            'Detailed pre-operative evaluation of medical comorbidities, cardiopulmonary reserve, chronic medication adjustments (such as antiplatelets, anticoagulants, and diabetes therapy), and individualized fasting instructions prior to surgery.',
          clinicalFocus: [
            'Pre-surgical medical optimization & comorbidity review',
            'Perioperative medication reconciliation',
            'Patient-centred discussion of anaesthetic options',
          ],
        },
      ],
    },
    doctorSection: {
      kicker: 'Principal Consultant Anaesthesiologist',
      name: 'Dr Tong Qian Jun (锺前俊)',
      role: 'Consultant Anaesthesiologist · Mount Juniper Medical Pte Ltd',
      qualificationsLine: 'MBBS (Singapore) · MMed (Anaesthesiology) (Singapore)',
      linkedinLabel: 'Verified LinkedIn Profile',
      bioParagraphs: [
        'Dr Tong Qian Jun graduated from the National University of Singapore (NUS) with a Bachelor of Medicine and Bachelor of Surgery (MBBS) and subsequently obtained his Master of Medicine in Anaesthesiology (MMed) from NUS in 2013.',
        'Prior to establishing his private practice at Mount Juniper Medical Pte Ltd, Dr Tong served as a Consultant in the Department of Anaesthesiology and Surgical Intensive Care at Changi General Hospital (CGH). His sub-specialty clinical interests include ultrasound-guided regional anaesthesia, advanced airway management, and medical simulation.',
        'Actively committed to medical education and patient safety training, Dr Tong has served as a Clinical Lecturer with the Yong Loo Lin School of Medicine at the National University of Singapore, a Physician Faculty Member of the SingHealth Anaesthesiology Academic Residency Program, and a committee member of the SingHealth Duke-NUS Academic Clinical Programme (ACP) Simulation Committee.',
      ],
      credentialsTitle: 'Verified Academic & Clinical Appointments',
      credentials: [
        {
          period: 'Present',
          institution: 'Mount Juniper Medical Pte Ltd',
          role: 'Principal Consultant Anaesthesiologist (Private Hospital Practice)',
        },
        {
          period: 'Public Sector',
          institution: 'Changi General Hospital (CGH)',
          role: 'Consultant, Department of Anaesthesiology & Surgical Intensive Care',
        },
        {
          period: 'Academic Faculty',
          institution: 'Yong Loo Lin School of Medicine, National University of Singapore (NUS)',
          role: 'Clinical Lecturer',
        },
        {
          period: 'Residency Faculty',
          institution: 'SingHealth Duke-NUS Academic Medical Centre',
          role: 'Physician Faculty, Anaesthesiology Residency & ACP Simulation Committee Member',
        },
        {
          period: '2013',
          institution: 'National University of Singapore (NUS)',
          role: 'Master of Medicine (Anaesthesiology) · MBBS (Singapore)',
        },
      ],
      interestsTitle: 'Sub-Specialty Clinical Interests',
      interests: [
        'Ultrasound-Guided Regional Anaesthesia',
        'Advanced Airway Management',
        'Total Intravenous Anaesthesia (TIVA)',
        'Medical Simulation & Perioperative Safety',
        'Day-Surgery & Endoscopic Sedation',
      ],
      updatePhotoLabel: 'Upload Official Portrait Photo',
      resetPhotoLabel: 'Restore Default Portrait',
    },
    hospitalsSection: {
      kicker: 'Hospital Coverage',
      title: 'Serving Major Private Hospitals in Singapore',
      description:
        'Mount Juniper Medical Pte Ltd partners with surgical specialists and clinics to deliver seamless perioperative anaesthesia care across Singapore’s leading private hospitals and day-surgery centres.',
      schedulingNote:
        'All anaesthetic services are coordinated in advance with your attending surgeon’s clinic and the respective hospital operating theatre booking office.',
      hospitals: [
        {
          name: 'Thomson Medical Centre',
          area: '339 Thomson Road, Singapore',
          accreditationNote: 'Accredited Specialist Anaesthesiologist · Scheduled Non-Obstetric Surgical & Day Procedures',
        },
        {
          name: 'Farrer Park Hospital',
          area: '1 Farrer Park Station Road, Connexion',
          accreditationNote: 'Inpatient Operating Suites · Endoscopy & Day Surgery Centres',
        },
        {
          name: 'Mount Elizabeth Hospital (Orchard)',
          area: '3 Mount Elizabeth, Singapore',
          accreditationNote: 'Major Elective Surgical Procedures · Monitored Anaesthesia Care',
        },
        {
          name: 'Mount Elizabeth Novena Hospital',
          area: '38 Irrawaddy Road, Singapore',
          accreditationNote: 'Perioperative Anaesthesia · Regional Nerve Blocks & TIVA',
        },
        {
          name: 'Gleneagles Hospital',
          area: '6A Napier Road, Singapore',
          accreditationNote: 'Scheduled Inpatient & Ambulatory Surgical Anaesthesia',
        },
        {
          name: 'Mount Alvernia & Parkway East Hospitals',
          area: '820 Thomson Road · 321 Joo Chiat Place',
          accreditationNote: 'Elective Surgical & Procedural Sedation Support',
        },
      ],
    },
    publicationsSection: {
      kicker: 'Academic & Clinical Publications',
      title: 'Verified Medical Literature & Research',
      description:
        'In accordance with Singapore medical advertising guidelines, we do not publish unverified patient testimonials. Below are selected peer-reviewed clinical studies and academic contributions by Dr Tong Qian Jun.',
      items: [
        {
          year: 'Peer-Reviewed Study',
          journal: 'Department of Anaesthesia & Surgical Intensive Care, Changi General Hospital',
          title: 'Comparative Bench Study on Emergency Cricothyroidotomy & Airway Management Techniques',
          context: 'Evaluation of procedural efficacy and airway rescue instrumentation in simulation settings.',
        },
        {
          year: 'Clinical Research',
          journal: 'Open Journal of Anesthesiology / SingHealth Anaesthesiology',
          title: 'Ultrasound-Guided Regional Anaesthesia Techniques & Perioperative Clinical Protocols',
          context: 'Clinical investigation into regional nerve block precision and perioperative workflow standards.',
        },
        {
          year: 'Medical Education',
          journal: 'Singapore Medical Journal (SMJ) & SingHealth Duke-NUS ACP',
          title: 'Anaesthesia & Surgical Intensive Care Training and Simulation-Based Crisis Management',
          context: 'Faculty contributions to residency training and multidisciplinary operating theatre readiness.',
        },
      ],
    },
    prepSection: {
      kicker: 'Patient Information',
      title: 'Standard Pre-Anaesthesia Preparation Guide',
      description:
        'General guidance for patients scheduled for elective surgery or endoscopy under anaesthesia. Always follow the specific instructions issued by Dr Tong Qian Jun and your surgeon.',
      steps: [
        {
          phase: 'Step 01',
          timeframe: 'Before Surgery Date',
          title: 'Medical History & Medication Review',
          guidance:
            'Inform Dr Tong and your surgeon of all regular medications, drug allergies, previous anaesthetic experiences, or sleep apnoea. Blood thinners (e.g., aspirin, clopidogrel, warfarin, DOACs) and certain diabetes medications require specific stopping timelines.',
        },
        {
          phase: 'Step 02',
          timeframe: '6 Hours Prior to Procedure',
          title: 'Solid Food & Milk Fasting',
          guidance:
            'Stop all solid food, milk, creamy beverages, and particulate drinks at least 6 hours before your scheduled procedure time to ensure stomach emptying and airway safety.',
        },
        {
          phase: 'Step 03',
          timeframe: '2 Hours Prior to Procedure',
          title: 'Clear Fluid Allowance & Nil-by-Mouth',
          guidance:
            'Plain water may typically be taken in small sips up to 2 hours before surgery unless advised otherwise. Strictly nothing by mouth (including water, sweets, or chewing gum) within the final 2 hours.',
        },
        {
          phase: 'Step 04',
          timeframe: 'Post-Procedure Discharge',
          title: 'Safe Recovery & Escort Arrangement',
          guidance:
            'For day-surgery or endoscopic sedation, arrange for a responsible adult to accompany you home. Do not drive, operate machinery, or sign legal documents for 24 hours after receiving anaesthesia.',
        },
      ],
    },
    bookingSection: {
      kicker: 'Appointments & Theatre Bookings',
      title: 'Book an Appointment via WhatsApp',
      subtitle:
        'Patients seeking a pre-anaesthesia consultation and surgical clinics arranging operating theatre cover can reach Mount Juniper Medical Pte Ltd directly via WhatsApp at +65 9780 8422.',
      directContactLabel: 'Direct WhatsApp & Enquiries',
      whatsappNumberDisplay: '+65 9780 8422',
      hoursNotice:
        'All anaesthetic consultations and operating theatre bookings are arranged by advance appointment.',
      form: {
        callerTypeLabel: 'Enquiry Type',
        callerTypes: {
          patient: 'Patient / Family Member',
          clinic: 'Surgeon / Clinic Coordinator',
        },
        nameLabel: 'Your Name / Clinic Name',
        namePlaceholder: 'e.g. Mr Tan / Orchard Orthopaedic Clinic',
        hospitalLabel: 'Preferred Private Hospital',
        hospitalPlaceholder: 'Select hospital',
        dateLabel: 'Planned Procedure / Consultation Date',
        procedureLabel: 'Scheduled Procedure / Anaesthesia Type',
        procedurePlaceholder: 'e.g. Knee Arthroscopy / Gastroscopy & Colonoscopy',
        notesLabel: 'Additional Clinical Notes (Optional)',
        notesPlaceholder: 'Any relevant medical conditions, preferred timing, or attending surgeon name',
        previewLabel: 'WhatsApp Message Preview',
        sendWhatsappBtn: 'Open WhatsApp (+65 9780 8422)',
        copyMessageBtn: 'Copy Booking Text',
        copiedConfirmation: 'Copied to clipboard',
      },
    },
    footer: {
      companyName: 'Mount Juniper Medical Pte Ltd (俊岭医疗)',
      mottoLine: 'Mons Jugis Magn · 俊岭医疗, 俊誉可靠, 腾愈安康',
      disclaimer:
        'All medical information on this page is strictly factual and intended for general educational reference. Mount Juniper Medical Pte Ltd provides specialist anaesthesia services across major private hospitals in Singapore.',
      copyright: `© ${new Date().getFullYear()} Mount Juniper Medical Pte Ltd. All rights reserved.`,
    },
  },
  zh: {
    nav: {
      services: '麻醉专科服务',
      doctor: '锺前俊医生',
      hospitals: '合作私立医院',
      publications: '学术与资质',
      booking: '预约咨询',
      whatsappCta: 'WhatsApp +65 9780 8422',
    },
    hero: {
      kicker: '俊岭医疗 Mount Juniper Medical Pte Ltd · 新加坡',
      clinicLegalName: 'Mount Juniper Medical Pte Ltd (俊岭医疗)',
      mottoLatin: 'Mons Jugis Magn',
      mottoChinese: '俊岭医疗, 俊誉可靠, 腾愈安康',
      mottoMeaning: '崇山峻岭 · 信誉可靠 · 安心康复',
      headline: '专注为新加坡各大私立医院提供专业手术麻醉与围术期医疗服务。',
      description:
        '俊岭医疗 (Mount Juniper Medical Pte Ltd) 由资深麻醉专科顾问医生 锺前俊医生 (Dr Tong Qian Jun，新加坡国立大学医学学士 MBBS、麻醉学医学硕士 MMed) 主理，致力于为新加坡各大私立医院的择期手术及内窥镜检查提供安全、精准、个体化的麻醉与镇痛管理。',
      primaryCta: '通过 WhatsApp 预约 (+65 9780 8422)',
      secondaryCta: '了解麻醉服务范围',
      keyFacts: [
        {
          label: '主理麻醉专科医生',
          value: '锺前俊医生 Dr Tong Qian Jun · MBBS, MMed',
        },
        {
          label: '临床专科领域',
          value: '全身麻醉、超声引导区域阻滞及内镜镇静',
        },
        {
          label: '预约与联络专线',
          value: '+65 9780 8422 (WhatsApp)',
        },
      ],
    },
    servicesSection: {
      kicker: '临床专科能力',
      title: '手术麻醉与围术期专科服务',
      description:
        '根据每位患者的生理状况与手术需求，量身定制严谨的麻醉与多模式镇痛方案，保障术中生命体征平稳与术后舒适康复。',
      items: [
        {
          number: '01.',
          title: '全身麻醉与全凭静脉麻醉 (General Anaesthesia & TIVA)',
          subtitle: '住院手术及日间手术全身麻醉',
          description:
            '涵盖骨科、普通外科、耳鼻喉科、泌尿科、妇科、整形外科及眼科等各类择期手术。采用精准靶控全凭静脉麻醉 (TIVA) 与麻醉深度监测，配合多模式止吐及镇痛方案，促进术后快速康复。',
          clinicalFocus: [
            '靶控输注全凭静脉麻醉 (TIVA) 技术',
            '全程血流动力学与麻醉深度精密监测',
            '加速康复外科 (ERAS) 多模式术后镇痛方案',
          ],
          featured: true,
        },
        {
          number: '02.',
          title: '超声引导区域麻醉与神经阻滞 (Regional Anaesthesia)',
          subtitle: '精准外周神经阻滞与术后镇痛优化',
          description:
            '运用实时高频超声影像引导，为四肢、肩关节、膝关节及躯干手术实施精准外周神经阻滞。显著降低术中及术后阿片类止痛药需求，提升术后早期舒适度与活动能力。',
          clinicalFocus: [
            '上肢臂丛神经及下肢外周神经精准超声阻滞',
            '骨科及关节手术多模式围术期镇痛',
            '减少术后恶心呕吐与阿片类药物副作用',
          ],
          featured: true,
        },
        {
          number: '03.',
          title: '监护性麻醉管理 (MAC) 与舒适化内窥镜镇静',
          subtitle: '胃肠镜检查、日间微创手术镇静监护',
          description:
            '为胃镜、结肠镜、支气管镜、白内障手术及各类微创介入检查提供安全、平稳的静脉镇静。由麻醉专科医生全程监测气道、呼吸二氧化碳波形及心血管功能。',
          clinicalFocus: [
            '无痛胃肠镜检查快速苏醒静脉镇静',
            '连续呼气末二氧化碳与血氧心电监护',
            '针对高龄及合并慢性病患者的个体化药物滴定',
          ],
        },
        {
          number: '04.',
          title: '高阶气道管理 (Advanced Airway Management)',
          subtitle: '复杂气道评估与安全护航',
          description:
            '具备丰富的复杂与困难气道临床处理经验，熟练应用视频喉镜、纤支镜引导插管及循证气道安全流程，为耳鼻喉科、颌面外科及头颈部手术提供坚实保障。',
          clinicalFocus: [
            '术前系统化气道风险评估',
            '视频喉镜与纤维支气管镜精细插管技术',
            '基于医学模拟训练验证的高标准气道应急预案',
          ],
        },
        {
          number: '05.',
          title: '术前麻醉评估与围术期医学优化',
          subtitle: '术前风险分层与慢性病用药指导',
          description:
            '在手术前全面评估患者心肺功能与基础疾病，提供清晰的术前停药指导（如抗血小板药、抗凝药、降糖药调整）与禁食禁水时间表，并与患者充分沟通麻醉方案。',
          clinicalFocus: [
            '术前慢性病状况评估与多学科协调',
            '围术期长期服药调整与安全核对',
            '清晰透明的麻醉风险与术后镇痛沟通',
          ],
        },
      ],
    },
    doctorSection: {
      kicker: '主理麻醉专科顾问医生',
      name: '锺前俊医生 (Dr Tong Qian Jun)',
      role: '麻醉专科顾问医生 · 俊岭医疗 (Mount Juniper Medical Pte Ltd)',
      qualificationsLine: 'MBBS (Singapore) · MMed (Anaesthesiology) (Singapore)',
      linkedinLabel: '查看 LinkedIn 认证档案',
      bioParagraphs: [
        '锺前俊医生 (Dr Tong Qian Jun) 毕业于新加坡国立大学 (NUS) 杨潞龄医学院，获医学学士与外科学士学位 (MBBS)，并于 2013 年取得新加坡国立大学麻醉学医学硕士学位 (MMed in Anaesthesiology)。',
        '在创立俊岭医疗 (Mount Juniper Medical Pte Ltd) 投身私立医疗服务之前，锺前俊医生曾任新加坡樟宜综合医院 (Changi General Hospital, CGH) 麻醉与外科重症监护科顾问医生 (Consultant)。他的临床亚专科方向聚焦于超声引导区域麻醉、高阶气道管理以及医学模拟教学。',
        '除临床医疗工作外，锺前俊医生长期致力于医学教育与围术期安全培训，曾担任新加坡国立大学杨潞龄医学院临床讲师 (Clinical Lecturer)、新加坡保健集团 (SingHealth) 麻醉学住院医师培训项目临床导师，以及 SingHealth Duke-NUS 学术医学中心模拟医学委员会成员。',
      ],
      credentialsTitle: '认证学术背景与临床履历',
      credentials: [
        {
          period: '现任',
          institution: '俊岭医疗 Mount Juniper Medical Pte Ltd',
          role: '主理麻醉专科顾问医生（服务新加坡各大私立医院）',
        },
        {
          period: '公立医院履历',
          institution: '新加坡樟宜综合医院 (Changi General Hospital)',
          role: '麻醉与外科重症监护科顾问医生 (Consultant)',
        },
        {
          period: '学术教职',
          institution: '新加坡国立大学 (NUS) 杨潞龄医学院',
          role: '临床讲师 (Clinical Lecturer)',
        },
        {
          period: '专科医师培训',
          institution: 'SingHealth Duke-NUS 学术医学中心',
          role: '麻醉学住院医师项目临床导师 · ACP 模拟医学委员会委员',
        },
        {
          period: '2013',
          institution: '新加坡国立大学 (National University of Singapore)',
          role: '麻醉学医学硕士 (MMed Anaesthesiology) · 内外全科医学学士 (MBBS)',
        },
      ],
      interestsTitle: '临床亚专科专长领域',
      interests: [
        '超声引导区域麻醉与神经阻滞',
        '高阶及困难气道管理',
        '全凭静脉麻醉 (TIVA)',
        '医学模拟与围术期患者安全',
        '日间手术及无痛内窥镜镇静',
      ],
      updatePhotoLabel: '上传医生标准肖像照',
      resetPhotoLabel: '恢复默认肖像照',
    },
    hospitalsSection: {
      kicker: '私立医院服务网络',
      title: '覆盖新加坡各大主要私立医院',
      description:
        '俊岭医疗 (Mount Juniper Medical Pte Ltd) 与众多外科专科诊所紧密合作，在新加坡各大主要私立医院手术室及日间手术中心提供高标准麻醉专科服务。',
      schedulingNote:
        '所有手术麻醉服务均通过您的主刀外科医生诊所及相应私立医院手术室提前预约协调安排。',
      hospitals: [
        {
          name: 'Thomson Medical Centre (康生医院)',
          area: '339 Thomson Road, Singapore',
          accreditationNote: '认证麻醉专科医生 · 择期非产科手术及日间微创检查麻醉',
        },
        {
          name: 'Farrer Park Hospital (斐瑞医院)',
          area: '1 Farrer Park Station Road, Connexion',
          accreditationNote: '住院手术室 · 内窥镜中心及日间手术中心麻醉服务',
        },
        {
          name: 'Mount Elizabeth Hospital (伊丽莎白医院 - 乌节)',
          area: '3 Mount Elizabeth, Singapore',
          accreditationNote: '各类大中型择期外科手术麻醉与围术期监护',
        },
        {
          name: 'Mount Elizabeth Novena Hospital (伊丽莎白诺维娜医院)',
          area: '38 Irrawaddy Road, Singapore',
          accreditationNote: '精准全凭静脉麻醉 (TIVA) 与超声引导区域神经阻滞',
        },
        {
          name: 'Gleneagles Hospital (鹰阁医院)',
          area: '6A Napier Road, Singapore',
          accreditationNote: '住院外科手术与日间手术专科麻醉管理',
        },
        {
          name: 'Mount Alvernia & Parkway East (安微尼亚山医院 / 百汇东岸医院)',
          area: '820 Thomson Road · 321 Joo Chiat Place',
          accreditationNote: '择期外科手术及舒适化内窥镜镇静支持',
        },
      ],
    },
    publicationsSection: {
      kicker: '学术发表与临床研究',
      title: '经核实的医学期刊文献与学术贡献',
      description:
        '严格遵循医疗信息真实透明原则，本页面不生成或展示未经核实的患者评价。以下为锺前俊医生 (Dr Tong Qian Jun) 在同行评审医学期刊及学术机构发表的部分临床研究：',
      items: [
        {
          year: '同行评审研究',
          journal: '新加坡樟宜综合医院 麻醉与外科重症监护科',
          title: '紧急环甲膜切开术与气道管理技术的对比实验研究 (Bench Study on Cricothyroidotomy Techniques)',
          context: '在模拟临床场景下对困难气道急救器械与操作效率进行循证评估。',
        },
        {
          year: '临床麻醉研究',
          journal: 'Open Journal of Anesthesiology / SingHealth 麻醉学系',
          title: '超声引导区域麻醉技术及围术期临床安全管理方案',
          context: '深入研究外周神经阻滞精准定位与科室高标准围术期流程管理。',
        },
        {
          year: '医学教育与培训',
          journal: 'Singapore Medical Journal (新加坡医学期刊) & SingHealth Duke-NUS',
          title: '麻醉与外科重症监护专科医师培训及模拟医学危机管理',
          context: '参与住院医师专科教学体系建设及手术室多学科应急模拟演练。',
        },
      ],
    },
    prepSection: {
      kicker: '患者术前须知',
      title: '择期手术麻醉前准备指南',
      description:
        '以下为接受择期手术或内窥镜镇静患者的常规术前准备指引。具体禁食时间及药物调整请务必以锺前俊医生 (Dr Tong Qian Jun) 及主刀医生为您出具的个体化医嘱为准。',
      steps: [
        {
          phase: '第一步',
          timeframe: '手术预约确认后',
          title: '病史沟通与长期服药核对',
          guidance:
            '请向麻醉医生及外科医生详细说明您的慢性病史、药物过敏史、既往麻醉史或睡眠呼吸暂停情况。抗凝血药/抗血小板药（如阿司匹林、波立维等）及部分降糖药需按医嘱提前特定天数停用。',
        },
        {
          phase: '第二步',
          timeframe: '手术前 6 小时',
          title: '停止进食固体食物与奶制品',
          guidance:
            '在预定手术或检查时间前至少 6 小时停止摄入任何固体食物、牛奶、豆浆或含果肉饮品，以确保胃部排空，保障麻醉期间气道安全。',
        },
        {
          phase: '第三步',
          timeframe: '手术前 2 小时',
          title: '清流质限制与完全禁水',
          guidance:
            '除特别医嘱外，术前 2 小时之前可少量饮用白开水。在手术前最后 2 小时内须严格禁食禁水（包括白开水、糖果及口香糖）。',
        },
        {
          phase: '第四步',
          timeframe: '术后复苏与出院安排',
          title: '安全苏醒与亲友陪同出院',
          guidance:
            '接受日间手术或无痛内窥镜镇静的患者，出院时须有一名成年亲友陪同。麻醉后 24 小时内请勿驾驶车辆、操作机械或签署重要法律文件。',
        },
      ],
    },
    bookingSection: {
      kicker: '预约咨询与手术室协调',
      title: '通过 WhatsApp 预约麻醉咨询',
      subtitle:
        '无论是需要术前麻醉评估的患者，或是安排手术麻醉排期的外科诊所协调员，均可通过 WhatsApp (+65 9780 8422) 直接联络俊岭医疗 (Mount Juniper Medical Pte Ltd)。',
      directContactLabel: 'WhatsApp 预约专线',
      whatsappNumberDisplay: '+65 9780 8422',
      hoursNotice:
        '所有术前麻醉评估与手术室麻醉服务均通过预约安排。',
      form: {
        callerTypeLabel: '联络身份',
        callerTypes: {
          patient: '患者 / 家属咨询',
          clinic: '外科医生 / 诊所协调员',
        },
        nameLabel: '您的姓名 / 外科诊所名称',
        namePlaceholder: '例如：陈先生 / 乌节骨科专科诊所',
        hospitalLabel: '拟进行手术的私立医院',
        hospitalPlaceholder: '请选择私立医院',
        dateLabel: '预计手术或咨询日期',
        procedureLabel: '拟进行的手术或麻醉类型',
        procedurePlaceholder: '例如：膝关节镜手术 / 无痛胃肠镜检查',
        notesLabel: '补充说明（选填）',
        notesPlaceholder: '可注明主刀外科医生姓名、意向时间段或需提前沟通的病史情况',
        previewLabel: 'WhatsApp 预约信息预览',
        sendWhatsappBtn: '打开 WhatsApp 发送预约 (+65 9780 8422)',
        copyMessageBtn: '复制预约内容',
        copiedConfirmation: '已复制到剪贴板',
      },
    },
    footer: {
      companyName: 'Mount Juniper Medical Pte Ltd (俊岭医疗)',
      mottoLine: 'Mons Jugis Magn · 俊岭医疗, 俊誉可靠, 腾愈安康',
      disclaimer:
        '本网站所载医疗信息均基于经核实的专业资料，仅供公众健康宣教与预约参考。俊岭医疗 (Mount Juniper Medical Pte Ltd) 专注于为新加坡各大私立医院提供手术麻醉专科服务。',
      copyright: `© ${new Date().getFullYear()} Mount Juniper Medical Pte Ltd 俊岭医疗私人有限公司. 保留所有权利。`,
    },
  },
};
