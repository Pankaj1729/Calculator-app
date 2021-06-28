function display(val)
         {
             document.getElementById("output").value+=val
         }
           
         // evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("output").value
             let y = eval(x)
             document.getElementById("output").value = y
         }
           
         //clear the display
         function clear()
         {
             document.getElementById("output").value = ""
         }
