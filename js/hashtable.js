function HashTable(key,value)
			{
				this.hashtable = new Object();
				
				this.add = function(key,value)
				{
				       // ÅÐ¶ÏkeyÊÇ·ñ´æÔÚ
				       if((key in this.hashtable) == false)
				       {
				    	   this.hashtable[key] = value;
				       }
				       
				};
				this.del = function(key)
				{
					if(key in this.hashtable)
					{
						delete(this.hashtable[key]);
					}
					else
					{
						alert("É¾³ýµÄ¼üÖµ²»´æÔÚ");
					}
				};
				
				this.getValue = function(key)
				{
					return this.hashtable[key];
				};
				this.isExistHashTable = function(key)
				{
					if((key in this.hashtable) == true)
					{
						return true;
					}
					else
					{
						return false;
					}
				};
				
				this.print = function(key)
				{
					alert(this.hashtable[key]);
				};
				this.length = function()
				{
					var len = 0;
					for(var k in this.hashtable)
					{
						len++;
					}
					return len;
				};
			}