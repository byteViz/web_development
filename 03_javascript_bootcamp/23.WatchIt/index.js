#!/usr/bin/env node
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const prog = require('caporal');
const fs = require('fs');
const {spawn} = require('child_process');

prog
    .version('1.0.0')
    .argument('[filename]', 'Name of the file to execute')
    .action(async ({ filename})=>{
        const name = filename || 'index.js';
        try {
            await fs.promises.access(name);
        } catch (err) {
            throw new Error(`Could not find the file ${name}`);
        }
        
        let proc;
        const start = debounce(() => {
            if (proc) {
                proc.kill();
            }
            proc = spawn('node', [name], {stdio: 'inherit'});
        }, 100);
        
        chokidar.watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start);
            
    });
prog.parse(process.argv);
