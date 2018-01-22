
SelfEd Date:        12/03/2016

SelfEd Title:       SelfEd-NodeJS-Express-Framework

SelfEd Objective:   To familiarize with Express as instructed by this TutorialsPoint
                    lesson.

SelfEd Catalyst:    Ongoing tutorials for learning NodeJS.

SelfEd References:  https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm



Process:
        To start, the TutorialsPoint lesson has you install Express. But I may have
        already installed it. I poked around to see how to find out if it was installed
        but could not find any obvious ways. Here's what I found so far:

                    http://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package

        To get a list of the packages I went down to the part with the CLI command:
            
                    npm list --depth=0

        From the folder I was in the results came up empty. So I added the < -g >
        argument (for global) and entered the CLI command like this: 

                    npm list -g --depth=0
        
        And I got this list:
                    C:\Users\bcomb\AppData\Roaming\npm
                    ├── express@4.14.0
                    ├── get-port-cli@1.0.0
                    └── karma-cli@1.0.1

        Obviously, this indicates I have Express installed but it begs the question
        Where do I find (have found it before) all the CLI commands for npm.
        AHA! I've found the answer is right here in the TutorialsPoint lessons at:

                    https://www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm
                    https://www.tutorialspoint.com/nodejs/nodejs_npm.htm

        So referring to the above, if you enter:

                    npm ls -g               You get a detailed tree of the packages installed
                    npm list -g             Same as above
                    npm list -g -depth=0    You get the packages without the tree
                    npm list -g -depth=1    You get the packages with the first subdirectories
                    npm list -g -depth=2    You get the packages with the first and second level subdirectories
                    etc.

        TO ANSWER THE QUESTION!!!

        Type in < npm ? > or < npm help > to get the CLI level commands for npm.
        With that I did this:
                    npm list -g
                    npm view cookie         This shows all the meta data (details)
                                            of the this sub package as part of the
                                            Express package.

        ************************************************************************
        OK, on to the first example: The Hello World example:

        Well, it didn't work right until added a host name of < 127.0.0.1 >. 
        Without it I was getting:

                    < Example app listening at http://:::8081 >
                    
        If you plug that into the browser you don't get Hello World, you get a 
        bunch of links about port 8081 because the browser saw it as a query and
        not a URL. 
        Confused, I found these links:

                    http://stackoverflow.com/questions/32590756/expressjs-server-address-host-returns-nothing
                    http://stackoverflow.com/questions/33853695/node-js-server-address-address-returns
                    https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback

        It explains you must specify a host name or it will default to an IPv6
        address < :: > which stands for 0:0:0:0:0:0:0:0, and is reduced to < :: >
        The lesson says you should see 0:0:0:0 (That is http://127.0.0.1:8081).
        There's a good explanation at:
        http://stackoverflow.com/questions/32590756/expressjs-server-address-host-returns-nothing


        ************************************************************************
        OK, per the lesson about req and res (request and response)

        All seems straight forward but it does say you can print out the req and
        res objects for all the details. I want to do that! So far JSON parsing 
        and dot ops are not working. So I'm investigating how to do this.
        This link(s) may help:

                https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
        

        ************************************************************************
        The 'Basic Routing' part of the lesson is realized in file server_Exp1.js
        Note the my_get get statement I added. The res.send statement accepts
        html templates.

        File Upload Section:
        OK, things were fine till I got to the File Upload section. The multer
        module had two files with errors in them. The example would not run.
        The two files < form.js > and < cmd.js > have the errors. I 
        commented the error section out. The example then ran. I'll figure out the
        errors later. But so far those two files have not been called upon.

        Meanwhile I decided to learn file uploads without the multer module.
        Here's a quick link and I'm sure there are many others. And maybe it 
        would be best to learn to do it without any modules if possible.

                https://howtonode.org/really-simple-file-uploads
                https://github.com/felixge/node-formidable
                https://www.npmjs.com/package/fileupload (This seems the proper approach)

        The module I've designated the proper approach would be the direction I
        go when I revisit this matter.

        Next up is Cookie Management which I'm skipping for now

04/20/2017 *********************************************************
Have paid a visit after many excursions into Angular, JS, and other MEAN stack
components. Have been able to setup Angular apps with a RESTful call to a 
local file and/or a node server. Have been able to deliver data from the node
server to a browser window. But the reason for the revisit is I'm having 
trouble getting the data back to my Angular app for presentation.
Have found a complete tutorial that set ups the entire stack at:

        https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
        https://github.com/scotch-io/node-todo
        https://www.tutorialspoint.com/nodejs/index.htm

So the purpose of my re-visit is to refresh what I learned while doing this
entire nodeJS TutorialsPoint tutorial. Glad I came back for the revisit for it
has refreshed my understanding and given me deeper insights. Alas, I can tell
I'll still need to poke around to solve the problem because I've not seen any
slam dunks. I'm doing a simple Angular app to node server and back from the 
node server to the Angular app. I have taken the scotch.io tutorial from
above and stripped to a bare bones configuration to see if I can make it even
the simplest data return work. It is SelfEd:

        < SelfEd-NodeJS-MEAN-Stack-Tutorial-Exp_1 >

So I'm back to that to see if my refresh will help.

04/21/2017 *********************************************************
Possible MAJOR Finding!!
The exercise < indexGet.html > and < serverGet.js > in this SelfEd work. 
Copy this code to < SelfEd-NodeJS-MEAN-Stack-Tutorial-Exp_1 > and it does not
work. It appears to be a problem with the express module.

The Express module in this SelfEd is < Express ver 4.14.0 / 2016-06-16 > and
the version in < SelfEd-NodeJS-MEAN-Stack-Tutorial-Exp_1 > is:
< Express ver 4.7.4 / 2014-08-04 >. Clearly older and maybe bad. But when I
do a full < npm install > I get the older version. But when you look at the
Express folder contents you see that < Express ver 4.14.0 / 2016-06-16 > 
has a node_modules folder of its own with many of the listed dependencies
being the same as the primary node_modules folder in the public_html folder.
Perhaps a placement problem is all it is and I bet you could tell your
package.json file where to look (maybe).

OK!! WEIRD!! I could not get an updated version of express to install locally
in the SelfEd < SelfEd-NodeJS-MEAN-Stack-Tutorial-Exp_1 > so what I did was
from the CLI I entered: 

    < npm install express -g > 

where the key difference is < -g > which is
a global installation. I used the info at 

< https://www.tutorialspoint.com/nodejs/nodejs_npm.htm >
< http://expressjs.com/en/starter/installing.html >

but added the < -g > on my own behalf as an accident/hunch.
When the installation was complete it had indeed 
installed the newest version of:

        < Express version 4.15.2 / 2017-03-06 >

but into the system folder located at: (The CLI displayed this location) 

        < C:\Users\bcomb\AppData\Roaming\npm\node_modules > 

So I went there copied it and pasted it into the node_modules folder of:
        < SelfEd-NodeJS-MEAN-Stack-Tutorial-Exp_1 > and boom the program runs.
Now, I'm going to remove it from < SelfEd-NodeJS-MEAN-Stack-Tutorial-Exp_1 >
to see if it still works because the < Express module > is supposed to be
"global". And.......NO!......it does not work so I've re-copied and pasted
back into < SelfEd-NodeJS-MEAN-Stack-Tutorial-Exp_1 > and it is back to working.

04/21/2017 - 10:18PM *********************************************************
I found the rest of the npm install seems OK. Only the Express module needs
to replaced with the latest version as explained above. But take it with a 
grain of salt.


