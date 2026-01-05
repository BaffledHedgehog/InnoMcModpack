console.info('huy1')
ServerEvents.recipes(event => {
console.log("huy2")

     event.shaped('minecraft:diamond', [
         'GGG',
         'GIG',
         'GGG'
     ], {
         G: 'minecraft:gold_ingot',
         I: 'minecraft:iron_ingot'
     })

     event.shapeless('4x minecraft:apple', ['minecraft:oak_leaves', 'minecraft:sugar'])


     event.recipes.create.pressing('create:golden_sheet', 'minecraft:gold_ingot')

     event.recipes.create.deploying('minecraft:golden_apple', ['minecraft:apple', 'minecraft:gold_ingot'])


     event.recipes.create.mechanical_crafting('minecraft:netherite_ingot', [
         ' GGG ',
         'GNDNG',
         ' GGG '
     ], {
         G: 'minecraft:gold_ingot',
         N: 'minecraft:netherite_scrap',
         D: 'minecraft:diamond'
     })


     event.recipes.create.sequenced_assembly([
         Item.of('minecraft:netherite_helmet'),
     ], 'minecraft:diamond_helmet', [ 
         event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:netherite_scrap']),
         event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'),
         event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:netherite_ingot'])
     ]).transitionalItem('create:incomplete_precision_mechanism') 
       .loops(3) 

     event.recipes.create.mixing('2x minecraft:blaze_powder', [
         'minecraft:blaze_rod',
         'minecraft:sulfur'
     ]).heated()


     event.recipes.create.mechanical_crafting('ccbr:basic_integrated_circuit', [
         ' GGG ',
         'GNDNG',
         ' GGG '
     ], {
         G: 'minecraft:gold_ingot',
         N: 'minecraft:netherite_scrap',
         D: 'minecraft:diamond'
     })

 })