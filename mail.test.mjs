// Delay models a local test that outlives the initial agent turn.
import assert from 'node:assert/strict'
import { setTimeout } from 'node:timers/promises'
import { validateRecipient } from './mail.mjs'
await setTimeout(12_000)
assert.equal(validateRecipient('invalid.example'), false, 'missing @ must fail')
assert.equal(validateRecipient('alice@example.org'), true)
