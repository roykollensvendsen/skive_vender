var spawn = require("child_process").spawn;

var Relay = (function(){
   var self = this; 
   self.child = spawn("python", ["-u", "./python/relay.py"]);
   self.child.stdout.on("data",(data)=>{console.log("stdout: " + data);});
   self.child.stderr.on("data",(data)=>{console.log("stderr: " + data);});
   self.child.stderr.on("close",()=>{console.log("closed");});

   return {
      run: function(data){
         console.log("run()");
         console.log(data);
         setTimeout(()=>{self.child.stdin.write("on\n");}, 1000);
         setTimeout(()=>{self.child.stdin.write("off\n");}, 2000);
         setTimeout(()=>{self.child.stdin.write("on\n");} , 3000);
         setTimeout(()=>{self.child.stdin.write("off\n");}, 4000); 

        /* 
	 * Fin- & grovpistol presisjon
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 * 300 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Fin- & grovpistol duell
	 * 60 - fremme (lading)
	 *  7 - borte  \
	 *  3 - fremme / * 5
	 * 15 - borte 
	 *  - - fremme 
	 */

        /* 
	 * Standard 150 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 * 150 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Standard 20 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *  20 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Standard 10 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *  10 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Hurtig 10 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *  10 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Hurtig 8 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *   8 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Hurtig 6 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *   6 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Silhuett 8 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *   8 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Silhuett 6 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *   6 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * Silhuett 4 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *   4 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * NAIS 150 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 * 150 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * NAIS Duell
	 * 60 - fremme (lading)
	 *  7 - borte  \
	 *  3 - fremme / * 5
	 * 15 - borte 
	 *  - - fremme 
	 */

        /* 
	 * NAIS 20 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *  20 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */

        /* 
	 * NAIS 10 sek
	 *  60 - fremme (lading)
	 *   7 - borte  \
	 *  10 - fremme / * 1
	 *  15 - borte 
	 *   - - fremme 
	 */
      }
   };
})();

module.exports = Relay;










