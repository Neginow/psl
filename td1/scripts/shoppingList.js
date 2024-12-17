// script de shoppinglist

$(document).ready(function() {
    console.log("DOM chargé et prêt !");
});



$(document).ready(function() {
    const $shoppingList = $("ul"); // Liste de courses
    const $addButton = $("button"); // Bouton "Ajouter"
    const $inputField = $("input"); // Champ de texte

    console.log("Variables définies !");

    
    $addButton.click(function() {
        const nouvel_objet = $inputField.val();
        if (nouvel_objet.trim() !== "") {
            const $newListItem = $("<li></li>").text(nouvel_objet);
            const $deleteButton = $("<button>Supprimer</button>");
            $newListItem.append($deleteButton);
            $shoppingList.append($newListItem);

            $deleteButton.click(function() {
                $(this).parent().remove();
                updateItemCount();
            });

            $inputField.val("");
            updateItemCount();
        } else {
            console.log("Champ vide. Aucun élément ajouté.");
        }
    });

    $inputField.keypress(function(event) {
        if (event.key === "Enter") {
            const nouvel_objet = $inputField.val();
            if (nouvel_objet.trim() !== "") {
                const $newListItem = $("<li></li>").text(nouvel_objet);
                const $deleteButton = $("<button>Supprimer</button>");
                $newListItem.append($deleteButton);
                $shoppingList.append($newListItem);
    
                $deleteButton.click(function() {
                    $(this).parent().remove();
                    updateItemCount();
                });
    
                $inputField.val("");
                updateItemCount();
            } else {
                console.log("Champ vide. Aucun élément ajouté.");
            }
        }
    });

    const $itemCount = $("#item-count"); 

    
    function updateItemCount() {
        
        const count = $shoppingList.children("li").length; 
        $itemCount.text(count); 
    }

});


