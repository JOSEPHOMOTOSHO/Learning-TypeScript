Here i learnt how to sturcture your folders into source folder and public folder

content in source folder is just your source code while contents in the public folder are files you'd probably want to send to a web server
or files you want to push to production

in cases where you try to compile in a folder and it doesnt compile to the public. (compiled "ts" is "js" and you want it to be in the public). 

steps to make sure you compile from one folder(e.g src )to another(e.g public)

do tsc --init
  this will create a ts configuration file and do below inside the json
  go over to the root property and change the directory value to the source folder (e.g src) of typeScript
  go over to outDirroot property to change the folder of where you want the compile file to go

if you dont want to complie anything outside a folder 
in the tsconfig file go below before the last braces and type
  "include":["nameOfSourceFolder"]

  
