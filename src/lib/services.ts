export type ServiceInfo = {
  title: string;
  image: string;
  desc: string;
};

/**
 * Every service page, keyed by path — the single place the "Related services"
 * cards read their title, photo and one-line description from.
 */
export const SERVICES: Record<string, ServiceInfo> = {
  "/services/auto-locksmith": {
    title: "Auto Locksmith Services",
    image: "/assets/images/ag-service-locksmith.jpg",
    desc: "Vehicle lockouts, lost car keys, car key replacement, spare keys, key coding, remote programming and keyless entry support.",
  },
  "/services/vehicle-coding-diagnostics": {
    title: "Vehicle Coding & Diagnostics",
    image: "/assets/images/ag-service-coding.webp",
    desc: "Advanced vehicle diagnostics, fault code reading, ECU coding, module programming and electronic fault finding.",
  },
  "/services/residential-locksmith": {
    title: "Residential Locksmith Services",
    image: "/assets/images/ag-service-residential.webp",
    desc: "Household lock repairs, lock replacements, key cutting and emergency home lockout assistance.",
  },
  "/services/ghost-immobiliser": {
    title: "Ghost Immobiliser Installation",
    image: "/assets/images/ag-service-immobiliser.webp",
    desc: "Ghost immobiliser installation designed to protect your vehicle against key cloning, relay theft and unauthorised use.",
  },
  "/services/vag-specialist": {
    title: "VAG Specialist Coding",
    image: "/assets/images/ag-service-coding.webp",
    desc: "Audi, Volkswagen, SEAT and Škoda coding, retrofitting and troubleshooting.",
  },
  "/services/auto-locksmith/lost-car-keys": {
    title: "Lost Car Keys",
    image: "/assets/images/service-lost-car-keys.webp",
    desc: "Lost your car keys? We provide replacement keys and programming for many vehicle makes and models.",
  },
  "/services/auto-locksmith/spare-keys": {
    title: "Spare Car Keys",
    image: "/assets/images/service-spare-car-keys.png",
    desc: "Protect against future lockouts with a professionally cut and programmed spare car key.",
  },
  "/services/auto-locksmith/vehicle-lockouts": {
    title: "Vehicle Lockouts",
    image: "/assets/images/service-vehicle-lockouts.webp",
    desc: "Fast, non-destructive vehicle entry when your keys are locked inside your car.",
  },
  "/services/auto-locksmith/key-programming": {
    title: "Key Programming & Smart Keys",
    image: "/assets/images/service-key-programming.webp",
    desc: "Professional key programming, remote coding and smart key solutions for compatible vehicles.",
  },
  "/services/auto-locksmith/broken-key-extraction": {
    title: "Broken Key Extraction",
    image: "/assets/images/service-broken-key-extraction.webp",
    desc: "Safe removal of broken keys from vehicle locks and ignitions without unnecessary damage.",
  },
  "/services/auto-locksmith/ignition-repair": {
    title: "Ignition Repair",
    image: "/assets/images/service-ignition-repair.webp",
    desc: "Ignition repair and replacement services for worn, damaged or faulty ignition systems.",
  },
  "/services/residential-locksmith/emergency-home-lockouts": {
    title: "Emergency Home Lockouts",
    image: "/assets/images/ag-service-residential.webp",
    desc: "Locked out of your home? We reach you fast and get you back inside without unnecessary damage.",
  },
  "/services/residential-locksmith/lock-repairs": {
    title: "Lock Repairs",
    image: "/assets/images/lockrepair.webp",
    desc: "Sticking, seized or faulty locks repaired so your doors lock and unlock smoothly again.",
  },
  "/services/residential-locksmith/lock-replacements": {
    title: "Lock Replacements",
    image: "/assets/images/lockreplacement.jpg",
    desc: "New locks supplied and fitted, from upgrades to insurance-approved and anti-snap cylinders.",
  },
  "/services/residential-locksmith/household-key-cutting": {
    title: "Household Key Cutting",
    image: "/assets/images/keycutting.jpg",
    desc: "Spare and replacement house keys cut accurately on-site for family, tenants or lodgers.",
  },
  "/services/vehicle-coding-diagnostics/advanced-diagnostics": {
    title: "Advanced Vehicle Diagnostics",
    image: "/assets/images/vehdiag.webp",
    desc: "Dealer-level diagnostic scans to pinpoint electrical, engine and system faults across your vehicle.",
  },
  "/services/vehicle-coding-diagnostics/fault-code-reading": {
    title: "Fault Code Reading & Clearing",
    image: "/assets/images/service-fault-code-reading.png",
    desc: "Read, interpret and clear stored fault codes so you know exactly what's wrong and what to fix.",
  },
  "/services/vehicle-coding-diagnostics/ecu-coding": {
    title: "ECU Coding",
    image: "/assets/images/service-ecu-coding.png",
    desc: "Coding and reprogramming of engine control units for repairs, replacements and feature changes.",
  },
  "/services/vehicle-coding-diagnostics/gearbox-coding": {
    title: "Gearbox Coding",
    image: "/assets/images/service-gearbox-coding.png",
    desc: "Transmission control unit coding and adaptation for smooth, correct gearbox operation.",
  },
  "/services/vehicle-coding-diagnostics/module-programming": {
    title: "Module Programming",
    image: "/assets/images/service-module-programming.png",
    desc: "Programming and coding of control modules when units are added, replaced or retrofitted.",
  },
  "/services/vehicle-coding-diagnostics/apple-carplay-activation": {
    title: "Apple CarPlay Activation",
    image: "/assets/images/service-apple-carplay-activation.png",
    desc: "Activate or retrofit Apple CarPlay and other hidden features on compatible vehicles.",
  },
};
