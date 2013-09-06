module.exports = function(grunt) {
  	grunt.initConfig({
		concat: {
		    veryless: {
		    	src: [
                    'src/base/*.less',
                    'src/shortcut/*.less',
                    'src/compatible/*.less',
                    'src/util/*.less',
                    'src/layout/*.less'
                ],
		    	dest: 'dist/veryless.less'
		    },

            //minxin
            base: {
                src: [
                    'src/base/*.less'
                ],
                dest: 'dist/mixin/base.less'
            },
            shortcut: {
                src: [
                    'src/shortcut/*.less'
                ],
                dest: 'dist/mixin/shortcut.less'
            },
            compatible: {
                src: [
                    'src/compatible/*.less'
                ],
                dest: 'dist/mixin/compatible.less'
            },
            util: {
                src: [
                    'src/util/*.less'
                ],
                dest: 'dist/mixin/util.less'
            },
            layout: {
                src: [
                    'src/layout/*.less'
                ],
                dest: 'dist/mixin/layout.less'
            },
            css3: {
                src: ['src/plugin/css3/*.less'],
                dest: 'dist/plugin/css3.less'
            },
            brandcolor: {
                src: ['src/plugin/brand-color/*.less'],
                dest: 'dist/plugin/brandcolor.less'
            },
            animation: {
                src: ['src/plugin/animation/*.less'],
                dest: 'dist/plugin/animation.less'
            }
		}
	});

    
    grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', 'concat');
};