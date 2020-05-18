class Vec3{

  constructor(x,y,z)
{
  this.x = x;
  this.y = y;
  this.z = z;
}


add(v)
{
 this.x += v.x;
 this.y += v.y;
 this.z += v.z;
 return this;
}

sum()
{
 return this.x + this.y + this.z;
}

min()
{
 var min;
 min = this.x;
 if(min > this.y)
 min = this.y;
 if(min > this.z)
 min = this.z;
 return min;
}

max()
{
 var max;
 max = this.x;
 if(max < this.y)
 max = this.y;
 if(min < this.z)
 max = this.z;
 return max;
}

mid()
{
 if(this.y < this.x)
  if(this.x < this.z)
   return this.x;
  else if(this.y < this.z)
   return this.z;
  else
   return this.y;
 else if(this.y < this.z)
   return this.y;
 else if(this.x > this.z)
   return this.x;
 else
   return this.z;
}

vector(v)
{
 v.x -= this.x;
 v.y -= this.y;
 v.z -= this.z;
 return v;
}

 
}