'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {

    this.log(yosay(
      'Welcome to ' + chalk.blue('generator-vanilla-extension') + '!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'shortname',
        message: 'Internal project name:',
        default: 'starter'
      },
      {
        type: 'input',
        name: 'camelcase',
        message: 'CamelCase name:',
        default: 'Starter'
      },
      {
        type: 'input',
        name: 'name',
        message: 'User-facing project name:',
        default: 'Starter'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author:',
        default: 'anonymous'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
        default: 'user@example.com'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description:',
        default: 'A lightweight Chromium extension boilerplate'
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  },

  writing: function() {
    this.fs.copyTpl(
      `${this.templatePath()}/**/*`,
      this.destinationPath(),
      this.props
    );
  },

  install: function () {
    this.installDependencies();
  }
});
