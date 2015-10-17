 $(document).ready(function() {
 var num = parseInt(prompt("What number would you like me to ping-pong up to?"));
  for  (i = 1; i <= num; i += 1) {

   if (i % 15 === 0) {
     $("#list").append("<li>" + "ping-pong" + "</li>");
   }

   else if (i % 3 === 0) {
     $("#list").append("<li>" + "ping" + "</li>");
   }

   else if (i % 5 === 0) {
     $("#list").append("<li>" + "pong" + "</li>");
   }
   else {
     $("#list").append("<li>" + i + "</li>");
   }
  }
  event.preventDefault();

  });
