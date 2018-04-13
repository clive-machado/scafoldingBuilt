module.exports = {
	// hello_world is the name of function in this code block
	"/functions/hello_world" : {
		GET : function(req, res) {
			// Returns sample response "Hello World..!!"
			return this.resSuccess(req, res, "Hello World..!!")
		}
	}
}