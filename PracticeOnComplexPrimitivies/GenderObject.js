var gender = [{
    FirstName: "Kaushik",
    Gender: "Male"
}, 
{
    FirstName: "Aniket", 
    Gender: "Male"
}, 
{
    FirstName: "Khusi",
    Gender: "Female"
}, 
{
    FirstName: "Vineet", 
    Gender: "Male"
}]

let len = gender.length;

for(let i=0;i<len;i++){
    if(gender[i].Gender=="Male"){
        console.log(gender[i].FirstName);
    }
}