let liste = document.querySelector('ul')    //recuperer ul
console.log(liste);

let valider = document.getElementById('valider').addEventListener ('click',()=>{   
let newtask = document.getElementById('tache').value;

// a ce stade les éléments entrés par user est dans liste_tache
    if (newtask == "") {
        alert("Erreur: Veillez saisir une tache.") //Message d'erreur en cas de champ vide
        
    } else {               
        // récupération de la valeur input
        let content = document.createTextNode(newtask);
        // permet d'afficher la liste dans chaque li avec le contenu
        //génère un li dans le ul
        let li = document.createElement('li');
        li.appendChild(content);
        //ajoute le li après chaque action sur le bouton valider    
        let ajouter = liste.appendChild(li);
        document.querySelector('#tache').value = "";


        // Création d'un bouton valider
        let validBtn = document.createElement("button");
        validBtn.textContent = "Valider";
        li.appendChild(validBtn);

        // Création d'un bouton modifier
        let modifBtn = document.createElement ('button');
        modifBtn.textContent = "Modifié"
        li.appendChild(modifBtn);

        // Création d'un bouton supprimer
        let supBtn = document.createElement ("button");
        supBtn.textContent ="Supprimé";
        li.appendChild(supBtn); 
        
        // Validation
        validBtn.addEventListener('click', () =>{
            li.style.textDecoration = "line-through";
        })
        // Suppression
        supBtn.addEventListener('click', ()=>{
            li.remove();
        })
        // Modification
        modifBtn.addEventListener('click', () =>{
            
            let modif = newtask;
            prompt ("Modifier vôtre tache:");
            if (modif == "") {
                alert ("Vous avez saisi la même tache.")
            }else{
                li.appendChild(modif);
            }
            
        })

    } 
})

