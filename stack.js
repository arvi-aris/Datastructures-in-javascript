/*
 * Constructor for Stack
 */
function Stack(){
	this.top = -1;
	this.stack = [];
	this.MAX = 100;
};
/*
 * Push operation
 * Adds param to top of the stack.
 * param      {any} <val> { Value to be added to stack }
 */
Stack.prototype.push = function(val){
	if(this.isFull()){
		console.log("Stack overflow :P");
		return;
	}
	this.top++;
	this.stack[this.top] = val;
};
/*
 * Pop operation
 * Removes and returns top of the stack
 */
Stack.prototype.pop = function(){
	if(this.isEmpty()){
		console.log("Stack empty");
		return;
	}
	data = this.stack[this.top];
	this.top--;
	return data;
};
/*
 * Peek Operation
 * Returns top of stack without removing
 */
Stack.prototype.peek = function(){
	if(this.isEmpty()){
		console.log("Stack empty");
		return;
	}
	return this.stack[this.top];
};
/*
 * Check whether stack is empty
 */
Stack.prototype.isEmpty = function(){
	if(this.top === -1){
		return true;
	}
	else return false;
};
/*
 * Check whether stack is full
 */
Stack.prototype.isFull = function(){
	if(this.top===this.MAX){
		return true;
	}
	else return false;
}