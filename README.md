# easy-jsonfs

Handles JSON file directly through methods to get, set, remove, getAll and save.

## Installation

  npm install easy-jsonfs --save

## Usage

Assuming the package.json file has the following content:

```javascript

	{
	  "name": "easy-jsonfs",
	  "version": "0.1.0",
	  "description": "Handles JSON file directly through methods to get, set, remove, getAll and save.",
	  "main": "index.js",
	  "repository": {
	    "type": "git",
	    "url": "git+https://github.com/cneryjr/easy-jsonfs.git"
	  },
	  .
	  .
	  .
	}


    var store = new Store('./package.json');

    var ver = store.get('version'); 				// ver = "0.1.0"
    var aux = store.get('repository.type'); 		// aux = "git"

    store.set('repository.info', 'repo in github');
    aux = store.get('repository.info'); 			// aux = "repo in github"
```

## Release History

* 0.1.0 October/2015 - Initial release
* 0.1.1 October/2015 - Increment documentation
* 0.1.3 October/2015 - Fix 'path' module required
* 0.1.4 October/2015 - Fix README.md # Installation section

## License

(MIT License)
