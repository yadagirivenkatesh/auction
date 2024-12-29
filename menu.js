$(".place-order-button").on("click", function() {
    var item = $(this).closest(".menu-item");
    var name = item.find("h3").text();
    var quantity = parseInt(item.find(".quantity-input").val());
    var price = parseFloat(item.find(".item-price").text());
    var customPrice = parseFloat(item.find(".price-input").val()) || null;
    var total = (customPrice !== null) ? customPrice : (quantity * price);
    alert("Order placed! " + name + " x " + quantity + " for $" + total.toFixed(2));
});