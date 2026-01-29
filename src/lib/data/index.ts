export const ENERGY_TIERS = ['ULV', 'LV', 'MV', 'HV', 'EV', 'IV', 'LuV', 'ZPM', 'UV'] as const;

export type EnergyTier = (typeof ENERGY_TIERS)[number];

const energyTierIndexOf = (tier: EnergyTier): number | null => ENERGY_TIERS.indexOf(tier) ?? null;

export const isEnergyTier = (str: string): str is EnergyTier =>
  energyTierIndexOf(str as EnergyTier) != null;

export function isEnergyTierBetween(
  val: EnergyTier,
  minTier?: EnergyTier,
  maxTier?: EnergyTier,
): boolean {
  const valIndex = energyTierIndexOf(val);
  if (valIndex == null) {
    return false;
  }
  if (minTier) {
    const minIndex = energyTierIndexOf(minTier);
    if (minIndex != null && valIndex < minIndex) {
      return false;
    }
  }
  if (maxTier) {
    const maxIndex = energyTierIndexOf(maxTier);
    if (maxIndex != null && maxIndex < valIndex) {
      return false;
    }
  }
  return true;
}

function SpeedCoeficient(recipeTier: EnergyTier, machineTier: EnergyTier): number | null {
  const recipeIndex = energyTierIndexOf(recipeTier);
  if (recipeIndex == null) {
    return null;
  }
  const machineIndex = energyTierIndexOf(machineTier);
  if (machineIndex == null) {
    return null;
  }
  if (recipeIndex > machineIndex) {
    return null;
  }
  return 1 << (machineIndex - recipeIndex);
}

export function machineSpeed(recipe: Recipe, machineTier: EnergyTier): number | null {
  const k = SpeedCoeficient(recipe.baseTier, machineTier);
  if (k == null) {
    return null;
  }
  return recipe.baseTimeSec / k;
}

export type Recipe = {
  name: string;
  input: { name: 'Charcoal'; amount: 1 };
  output: { name: 'Charcoal Dust'; amount: 1 };
  baseTimeSec: number;
  baseTier: EnergyTier;
  baseEnergyConsumption: number;
};

export type RecipeItem = {
  name: string;
  amount: number;
};
