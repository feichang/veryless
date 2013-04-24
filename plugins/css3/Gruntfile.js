
module.exports = function(grunt) {
  	grunt.initConfig({
		concat: {
            css3: {
                src: ['*.less'],
                dest: 'css3.less'
            }
		}
	});

	grunt.registerTask('default', 'concat');
};