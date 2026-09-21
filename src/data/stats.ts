export interface Stat {
  value: number;
  suffix: string;
  label: string;
  comparison: string;
}

export const stats: Stat[] = [
  {
    value: 20,
    suffix: "%",
    label: "d'appels connectés",
    comparison: "vs 4-7% en moyenne",
  },
  {
    value: 12,
    suffix: "",
    label: "RDV qualifiés / mois",
    comparison: "par caller dédié",
  },
  {
    value: 47,
    suffix: "+",
    label: "Entreprises accompagnées",
    comparison: "depuis 2024",
  },
  {
    value: 94,
    suffix: "%",
    label: "Taux de rétention client",
    comparison: "renouvellement mensuel",
  },
];
