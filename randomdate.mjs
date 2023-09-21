#!/usr/bin/env node

import process from 'node:process'

let begin = process.argv[2] ? new Date(process.argv[2]) : new Date('2011')
let end = process.argv[3] ? new Date(process.argv[3]) : new Date()

let randomdate = new Date(begin.getTime() + Math.random() * (end.getTime() - begin.getTime()))

console.info(randomdate.toLocaleDateString())
