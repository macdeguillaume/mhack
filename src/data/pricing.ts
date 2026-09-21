export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "2 900€",
    period: "/mois",
    description: "Idéal pour tester le cold call externalisé.",
    features: [
      "1 caller dédié",
      "~400 appels/mois",
      "Script & ICP personnalisé",
      "Reporting hebdo",
      "CRM intégré",
    ],
    cta: "Démarrer",
  },
  {
    name: "Growth",
    price: "5 500€",
    period: "/mois",
    description: "Pour scaler votre acquisition B2B.",
    features: [
      "2 callers dédiés",
      "~900 appels/mois",
      "A/B test scripts",
      "Reporting quotidien",
      "Enrichissement data",
      "Account Manager dédié",
    ],
    cta: "Choisir Growth",
    popular: true,
  },
  {
    name: "Scale",
    price: "Sur mesure",
    period: "",
    description: "Pour les équipes ambitieuses.",
    features: [
      "Équipe custom (3+ callers)",
      "Volume illimité",
      "Multi-campagnes simultanées",
      "Intégration CRM avancée",
      "Formation équipe interne",
      "SLA & engagement résultats",
    ],
    cta: "Nous contacter",
  },
];
