	const once=(a,b,c)=>{//a:element,b:eventname,c:callback
		const f=o=>{
			a.removeEventListener(b,c);
			c(o)
		};
		a.addEventListener(b,c)
	};
