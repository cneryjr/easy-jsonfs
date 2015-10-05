'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');


var Store = function(nome) {
	this.nome = nome || "package.json";
	this.path = path.join(process.cwd(), this.nome);
	this.json = Store.readJSON(this.path);
};

Store.readJSON = function(path) {
    if (fs.existsSync(path)) {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }
    return {};
};

Store.prototype = {
	save: function() {
		fs.writeFileSync(this.path, JSON.stringify(this.json, null, '  '));
	},

	set: function(key, value) {
		// this.json[key] = value;

		 if (_.isObject(key)) {
		    this.json = _.extend(this.json, key);
		} else {
			var obj = this.json;
			var keys = key.split(".");
			var lastkey = keys.pop();

			keys.map(function(k){
			    obj = (obj[k] || (obj[k] = {}));
			});
			obj[lastkey] = value;	
		}

		this.save();
	},

	get: function(key) {
		var obj = this.json;

		key.split(".").map(function(k){
		    if (obj !== undefined) 
		        obj = obj[k];
		});

		return obj;
	},

	getAll: function() {
		return this.json;
	},

	remove: function(key) {
		var obj = this.json;
		var keys = key.split(".");
		var lastkey = keys.pop();

		keys.map(function(k){
		    obj = (obj[k] || (obj[k] = {}));
		});

		delete obj[lastkey];

		this.save();
	}
};

module.exports = Store;
