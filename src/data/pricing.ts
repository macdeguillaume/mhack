export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
}

export const plan: PricingPlan = {
  name: "Head of Sales externalisé",
  price: "3 000€",
  period: "/mois",
  description: "Stratégie, systèmes et exécution. Le package complet.",
  features: [
    "Audit stratégique & ICP",
    "Scripts d'appel sur mesure",
    "Setup CRM & enrichissement data",
    "Cold calls quotidiens",
    "Reporting hebdo",
    "Itérations continues",
    "Sans engagement annuel",
  ],
  cta: "Réserver un call",
};
