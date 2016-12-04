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
        name: 'bigshortname',
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
        default: 'somebody'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description:',
        default: 'A lightweight web application boilerplate'
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
