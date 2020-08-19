function validate_phone_number(){
        var phonenumber=document.getElementById("phone_number").value;
        var pattern=/^\d{10}$/;
        if(pattern.test(phonenumber)){
                document.getElementById("phone_number_prompt").style.color="rgb(0, 231, 31)";
                document.getElementById("phone_number_prompt").innerHTML="xxxxxxxxxx";
                return(true);
        }
        else{
                document.getElementById("phone_number_prompt").style.color="Red";
                document.getElementById("phone_number_prompt").innerHTML="<strong>Invalid</strong>";
                return(false);
        }
}


function create_gmail(){
        var chkYes = document.getElementById("mail_radio1");
        var mail = document.getElementById("enter_gmail");
        var choosemail=document.getElementById("choose_mail");
        if(chkYes.checked){
                mail.style.display="block";
                choosemail.style.display="none";
        }
}

function create_yahoo(){
        var chkYes = document.getElementById("mail_radio2");
        var mail = document.getElementById("enter_yahoo");
        var choosemail=document.getElementById("choose_mail");
        if(chkYes.checked){
                mail.style.display="block";
                choosemail.style.display="none";
        }
}

function create_custom(){
        var chkYes = document.getElementById("mail_radio3");
        var mail = document.getElementById("enter_custom");
        var choosemail=document.getElementById("choose_mail");
        if(chkYes.checked){
                mail.style.display="block";
                choosemail.style.display="none";
        }
}

function validate_pincode(){
        var pc=document.getElementById("pincode").value;
        var pattern=/^\d{6}$/;
        if(pattern.test(pc)){
                document.getElementById("pincode_prompt").style.color="rgb(0, 231, 31)";
                document.getElementById("pincode_prompt").innerHTML="xxxxxx";
                return(true);
        }
        else{
                document.getElementById("pincode_prompt").style.color="Red";
                document.getElementById("pincode_prompt").innerHTML="<strong>Invalid</strong>";
                return(false);
        }
}

function display_items(){
        var btn=document.getElementById("choose_items_button");
        var items=document.getElementById("display_items");
        var order=document.getElementById("place_order");
        var hide=document.getElementById("tohide");
        

        btn.style.display="none";
        order.style.display="block";
        items.style.display="block";
        hide.style.display="none";
}

function display_subitems_fastfood(){
        var btn=document.getElementById("Fastfood");
        var items=document.getElementById("subitems_fastfood");
        if(btn.checked) items.style.display="block";
        else items.style.display="none";
}

function display_subitems_fruit(){
        var btn=document.getElementById("Fruit");
        var items=document.getElementById("subitems_fruit");

        if(btn.checked) items.style.display="block";
        else items.style.display="none";
}

function display_subitems_stationary(){
        var btn=document.getElementById("Stationary");
        var items=document.getElementById("subitems_stationary");
        if(btn.checked) items.style.display="block";
        else items.style.display="none";
}

function display_subitems_fashion(){
        var btn=document.getElementById("Fashion");
        var items=document.getElementById("subitems_fashion");
        if(btn.checked) items.style.display="block";
        else items.style.display="none";
}

function display_subitems_electronics(){
        var btn=document.getElementById("Electronics");
        var items=document.getElementById("subitems_electronics");
        if(btn.checked) items.style.display="block";
        else items.style.display="none";
}



// call onload or in script segment below form
function add_fastfood_price() {
        // get reference to element containing toppings checkboxes
        var el = document.getElementById('subitems_fastfood');
    
        // get reference to input elements in toppings container element
        var tops = el.getElementsByTagName('input');
        
        // assign updateTotal function to onclick property of each checkbox
        for (var i=0, len=tops.length; i<len; i++) {
            if ( tops[i].type === 'checkbox' ) {
                tops[i].onclick = updateTotal1;
            }
        }
    }
        
