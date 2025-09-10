$(document).ready(function(){
  function updateTotals(){
    let subtotal = 0;
    $(".cart-row").not(".cart-head").each(function(){
      const price = parseInt($(this).find(".price").text().replace(/\D/g,''));
      const qty = parseInt($(this).find("select").val());
      const rowSubtotal = price * qty;
      $(this).find(".subtotal").text(`$${rowSubtotal.toLocaleString()}`);
      if(!isNaN(rowSubtotal)) subtotal += rowSubtotal;
    });
    $(".cart-summary .line span:last").text(`$${subtotal.toLocaleString()}`);
    $(".cart-summary .total span:last").text(`$${subtotal.toLocaleString()}`);
    $("#cart-count").text($("select").toArray().reduce((a,s)=>a+parseInt(s.value),0));
  }

  $("select").change(updateTotals);
  $(".remove").click(function(){
    $(this).closest(".cart-row").remove();
    updateTotals();
  });

  updateTotals();
});

$(document).ready(function(){

  function updateTotals(){
    let subtotal = 0;
    $(".cart-row").each(function(){
      const price = parseInt($(this).find(".price").text().replace(/\D/g,''));
      const qty = parseInt($(this).find(".quantity").text());
      const rowSubtotal = price * qty;
      $(this).find(".subtotal").text(`$${rowSubtotal.toLocaleString()}`);
      if(!isNaN(rowSubtotal)) subtotal += rowSubtotal;
    });
    $(".cart-summary .line span:last").text(`$${subtotal.toLocaleString()}`);
    $(".cart-summary .total span:last").text(`$${subtotal.toLocaleString()}`);
    $("#cart-count").text($(".quantity").toArray().reduce((a,el)=>a+parseInt(el.textContent),0));
  }

  // Eventos para aumentar/disminuir
  $(document).on("click",".increase",function(){
    let q = $(this).siblings(".quantity");
    q.text(parseInt(q.text())+1);
    updateTotals();
  });

  $(document).on("click",".decrease",function(){
    let q = $(this).siblings(".quantity");
    let val = parseInt(q.text());
    if(val>1){ // mínimo 1
      q.text(val-1);
      updateTotals();
    }
  });

  $(document).on("click",".remove",function(){
    $(this).closest(".cart-row").remove();
    updateTotals();
  });

  updateTotals();
});
