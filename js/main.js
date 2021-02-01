fetch("https://vinay9550.github.io/ecommers/data/data.json").then(response=>{
return response.json()
	}).then(data=>{
	
	displayData(data)

})
	function displayData(info){
		
		var bodyElement=document.querySelector("body")
		
		var row=document.createElement("section")
		row.classList.add("row","justify-content-center");
		bodyElement.append(row)

		info.mobiles.map(value=>{
			var column=document.createElement("article")
			column.classList.add("col-sm-10","col-md-6","col-lg-3")
			row.append(column)	
			//card
			var card=document.createElement("div");
			card.classList.add("card","mt-3")

			//card body
			var cardBody=document.createElement("div");
			cardBody.classList.add("card-body")

			//Image
			var imageElement=document.createElement("img");
			imageElement.src=value.image;
			imageElement.classList.add("img-responsive")
			imageElement.alt=value.name;
			imageElement.alt=value.original_price;
			imageElement.alt=value.price;

			//Name

			var name=document.createElement("h2");
			name.textContent=value.name;
			name.classList.add("text-center", "text-info")

			//ORIGINAL price

			var original_price=document.createElement("p");
			original_price.textContent="₹" + value.original_price + "/-";
			original_price.classList.add("text-center", "text-dark")

			//price

			var price=document.createElement("p");
			price.textContent="₹ "+value.price + "/-";
			price.classList.add("text-center", "text-secondary")

			//add to cart

			var cartadd=document.createElement("div");
			cartadd.classList.add("d-grid","gap-2");

			var button=document.createElement("button");
			button.classList.add("btn","btn-block","btn-primary");
			button.textContent="Add to cart";
			
			cartadd.append(button)


			cardBody.append(imageElement)
			cardBody.append(name);
			cardBody.append(original_price);
			cardBody.append(price);
			cardBody.append(cartadd)
				


			card.append(cardBody);
			column.append(card);


			
		})



	}
