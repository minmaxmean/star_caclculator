<script lang="ts">
  import type { Recipe } from '$lib/data';
  import MachineCard from '$lib/components/MachineCard/MachineCard.svelte';
  const recipe: Recipe = {
    name: 'Pyrolyse Oven',
    input: { name: 'Charcoal', amount: 1 },
    output: { name: 'Charcoal Dust', amount: 1 },
    baseTimeSec: 0.6,
    baseTier: 'ULV',
    baseEnergyConsumption: 2,
  };
  const machineCount = 1;
</script>

<MachineCard {recipe} {machineCount} />
