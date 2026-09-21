export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export const steps: MethodStep[] = [
  {
    number: "01",
    title: "Audit & ICP",
    description:
      "On décortique votre marché, vos clients idéaux et vos concurrents. On définit ensemble le profil parfait à cibler.",
  },
  {
    number: "02",
    title: "Script & Training",
    description:
      "Rédaction de scripts testés et itérés. Nos callers sont formés spécifiquement sur votre offre et votre tonalité.",
  },
  {
    number: "03",
    title: "Lancement campagnes",
    description:
      "On compose les numéros. Chaque appel est tracké, chaque objection documentée, chaque opportunité qualifiée.",
  },
  {
    number: "04",
    title: "RDV qualifiés livrés",
    description:
      "Vous recevez des rendez-vous dans votre agenda avec des prospects qualifiés, prêts à discuter.",
  },
];
