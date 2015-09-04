// mycode.js
var usernames = ["mitchelllillie", "patharryux", "jeffdunn", "donguyen", "mkelley2", "josephfraley2", "kathleenkent", "adamtaitano", "jasonsiren", "jtz1983", "erikphansen", "tybrenner"];
var users = [];
var master = ['izelnakri'];
var arrayOfAll = [];
var object = {};
var newObj = {};
var inputValue;
var arr = [
  {val : -1, text: 'Select A User'},
  // {val : 2, text: 'Do Nguyen'},
  // {val : 3, text: 'Jeff Dunn'}
];
  var obj = {};

usernames.forEach(function(name) {
    $.get('http:/teamtreehouse.com/'+name+'.json').
        done(importUser);
});

function importUser(user) {
	var obj = {};
	obj.name = (user.name);
	obj.badges = [];
	for(var i = 0; i < user.badges.length; i++) {
		obj.badges.push(user.badges[i].icon_url);
	}
	users.push(obj);

	if(users.length >= usernames.length) {
		badgeCtor(users);
	}

}


function loadMaster() {
  $.ajax(
  {
  	url: "http://teamtreehouse.com/izelnakri.json",
  	dataType: "json",
  	async: false,
  	success: function(data)
  	{
  		object = data;
  	}
  });
  for (var i = 0; i < 322; i ++) {
    arrayOfAll.push(object.badges[i].icon_url);
  }
  return arrayOfAll;
}
//
// $(function(){
//     $('button').on('click',function(){
//         var r= $('<input type="button" value="Recommend Badges"/>');
//         $('#TextBoxDiv').append(r);
//     });
// });
//
//
// $(document).ready(function(){
//
//     var counter = 2;
//
//     $("#addButton").click(function () {
//
// 	if(counter>10){
//             alert("Only 10 textboxes allow");
//             return false;
// 	}
//
// 	var newTextBoxDiv = $(document.createElement('div'))
// 	     .attr("id", 'TextBoxDiv' + counter);
//
// 	newTextBoxDiv.after().html('<label>Textbox #'+ counter + ' : </label>' +
// 	      '<input type="text" name="textbox' + counter +
// 	      '" id="textbox' + counter + '" value="" >');
//
// 	newTextBoxDiv.appendTo("#TextBoxesGroup");
//
//
// 	counter++;
//      });
//
//      $("#removeButton").click(function () {
// 	if(counter==1){
//           alert("No more textbox to remove");
//           return false;
//        }
//
// 	counter--;
//
//         $("#TextBoxDiv" + counter).remove();
//
//      });
//
//      $("#getButtonValue").click(function () {
//
// 	var msg = '';
// 	for(i=1; i<counter; i++){
//    	  msg += "\n Textbox #" + i + " : " + $('#textbox' + i).val();
// 	}
//     	  alert(msg);
//      });
//   });
//
//   function updateNow(evt){
//       if (evt.target.type == "button") {
//           var div = evt.target.parentNode;
//           var input = div.querySelector('.user_input');
//           inputValue = input.value;
//           div.querySelector('.output').innerHTML = inputValue;
//       }
//   }
//   function addUser(inputValue) {
//     var temp = inputValue;
//     usernames.push(inputValue);
//     console.log(temp);
//     return usernames;
//   }
// addEventListener('click', updateNow);
// addEventListener('click', addUser);

function myFunction() {


    var x = document.getElementById("myText").value;
    var y = 12;
    if (x === "") {
      return false;
    }

    $( "div" ).remove();
    console.log(x);
    usernames.push(x);
    $.ajax(
    {
      url: 'http://teamtreehouse.com/'+x+'.json',
      dataType: "json",
      async: false,
      success: function(data)
      {
        var newUser = data;
        importUser(newUser);


      },
      error: function(){
        alert("Not A Real User!");
      }
      });
}
          //
          // // var $div = $('<div>');
          // // $div.appendTo('body');
          //
          //   var $h1 = $('<h1>');
          //   $h1.appendTo($div);
          //
          //   var userName = users[y].name;
          //   $h1.html(userName);
          //
          //   var $p = $('<p>');
          //   $p.appendTo($h1);
          //
          //   for(var j = 0; j < users[y].badges.length; j++) {
          //
          //     var $badge_img = $('<img src="' + users[y].badges[j] + '">');
          //     $p.append($badge_img);
          //
          //             y = y + 1;
          //

//}


// console.log(form.elements.username.type);
var onSubmit1 = function()
{
    alert('Matthew Kelley');
};

var onSubmit2 = function()
{
    alert('Stupid');
};

// $('.target').change(function() {
    var dropdown = $('.target');
    var text = $( ".target option:selected" ).text();
    console.log(text);
    var $button1= $('#button1');
  $button1.unbind('click');
  $button1.click(onSubmit2);
 if(document.getElementById('option').value == "Matthew Kelley"){
    $button1.click(onSubmit1);
        //return;
  }



//});






window.onload = function() {
  console.log("loaded!");
  loadMaster();
  console.log(document.getElementById('option').value);

};
