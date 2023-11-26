// @ts-nocheck

import { execSync } from 'child_process'
import { promptForPackage } from './packages.mjs'

const pkg = await promptForPackage()
execSync('pnpx kolibri example.md --open', { cwd: pkg.path, stdio: 'inherit' })
