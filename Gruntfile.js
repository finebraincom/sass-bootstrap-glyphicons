module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist : {
		        options: {
		            sourcemap: true
		        },
	            files: {
	                'css/bootstrap-glyphicons.css': 'scss/bootstrap-glyphicons.scss'
	            }
		    }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);
};