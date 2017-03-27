"use strict"
let reflect = require('reflect-metadata')
let chai = require('chai')
let sinon = require('sinon')
let sinonChai = require('sinon-chai')
let chaiAsPromised = require('chai-as-promised')

chai.should()
chai.use(sinonChai)
chai.use(chaiAsPromised)

process.on('uncaughtException', (err) => {
    console.log('******************* uncaughtException in tests', err)  //Team city is looking for this text, don't change!
})

process.on('unhandledRejection', (reason, p) => {
    console.log('******************* unhandledRejection in tests', reason, p)  //Team city is looking for this text, don't change!
})

module.exports = {}