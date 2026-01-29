<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import * as Select from '$lib/components/ui/select';
  import { machineSpeed, type EnergyTier, type Recipe } from '$lib/data';

  const recipe: Recipe = {
    name: 'Pyrolyse Oven',
    input: { name: 'Charcoal', amount: 1 },
    output: { name: 'Charcoal Dust', amount: 1 },
    baseTimeSec: 0.6,
    baseTier: 'ULV',
    baseEnergyConsumption: 2,
  };
  const selectedTier: EnergyTier = 'MV';
  const actualTimeSec = machineSpeed(recipe, selectedTier);
  const machineCnt = 1;
  console.log({ recipe, selectedTier, actualTimeSec, machineCnt });
</script>

<Card.Root class="w-full max-w-sm">
  <div class="text-center text-lg">
    {recipe.name}
  </div>

  <div>
    <div class="bg-red-400 p-1 text-center">Input</div>
    <div class="grid grid-cols-4 gap-1">
      <div class="col-span-2 text-right">{recipe.input.name}</div>
      <div class="col-span-1 text-right">{recipe.input.amount}</div>
    </div>
  </div>

  <div>
    <div class="bg-green-400 p-1 text-center">Output</div>
    <div class="grid grid-cols-4 gap-1">
      <div class="col-span-2 text-right">{recipe.output.name}</div>
      <div class="col-span-1 text-right">{recipe.output.amount}</div>
    </div>
  </div>

  <div>
    <div class="bg-orange-300 text-center">Recipe:</div>
    <div class="grid grid-cols-4 gap-1">
      <div class="col-span-2 text-right">Time:</div>
      <div class="col-span-1 text-right">{recipe.baseTimeSec}</div>
      <div class="col-span-1 text-left">sec</div>
    </div>
    <div class="grid grid-cols-4 gap-1">
      <div class="col-span-2 text-right">Voltage Tier:</div>
      <div class="col-span-2 text-center">{recipe.baseTier}</div>
    </div>
    <div class="grid grid-cols-4 gap-1">
      <div class="col-span-2 text-right">power usage:</div>
      <div class="col-span-1 text-right font-normal">{recipe.baseEnergyConsumption}</div>
      <div class="col-span-1 font-normal">EU/t</div>
    </div>
  </div>

  <div>
    <div class="bg-blue-400 text-center text-white">Selected:</div>

    <div class="grid grid-cols-4 items-center gap-1">
      <div class="col-span-2 text-right"><div>Voltage Tier:</div></div>
      <div class="col-span-2 m-1">
        <Select.Root type="single">
          <Select.Trigger class="w-full">
            {selectedTier}
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="ULV">ULV</Select.Item>
            <Select.Item value="LV">LV</Select.Item>
            <Select.Item value="MV">MV</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-1">
      <div class="col-span-2 text-right">Time:</div>
      <div class="col-span-1 text-right">{actualTimeSec}</div>
      <div class="col-span-1">sec</div>
    </div>

    <div class="grid grid-cols-4 gap-1">
      <div class="col-span-2 text-right">Number of machines:</div>
      <div class="col-span-1 text-right">{machineCnt}</div>
    </div>
  </div>
</Card.Root>
