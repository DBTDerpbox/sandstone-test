import { say } from 'sandstone/commands'
import { MCFunction } from 'sandstone/core'

MCFunction('hello', () => {
  say('Hello world!')
})
