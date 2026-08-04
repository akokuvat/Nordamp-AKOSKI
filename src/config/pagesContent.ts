export interface PageSection {
  heading: string;
  paras?: string[];
  list?: string[];
  box?: { k?: string; text: string };
}

export interface PageData {
  group: 'Who We Are' | 'What We Do';
  title: string;
  lead: string;
  sections: PageSection[];
  related?: string[];
  note?: string;
}

export const pages: Record<string, PageData> = {
  // ---------------- WHO WE ARE ----------------
  'this-is-nordamp': {
    group: 'Who We Are',
    title: 'This is Nordamp Energy',
    lead: 'An independent owner\u2019s engineer and electrical-safety advisory for the Nordic energy build-out \u2014 grid, nuclear and industry across Finland, Sweden and Norway.',
    sections: [
      {
        heading: 'What we are',
        paras: [
          'Nordamp Energy is the expertise layer that big rental houses and EPC contractors don\u2019t provide. We sit on the owner\u2019s side of the table \u2014 protecting the owner\u2019s interest from the first drawing to the final handover, so the delivered plant matches what was paid for.',
          'We are not a contractor and not a manufacturer. We sell judgement, method and named responsibility: design review, commissioning management, electrical safety and regulatory documentation.',
        ],
      },
      {
        heading: 'How we are built',
        paras: [
          'Nordamp Energy is a service brand delivered through two established Nordic operating entities. Finnish engagements run through Nordamp Oy; Swedish and Norwegian engagements through AKOSKI AB.',
          'The work stands on the founders\u2019 combined engineering history across the Nordics \u2014 on both the supplier and the owner side of major energy projects: hydro and wind, fluidised-bed boilers, CHP and district heating, and full EPC delivery and handover.',
        ],
      },
      {
        heading: 'Why independence matters',
        paras: [
          'When the engineer answers to the vendor, the owner carries the risk. We answer only to the owner. That independence is the whole point \u2014 and, combined with fluency in three national electrical-safety regimes, it is rare.',
        ],
      },
    ],
    related: ['creating-the-future', 'strategy', 'services'],
  },

  'creating-the-future': {
    group: 'Who We Are',
    title: '#\u2026Creating the Future',
    lead: 'The Nordic energy transition is the largest industrial build-out in a generation. It has to be delivered safely, and to standard. That is the future we help create.',
    sections: [
      {
        heading: 'The transition we serve',
        paras: [
          'Sweden is reinforcing its transmission grid on a historic scale, committing to new nuclear, and building fossil-free steel and hydrogen in the north. Norway is renewing hydropower and electrifying industry. Finland is expanding grid, industry and clean generation.',
          'This is hundreds of billions in investment \u2014 and every krona of it has to be engineered, commissioned and proven safe. The build is the easy part to fund and the hard part to execute.',
        ],
      },
      {
        heading: 'What we believe',
        paras: [
          'Safety and independence are not add-ons \u2014 they are the product. A plant that is delivered but not proven is a liability. A plant proven to standard, on the owner\u2019s terms, is an asset.',
          'The energy future will be built by people who can translate between design intent, regulation and the physical plant. That translation is our craft.',
        ],
      },
      {
        heading: 'The future we build toward',
        paras: [
          'A Nordic energy sector where owners have an independent partner who de-risks the whole lifecycle \u2014 and where hard-won engineering judgement is captured as method and software, not lost between projects.',
        ],
      },
    ],
    related: ['this-is-nordamp', 'strategy', 'digital-ai'],
  },

  values: {
    group: 'Who We Are',
    title: 'Our Values',
    lead: 'Six commitments that decide how we take on \u2014 and how we hand back \u2014 every engagement.',
    sections: [
      {
        heading: 'What we stand for',
        list: [
          'Independence \u2014 we represent the owner, never the vendor. No conflicts, no hidden loyalties.',
          'Safety first \u2014 electrical, radiation and regulatory safety come before schedule and before ego.',
          'Rigour \u2014 commissioning and handover done to method: checklists, testing, sign-off, evidence.',
          'Straight talk \u2014 we tell owners where the risk actually is, even when it is not what they hoped to hear.',
          'Nordic craftsmanship \u2014 fluent across FI, SE and NO codes; grounded in real plant, not slideware.',
          'Build to last \u2014 we capture judgement as method and software, so it compounds instead of evaporating.',
        ],
      },
    ],
    related: ['this-is-nordamp', 'strategy', 'management'],
  },

  strategy: {
    group: 'Who We Are',
    title: 'Our Strategy',
    lead: 'Win the narrow, high-value expertise layer of the Nordic build-out \u2014 the part that is scarce, regulated and hard to replace \u2014 and expand from proven references.',
    sections: [
      {
        heading: 'Positioning',
        paras: [
          'We do not compete on capital. The generator- and equipment-heavy end is owned by large rental groups. We compete on the layer above it: named electrical-safety responsibility, independent design review, commissioning and handover, and regulatory documentation \u2014 higher margin, scarce, and defensible by expertise rather than balance sheet.',
        ],
      },
      {
        heading: 'Three markets, one methodology',
        paras: [
          'One method and one body of IP, sold across three markets. Finland is the home base and reference ground. Sweden is the largest pool of work \u2014 grid, new nuclear and fossil-free industry. Norway adds grid, hydropower and industry electrification, and diversifies currency exposure across EUR, SEK and NOK.',
        ],
      },
      {
        heading: 'The expertise layer is the moat',
        paras: [
          'Being genuinely tri-national on electrical-safety regimes \u2014 Tukes/STUK and SFS 6002 in Finland, Elsäkerhetsverket/SSM and ESA/SS-EN 50110 in Sweden, DSB/FSE and NEK in Norway \u2014 is rare and sellable. We translate between regimes for owners operating cross-border.',
        ],
      },
      {
        heading: 'From services to product',
        paras: [
          'Hard-won judgement becomes method, and method becomes software \u2014 commissioning and handover tooling, OEE and reliability analytics, alarm and compliance tools. Services fund the product; the product makes the services scale.',
        ],
      },
      {
        heading: 'Phased growth',
        paras: [
          'Reference-first, not market-first. Prove the method in Finland, open Sweden against a concrete lead, and enter Norway only once Sweden delivers. Never open a market before there is a client in sight.',
        ],
      },
    ],
    related: ['this-is-nordamp', 'services', 'digital-ai'],
  },

  management: {
    group: 'Who We Are',
    title: 'Management',
    lead: 'A small, senior team combining energy-automation engineering, electrical and radiation safety, commissioning discipline and a Nordic network.',
    sections: [
      {
        heading: 'Founder & principal engineer',
        paras: [
          'An automation and electrical engineer (EI&C) with hands-on energy-sector delivery \u2014 hydro and wind, fluidised-bed boilers, CHP and district heating \u2014 on EPC projects, on both the supplier and the owner side. Fluent in electrical-safety regulation (ESA, Elsäkerhetslagen) and radiation safety (STUK), with working command of OEE, root-cause analysis, ISA-18.2 alarm management and ISO 10816.',
        ],
        box: { k: 'Placeholder', text: 'Name, title and photo to be added. Fill in from your own details.' },
      },
      {
        heading: 'Senior technical authority',
        paras: [
          'A broad, senior energy and electrical background provides the technical-authority and sign-off function \u2014 design and handover review, named responsible-person duties, and mentoring that turns experience into documented method rather than tacit knowledge.',
        ],
      },
      {
        heading: 'Finance & operations',
        paras: [
          'Commercial and operational management \u2014 contracts, invoicing across entities and currencies, and the back office that keeps a lean advisory firm compliant in three jurisdictions.',
        ],
      },
      {
        heading: 'Advisory network',
        paras: [
          'A Nordic network of asset owners, EPCs and OEMs across the energy sector \u2014 the warm doors that turn capability into engagements.',
        ],
      },
    ],
    related: ['this-is-nordamp', 'values', 'strategy'],
  },

  // ---------------- WHAT WE DO ----------------
  services: {
    group: 'What We Do',
    title: 'Services',
    lead: 'The full project lifecycle from the owner\u2019s side \u2014 advise, review, commission, assure. Each service is available as a standalone engagement.',
    sections: [
      {
        heading: 'What we deliver',
        list: [
          'Owner\u2019s engineer \u2014 scope, design and vendor management so the delivered plant matches the contract.',
          'Commissioning & handover \u2014 structured commissioning, punch/snag control, testing and handover documentation.',
          'Electrical safety & named responsibility \u2014 named responsible-person duties as a service, safety cases, and compliance to ESA, SS-EN 50110, FSE and SFS 6002.',
          'Design review & studies \u2014 independent review of electrical design and contracts: earthing, protection, sizing, constructability.',
          'Alarm rationalisation (ISA-18.2) \u2014 audit and reduce alarm floods and operator overload.',
          'Regulatory & compliance \u2014 documentation and liaison for Tukes, SSM and DSB.',
        ],
      },
      {
        heading: 'How we engage',
        paras: [
          'A real sequence, not a menu. Advise (owner-side studies and requirement-setting) \u2192 Review (independent design and contract review) \u2192 Commission (on-site management, testing and named safety responsibility through energisation) \u2192 Assure (structured handover, as-built documentation and compliance sign-off). Each phase de-risks the next, and any phase can stand alone.',
        ],
      },
    ],
    related: ['electrification-automation', 'maintenance', 'radiation'],
  },

  'electrification-automation': {
    group: 'What We Do',
    title: 'Electrification & Automation',
    lead: 'The core discipline: control systems, instrumentation, power distribution and electrical safety \u2014 from design review to energisation.',
    sections: [
      {
        heading: 'Control & automation',
        paras: [
          'Control-system engineering and review across PLC and DCS platforms (including TIA Portal), instrumentation and field devices, control narratives and factory/site acceptance testing. We bring alarm management (ISA-18.2) and functional-safety thinking into the design, not as an afterthought.',
        ],
      },
      {
        heading: 'Electrical & power',
        paras: [
          'Electrical design and construction review for LV and MV systems, substations and grid connection: earthing, protection coordination, sizing and constructability \u2014 catching risk on paper before it is built in.',
        ],
      },
      {
        heading: 'Electrical safety & compliance',
        paras: [
          'Named electrical-safety responsibility as a service and compliance across the Nordic codes \u2014 ESA and SS-EN 50110 in Sweden, FSE in Norway, SFS 6002 in Finland \u2014 including safe-working documentation and switching/energisation support.',
        ],
      },
      {
        heading: 'Alarm rationalisation (ISA-18.2)',
        paras: [
          'Alarm floods overload operators and hide real events. We audit and rationalise control-system alarms against ISA-18.2, scoring alarm load and rebuilding a manageable, prioritised alarm system.',
        ],
      },
    ],
    related: ['services', 'maintenance', 'digital-ai'],
  },

  radiation: {
    group: 'What We Do',
    title: 'Radiation',
    lead: 'Radiation-safety advisory for industrial and nuclear sites \u2014 sealed sources, regulatory duties and documentation, across the Finnish (STUK) and Swedish (SSM) regimes.',
    sections: [
      {
        heading: 'Radiation-safety advisory',
        paras: [
          'Advisory for licensed radiation practice: radiation-protection programmes, risk assessments for sealed sources, and the named radiation-safety officer (STV) and radiation-safety expert (STA) functions that Finnish licence-holders are required to appoint. Equivalent support for the Swedish SSM regime.',
        ],
      },
      {
        heading: 'Source management & documentation',
        paras: [
          'Structured management of industrial sealed sources \u2014 nuclide, activity, serial, certificate, location and security class \u2014 with leak-test and lifecycle schedules, a document vault for licences and RP programmes, deadline reminders and audit-ready reports. Available as a dedicated source-register software product.',
        ],
      },
      {
        heading: 'Nuclear readiness',
        paras: [
          'As Sweden moves toward new reactors, radiation-safety competence becomes scarce and decisive. We support safety-case documentation, control plans and the parallel reading of SSM safety rules and building regulations that makes nuclear projects uniquely documentation-heavy.',
        ],
      },
    ],
    note: 'Radiation practice is legally regulated. Specific licence and competence requirements must be confirmed with STUK, SSM or a qualified adviser for each case \u2014 this is not legal advice.',
    related: ['services', 'maintenance', 'digital-ai'],
  },

  maintenance: {
    group: 'What We Do',
    title: 'Maintenance',
    lead: 'Reliability and performance for energy and process plants \u2014 turning downtime, faults and vibration into a plan that keeps assets running.',
    sections: [
      {
        heading: 'Reliability & OEE',
        paras: [
          'Overall equipment effectiveness, downtime and fault-distribution analysis for CHP, biomass, district-heating and process plants \u2014 the practical reliability layer that smaller plants need but rarely get from enterprise historians.',
        ],
      },
      {
        heading: 'Root-cause analysis',
        paras: [
          'Structured root-cause analysis that links recurring failures to their real drivers \u2014 and to design, operating or maintenance fixes \u2014 rather than firefighting the same fault twice.',
        ],
      },
      {
        heading: 'Condition & standards',
        paras: [
          'Condition monitoring and vibration assessment against ISO 10816, alarm management against ISA-18.2, and spare-parts and asset-strategy review \u2014 grounded in the relevant standards.',
        ],
      },
      {
        heading: 'Turnaround & shutdown support',
        paras: [
          'Planning and technical support for outages and turnarounds, and the commissioning-to-operations handover that decides whether a restart is smooth or a scramble.',
        ],
      },
    ],
    related: ['electrification-automation', 'services', 'digital-ai'],
  },

  'paper-and-pulp': {
    group: 'What We Do',
    title: 'Paper & Pulp',
    lead: 'Power island, automation and electrical-safety expertise for pulp and paper mills \u2014 built on real EPC delivery of boiler and CHP plant.',
    sections: [
      {
        heading: 'Boilers & power island',
        paras: [
          'Hands-on experience with fluidised-bed (BFB/CFB) and biomass boilers, CHP and the mill power island \u2014 from design review through commissioning \u2014 delivered on EPC projects with major suppliers.',
        ],
      },
      {
        heading: 'Automation & controls upgrades',
        paras: [
          'Control-system reviews and upgrades, instrumentation, and alarm rationalisation (ISA-18.2) for mill environments where alarm floods and operator overload are a daily reality.',
        ],
      },
      {
        heading: 'Commissioning & handover',
        paras: [
          'Owner-side commissioning management, punch/snag control and handover documentation \u2014 so new or rebuilt plant starts up predictably and is proven before it is accepted.',
        ],
      },
      {
        heading: 'Electrical safety in mills',
        paras: [
          'Named electrical-safety responsibility and compliance in demanding, high-availability mill environments across the Nordic codes.',
        ],
      },
    ],
    related: ['electrification-automation', 'maintenance', 'services'],
  },

  'renewable-energy': {
    group: 'What We Do',
    title: 'Renewable Energy Solutions',
    lead: 'Hydro, wind, biomass and hydrogen \u2014 electrification, controls, grid connection and commissioning for clean generation.',
    sections: [
      {
        heading: 'Hydropower',
        paras: [
          'Refurbishment support, controls and electrical review for hydropower \u2014 grounded in direct experience with Nordic hydro operators \u2014 and the commissioning discipline that ageing plant renewals demand.',
        ],
      },
      {
        heading: 'Wind',
        paras: [
          'Electrical and controls review, grid connection and commissioning support for onshore and offshore wind \u2014 with the electrical-safety responsibility that construction and energisation require.',
        ],
      },
      {
        heading: 'Biomass & CHP',
        paras: [
          'Boiler, CHP and district-heating expertise for biomass and waste-to-energy plants \u2014 design review, automation and handover from people who have delivered these plants.',
        ],
      },
      {
        heading: 'Grid connection & hydrogen',
        paras: [
          'Substation and grid-connection review for new generation, and electrical/controls support for electrolysis and hydrogen \u2014 the fast-growing edge of the Nordic transition.',
        ],
      },
    ],
    related: ['electrification-automation', 'services', 'paper-and-pulp'],
  },

  agriculture: {
    group: 'What We Do',
    title: 'Agriculture',
    lead: 'Energy and automation for farms and agri-industry \u2014 electrification, on-site renewables, controls and grid connection.',
    sections: [
      {
        heading: 'On-farm electrification',
        paras: [
          'Electrical design review, power distribution and safety for farm and agri-industrial sites \u2014 bringing plant-grade electrical discipline to a sector that is electrifying fast.',
        ],
      },
      {
        heading: 'Biogas & renewables',
        paras: [
          'Support for on-farm biogas, solar and storage \u2014 controls, grid connection and commissioning \u2014 turning agricultural sites into small energy producers.',
        ],
      },
      {
        heading: 'Automation & controls',
        paras: [
          'Automation and instrumentation for agricultural processes and drying, and the reliability and alarm-management thinking that keeps them running.',
        ],
      },
      {
        heading: 'Energy efficiency & grid connection',
        paras: [
          'Energy-efficiency review and grid-connection support \u2014 helping farms cut cost, add generation and connect safely.',
        ],
      },
    ],
    related: ['renewable-energy', 'electrification-automation', 'digital-ai'],
  },

  'digital-ai': {
    group: 'What We Do',
    title: 'Digital & AI',
    lead: 'Software built by domain experts who lived the problems \u2014 commissioning, reliability, alarms and compliance, with AI-assisted diagnostics.',
    sections: [
      {
        heading: 'Commissioning & handover software',
        paras: [
          'A tool for what today still lives in Excel: checklists, snag/defect lists, warranty tracking and handover documentation in one place \u2014 for plant owners and smaller EPCs. The domain knowledge is the moat, not the code.',
        ],
      },
      {
        heading: 'OEE & reliability analytics',
        paras: [
          'A lightweight OEE and fault-log tool for smaller energy and process plants that need downtime distribution, RCA libraries and a world-class benchmark without an enterprise historian.',
        ],
      },
      {
        heading: 'Alarm & compliance tooling',
        paras: [
          'ISA-18.2 alarm rationalisation tooling, sealed-source registers with automated deadline reminders, and audit-ready compliance documentation \u2014 narrow, standard-driven products for genuinely painful problems.',
        ],
      },
      {
        heading: 'AI-assisted diagnostics',
        paras: [
          'AI applied where it earns its place: surfacing patterns in fault and alarm data, drafting documentation and speeding diagnosis \u2014 with EU data residency, GDPR and OT/IT security treated as first-order requirements.',
        ],
      },
    ],
    related: ['maintenance', 'electrification-automation', 'services'],
  },

  projects: {
    group: 'What We Do',
    title: 'Projects',
    lead: 'The kinds of engagements we take on across the Nordic build-out. Named references will be added as they are delivered.',
    sections: [
      {
        heading: 'Engagement types',
        list: [
          'Grid \u2014 substation and transmission commissioning, design review and named electrical-safety responsibility.',
          'Nuclear \u2014 SMR and reactor safety-case readiness, radiation-safety and regulatory documentation.',
          'Green steel & industry \u2014 process electrification, automation and commissioning/handover.',
          'Hydropower \u2014 refurbishment support, controls and electrical review.',
          'Pulp & paper \u2014 boiler and CHP upgrades, automation and alarm rationalisation.',
        ],
      },
      {
        heading: 'Selected engagements',
        paras: [
          'Case studies are in preparation. As projects are delivered, each will be documented here \u2014 scope, role, standards applied and outcome \u2014 with client permission.',
        ],
        box: { k: 'Placeholder', text: 'Add real project cards here (client, sector, scope, result) as references accumulate.' },
      },
    ],
    related: ['services', 'electrification-automation', 'radiation'],
  },
};

export const slugTitles: Record<string, string> = Object.fromEntries(
  Object.entries(pages).map(([slug, p]) => [slug, p.title])
);