// called onclick of toppings checkboxes
function updateTotal1(e) {
        // 'this' is reference to checkbox clicked on
        var form = this.form;

        // get current value in total text box, using parseFloat since it is a string
        var val = parseFloat( form.elements['price_for_fastfood'].value );

        // if check box is checked, add its value to val, otherwise subtract it
        if ( this.checked ) {
                val += parseFloat(this.value);
        } else {
                val -= parseFloat(this.value);
        }

        // format val with correct number of decimal places
        // and use it to update value of total text box
        form.elements['price_for_fastfood'].value = formatDecimal1(val);
}

// format val to n number of decimal places
// modified version of Danny Goodman's (JS Bible)
function formatDecimal1(val, n) {
        n = n || 2;
        var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
        while (str.length <= n) {
                str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0,pt) + "." + str.slice(pt);
}

// call onload or in script segment below form
function add_fruit_price() {
        // get reference to element containing toppings checkboxes
        var el = document.getElementById('subitems_fruit');
    
        // get reference to input elements in toppings container element
        var tops = el.getElementsByTagName('input');
        
        // assign updateTotal function to onclick property of each checkbox
        for (var i=0, len=tops.length; i<len; i++) {
            if ( tops[i].type === 'checkbox' ) {
                tops[i].onclick = updateTotal2;
            }
        }
    }
        
// called onclick of toppings checkboxes
function updateTotal2(e) {
        // 'this' is reference to checkbox clicked on
        var form = this.form;

        // get current value in total text box, using parseFloat since it is a string
        var val = parseFloat( form.elements['price_for_fruit'].value );

        // if check box is checked, add its value to val, otherwise subtract it
        if ( this.checked ) {
                val += parseFloat(this.value);
        } else {
                val -= parseFloat(this.value);
        }

        // format val with correct number of decimal places
        // and use it to update value of total text box
        form.elements['price_for_fruit'].value = formatDecimal2(val);
}

// format val to n number of decimal places
// modified version of Danny Goodman's (JS Bible)
function formatDecimal2(val, n) {
        n = n || 2;
        var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
        while (str.length <= n) {
                str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0,pt) + "." + str.slice(pt);
}


// call onload or in script segment below form
function add_Stationary_price() {
        // get reference to element containing toppings checkboxes
        var el = document.getElementById('subitems_stationary');
    
        // get reference to input elements in toppings container element
        var tops = el.getElementsByTagName('input');
        
        // assign updateTotal function to onclick property of each checkbox
        for (var i=0, len=tops.length; i<len; i++) {
            if ( tops[i].type === 'checkbox' ) {
                tops[i].onclick = updateTotal3;
            }
        }
    }
        
// called onclick of toppings checkboxes
function updateTotal3(e) {
        // 'this' is reference to checkbox clicked on
        var form = this.form;

        // get current value in total text box, using parseFloat since it is a string
        var val = parseFloat( form.elements['price_for_stationary'].value );

        // if check box is checked, add its value to val, otherwise subtract it
        if ( this.checked ) {
                val += parseFloat(this.value);
        } else {
                val -= parseFloat(this.value);
        }

        // format val with correct number of decimal places
        // and use it to update value of total text box
        form.elements['price_for_stationary'].value = formatDecimal3(val);
}

// format val to n number of decimal places
// modified version of Danny Goodman's (JS Bible)
function formatDecimal3(val, n) {
        n = n || 2;
        var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
        while (str.length <= n) {
                str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0,pt) + "." + str.slice(pt);
}


// call onload or in script segment below form
function add_Fashion_price() {
        // get reference to element containing toppings checkboxes
        var el = document.getElementById('subitems_fashion');
    
        // get reference to input elements in toppings container element
        var tops = el.getElementsByTagName('input');
        
        // assign updateTotal function to onclick property of each checkbox
        for (var i=0, len=tops.length; i<len; i++) {
            if ( tops[i].type === 'checkbox' ) {
                tops[i].onclick = updateTotal4;
            }
        }
    }
        
