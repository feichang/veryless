module.exports = function(grunt) {
  	grunt.initConfig({
		concat: {
		    veryless: {
		    	src: [
                    'src/2.0/base/*.less',
                    'src/2.0/shortcut/*.less',
                    'src/2.0/compatible/*.less',
                    'src/2.0/util/*.less',
                    'src/2.0/layout/*.less'
                ],
		    	dest: 'dist/2.0/veryless.less'
		    },

            veryless_exports: {
                src: [
                    'src/2.0/base/*.less',
                    'src/2.0/shortcut/*.less',
                    'src/2.0/compatible/*.less',
                    'src/2.0/util/*.less',
                    'src/2.0/layout/*.less'
                ],
                dest: 'veryless.less'
            },
            // plugin_exports: {
            //     src: [
            //         'src/2.0/plugin/animation/*.less'
            //     ],
            //     dest: 'veryless-plugin.less'
            // },

            //minxin
            base: {
                src: [
                    'src/2.0/base/*.less'
                ],
                dest: 'dist/2.0/mixin/base.less'
            },
            shortcut: {
                src: [
                    'src/2.0/shortcut/*.less'
                ],
                dest: 'dist/2.0/mixin/shortcut.less'
            },
            compatible: {
                src: [
                    'src/2.0/compatible/*.less'
                ],
                dest: 'dist/2.0/mixin/compatible.less'
            },
            util: {
                src: [
                    'src/2.0/util/*.less'
                ],
                dest: 'dist/2.0/mixin/util.less'
            },
            layout: {
                src: [
                    'src/2.0/layout/*.less'
                ],
                dest: 'dist/2.0/mixin/layout.less'
            },
            // plugin: {
            //     src: ['src/2.0/plugin/*/*.less'],
            //     dest: 'dist/2.0/veryless-plugin.less'
            // },
            css3: {
                src: ['src/2.0/plugin/css3/*.less'],
                dest: 'dist/2.0/plugin/css3.less'
            },
            brandcolor: {
                src: ['src/2.0/plugin/brand-color/*.less'],
                dest: 'dist/2.0/plugin/brandcolor.less'
            },
            animation: {
                src: ['src/2.0/plugin/animation/*.less'],
                dest: 'dist/2.0/plugin/animation.less'
            }
		}
	});

	grunt.registerTask('default', 'concat');
};