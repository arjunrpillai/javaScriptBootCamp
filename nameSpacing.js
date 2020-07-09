var user={
	name:"Akhil",
	delete: function(){
		return "user deleted"
	}
}

var post= {
	title:"Good news",
	delete: function(){
		return "Post deleted"
	}
}

console.log(user.delete())