// called onclick of toppings checkboxes
function updateTotal4(e) {
        // 'this' is reference to checkbox clicked on
        var form = this.form;

        // get current value in total text box, using parseFloat since it is a string
        var val = parseFloat( form.elements['price_for_fashion'].value );

        // if check box is checked, add its value to val, otherwise subtract it
        if ( this.checked ) {
                val += parseFloat(this.value);
        } else {
                val -= parseFloat(this.value);
        }

        // format val with correct number of decimal places
        // and use it to update value of total text box
        form.elements['price_for_fashion'].value = formatDecimal4(val);
}

// format val to n number of decimal places
// modified version of Danny Goodman's (JS Bible)
function formatDecimal4(val, n) {
        n = n || 2;
        var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
        while (str.length <= n) {
                str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0,pt) + "." + str.slice(pt);
}


// call onload or in script segment below form
function add_electronics_price() {
        // get reference to element containing toppings checkboxes
        var el = document.getElementById('subitems_electronics');
    
        // get reference to input elements in toppings container element
        var tops = el.getElementsByTagName('input');
        
        // assign updateTotal function to onclick property of each checkbox
        for (var i=0, len=tops.length; i<len; i++) {
            if ( tops[i].type === 'checkbox' ) {
                tops[i].onclick = updateTotal5;
            }
        }
    }
        
// called onclick of toppings checkboxes
function updateTotal5(e) {
        // 'this' is reference to checkbox clicked on
        var form = this.form;

        // get current value in total text box, using parseFloat since it is a string
        var val = parseFloat( form.elements['price_for_electronics'].value );

        // if check box is checked, add its value to val, otherwise subtract it
        if ( this.checked ) {
                val += parseFloat(this.value);
        } else {
                val -= parseFloat(this.value);
        }

        // format val with correct number of decimal places
        // and use it to update value of total text box
        form.elements['price_for_electronics'].value = formatDecimal5(val);
}

// format val to n number of decimal places
// modified version of Danny Goodman's (JS Bible)
function formatDecimal5(val, n) {
        n = n || 2;
        var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
        while (str.length <= n) {
                str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0,pt) + "." + str.slice(pt);
}



function calculate_prices(){
        var val1=document.getElementById("price_for_fastfood").value;
        var val2=document.getElementById("price_for_fruit").value;
        var val3=document.getElementById("price_for_stationary").value;
        var val4=document.getElementById("price_for_fashion").value;
        var val5=document.getElementById("price_for_electronics").value;


        var tot= 0;
        tot += parseFloat(val1)+parseFloat(val2)+parseFloat(val3)+parseFloat(val4)+parseFloat(val5);
        
        var ttot=tot.toFixed(2);
        TP=document.getElementById("totalprice");
        TP.value=ttot;

        var gst=tot*(0.18);
        var ggst=gst.toFixed(2);
        GST=document.getElementById("GST");
        GST.value=ggst;

        tot += gst;

        var discount =tot*(0.05);
        var ddiscount=discount.toFixed(2);
        DISCOUNT=document.getElementById("Discount");
        DISCOUNT.value=ddiscount;


        var final_amount =tot - discount;
        var ffinal_amount=final_amount.toFixed(2);
        FINAL_AMOUNT=document.getElementById("Final_Amount");
        FINAL_AMOUNT.value=ffinal_amount;

        var order_button= document.getElementById("place_order_button");
        var price=document.getElementById("price");
        var payment=document.getElementById("payment_option");
        var items=document.getElementById("display_items");
        
        price.style.display="block";
        order_button.style.display="none";
        payment.style.display="block";
        items.style.display="none";
}

function pay(){
        var pr=document.getElementById("price");
        var btn = document.getElementById("payment_option_button");
        var apay= document.getElementById("after_payment");

        pr.style.display="none";
        btn.style.display="none";
        apay.style.display="block";

        var FINAL_AMOUNT=document.getElementById("Final_Amount");
        var amount_after_payment=document.getElementById("amount_after_payment");
        amount_after_payment.value=FINAL_AMOUNT.value;

}       


