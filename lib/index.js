#! node

const path = require('path');
const program = require('commander');
const download = require('download-github-repo');
// const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
require('colors');

const template = 'wxjbnu/cli_demo'

program
.version(pkg.version);

program
.command('create <name>')
.alias('c')
.description('下载模板')
.action((name, options) => {
  // require('./create')(name, options);
  let rootDir = path.join(process.cwd(), name);
  console.log('下载初始项目...'.green);
  download(template, rootDir, (err) => {
      if(err){
        console.log('err'.red);
        return
      }
      console.log('下载完毕'.green);
  })
});

program.parse(process.argv);

if (!program.args.length) program.help();