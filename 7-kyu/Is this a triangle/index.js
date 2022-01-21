function isTriangle(a,b,c)
{
    let checkTriangle = ((a+b>c)&&(a+c>b)&&(b+c>a)) ? true:false;
    return checkTriangle;
}
