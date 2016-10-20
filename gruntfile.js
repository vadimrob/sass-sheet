module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		bower: {
			    install: {
			      options: {
			        targetDir: './lib',
			        layout: 'byType',
			        install: true,
			        verbose: false,
			        cleanTargetDir: false,
			        cleanBowerDir: false,
			        bowerOptions: {}
					      }
					    }
  		},

        concat: {   
              dist: {
                  src: [
                        'lib/**/*.js', // All JS in the libs folder
                        
                  ],
                  dest: 'build/js/production.js'
                }
        },
        
        
        uglify: {
             build: {
                   src: 'build/js/production.js',
                  dest: 'build/js/production.min.js'
                }
        },

        
        sass: {
		        options: {
		            style: 'compressed'
		        },
		        dist: {
		            files: {
		                'build/css/styles.min.css': 'stylesheets/scss/style.scss'
		            }
		        }
			
		},
        
                
        imagemin: {
              dynamic: {
                   files: [{
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'build/img/'
                     }]
                }
        },
        
      
     
                     
		watch: {
              options: {
                    livereload: false,
               },
              scripts: {
                    files: ['lib/**/*.js'],
                    tasks: ['concat', 'uglify'],
                    options: {
                         spawn: false,
                    },
               },
               
               css: {
                  files: ['stylesheets/scss/*.scss'],
                  tasks: ['sass'],
                  options: {
                      spawn: false,
                  }   
               },
               
        
			    images: {
			      files: ['images/*.{png,jpg,gif}'],
			      tasks: ['imagemin:single'],
			      options: {
			      spawn: false,
			      }
			    }
			},
			
			
			          
  		
    });

    // 3. Where we tell Grunt we plan to use this plug-in. Here Grunt loads the plugins.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bower-task');
   
    



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['bower', 'concat', 'uglify', 'sass', 'imagemin', 'watch']);

};


