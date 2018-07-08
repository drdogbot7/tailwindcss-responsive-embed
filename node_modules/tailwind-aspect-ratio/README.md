# tailwind-aspect-ratio

Aspect Ratio plugin for tailwind. Generate a series of intrinsic aspect ratio containers. 

## Usage:

Add the plugin:

```
plugins: [
	// ...
    require('tailwind-aspect-ratio')
    // ...
]
```


Add your variants to `modules` as normal:

```
modules { 
	// ...
	aspectRatio: ['responsive'],
	// ...
}
```

And add config to tailwind.js like so...(omit these and all you will get is ar-base)

```
module.exports = {

	// ...

	
	aspectRatio: {
		'3x2': 3/2,
		'4x3': 4/3,
		'2x3': 2/3,
		'5x6': 5/6,
		'16x9': 16/9
	},

	// ...

}
```

Then if you like, change things with the tailwind options:

```
options: {
    prefix: '',
    important: false,
    separator: ':',
    
    // These are optional:
    aspectRatio: {
      // change the utility name. So instead of `.ar-2x3` you could have `.aspectRatio-2x3`
      prefix: '.ar-',

      // by default, it will add height 0, width 100%, position: relative and overlow:hidden.
      // but set paddingOnly and it will _only_ show the padding-bottom values. 
      // .ar-base will _still be created so you can do, for example, `ar-2x3 ar-base` for a complete application,
      // thus reducing a bit of repetition. Up to you!
      paddingOnly: false
    }
  },
```

Note that the aspect ratio settings just expect a number between 0 and 1. I've inverted this from the actual ratio so for a 16:9 ratio instead of supplying `0.5625` to become `56.25%` you actually supply `1.7777777778`

Why? Because we _say_ 16-9 rather than 9-16, and thus in the config you can just write `16/9` - that's a bit of an opinionated thing that could get confusing so I could change it if people want to 'see' the percentages more explicitly. 

## Output

The examples above will output the following classes (and any variants in the config):


```
.ar-3x2 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 66.66666666666667%;
}

.ar-4x3 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 75%;
}

.ar-2x3 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 150%;
}

.ar-5x6 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 120%;
}

.ar-16x9 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
}

.ar-base {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}
```


## `.ar-base`

One settings-less style is generated. `.ar-base` will be added, so that you can supply inlined padding-bottom, such as server-side generated image dimensions.


```
<div class="ar-base" style="padding-bottom: 56.25%"> ... </div>
```

## Suggestions / Todo

- Maybe we could add some config for the base style, i.e. adding `position:relative` is done because you're almost certainly going to put an absolute container in there. You're most likely to going to want to fill a container by 100% rather than have the aspect-ratio container be a percentage width itself (because then padding-bottom becomes tiresome). But hey, a project might want some differences to the 'base' and we could pass in a config for that....