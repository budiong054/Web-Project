mybutton=document.getElementById("mybtn")

        window.onscroll = function() {scrollFunction()};

        function scrollFunction(){
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
                mybutton.style.display= "block";
            }
            else{
                mybutton.style.display= "none";
            }
        }

        function topfunction(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop =0;
        }