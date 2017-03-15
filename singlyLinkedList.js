function SinglyList(){
	this.head = null;
	this.length = 0;
}

function Node(value){
	this.value = value;
	this.next = null;
}

SinglyList.prototype.add = function(val){
	var node = new Node(val);
	if(this.length === 0){
		this.head = node;
		this.length++;
		console.log("Node added");
		return;
	}
	var currentNode= this.head;
	while(currentNode.next){
		currentNode = currentNode.next;
	}
	currentNode.next = node;
	this.length++;
	console.log("Node added");
};

SinglyList.prototype.display = function(){
	var currentNode = this.head;
	if(this.length == 0){
		console.log("Empty");
		return;
	}
	while(currentNode){
		console.log(currentNode.value);
		currentNode = currentNode.next;
	}
	console.log("end");
};

SinglyList.prototype.find = function(position){
	var currentNode = this.head;
	var i=1;
	if(this.length === 0){
		console.log("Empty list");
		return;
	}
	if(position>this.length){
		console.log("position is invalid");
		return;
	}
	while(currentNode && position>i){
		currentNode = currentNode.next;
		i++;
	}
	console.log(currentNode.value);
	return currentNode;
};

SinglyList.prototype.delete = function(position){
	var currentNode,i=1;
	currentNode = this.find(position);
	prevNode = this.find(--position);
	if(this.length === 1){
		this.head =  null;
		this.length = 0;
		return;
	}
	prevNode.next = currentNode.next;
	this.length--;
	console.log("deleted"); 
};