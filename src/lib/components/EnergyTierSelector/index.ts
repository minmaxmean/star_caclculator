import { type EnergyTier } from '$lib/data';

export type EnergyTierSelectorProps = {
  minTier?: EnergyTier;
  maxTier?: EnergyTier;
  value: EnergyTier;
};
