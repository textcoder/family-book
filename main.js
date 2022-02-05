var images = ["Screenshot 2022-02-03 at 8.52.53 PM.png","Screenshot 2022-02-03 at 8.54.41 PM.png", "Screenshot 2022-02-03 at 8.57.11 PM.png", "Screenshot 2022-02-03 at 8.55.20 PM.png"];
var names = ["This is my family book","This is me and my dad", "This my brother (I could not find one of us together)", "This is me and my mom"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
