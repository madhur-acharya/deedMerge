//this function is similar to object.assign but,
//leaves the keys which are common among both bojects untouched
var deepMerge= function(object1, object2)
{
	obj1= Object.assign(combine(obj1, obj2), obj1);//for the first level 
	obj1= Object.assign(traverse(obj1, obj2), obj1);//for subsequent levels down the object tree
	
	function combine(p, q)
	{
		for(i in q)
			if(!p.hasOwnProperty(i))
				p[i]= q[i];
		return p;
	}

//this function traverses each nested boject and combines it with the other object
	function traverse(a, b)
	{
		if(typeof(a) === "object" && typeof(b) === "object")
			for(i in b)
				if(typeof(a[i]) === "object" && typeof(b[i]) === "object")
					a[i]= Object.assign(traverse(a[i], b[i]), a[i]);
				else
			 		Object.assign(combine(a, b), a);
		return a;
	}
	return obj1;
}

