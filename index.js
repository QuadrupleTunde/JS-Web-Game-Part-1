
function newImage(source, left, bottom){
let image= document.createElement('img')
image.src = source
image.style.position = 'fixed'
image.style.left = left
image.style.bottom = bottom
document.body.append(image)

}
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '100px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png','150px', '200px')
newImage('assets/well.png', '500px', '425px')


function newItem (source, left, bottom){
    let sword = document.createElement('img')
    sword.src = source
    sword.style.position = 'fixed'
    sword.style.left = left
    sword.style.bottom = bottom
    document.body.append(sword)
    sword.addEventListener("dblclick", function(){
    sword.remove()
    })
    
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png','165px', '185px')
newItem('assets/staff.png','600px', '100px')



