<script lang="ts">
  import * as Select from '$lib/components/ui/select';
  import { ENERGY_TIERS, isEnergyTier, isEnergyTierBetween } from '$lib/data';
  import { type EnergyTierSelectorProps } from './index.ts';

  let { minTier, maxTier, value = $bindable('ULV') }: EnergyTierSelectorProps = $props();

  const items = ENERGY_TIERS.filter((item) => isEnergyTierBetween(item, minTier, maxTier)).map(
    (item) => ({ value: item, label: item }),
  );
</script>

<Select.Root
  type="single"
  {value}
  onValueChange={(newValue) => (value = isEnergyTier(newValue) ? newValue : value)}
  {items}
>
  <Select.Trigger class="w-full text-center">
    {value}
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="ULV">ULV</Select.Item>
    <Select.Item value="LV">LV</Select.Item>
    <Select.Item value="MV">MV</Select.Item>
  </Select.Content>
</Select.Root>
