module.exports = function(grunt) {
  	grunt.initConfig({
		concat: {
		    veryless: {
		    	src: ['src/reset/*', 'src/utilities/*', 'src/css3/*', 'src/ui/*', 'src/layout/_grid.less', 'src/layout/_fluid.less', 'src/layout/_metro.less'],
		    	dest: 'dist/veryless-1.0.0.less'
		    },
		    plugin: {
		    	src: ['src/plugins/mixin/*', 'src/plugins/ui/*'],
		    	dest: 'dist/veryless-plugin-1.0.0.less'
		    }
		}
	});

	grunt.registerTask('default', 'concat');
};