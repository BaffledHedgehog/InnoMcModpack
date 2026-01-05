ServerEvents.recipes(event => {
    event.remove({ output: 'computercraft:computer_normal' })
    event.recipes.create.mechanical_crafting('computercraft:computer_normal', [
    ' PPPPP ',
    'PCWNWCP',
    'PWBLBWP',
    'PNLTLNP',
    'PWBLBWP',
    'PCWNWCP',
    ' PPPPP '
    ], {
        P: 'create:iron_sheet',
        C: 'create_connected:control_chip',
        W: 'tfmg:copper_wire',
        N: 'computercraft:cable',
        B: 'tfmg:circuit_board',
        L: 'integrateddynamics:logic_director',
        T: 'integratedscripting:part_terminal_scripting'
    })
    event.remove({ output: 'computercraft:computer_advanced' })
    event.recipes.create.sequenced_assembly([
        Item.of('computercraft:computer_advanced'),
     ], 'computercraft:computer_normal', [ 
        event.recipes.createDeploying('computercraft:computer_normal', ['computercraft:computer_normal', 'tfmg:circuit_board']),
        event.recipes.createDeploying('computercraft:computer_normal', ['computercraft:computer_normal', 'integrateddynamics:cable']),
        event.recipes.createDeploying('computercraft:computer_normal', ['computercraft:computer_normal', 'minecraft:gold_nugget'])
     ]).transitionalItem('computercraft:computer_normal') 
       .loops(3) 
    event.remove({ output: 'computercraft:cable' })
    event.shaped('10x computercraft:cable', [
         'WAW',
         'ARA',
         'WAW'
     ], {
         A: 'create:andesite_alloy',
         W: 'tfmg:copper_wire',
         R: 'minecraft:redstone'
    })
    event.remove({ output: 'integrateddynamics:cable' })
    event.shaped('3x integrateddynamics:cable', [
         'MMM',
         'CCC',
         'MMM'
     ], {
         M: 'integrateddynamics:crystalized_menril_chunk',
         C: 'computercraft:cable'
     })
 })