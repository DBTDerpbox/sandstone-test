import { give, effect, execute } from 'sandstone/commands'
import { MCFunction } from 'sandstone/core'
import { Selector } from 'sandstone/variables'
import { nbtParser } from 'sandstone/_internals'
import { NBT } from 'sandstone/_internals/variables/NBTs'

const randomentity = Selector('@e', { sort: 'random', limit : '1'})

MCFunction('test', () => {
  give('@a', 'minecraft:diamond', 64)
  effect.give('@a', 'minecraft:speed', 1)
})

MCFunction('do', () => {
    give('@s', 'player_head{SkullOwner:DBTDerpbox}', 1)
    execute.as(randomentity).run.say('test')
})