#!/usr/bin/env node
// ===== TEST RUNNER =====
// Loads pure conversion logic from source files (no DOM dependencies)
// and runs all test suites. Execute with: node tests/run-tests.js

'use strict';

const vm   = require('vm');
const fs   = require('fs');
const path = require('path');

// ── Helpers ──────────────────────────────────────────────────────────────────

function loadScript(relativePath) {
    const fullPath = path.resolve(__dirname, '..', relativePath);
    const code = fs.readFileSync(fullPath, 'utf8');
    vm.runInThisContext(code, { filename: relativePath });
}

let _passed = 0, _failed = 0;

global.describe = function describe(suiteName, fn) {
    console.log(`\n  ${suiteName}`);
    fn();
};

global.it = function it(description, fn) {
    try {
        fn();
        console.log(`    \x1b[32m✓\x1b[0m ${description}`);
        _passed++;
    } catch (e) {
        console.log(`    \x1b[31m✗\x1b[0m ${description}`);
        console.log(`      \x1b[2m${e.message}\x1b[0m`);
        _failed++;
    }
};

global.assertEqual = function assertEqual(actual, expected, msg) {
    if (actual !== expected) {
        throw new Error(
            msg || `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`
        );
    }
};

global.assertNotEqual = function assertNotEqual(actual, unexpected, msg) {
    if (actual === unexpected) {
        throw new Error(msg || `Expected value NOT to equal ${JSON.stringify(unexpected)}`);
    }
};

global.assertTrue = function assertTrue(value, msg) {
    if (!value) throw new Error(msg || `Expected truthy, got ${JSON.stringify(value)}`);
};

// ── Load source files (pure logic only, no DOM) ───────────────────────────────
loadScript('js/state.js');                    // gameState, civilizations, rand()
loadScript('js/civilizations/roman.js');
loadScript('js/civilizations/egyptian.js');
loadScript('js/civilizations/greek.js');
loadScript('js/civilizations/babylonian.js');
loadScript('js/civilizations/chinese.js');

// ── Test suites ───────────────────────────────────────────────────────────────
require('./roman.test.js');
require('./egyptian.test.js');
require('./greek.test.js');
require('./babylonian.test.js');
require('./chinese.test.js');

// ── Summary ───────────────────────────────────────────────────────────────────
const total = _passed + _failed;
console.log(`\n${'─'.repeat(50)}`);
console.log(`Tests: \x1b[32m${_passed} passed\x1b[0m, \x1b[31m${_failed} failed\x1b[0m, ${total} total\n`);
if (_failed > 0) process.exit(1);
