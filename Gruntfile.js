module.exports = function(grunt) {
	grunt.initConfig({
	  sass: {
		dist: {
		  files: {
			'style.css': 'style.scss'
		  }
		}
	  },
	csslint: {
		strict: {
			options: {
				'known-properties': false,
				'box-model': false
			},
			src: ['style.css']
		}
	}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.registerTask('default', ['sass', 'csslint']);
};
