import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import { exec } from 'child_process'

afterEach(() => {
  cleanup()
})

let serverProcess: any = null

beforeAll(() => {
  serverProcess = exec('npm run server')
})

afterAll(() => {
  if (serverProcess) {
    serverProcess.kill()
  }
})
